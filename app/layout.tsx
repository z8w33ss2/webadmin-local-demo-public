import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { DEFAULT_SEO } from '@/config/seo'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_APP_URL ?? 'https://vetcarelocal.mx',
  ),
  title: {
    default: DEFAULT_SEO.title,
    template: DEFAULT_SEO.titleTemplate,
  },
  description: DEFAULT_SEO.description,
  keywords: [
    'veterinaria CDMX',
    'clínica veterinaria',
    'médico veterinario',
    'vacunación mascotas',
    'cirugía veterinaria',
    'grooming canino',
    'urgencias veterinarias 24 horas',
    'VetCare',
  ],
  authors: [{ name: 'VetCare Centro Veterinario' }],
  creator: 'VetCare',
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  openGraph: {
    type: 'website',
    locale: 'es_MX',
    siteName: DEFAULT_SEO.openGraph.siteName,
  },
  twitter: {
    card: 'summary_large_image',
    site: '@vetcarelocal',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className={inter.variable}>
      <body className="antialiased">{children}</body>
    </html>
  )
}
