import type { Metadata } from "next";
import { Inter, Sora } from "next/font/google";
import "./globals.css";

const display = Sora({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["400", "600", "700"],
});

const body = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  title: "MustMull mobiilne kokteilibaar",
  description:
    "Mänguline professionaalne tiim, kes raputab sinu peole eritellimusel kokteile ja unustamatuid hetki.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="et">
      <body
        className={`${display.variable} ${body.variable} antialiased bg-background text-foreground`}
      >
        {children}
      </body>
    </html>
  );
}
