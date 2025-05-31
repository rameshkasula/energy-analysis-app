/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React from "react";
import { SessionProvider } from "next-auth/react";

export default function SessionProviders({
  children,
}: {
  children: React.ReactNode;
}) {
  return <SessionProvider>{children}</SessionProvider>;
}
