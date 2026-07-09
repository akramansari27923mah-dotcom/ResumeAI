import { userModel } from "@/schemas/user.model";
import connectDB from "@/util/db";
import { NextResponse as res } from "next/server";
import bcrypt from "bcrypt";
import { generateToken } from "@/util/tokenGenerate";
import { cookiesOptions } from "@/util/cookiesOptions";
import { loginSchema } from "@/util/validate";

export const POST = async (req) => {
  await connectDB();
  try {
    const body = await req.json();
    const { email, password } = body;

    const result = loginSchema.safeParse(body);

    if (!result.success) {
      return res.json(
        {
          message: "All field are required",
          success: false,
          error: result.error.flatten(),
        },
        { status: 400 },
      );
    }

    const existingUser = await userModel
      .findOne({ email: email })
      .select("+password");

      console.log(existingUser);
      

    if (!existingUser) {
      return res.json(
        {
          message: "User Unauthorized",
          success: false,
        },
        { status: 404 },
      );
    }

    const isPassworValid = await bcrypt.compare(
      password,
      existingUser?.password,
    );

    if (!isPassworValid) {
      return res.json(
        {
          message: "Wrong Password",
          success: false,
        },
        { status: 401 },
      );
    }

    const token = generateToken(existingUser?._id);
    

    const { password: _, ...userSave } = existingUser.toObject();

    const response = res.json(
      {
        message: "User logged in successfull",
        success: true,
        data: {
          user: userSave,
        },
      },
      { status: 200 },
    );

    response.cookies.set("token", token, cookiesOptions);

    return response;
  } catch (err) {
    return res.json(
      {
        message: "Internal server error",
        success: false,
      },
      { status: 500 },
    );
  }
};
