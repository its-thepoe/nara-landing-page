import "./globals.css";
import cx from "classnames";
import { inter } from "./fonts";
// Footer and Navbar are not used for the custom landing right now
// import Footer from "@/components/layout/footer";
import { Suspense } from "react";
import { Analytics as VercelAnalytics } from "@vercel/analytics/react";
// import Navbar from "@/components/layout/navbar";

export const metadata = {
  title: "Nara Therapy - For Providers",
  description:
    "Join Nara's network of licensed therapists. Grow your practice with AI-powered tools and reach more clients.",
  metadataBase: new URL("https://joinnara.com"),
  openGraph: {
    title: "Nara Therapy - For Providers",
    description: "Join Nara's network of licensed therapists. Grow your practice with AI-powered tools and reach more clients.",
    images: [
      {
        url: "/providersocialpreview.webp",
        width: 1200,
        height: 630,
        alt: "Nara Therapy - For Providers",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nara Therapy - For Providers",
    description: "Join Nara's network of licensed therapists. Grow your practice with AI-powered tools and reach more clients.",
    images: ["/providersocialpreview.webp"],
  },
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={cx(inter.variable, "font-sans") }>
        {/* Remove default gradient + nav/footer so landing spans full width */}
        <main className="min-h-screen w-full">{children}</main>
        <VercelAnalytics />
      </body>
      
    </html>
  );
}
