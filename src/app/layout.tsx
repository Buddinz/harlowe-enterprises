import type { Metadata } from 'next'
import './globals.css'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Harlowe Enterprises | Executive Diagnostic Intelligence',
  description: 'Outside-in operational diagnostics that identify where momentum breaks, where decisions bottleneck, and where structural friction taxes execution.',
  keywords: [
    'operational diagnostic',
    'executive clarity',
    'decision rights matrix',
    'escalation bottleneck',
    'organizational friction',
    'process breakdown',
    'governance and risk',
  ],
  openGraph: {
    title: 'Harlowe Enterprises | Executive Diagnostic Intelligence',
    description: 'Outside-in operational diagnostics for executive clarity.',
    type: 'website',
    url: 'https://harloweinvest.com',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      </head>
      <body className="bg-white text-gray-900 antialiased" style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}>
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
