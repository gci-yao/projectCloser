import { Mail, Phone, Instagram, Facebook } from 'lucide-react'; // icônes standards
import { SiWhatsapp, SiTiktok } from 'react-icons/si'; // logos officiels WhatsApp et TikTok
import { motion } from 'framer-motion';

const buttons = [
  { icon: Mail, color: 'bg-slate-900 hover:bg-slate-800', href: 'mailto:charlescloserci@gmail.com', label: 'Gmail' },
  { icon: SiWhatsapp, color: 'bg-green-600 hover:bg-green-700', href: 'https://wa.me/qr/D2RV5VOMDPESF1', label: 'WhatsApp' },
  { icon: Phone, color: 'bg-cyan-600 hover:bg-cyan-700', href: 'tel:+2250706836722', label: 'Appeler' },
  { icon: SiTiktok, color: 'bg-black hover:bg-gray-800', href: 'https://www.tiktok.com/@charles_yao_closer', label: 'TikTok' },
  { icon: Instagram, color: 'bg-pink-500 hover:bg-pink-600', href: 'https://www.instagram.com/charles_closer?igsh=ejF1ZzBncGo2aDdn', label: 'Instagram' },
  { icon: Facebook, color: 'bg-blue-600 hover:bg-blue-700', href: 'https://www.facebook.com/share/17arnbfXxC/', label: 'Facebook' },
];

export default function Contact() {
  return (
    <section id="contact" className="py-28 px-6 bg-white">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-center gap-12">

        {/* Buttons Grid */}
        <div className="grid grid-cols-2 gap-6">
          {buttons.map((btn, index) => {
            const Icon = btn.icon;
            return (
              <motion.a
                key={index}
                href={btn.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center justify-center w-16 h-16 rounded-full text-white shadow-2xl ${btn.color} cursor-pointer`}
                whileHover={{ scale: 1.3, boxShadow: '0 0 25px rgba(0,0,0,0.6)' }}
                whileTap={{ scale: 0.95 }}
              >
                <Icon size={28} />
              </motion.a>
            );
          })}
        </div>

        {/* QR Code Right */}
        <div className="p-6  flex flex-col items-center justify-center">
          <img
            src="/wa.png"
            alt="QR Code WhatsApp"
            className="w-48 h-48 object-contain"
          />
          <p className="mt-2 text-slate-400 text-sm text-center">
            Scannez pour discuter sur WhatsApp
          </p>
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-32 text-center text-slate-400">
        Réponse 24h/24 • 7j/7  © All rights reserved by Charles Yao – Closer Professionnel
      </footer>
    </section>
  );
}
