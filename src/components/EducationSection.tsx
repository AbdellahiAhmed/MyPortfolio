import { GraduationCap, Award, ExternalLink } from 'lucide-react';

const EducationSection = () => {
  return (
    <section id="education" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <span className="px-4 py-2 bg-blue-500/20 text-blue-400 rounded-full text-sm font-medium border border-blue-500/30">
            Education
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-6 mb-6">
            <span className="text-black dark:bg-gradient-to-r dark:from-white dark:to-slate-300 dark:bg-clip-text dark:text-transparent">
              Academic Journey
            </span>
          </h2>
        </div>

        <div className="space-y-8">
          {[
            {
              institution: "Institut Supérieur de Comptabilité et d'Administration des Entreprises se Mauritanie",
              degree: "Licence en Réseaux Informatiques et Télécommunications",
              period: "2023 - Present",
              logo: GraduationCap,
              description: "Mon objectif est de devenir un Administrateur Réseau et un Développeur Full Stack, capable d’intégrer des systèmes complexes, de gérer des infrastructures réseau sécurisées, et de développer des solutions logicielles modernes."
            },
            {
              institution: "Lycée d’Aïoun, Mauritania",
              degree: "Bac C",
              period: "2021 - 2023",
              logo: Award,
              description: "Ce baccalauréat m’a permis d’acquérir une base solide en raisonnement logique, en résolution de problèmes complexes et en pensée analytique."
            }
          ].map((edu, index) => (
            <div key={index} className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-2xl border border-slate-700/50 hover:border-blue-500/30 transition-all duration-300">
              <div className="flex items-start justify-between">
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-xl flex items-center justify-center border border-blue-500/30">
                    <edu.logo className="h-8 w-8 text-blue-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-black dark:text-white">{edu.institution}</h3>
                    <p className="text-blue-700 dark:text-blue-400">{edu.degree}</p>
                    <p className="text-sm text-slate-700 dark:text-slate-400">{edu.period}</p>
                  </div>
                </div>
                <button className="text-slate-500 dark:text-slate-400 hover:text-black dark:hover:text-white transition-colors">
                  <ExternalLink className="h-5 w-5" />
                </button>
              </div>
              <p className="text-black dark:text-slate-300 mt-4">{edu.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
