import type { Metadata } from "next";
import "@fontsource/khand/500.css";
import "@fontsource/khand/600.css";
import "@fontsource/khand/700.css";
import "@carrot-kpi/switzer-font/400.css";
import "@carrot-kpi/switzer-font/500.css";
import "@carrot-kpi/switzer-font/600.css";
import "@carrot-kpi/switzer-font/700.css";
import "./globals.css";
import { Footer } from "@/components/site/footer";
import { Header } from "@/components/site/header";

export const metadata: Metadata = {
  metadataBase: new URL("https://vibecodingformanagers.com"),
  title: {
    default: "Vibe Coding for Managers",
    template: "%s | Vibe Coding for Managers",
  },
  description:
    "A free PDF and learning project helping managers build software with AI without becoming engineers.",
  openGraph: {
    title: "Vibe Coding for Managers",
    description: "It’s not too late to build. Managers can start shipping real software with AI.",
    url: "/",
    siteName: "Vibe Coding for Managers",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
