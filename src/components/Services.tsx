import { Phone, Shield, TrendingUp } from 'lucide-react';

const services = [
  {
    icon: Phone,
    title: "Closing d'appels qualifiés",
    description: "Je prends en charge vos appels de vente avec des prospects qui ont déjà manifesté un intérêt pour votre offre. Mon rôle : comprendre leurs besoins et les accompagner vers une décision éclairée."
  },
  {
    icon: Shield,
    title: "Gestion des objections",
    description: "Chaque objection est une opportunité de clarifier, rassurer et créer de la confiance. Je transforme les doutes en points de décision positifs, sans pression."
  },
  {
    icon: TrendingUp,
    title: "Suivi et optimisation",
    description: "Analyse régulière des appels, identification des axes d'amélioration et optimisation continue du taux de conversion pour maximiser vos résultats."
  }
];

export default function Services() {
  return (
    <section id="services" className="py-24 px-6 bg-slate-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-16 text-center">
          Services
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="w-14 h-14 bg-cyan-100 rounded-lg flex items-center justify-center mb-6">
                <service.icon className="text-cyan-600" size={28} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">
                {service.title}
              </h3>
              <p className="text-slate-600 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
