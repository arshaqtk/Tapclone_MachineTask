import type { Metadata } from "next";
import localFont from "next/font/local";
import { Nunito_Sans } from "next/font/google";
import "./globals.css";

const nunitoSans = Nunito_Sans({
  variable: "--font-nunito-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const eloran = localFont({
  src: [
    {
      path: "../../public/fonts/Eloran-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/Eloran-Italic.ttf",
      weight: "400",
      style: "italic",
    },
  ],
  variable: "--font-eloran",
  display: "swap",
});

export const metadata: Metadata = {
  title: "ABC TECHNOLOGIES",
  description: 'Our global engineering and technology services',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${nunitoSans.variable} ${eloran.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans">{children}</body>
    </html>
  );
}
