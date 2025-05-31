// "use client";

// import AppHeader from "@/common/app-header";
// import Banner from "@/components/home/banner";
// import * as React from "react";

// export default function page() {
//   return (
//     <React.Fragment>
//       <AppHeader />
//       <Banner />
//     </React.Fragment>
//   );
// }

"use client";

import { redirect } from "next/navigation";

export default function Page() {
  return redirect("/workspace");
}

// let's make a server component
// if user is not logged in, redirect to auth/sign-in
// if user is logged in, redirect to /workspace

// import { getSession } from "next-auth/react";
// import { redirect } from "next/navigation";

// export default async function Page() {
//   const session = await getSession();

//   if (!session) {
//     redirect("/auth/sign-in");
//   } else {
//     redirect("/workspace");
//   }

//   return null; // Since we're redirecting, there's no need to render anything
// }
