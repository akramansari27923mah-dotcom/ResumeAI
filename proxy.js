import { NextResponse as res } from "next/server";

export const config = {
  matcher: ["/dashboard/:path*"],
};

export const proxy = async (req) => {
  try {
    const token = await req.cookies.get("token");

    if (!token) {
      return res.redirect(new URL("/login", req.url));
    }

    return res.next();
  } catch (err) {
    console.error(err.message);
    return res.json(
      {
        message: "Unauthorized",
        success: false,
      },
      { status: 500 },
    );
  }
};
