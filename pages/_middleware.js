import { NextResponse } from "next/server";
import { verify } from "jsonwebtoken";
export default function middleware(req) {
  const secret = process.env.JWT_SECRET;
  const {
    url,
    cookies: { token },
  } = req;

  if (url.includes("/auth")) {
    if (token && verify(token, secret)) {
      return NextResponse.redirect("/");
    }
  }

  if (url.includes("/admin")) {
    if (!token) {
      return NextResponse.redirect("/auth");
    }
  }
  return NextResponse.next();
}
