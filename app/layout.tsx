import type { Metadata } from "next";
import localFont from "next/font/local";
import { Nunito_Sans } from "next/font/google";
import "./(main)/globals.css";
import JsonLd from "@/components/seo/JsonLd";

const nunitoSans = Nunito_Sans({
  variable: "--font-nunito-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const eloran = localFont({
  src: [
    {
      path: "../public/fonts/Eloran-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/Eloran-Italic.ttf",
      weight: "400",
      style: "italic",
    },
  ],
  variable: "--font-eloran",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "ABC Technologies LLC | Global Engineering & Technology Solutions",
    template: "%s | ABC Technologies LLC"
  },
  description: "ABC Technologies LLC is a premier global partner for reliable sourcing, technical expertise, and deployment of advanced engineering and technology solutions.",
  keywords: ["Engineering Solutions", "Global Sourcing", "Technology Deployment", "ABC Technologies", "Industrial Solutions"],
  authors: [{ name: "ABC Technologies LLC" }],
  creator: "ABC Technologies LLC",
  publisher: "ABC Technologies LLC",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "ABC Technologies LLC | Global Engineering & Technology Solutions",
    description: "Your single-window partner for reliable sourcing and deployment of advanced engineering solutions worldwide.",
    url: "https://abctechnologies.com",
    siteName: "ABC Technologies LLC",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ABC Technologies LLC | Global Engineering & Technology Solutions",
    description: "Reliable sourcing and deployment of advanced engineering solutions worldwide.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/ABC_Technologies.logo.png",
    shortcut: "/ABC_Technologies.logo.png",
    apple: "/ABC_Technologies.logo.png",
  },
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
      <body className="min-h-full flex flex-col font-sans bg-[#010504]">
        <JsonLd />
        {children}
      </body>
    </html>
  );
}
