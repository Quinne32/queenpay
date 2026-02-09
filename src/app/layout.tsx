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

{
  /* <section className="bg-teal-900">
  <div>
    <h4>STEP</h4>
    <h1>Maximise your returns with a Reserve account that generates </h1>
  </div>
</section>; */
}
