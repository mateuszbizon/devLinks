import type { Metadata } from "next";
import "./globals.css";
import { Instrument_Sans } from "next/font/google"

const instrumentSans = Instrument_Sans({
  subsets: ["latin"],
  weight: ["400", "600", "700"]
})

export const metadata: Metadata = {
  title: "DevLinks",
  description: "App to share links for developers.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${instrumentSans.className}`}
      >
        {children}
      </body>
    </html>
  );
}
