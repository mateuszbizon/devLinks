import type { Metadata } from "next";
import "../globals.css";
import { Instrument_Sans } from "next/font/google"
import Providers from "@/components/Providers";
import PopupMessage from "@/components/shared/PopupMessage";
import AuthContainer from "@/components/containers/AuthContainer";

const instrumentSans = Instrument_Sans({
  subsets: ["latin"],
  weight: ["400", "600", "700"]
})

export const metadata: Metadata = {
  title: "DevLinks | Auth",
  description: "Authentication for DevLinks",
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
        <Providers>
          <PopupMessage />
          <AuthContainer>
            {children}
          </AuthContainer>
        </Providers>
      </body>
    </html>
  );
}
