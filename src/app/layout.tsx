import PrimaryLayout from "../layout/PrimaryLayout";
import "./globals.css";
import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Create Next App",
  description: "City clean aps",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <PrimaryLayout>{children}</PrimaryLayout>;
}
