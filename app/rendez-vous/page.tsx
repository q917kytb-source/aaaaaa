import type { Metadata } from 'next'
import Hero from '@/components/Hero'
import AppointmentForm from '@/components/AppointmentForm'

export const metadata: Metadata = {
  title: 'Prendre rendez-vous — C&V Digital | Planifier une consultation',
  description: 'Planifiez un rendez-vous avec C&V Digital pour discuter de votre projet web ou IA. Formulaire de rendez-vous en ligne.',
}

export default function Appointment() {
  return (
    <>
      <Hero
        headline="Planifier un rendez-vous avec C&V Digital"
        subheadline="Remplissez le formulaire ci-dessous et nous vous contacterons rapidement"
        showCTA={false}
      />

      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-xl shadow-lg p-8 md:p-12">
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Formulaire de rendez-vous</h2>
              <p className="text-gray-600">
                Remplissez tous les champs ci-dessous pour planifier votre consultation. 
                Nous vous contacterons dans les plus brefs délais pour confirmer votre rendez-vous.
              </p>
            </div>
            <AppointmentForm />
          </div>
        </div>
      </section>

      {/* Additional Info */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-primary-600 mb-2">24h</div>
              <p className="text-gray-600">Délai de réponse</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary-600 mb-2">100%</div>
              <p className="text-gray-600">Gratuit et sans engagement</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary-600 mb-2">Sur mesure</div>
              <p className="text-gray-600">Solutions adaptées à vos besoins</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
