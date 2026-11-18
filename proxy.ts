import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { PREVIEW_COOKIE, PREVIEW_PARAM, decideRedirect } from "./lib/launch";

export function proxy(request: NextRequest) {
  const previewRequested =
    request.nextUrl.searchParams.get("preview") === PREVIEW_PARAM;
  const previewActive =
    previewRequested || request.cookies.get(PREVIEW_COOKIE)?.value === "1";

  if (previewRequested) {
    const response = NextResponse.next();
    response.cookies.set(PREVIEW_COOKIE, "1", {
      httpOnly: true,
      sameSite: "lax",
      secure: process.env.NODE_ENV === "production",
      path: "/",
      maxAge: 60 * 60 * 24 * 14,
    });
    return response;
  }

  const decision = decideRedirect({
    now: Date.now(),
    redirectUrl: process.env.LAUNCH_REDIRECT_URL,
    preview: previewActive,
    currentHost: request.nextUrl.host,
  });

  if (decision.action === "redirect") {
    return NextResponse.redirect(decision.url, 307);
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|.*\\.(?:png|jpg|jpeg|svg|ico|webp|txt|xml)$).*)",
  ],
};
