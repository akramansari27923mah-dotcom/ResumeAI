import connectDB from "@/util/db";
import { hashPassword } from "@/util/passwordHash";
import { NextResponse as res } from "next/server";
import { userModel } from "@/schemas/user.model";
import { signupSchema } from "@/util/validate";

export const POST = async (req) => {
  await connectDB();
  try {
    const body = await req.json();
    const { username, email, password } = body;

    const result = signupSchema.safeParse(body);

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

    const existingUser = await userModel.findOne({ email: email });

    if (existingUser) {
      return res.json(
        {
          message: "User already exist",
          success: false,
        },
        { status: 409 },
      );
    }

    const hashedPassword = await hashPassword(password);

    const user = await userModel?.create({
      username,
      email,
      password: hashedPassword,
      provider: "credentials",
    });

    const { password: _, ...userSave } = user.toObject();

    const response = res.json(
      {
        message: "Signup successfully",
        success: true,
        data: {
          user: userSave,
        },
      },
      { status: 201 },
    );

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
