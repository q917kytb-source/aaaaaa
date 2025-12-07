import { ReactNode } from 'react'
import Link from 'next/link'

interface PricingCardProps {
  name: string
  price: string
  features: string[]
  popular?: boolean
  ctaText?: string
  ctaHref?: string
}

export default function PricingCard({
  name,
  price,
  features,
  popular = false,
  ctaText = 'Choisir ce pack',
  ctaHref = '/contact',
}: PricingCardProps) {
  return (
    <div
      className={`relative bg-white rounded-xl shadow-lg p-8 border-2 transition-all duration-300 transform hover:-translate-y-2 ${
        popular
          ? 'border-primary-500 scale-105'
          : 'border-gray-200'
      }`}
    >
      {popular && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
          <span className="bg-primary-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
            Populaire
          </span>
        </div>
      )}
      <h3 className="text-2xl font-bold text-gray-900 mb-2">{name}</h3>
      <div className="mb-6">
        <span className="text-4xl font-bold text-primary-600">{price}</span>
      </div>
      <ul className="space-y-3 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <svg
              className="w-5 h-5 text-primary-500 mr-2 mt-0.5 flex-shrink-0"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              />
            </svg>
            <span className="text-gray-600">{feature}</span>
          </li>
        ))}
      </ul>
      <Link
        href={ctaHref}
        className={`block w-full text-center py-3 rounded-lg font-semibold transition-colors ${
          popular
            ? 'bg-primary-600 text-white hover:bg-primary-700'
            : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
        }`}
      >
        {ctaText}
      </Link>
    </div>
  )
}
