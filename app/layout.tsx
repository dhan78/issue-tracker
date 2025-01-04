import "@radix-ui/themes/styles.css";
import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import NavBar from "./NavBar";
import { Theme } from "@radix-ui/themes";


const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.variable}>
        <Theme>
              <NavBar />
              <main>{children}</main>
        </Theme>
      </body>
    </html>
  );
}