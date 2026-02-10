import "./globals.css";
import { ReactNode } from "react";

export const metadata = {
  title: "QueenPay",
  description: "Next.js App",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="font-sans">{children}</body>
    </html>
  );
}
