(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["chunks/[root-of-the-server]__140a91e5._.js",
"[externals]/node:buffer [external] (node:buffer, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:buffer", () => require("node:buffer"));

module.exports = mod;
}),
"[externals]/node:async_hooks [external] (node:async_hooks, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:async_hooks", () => require("node:async_hooks"));

module.exports = mod;
}),
"[project]/middleware.js [middleware-edge] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// middleware.ts
__turbopack_context__.s([
    "config",
    ()=>config,
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$nextjs$40$6$2e$35$2e$4_next$40$1_b9de7561a6f57b7d6e6bb3a07bebf6cb$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$server$2f$clerkMiddleware$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@clerk+nextjs@6.35.4_next@1_b9de7561a6f57b7d6e6bb3a07bebf6cb/node_modules/@clerk/nextjs/dist/esm/server/clerkMiddleware.js [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$api$2f$server$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.3_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/esm/api/server.js [middleware-edge] (ecmascript) <locals>");
;
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$nextjs$40$6$2e$35$2e$4_next$40$1_b9de7561a6f57b7d6e6bb3a07bebf6cb$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$server$2f$clerkMiddleware$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["clerkMiddleware"])(async (auth, req)=>{
// const { userId, user } = auth;
// const isAdminRoute = req.nextUrl.pathname.startsWith("/admin");
// // If no userId, redirect (not signed in)
// if (!userId) {
//   console.log("No userId, redirecting");
//   return NextResponse.redirect(new URL("/unauthorized", req.url));
// }
// // Try to get role from user object
// let role = user?.publicMetadata?.role;
// console.log("Middleware - userId:", userId);
// console.log("Middleware - user:", user);
// console.log("Middleware - role from user:", role);
// // If user object isn't available, we might need to fetch it (fallback)
// if (!role) {
//   // Note: In some Clerk setups, you might need to use getAuth or fetch user data
//   // For now, assume role is set; if not, we'll handle below
//   console.log("Role not found in user object, checking alternatives...");
// }
// const isAdmin = role === "admin";
// if (isAdminRoute && !isAdmin) {
//   console.log("Not admin, redirecting to /unauthorized");
//   return NextResponse.redirect(new URL("/unauthorized", req.url));
// }
// console.log("Allowing admin access");
// return NextResponse.next();
});
const config = {
    matcher: [
        "/admin/:path*"
    ]
};
}),
]);

//# sourceMappingURL=%5Broot-of-the-server%5D__140a91e5._.js.map