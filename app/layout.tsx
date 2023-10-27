import type { Metadata } from "next";
import { Kumbh_Sans, Poller_One } from "next/font/google";
import localFont from "next/font/local";

import "./globals.css";

const trailers = localFont({
  src: "./fonts/TT-Trailers.ttf",
  variable: "--font-trailers",
});
const poller = Poller_One({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-poller",
});
const kumbh = Kumbh_Sans({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-kumbh",
});
const kumbhBold = Kumbh_Sans({
  weight: "700",
  subsets: ["latin"],
  variable: "--font-kumbh-bold",
});

export const metadata: Metadata = {
  title: "Emily Zhai",
  description:
    "Emily Zhai is a full-stack software engineer with 7+ years experience and a particular interest in tangible business problems and front-end architecture.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      style={{ overflowAnchor: "none" }}
      className={`${trailers.variable} ${poller.variable} ${kumbh.variable} ${kumbhBold.variable} bg-black text-[3vw] md:text-[1.7vw]`}
    >
      <body>{children}</body>
    </html>
  );
}
