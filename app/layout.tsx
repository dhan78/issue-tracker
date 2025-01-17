import "@radix-ui/themes/styles.css";
import './theme-config.css'
import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import NavBar from "./NavBar";
import { Theme, ThemePanel } from "@radix-ui/themes";


const inter = Inter({
	subsets: ["latin"],
	display: "swap",
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
      <Theme accentColor="violet" radius="large">
              <NavBar />
              <main className="p-5">{children}</main>
        </Theme>
      </body>
    </html>
  );
}