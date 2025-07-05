import type { Metadata } from "next";
// import {  } from "next/font/google";

import "@/styles/globals.scss";

/* const geistSans = Roboto({
  variable: "--font-geist-sans",
  subsets: ["latin"],
}); */

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body /* className={`${geistSans.variable}`} */>
        {children}
      </body>
    </html>
  );
}
