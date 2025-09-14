import "./globals.css";
import cx from "classnames";
import { inter } from "./fonts";
// Footer and Navbar are not used for the custom landing right now
// import Footer from "@/components/layout/footer";
import { Suspense } from "react";
import { Analytics as VercelAnalytics } from "@vercel/analytics/react";
// import Navbar from "@/components/layout/navbar";

export const metadata = {
  title: "Nara Therapy",
  description:
    "Nara combines traditional therapy with AI-assisted support to deliver 24/7 mental health support.",
  metadataBase: new URL("https://joinnara.com"),
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
