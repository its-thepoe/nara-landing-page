import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Nara Therapy - For Clients',
  description: 'Access professional therapy services with Nara. Get matched with licensed therapists and access AI-powered mental health support.',
  openGraph: {
    title: 'Nara Therapy - For Clients',
    description: 'Access professional therapy services with Nara. Get matched with licensed therapists and access AI-powered mental health support.',
    images: [
      {
        url: '/clientsocialpreview.webp',
        width: 1200,
        height: 630,
        alt: 'Nara Therapy - For Clients',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nara Therapy - For Clients',
    description: 'Access professional therapy services with Nara. Get matched with licensed therapists and access AI-powered mental health support.',
    images: ['/clientsocialpreview.webp'],
  },
}

export default function ClientsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
