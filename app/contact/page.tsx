import type { Metadata } from 'next'
import Hero from '@/components/Hero'
import ContactForm from '@/components/ContactForm'
import { FiMail, FiPhone } from 'react-icons/fi'

export const metadata: Metadata = {
  title: 'Contact — C&V Digital | Contactez-nous pour votre projet',
  description: 'Contactez C&V Digital pour discuter de votre projet web ou IA. Formulaire de contact et informations de contact.',
}

export default function Contact() {
  return (
    <>
      <Hero
        headline="Contactez-nous"
        subheadline="Discutons de votre projet ensemble"
        showCTA={false}
      />

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-1">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Informations de contact</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Email</h3>
                  <a
                    href="mailto:contact@cv-digital.com"
                    className="flex items-center text-primary-600 hover:text-primary-700"
                  >
                    <FiMail className="w-5 h-5 mr-2" />
                    <span>contact@cv-digital.com</span>
                  </a>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Besoin d'un rendez-vous ?</h3>
                  <p className="text-gray-600 mb-4">
                    Utilisez notre formulaire de rendez-vous pour planifier une consultation personnalisée.
                  </p>
                  <a
                    href="/rendez-vous"
                    className="inline-block px-6 py-3 bg-primary-600 text-white rounded-lg font-semibold hover:bg-primary-700 transition-colors"
                  >
                    Prendre rendez-vous
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Envoyez-nous un message</h2>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
