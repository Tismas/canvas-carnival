import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Nav } from "./Nav";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Canvas carnival",
  description: "Visualization code challenges",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Nav />
        <main className="m-4">{children}</main>
      </body>
    </html>
  );
}
