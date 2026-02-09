import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Hero() {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
     <section className="relative min-h-screen w-full overflow-hidden">
      {/* Background image floue */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat blur-2xl scale-10"
        style={{
          backgroundImage: "url('/yao.jpeg')",
        }}
      />
      {/* Overlay sombre animé */}
      <motion.div
        initial={{ opacity: -0.8 }}
        animate={{ opacity: 0.85 }}
        transition={{ duration: 1.2 }}
        className="absolute inset-0 bg-gradient-to-b  from-black/90 via-slate-600/80 to-black/90"
      />

      {/* Halo lumineux */}
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-cyan-500/20 blur-3xl rounded-full"></div>

      {/* Contenu */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: 'easeOut' }}
        className="relative z-10 max-w-4xl mx-auto text-center"
      >
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.9 }}
          className="text-5xl md:text-7xl mt-60 text-white font-bold mb-6 leading-tight"
        >
          Charles Yao<br />
          <span className="text-cyan-400 drop-shadow-lg">
            Closer d’offres high-ticket
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.9 }}
          className="text-xl md:text-2xl text-slate-300 mb-12 drop-shadow-lg leading-relaxed"
        >
          J’aide les coachs et formateurs à transformer
          <br /><span className="text-white font-semibold"> leurs appels qualifiés </span>
          en décisions claires et rentables.
        </motion.p>

        {/* Bouton ULTRA INCITATIF */}
        <motion.button
          onClick={scrollToContact}
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          animate={{
            boxShadow: [
              '0 0 0px rgba(34,211,238,0)',
              '0 0 25px rgba(34,211,238,0.6)',
              '0 0 0px rgba(34,211,238,0)',
            ],
          }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="relative inline-flex items-center gap-3 bg-cyan-600 hover:bg-cyan-500 text-white px-10 py-5 rounded-xl text-lg font-semibold transition-all"
        >
          Discutons
          <motion.span
            animate={{ x: [0, 6, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <ArrowRight size={22} />
          </motion.span>
        </motion.button>
      </motion.div>
    </section>
  );
}
