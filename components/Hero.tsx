import Link from 'next/link'

interface HeroProps {
  headline: string
  subheadline: string
  showCTA?: boolean
}

export default function Hero({ headline, subheadline, showCTA = true }: HeroProps) {
  return (
    <section className="relative bg-gradient-to-br from-primary-600 via-primary-700 to-primary-900 text-white pt-24 pb-16 md:pt-32 md:pb-24">
      <div className="absolute inset-0 bg-black/10"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center animate-fade-in">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            {headline}
          </h1>
          <p className="text-xl md:text-2xl text-primary-100 mb-8">
            {subheadline}
          </p>
          {showCTA && (
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="px-8 py-4 bg-white text-primary-600 rounded-lg font-semibold hover:bg-gray-100 transition-all transform hover:scale-105 shadow-lg"
              >
                Nous contacter
              </Link>
              <Link
                href="/services"
                className="px-8 py-4 bg-primary-500 text-white rounded-lg font-semibold hover:bg-primary-400 transition-all transform hover:scale-105 border-2 border-white/30"
              >
                Voir nos services
              </Link>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
