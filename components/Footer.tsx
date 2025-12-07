import Link from 'next/link'
import { FiMail, FiPhone } from 'react-icons/fi'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold text-white mb-4">C&V Digital</h3>
            <p className="text-gray-400 mb-4">
              Solutions Web & IA pour Entreprises Modernes. 
              Agence digitale spécialisée dans les sites professionnels, 
              l'automatisation et l'intelligence artificielle.
            </p>
            <div className="flex flex-col space-y-2">
              <a
                href="mailto:contact@cv-digital.com"
                className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors"
              >
                <FiMail className="w-5 h-5" />
                <span>contact@cv-digital.com</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Liens rapides</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-400 hover:text-white transition-colors">
                  Accueil
                </Link>
              </li>
              <li>
                <Link href="/a-propos" className="text-gray-400 hover:text-white transition-colors">
                  À propos
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-400 hover:text-white transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/tarifs" className="text-gray-400 hover:text-white transition-colors">
                  Tarifs
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4">Contact</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-white transition-colors">
                  Formulaire de contact
                </Link>
              </li>
              <li>
                <Link href="/rendez-vous" className="text-gray-400 hover:text-white transition-colors">
                  Prendre rendez-vous
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} C&V Digital. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  )
}
