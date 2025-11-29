import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nara Therapy - For Organizations",
  description:
    "Deploy measurement-based mental health programs across your clinics with Nara's AI-enabled platform for health systems and payers.",
  openGraph: {
    title: "Nara Therapy - For Organizations",
    description:
      "Deploy measurement-based mental health programs across your clinics with Nara's AI-enabled platform for health systems and payers.",
    images: [
      {
        url: "/providersocialpreview.webp",
        width: 1200,
        height: 630,
        alt: "Nara Therapy - For Organizations",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nara Therapy - For Organizations",
    description:
      "Deploy measurement-based mental health programs across your clinics with Nara's AI-enabled platform for health systems and payers.",
    images: ["/providersocialpreview.webp"],
  },
};

export default function OrganizationsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
