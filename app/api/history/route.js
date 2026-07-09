import { NextResponse as res } from "next/server";
import { historyModel } from "@/schemas/history.model";
import jwt from "jsonwebtoken";
import { jsonParse } from "@/util/jsonParse";

export const GET = async (req) => {
  try {
    const token = req?.cookies?.get("token");

    const decoded = jwt.verify(token?.value, process.env.JWT_SECRET_KEY);

    const history = await historyModel.find({ userId: decoded?.id });
    

    if (!history.length === 0) {
      return res.json(
        {
          message: "History is not found",
          success: false,
        },
        { status: 404 },
      );
    }
    

    return res.json(
      {
        message: "History fetched successfully",
        success: true,
       history
      },
      { status: 200 },
    );
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
