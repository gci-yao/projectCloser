import { Search, PhoneCall, BarChart3 } from 'lucide-react';

const steps = [
  {
    icon: Search,
    title: "Analyse de l'offre",
    description: "Je commence par comprendre votre offre, votre positionnement, votre client idéal et vos arguments de valeur. Cette étape est essentielle pour être aligné avec votre vision."
  },
  {
    icon: PhoneCall,
    title: "Appels de vente",
    description: "Je gère vos appels de closing en appliquant une méthode structurée, éthique et centrée sur le prospect. L'objectif : l'accompagner vers la meilleure décision."
  },
  {
    icon: BarChart3,
    title: "Feedback & amélioration",
    description: "Après chaque série d'appels, je partage des retours détaillés et des pistes d'optimisation pour améliorer continuellement votre taux de conversion."
  }
];

export default function Process() {
  return (
    <section id="process" className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-16 text-center">
          Ma méthode
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-slate-900 rounded-full flex items-center justify-center mb-6">
                  <step.icon className="text-cyan-400" size={32} />
                </div>
                <div className="absolute top-8 left-1/2 w-full h-0.5 bg-slate-200 -z-10 hidden md:block"
                     style={{ display: index === steps.length - 1 ? 'none' : 'block' }} />
                <h3 className="text-xl font-bold text-slate-900 mb-4">
                  {step.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
