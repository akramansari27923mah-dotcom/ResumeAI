import { userModel } from "@/schemas/user.model";
import connectDB from "@/util/db";
import { NextResponse as res } from "next/server";
import { generateToken } from "@/util/tokenGenerate";
import { cookiesOptions } from "@/util/cookiesOptions";

export const POST = async (req) => {
  await connectDB();
  try {
    const body = await req.json();
    const { email, username, googleId, image } = body;

    let user = await userModel.findOne({ email: email });

    if (!user) {
      user = await userModel.create({
        email,
        username,
        googleId,
        image,
        provider: "google",
      });
    }

    const token = generateToken(user._id);

    const response = res.json(
      {
        message: "User logged in successfull",
        success: true,
        data: {
          user,
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
