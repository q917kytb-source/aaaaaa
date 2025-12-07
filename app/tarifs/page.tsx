import type { Metadata } from 'next'
import Hero from '@/components/Hero'
import PricingCard from '@/components/PricingCard'
import SubscriptionCard from '@/components/SubscriptionCard'

export const metadata: Metadata = {
  title: 'Tarifs — C&V Digital | Packs et formules d\'abonnement',
  description: 'Découvrez nos tarifs pour la création de sites web, l\'intégration IA et nos formules d\'abonnement mensuelles. Devis personnalisés disponibles.',
}

export default function Pricing() {
  return (
    <>
      <Hero
        headline="Nos Tarifs"
        subheadline="Des solutions adaptées à tous les budgets"
        showCTA={false}
      />

      {/* Pricing Packs */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Packs de création</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Choisissez le pack qui correspond le mieux à vos besoins
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <PricingCard
              name="Pack Start"
              price="399 €"
              features={[
                'Site 1 page',
                'Design moderne',
                'Formulaire de contact',
                'Mobile-friendly',
                'Livraison rapide',
              ]}
              ctaText="Choisir ce pack"
              ctaHref="/contact"
            />
            <PricingCard
              name="Pack Business"
              price="799 €"
              popular
              features={[
                '3 à 5 pages',
                'Design professionnel',
                'SEO basique',
                'Chatbot IA simple',
                'Page contact + rendez-vous',
              ]}
              ctaText="Choisir ce pack"
              ctaHref="/contact"
            />
            <PricingCard
              name="Pack Premium"
              price="1490 €"
              features={[
                'Site complet sur mesure',
                'IA avancée (assistant intelligent)',
                'Automatisations',
                'Maintenance incluse 3 mois',
                'Performance optimisée',
              ]}
              ctaText="Choisir ce pack"
              ctaHref="/contact"
            />
          </div>
        </div>
      </section>

      {/* Monthly Subscriptions */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Formules d'abonnement</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Des services récurrents pour accompagner votre croissance
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <SubscriptionCard
              name="Maintenance & support"
              price="29 €"
              description="Maintenance continue et support technique"
            />
            <SubscriptionCard
              name="IA avancée"
              price="19 €"
              description="Assistants intelligents et chatbots avancés"
            />
            <SubscriptionCard
              name="Hébergement"
              price="10 €"
              description="Hébergement performant et sécurisé"
            />
            <SubscriptionCard
              name="Formule All-In"
              price="60 €"
              popular
              description="Tout inclus : maintenance + IA + hébergement + support prioritaire"
              features={[
                'Maintenance & support',
                'IA avancée',
                'Hébergement',
                'Support prioritaire',
              ]}
            />
          </div>
        </div>
      </section>

      {/* Disclaimer & CTA */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gray-50 rounded-xl p-8 mb-8">
            <p className="text-gray-700 text-center leading-relaxed">
              <strong>Note importante :</strong> Les tarifs ci-dessus sont donnés à titre indicatif. 
              Chaque projet est unique et les prix peuvent varier en fonction de vos besoins et du 
              niveau de personnalisation.
            </p>
          </div>
          <div className="text-center">
            <a
              href="/contact"
              className="inline-block px-8 py-4 bg-primary-600 text-white rounded-lg font-semibold text-lg hover:bg-primary-700 transition-colors"
            >
              Demander un devis personnalisé
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
