import { BRANDING } from './branding'

export const DEFAULT_SEO = {
  title: `${BRANDING.fullName} | ${BRANDING.tagline}`,
  titleTemplate: `%s | ${BRANDING.name}`,
  description: BRANDING.description,
  canonical: process.env.NEXT_PUBLIC_APP_URL ?? 'https://vetcarelocal.mx',
  openGraph: {
    type: 'website',
    locale: 'es_MX',
    siteName: BRANDING.fullName,
    images: [
      {
        url: '/images/og-default.jpg',
        width: 1200,
        height: 630,
        alt: BRANDING.fullName,
      },
    ],
  },
  twitter: {
    cardType: 'summary_large_image',
    site: '@vetcarelocal',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export function buildPageTitle(title: string): string {
  return `${title} | ${BRANDING.name}`
}

export function buildPageDescription(description: string): string {
  return description.length > 160
    ? description.substring(0, 157) + '...'
    : description
}
