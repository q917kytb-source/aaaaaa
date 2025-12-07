import type { Metadata } from 'next'
import Hero from '@/components/Hero'
import TeamCard from '@/components/TeamCard'

export const metadata: Metadata = {
  title: 'À propos — C&V Digital | Notre équipe et notre mission',
  description: 'Découvrez C&V Digital, notre mission de digitalisation simple et performante, et notre équipe d\'experts en développement web et IA.',
}

export default function About() {
  return (
    <>
      <Hero
        headline="À propos de C&V Digital"
        subheadline="Votre partenaire pour la transformation digitale"
        showCTA={false}
      />

      {/* Company Presentation */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Notre entreprise</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              C&V Digital est une agence digitale spécialisée dans la création de solutions web modernes 
              et l'intégration de l'intelligence artificielle pour les entreprises. Nous combinons expertise 
              technique et vision business pour offrir des solutions qui transforment réellement votre 
              présence digitale.
            </p>
            <p className="text-gray-600 leading-relaxed mb-6">
              Fondée par deux experts complémentaires, notre agence allie développement technique de pointe 
              et stratégie marketing pour garantir des résultats concrets et mesurables.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Notre Mission</h2>
              <p className="text-gray-600 leading-relaxed text-lg">
                Rendre la digitalisation <strong>simple, performante et moderne</strong> pour toutes les entreprises. 
                Nous croyons que chaque entreprise, quelle que soit sa taille, mérite d'avoir accès aux meilleures 
                technologies pour développer son activité.
              </p>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Notre Vision</h2>
              <p className="text-gray-600 leading-relaxed text-lg">
                Rendre l'<strong>intelligence artificielle accessible</strong> à toutes les entreprises. 
                Nous démocratisons l'IA en créant des solutions pratiques et abordables qui améliorent 
                réellement la productivité et l'expérience client.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Notre Équipe</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Deux experts complémentaires pour votre réussite digitale
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <TeamCard
              name="Quentin Claes"
              role="CTO — Co-fondateur"
              description="Développeur full-stack spécialisé en Next.js, Python et Supabase. Expert en intelligence artificielle, architecture système, automatisation et sécurité. Passionné par les technologies de pointe et l'innovation, il transforme les idées en solutions techniques performantes et scalables."
            />
            <TeamCard
              name="Arthur Lévis Vandembenden"
              role="CMO — Co-fondateur"
              description="Spécialiste en économie, marketing et vente. Responsable de la prospection, de la stratégie commerciale, du branding et de l'accompagnement client. Il s'assure que chaque projet répond parfaitement aux besoins business et génère des résultats mesurables pour nos clients."
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Travaillons ensemble</h2>
          <p className="text-xl text-primary-100 mb-8">
            Discutons de votre projet et découvrons comment nous pouvons vous aider
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
