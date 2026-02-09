import { Heart, MessageCircle, Target } from 'lucide-react';

const reasons = [
  {
    icon: Heart,
    title: "Approche humaine et éthique",
    description: "Pas de techniques de manipulation ou de pression excessive. Je crois en une vente basée sur la confiance, l'authenticité et le respect du rythme de décision de chaque prospect."
  },
  {
    icon: MessageCircle,
    title: "Communication transparente",
    description: "Vous recevez des retours clairs et réguliers sur les appels effectués, les objections rencontrées et les axes d'amélioration identifiés. Pas de zone d'ombre."
  },
  {
    icon: Target,
    title: "Focus sur les résultats",
    description: "Mon engagement est simple : vous aider à convertir plus de prospects qualifiés en clients satisfaits, tout en préservant votre réputation et vos valeurs."
  }
];

export default function WhyWorkWithMe() {
  return (
    <section id="why" className="py-24 px-6 bg-slate-900 text-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">
          Pourquoi travailler avec moi
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="bg-slate-800 p-8 rounded-xl"
            >
              <div className="w-14 h-14 bg-cyan-600 rounded-lg flex items-center justify-center mb-6">
                <reason.icon className="text-white" size={28} />
              </div>
              <h3 className="text-xl font-bold mb-4">
                {reason.title}
              </h3>
              <p className="text-slate-300 leading-relaxed">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
