import Link from 'next/link'

interface SubscriptionCardProps {
  name: string
  price: string
  description?: string
  features?: string[]
  popular?: boolean
}

export default function SubscriptionCard({
  name,
  price,
  description,
  features,
  popular = false,
}: SubscriptionCardProps) {
  return (
    <div
      className={`bg-white rounded-xl shadow-lg p-6 border-2 transition-all duration-300 ${
        popular ? 'border-primary-500' : 'border-gray-200'
      }`}
    >
      {popular && (
        <div className="mb-4">
          <span className="bg-primary-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
            Recommandé
          </span>
        </div>
      )}
      <h3 className="text-xl font-bold text-gray-900 mb-2">{name}</h3>
      <div className="mb-4">
        <span className="text-3xl font-bold text-primary-600">{price}</span>
        <span className="text-gray-500 text-sm">/mois</span>
      </div>
      {description && (
        <p className="text-gray-600 mb-4 text-sm">{description}</p>
      )}
      {features && features.length > 0 && (
        <ul className="space-y-2 mb-6">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start text-sm">
              <svg
                className="w-4 h-4 text-primary-500 mr-2 mt-0.5 flex-shrink-0"
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
      )}
      <Link
        href="/contact"
        className="block w-full text-center py-2 bg-primary-600 text-white rounded-lg font-semibold hover:bg-primary-700 transition-colors text-sm"
      >
        Souscrire
      </Link>
    </div>
  )
}
