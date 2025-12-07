import type { Metadata } from 'next'
import Hero from '@/components/Hero'
import ServiceCard from '@/components/ServiceCard'
import { FiGlobe, FiCpu, FiTool } from 'react-icons/fi'
import { FiCheckCircle } from 'react-icons/fi'

export const metadata: Metadata = {
  title: 'Accueil — C&V Digital | Solutions Web & IA pour Entreprises',
  description: 'Agence digitale spécialisée dans les sites professionnels, l\'automatisation et l\'IA. Création de sites web modernes, intégration IA, chatbots et assistants intelligents.',
}

export default function Home() {
  return (
    <>
      <Hero
        headline="C&V Digital — Solutions Web & IA pour Entreprises Modernes"
        subheadline="Agence digitale spécialisée dans les sites professionnels, l'automatisation et l'IA."
      />

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Nos Services</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Des solutions complètes pour transformer votre présence digitale
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ServiceCard
              icon={<FiGlobe />}
              title="Création de sites web modernes"
              description="Sites web professionnels, rapides et optimisés pour tous les appareils. Design moderne et expérience utilisateur exceptionnelle."
            />
            <ServiceCard
              icon={<FiCpu />}
              title="Intégration IA"
              description="Chatbots intelligents, assistants virtuels et automatisations pour améliorer l'efficacité de votre entreprise."
            />
            <ServiceCard
              icon={<FiTool />}
              title="Maintenance & Support"
              description="Accompagnement continu, mises à jour, sécurité et support technique pour garantir la performance de vos solutions."
            />
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Pourquoi nous choisir ?</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Une expertise technique alliée à une approche business
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              'Expertise technique de pointe',
              'Approche business orientée résultats',
              'Solutions sur mesure adaptées',
              'Support et accompagnement continu',
              'Technologies modernes et performantes',
              'Transparence et communication claire',
              'Livraison rapide et efficace',
              'Tarifs compétitifs et transparents',
            ].map((item, index) => (
              <div key={index} className="flex items-start">
                <FiCheckCircle className="w-6 h-6 text-primary-600 mr-3 mt-1 flex-shrink-0" />
                <span className="text-gray-700 text-lg">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Technologies</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Nous utilisons les dernières technologies pour créer des solutions performantes
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              'Next.js',
              'React',
              'TypeScript',
              'TailwindCSS',
              'Python',
              'Supabase',
              'OpenAI',
              'Node.js',
            ].map((tech, index) => (
              <div
                key={index}
                className="bg-white rounded-lg p-6 text-center shadow-md hover:shadow-lg transition-shadow"
              >
                <span className="text-xl font-semibold text-gray-900">{tech}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Prêt à transformer votre présence digitale ?</h2>
          <p className="text-xl text-primary-100 mb-8">
            Contactez-nous dès aujourd&apos;hui pour discuter de votre projet
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
