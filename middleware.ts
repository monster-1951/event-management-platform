export { auth as middleware } from "@/auth"

// import { auth } from "@/auth"

// export default auth((req) => {
//   // req.auth
//   if (!req.auth && req.nextUrl.pathname === "/profile") {
//     const newUrl = new URL("/login", req.nextUrl.origin)
//     return Response.redirect(newUrl)
//   }
// })
// // See "Matching Paths" below to learn more
// export const config = {
//     matcher: ["/profile"],
//   }