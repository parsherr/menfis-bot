import { Metadata } from "next";
import { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Dökümantasyon · Menfis",
  description: "Anime sunucuları için bir Discord botu olan Menfis'in resmi belgelerine göz atın.",
};

export default function BlogLayout({ children }: { children: ReactNode }) {
  return children;
}
