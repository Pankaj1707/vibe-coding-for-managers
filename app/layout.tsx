import type { Metadata } from "next";
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
    "A public learning project helping managers build software with AI — ship prototypes and test ideas without becoming engineers.",
  openGraph: {
    title: "Vibe Coding for Managers",
    description: "It's not too late to build. AI has made building accessible to managers.",
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
