import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'C&V Digital — Solutions Web & IA pour Entreprises Modernes',
  description: 'Agence digitale spécialisée dans les sites professionnels, l\'automatisation et l\'IA. Création de sites web modernes, intégration IA, chatbots et assistants intelligents.',
  keywords: 'agence digitale, création site web, IA, chatbot, automatisation, Next.js, développement web',
  authors: [{ name: 'C&V Digital' }],
  openGraph: {
    title: 'C&V Digital — Solutions Web & IA pour Entreprises Modernes',
    description: 'Agence digitale spécialisée dans les sites professionnels, l\'automatisation et l\'IA.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <body className={inter.className}>
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
