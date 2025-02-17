// middleware.js (en la raíz del proyecto)
import { NextResponse } from "next/server";

export function middleware(request) {
  const { pathname } = request.nextUrl;

  if (pathname.startsWith("/admin")) {
    const token = request.cookies.get("auth-token");
    if (!token) {
      const loginUrl = request.nextUrl.clone();
      loginUrl.pathname = "/login";
      return NextResponse.redirect(loginUrl);
    }
  }
  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*"],
};