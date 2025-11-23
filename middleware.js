// middleware.ts
import { clerkMiddleware } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

export default clerkMiddleware(async (auth, req) => {
  const { userId, user } = auth;
  const isAdminRoute = req.nextUrl.pathname.startsWith("/admin");

  // If no userId, redirect (not signed in)
  if (!userId) {
    console.log("No userId, redirecting");
    return NextResponse.redirect(new URL("/unauthorized", req.url));
  }

  // Try to get role from user object
  let role = user?.publicMetadata?.role;
  console.log("Middleware - userId:", userId);
  console.log("Middleware - user:", user);
  console.log("Middleware - role from user:", role);

  // If user object isn't available, we might need to fetch it (fallback)
  if (!role) {
    // Note: In some Clerk setups, you might need to use getAuth or fetch user data
    // For now, assume role is set; if not, we'll handle below
    console.log("Role not found in user object, checking alternatives...");
  }

  const isAdmin = role === "admin";

  if (isAdminRoute && !isAdmin) {
    console.log("Not admin, redirecting to /unauthorized");
    return NextResponse.redirect(new URL("/unauthorized", req.url));
  }

  console.log("Allowing admin access");
  return NextResponse.next();
});

export const config = {
  matcher: ["/admin/:path*"],
};
