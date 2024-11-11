import "./globals.css";
import type { Metadata } from "next";
import { inter } from "./fonts";
import NextTopLoader from "nextjs-toploader";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Analytics } from "@vercel/analytics/react";

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : `http://localhost:${process.env.PORT || 3000}`,
  ),
  title: "Menfis - Partner Bot",
  description: "Menfis anime sunucularının partner yapmalarına yardımcı olan bir Discord botudur.",
  icons: ["/logo-rounded.png"],
  themeColor: "#fe2828",
  openGraph: {
    type: "website",
    images: ["/logo-rounded.png"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta itemProp="thumbnailUrl" content="/logo-rounded.png" />
        <meta itemProp="image" content="/logo-rounded.png" />
        <meta itemProp="imageUrl" content="/logo-rounded.png" />
      </head>
      <body className={`${inter.className} bg-slate-950 text-slate-400`}>
        <NextTopLoader color="#b91c1b" showSpinner={false} />
        <Navbar />
        {children}
        <Footer commitSha={process.env.VERCEL_GIT_COMMIT_SHA} />
        <Analytics />
      </body>
    </html>
  );
}
