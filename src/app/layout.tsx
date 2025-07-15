import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Analytics } from '@vercel/analytics/next';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Boring Designer - Where Brilliance Leaves a Mark",
  description:
    "Boring Designer is your all-in-one design powerhouse—offering subscription-based design services, a hub for creators and founders, and a space where innovation thrives. We build bold and minimal digital experiences that convert.",
  keywords: [
    "Boring Designer",
    "design subscription",
    "startup design studio",
    "UI UX agency",
    "design for founders",
    "landing page design",
    "developer design studio",
    "high-converting design",
    "minimal UI",
    "clean design",
    "creative design agency",
    "modern design studio",
    "portfolio design",
    "community for founders",
    "indie hacker design",
    "design vault",
    "design partnership",
    "high-trust design",
    "conversion-focused design",
    "fast design delivery",
    "design for startups",
    "indie hacker design",  
    "founder programs",
    "design manifesto",
    "investment",
    "venture studio",
    "venture capital",

  ],
  authors: [
    {
      name: "Aditya Srivastava",
      url: "https://www.linkedin.com/in/aditya-srivastava-92396a235/",
    },
  ],
  creator: "Aditya Srivastava",
  publisher: "Boring Designer",
  icons: {
    icon: "/favicon.ico",
    apple: "/favicon.ico",
    shortcut: "/favicon-32x32.png",
  },
  openGraph: {
    title: "Boring Designer - Where Brilliance Leaves a Mark",
    description:
      "From indie founders to top-tier startups, Boring Designer crafts high-conversion and clean digital experiences. Join the vault and design your future.",
    url: "https://boring-designer.com",
    siteName: "Boring Designer",
    images: [
      {
        url: "/oglogo.png",
        width: 1200,
        height: 630,
        alt: "Boring Designer - Elevate Your Brand",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Boring Designer - Where Brilliance Leaves a Mark",
    description:
      "Minimal, clean, and conversion-focused design studio for founders, indie-hackers, and startups.",
    creator: "@AdityaS02057616",
    images: ["/oglogo.png"],
  },
  metadataBase: new URL("https://boring-designer.com"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased]`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Analytics/>
        </ThemeProvider>
      </body>
    </html>
  );
}
