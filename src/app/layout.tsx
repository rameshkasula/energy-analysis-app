import AppThemeProvider from "@/utils/theme/app-theme";
import type { Metadata } from "next";
import localFont from "next/font/local";
// import "./globals.css";
import "@/utils/styles.css";
import { AppProvider } from "@/toolkit/app-provider";

// import { getAuthSession } from "./api/auth/[...nextauth]/authOptions";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "MUI APP",
  description: "Learning MUI",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <AppProvider>
          <AppThemeProvider>{children}</AppThemeProvider>
        </AppProvider>
      </body>
    </html>
  );
}
