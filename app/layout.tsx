import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Bengali Language Explorer",
  description: "Learn basic Bengali phrases, pronunciation, and cultural insights.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
