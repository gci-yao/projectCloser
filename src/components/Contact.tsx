import { Mail, MessageSquare, Phone } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-28 px-6 bg-white">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-8">
          Contactez-moi
        </h2>

        <p className="text-xl text-slate-600 mb-16 leading-relaxed">
          Vous cherchez un closer pour votre offre de coaching ou de formation ?<br />
          Discutons de votre projet et voyons si une collaboration est pertinente.
        </p>

        {/* Actions */}
        <div className="flex flex-col lg:flex-row items-center justify-center gap-12">
          
          {/* Boutons */}
          <div className="flex flex-col gap-6">
            <a
              href="mailto:charlescloserci@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-slate-900 hover:bg-slate-800 text-white px-8 py-4 rounded-xl text-lg font-semibold transition-all transform hover:scale-105"
            >
              <Mail size={24} />
              charlescloserci@gmail.com
            </a>

            <a
              href="https://wa.me/qr/D2RV5VOMDPESF1"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-slate-900 hover:bg-green-700 text-white px-8 py-4 rounded-xl text-lg font-semibold transition-all transform hover:scale-105"
            >
              <MessageSquare size={24} />
              WhatsApp
            </a>
            <a
            href="tel:+2250706836722"
            className="inline-flex items-center gap-3 bg-slate-900 hover:bg-slate-600 text-white px-8 py-4 rounded-xl text-lg font-semibold transition-all transform hover:scale-105"
          >
            <Phone size={24} />
            Appeler +225 07 06 83 67 22
          </a>
          </div>

          {/* QR Code */}
          <div className="bg-slate-1 p-6 rounded-2xl ">
            <img
              src="/src/assets/wa.png"
              alt="QR Code WhatsApp"
              className="w-48 h-48 object-contain"
            />
            <p className="mt-2 text-slate-400 text-sm">
            Scannez pour discuter sur WhatsApp
            </p>
          </div>
        </div>

        <p className="mt-16 text-slate-500">
          Réponse 24h/24 • 7j/7
        </p>
      </div>
    </section>
  );
}
