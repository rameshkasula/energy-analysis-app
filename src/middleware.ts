// /* eslint-disable @typescript-eslint/ban-types */
// /* eslint-disable @typescript-eslint/no-unused-vars */
// /* eslint-disable @typescript-eslint/no-explicit-any */

import { NextRequest } from "next/server";

import { NextResponse } from "next/server";

// import { User } from "next-auth";
// import { headers } from "next/headers";
// import { NextRequest, NextResponse } from "next/server";
// // import { getAuthSession } from "./app/api/auth/[...nextauth]/authOptions";

// export const middleware = async (
//   request: NextRequest,
//   response: NextResponse
// ) => {
//   const pathname = request.nextUrl.pathname;

//   // const session = await getAuthSession();

//   const session: session = await fetch(
//     `${process.env.NEXTAUTH_URL}/api/auth/session`,
//     {
//       headers: headers(),
//       // cache: "no-store",
//     }
//   ).then(async (res) => await res.json());

//   const isAuthenticated =
//     session && Object.keys(session).length > 0 ? true : false;
//   const isLoginPage = pathname.startsWith("/auth/sign-in");
//   const isWorkspace = pathname.startsWith("/workspace");

//   console.log("session", session);
//   console.log("isAuthenticated", isAuthenticated);
//   console.log("pathname", pathname);
//   console.log("isLoginPage", isLoginPage);
//   console.log("isWorkspace", isWorkspace);

//   if (!isAuthenticated && isWorkspace) {
//     return NextResponse.redirect(new URL("/auth/sign-in", request.url));
//   }

//   if (isAuthenticated && isLoginPage) {
//     return NextResponse.redirect(new URL("/workspace", request.url));
//   }

//   const loggedIn = session && Object.keys(session).length > 0 ? true : false;

//   const publicRoutes = ["/auth/sign-in", "/auth/sign-up"];

//   if (!publicRoutes.includes(pathname) && !loggedIn) {
//     // console.log("redirecting");
//     return NextResponse.redirect(
//       new URL("/auth/sign-in", process.env.NEXTAUTH_URL)
//     );
//   }

//   return NextResponse.next();
// };

// export const config = {
//   matcher: ["/workspace", "/teams/:p", "/subscription"],
// };

// type session = {} | User;

export default function middleware(request: NextRequest) {
  return NextResponse.next();
}

export const config = {
  matcher: ["/workspace", "/teams/:p", "/subscription"],
};

