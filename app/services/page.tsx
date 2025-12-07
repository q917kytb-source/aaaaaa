import type { Metadata } from 'next'
import Hero from '@/components/Hero'
import ServiceCard from '@/components/ServiceCard'
import { FiGlobe, FiCpu, FiTool, FiZap, FiShield, FiTrendingUp } from 'react-icons/fi'

export const metadata: Metadata = {
  title: 'Services — C&V Digital | Création web, IA et automatisation',
  description: 'Découvrez nos services : création de sites web modernes, intégration IA et chatbots, maintenance et support technique.',
}

export default function Services() {
  return (
    <>
      <Hero
        headline="Nos Services"
        subheadline="Des solutions complètes pour votre transformation digitale"
        showCTA={false}
      />

      {/* Main Services */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <ServiceCard
              icon={<FiGlobe />}
              title="Création de sites web modernes"
              description="Sites web professionnels, rapides et optimisés pour tous les appareils. Design moderne et expérience utilisateur exceptionnelle avec les dernières technologies (Next.js, React, TypeScript)."
            />
            <ServiceCard
              icon={<FiCpu />}
              title="Intégration IA"
              description="Chatbots intelligents, assistants virtuels et automatisations pour améliorer l'efficacité de votre entreprise. Solutions d'IA sur mesure adaptées à vos besoins spécifiques."
            />
            <ServiceCard
              icon={<FiTool />}
              title="Maintenance & Support"
              description="Accompagnement continu, mises à jour, sécurité et support technique pour garantir la performance de vos solutions. Support réactif et maintenance proactive."
            />
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Services complémentaires</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Une gamme complète de services pour répondre à tous vos besoins
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100">
              <div className="text-primary-600 mb-4 text-4xl">
                <FiZap />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Automatisation</h3>
              <p className="text-gray-600 leading-relaxed">
                Automatisez vos processus métier pour gagner du temps et améliorer votre productivité.
              </p>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100">
              <div className="text-primary-600 mb-4 text-4xl">
                <FiShield />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Sécurité</h3>
              <p className="text-gray-600 leading-relaxed">
                Protection de vos données et de vos systèmes avec les meilleures pratiques de sécurité.
              </p>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100">
              <div className="text-primary-600 mb-4 text-4xl">
                <FiTrendingUp />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">SEO & Performance</h3>
              <p className="text-gray-600 leading-relaxed">
                Optimisation pour les moteurs de recherche et amélioration des performances de votre site.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Notre Processus</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Une méthodologie éprouvée pour garantir le succès de votre projet
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: '1', title: 'Consultation', desc: 'Analyse de vos besoins et définition des objectifs' },
              { step: '2', title: 'Conception', desc: 'Design et architecture de la solution' },
              { step: '3', title: 'Développement', desc: 'Implémentation avec les meilleures technologies' },
              { step: '4', title: 'Livraison', desc: 'Déploiement et accompagnement continu' },
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-primary-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Prêt à démarrer votre projet ?</h2>
          <p className="text-xl text-primary-100 mb-8">
            Contactez-nous pour discuter de vos besoins et obtenir un devis personnalisé
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="px-8 py-4 bg-white text-primary-600 rounded-lg font-semibold hover:bg-gray-100 transition-all transform hover:scale-105"
            >
              Nous contacter
            </a>
            <a
              href="/rendez-vous"
              className="px-8 py-4 bg-primary-500 text-white rounded-lg font-semibold hover:bg-primary-400 transition-all transform hover:scale-105 border-2 border-white/30"
            >
              Prendre rendez-vous
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
