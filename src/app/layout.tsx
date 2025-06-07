import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Jatin | Portfolio",
  description: "Creative portfolio of Jatin – a passionate web designer crafting modern, user-focused digital experiences.",
  keywords: ["Web Designer", "Portfolio", "Frontend Developer", "Creative Design", "UI/UX", "Jatin"],
  authors: [{ name: "Jatin", url: "https://jatinportfolio-delta.vercel.ap" }],
  creator: "Jatin",
  icons: {
    icon: "/next.svg",
    shortcut: "/next.svg",
    apple: "/next.svg",
  },
  openGraph: {
    type: "website",
    url: "https://jatinportfolio-delta.vercel.ap",
    title: "Jatin | Creative Web Designer",
    description: "Creative portfolio of Jatin – modern, user-focused digital experiences.",
    images: [
      {
        url: "/og-img.jpg",
        width: 1200,
        height: 630,
        alt: "Jatin Portfolio Preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Jatin | Creative Web Designer",
    description: "Creative portfolio of Jatin – user-focused digital design & development.",
    images: ["/og-img.jpg"],
    // creator: "@yourTwitterHandle",
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body suppressHydrationWarning >
        {children}
      </body>
    </html>
  );
}
