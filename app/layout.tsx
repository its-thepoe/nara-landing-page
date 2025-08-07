import "./globals.css";
import cx from "classnames";
import { sfPro, inter } from "./fonts";
// Footer and Navbar are not used for the custom landing right now
// import Footer from "@/components/layout/footer";
import { Suspense } from "react";
import { Analytics as VercelAnalytics } from "@vercel/analytics/react";
// import Navbar from "@/components/layout/navbar";

export const metadata = {
  title: "Precedent - Building blocks for your Next.js project",
  description:
    "Precedent is the all-in-one solution for your Next.js project. It includes a design system, authentication, analytics, and more.",
  metadataBase: new URL("https://precedent.dev"),
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={cx(sfPro.variable, inter.variable)}>
        {/* Remove default gradient + nav/footer so landing spans full width */}
        <main className="min-h-screen w-full">{children}</main>
        <VercelAnalytics />
      </body>
    </html>
  );
}
