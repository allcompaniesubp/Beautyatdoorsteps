import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "DoorSphere | Everything. Everyone. Within Reach.",
  description: "Discover businesses, products and services in one global marketplace.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
