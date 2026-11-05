import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "BeautyDoorstep | Professional care, right at your door",
  description: "Discover grooming and beauty professionals for home visits.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
