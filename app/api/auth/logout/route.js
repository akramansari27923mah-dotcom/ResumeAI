import { NextResponse as res } from "next/server";

export const POST = async (req) => {
  const token = await req?.cookies?.get("token");

  if (!token) {
    return res.redirect(new URL("/login", req.url));
  }

  const response = res.json(
    {
      message: "User logout successfully",
      success: true,
    },
    { status: 200 },
  );

  response?.cookies?.set("token", "", {
    httpOnly: true,
    expires: new Date(0),
    path: "/",
  });

  return response;
};
