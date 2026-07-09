import { NextResponse as res } from "next/server";
import jwt from "jsonwebtoken";
import { userModel } from "@/schemas/user.model";

export const GET = async (req) => {
  try {
    const token = await req.cookies.get("token");

    if (!token) {
      return res.json(
        {
          message: "Token Expired",
          success: false,
        },
        { status: 500 },
      );
    }

    const decoded = jwt.verify(token.value, process.env.JWT_SECRET_KEY);

    const user = await userModel.findById(decoded.id);

    const { password: _, ...saveUser } = user.toObject();

    return res.json(
      {
        message: "User fetched successfully",
        success: true,
        data: {
          user: saveUser,
        },
      },
      { status: 200 },
    );
  } catch (err) {
    console.error(err.message);
    return res.json(
      {
        message: "User not found",
        success: false,
      },
      { status: 400 },
    );
  }
};
