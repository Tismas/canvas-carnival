import type { authClient } from "@/lib/auth/authClient";
import { NextResponse, type NextRequest } from "next/server";

type Session = typeof authClient.$Infer.Session;

export default async function authMiddleware(request: NextRequest) {
  const session = await fetch(
    `${request.nextUrl.origin}/api/auth/get-session`,
    {
      headers: {
        cookie: request.headers.get("cookie") || "",
      },
    }
  ).then((res) => res.json() as Promise<Session>);

  if (!session) {
    return NextResponse.redirect(new URL("/sign-in", request.url));
  }
  return NextResponse.next();
}

export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt|sign-in|sign-up).*)",
  ],
};
