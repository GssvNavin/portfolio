import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Navin Gssv | Lead Data & AI Architect',
  description: 'Designing scalable data platforms and AI-ready architectures that transform enterprise data into actionable intelligence.',
  keywords: ['Data Architect', 'AI Architect', 'Google Cloud', 'BigQuery', 'Snowflake', 'Data Engineering'],
  openGraph: {
    title: 'Navin Gssv | Lead Data & AI Architect',
    description: 'Designing scalable data platforms and AI-ready architectures.',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=DM+Sans:opsz,wght@9..40,300;9..40,400;9..40,500;9..40,600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  )
}
