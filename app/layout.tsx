import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import NavContent from "./comps/Navbar";
import Footer from "./comps/Footer";

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
  title: "GDGOC AUCE",
  description: "GDGOC AUCE is Community of Google Developer Groups On Campus Andhra University College of Engineering.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <NavContent/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
