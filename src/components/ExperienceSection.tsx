import { Network, Code, Server, ExternalLink, Star } from 'lucide-react';

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <span className="px-4 py-2 bg-cyan-500/20 text-cyan-400 rounded-full text-sm font-medium border border-cyan-500/30">
            Work Experience
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-6 mb-6">
            <span className="text-black dark:bg-gradient-to-r dark:from-white dark:to-slate-300 dark:bg-clip-text dark:text-transparent">
              Professional Journey
            </span>
          </h2>
        </div>

        <div className="space-y-8">
          {[
            {
              company: "Stage Découverte chez Mauritel",
              role: "Stagiaire en Réseaux Informatiques & Administration Systèmes",
              period: "2025/06 - Present",
              type: "Full-time",
              logo: Network,
              description: "Managing network infrastructure, implementing automation scripts, and maintaining Linux servers for enterprise clients.",
              achievements: [
                "Découvrir les équipements professionnels utilisés (switches, routeurs, serveurs, etc.) ",
                "Comprendre les politiques de gestion de réseau dans un environnement réel ",
                "Poser des questions techniques aux ingénieurs et techniciens du terrain ",
                "Développer un projet personnel avancé en parallèle: \"AutoNetConfig\""
              ]
            },
            {
              company: "III-Networking",
              role: "Network Engineering Student Intern (Self-Project)",
              period: "2025/02 - Present",
              type: "Personal Effort",
              logo: Server,
              description: "Developed web applications using Flask, React, and PostgreSQL for startup projects.",
              achievements: [
                "Built lab simulations using Cisco Packet Tracer & GNS3",
                "CCNA-level routing and switching",
                "Completed CCNA course from III-Networking",
                "Completing over 40+ CCNA practical labs"
              ]
            },
            {
              company: "Google DSC ISCAE",
              role: "Student Aid",
              period: "2023/01 - 2023/07",
              type: "Part-time",
              logo: Code,
              description: "As a student aid and active participant in the Google DSC – ISCAE community, I supported peer learning and contributed to collaborative activities focused on programming, software development, and problem-solving.",
              achievements: [
                "I learned the importance of planning, organization, and creative problem-solving to adapt to different work environments.",
                "I developed strong communication skills and the ability to work effectively both independently and within a team.",
                "I improved my technical expertise and confidence through hands-on experience and continuous learning."
              ]
            }
          ].map((job, index) => (
            <div key={index} className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-2xl border border-slate-700/50 hover:border-purple-500/30 transition-all duration-300">
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 rounded-xl flex items-center justify-center border border-purple-500/30">
                    <job.logo className="h-8 w-8 text-purple-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-black dark:text-white">{job.company}</h3>
                    <p className="text-purple-700 dark:text-purple-400 font-medium">{job.role}</p>
                    <div className="flex items-center space-x-4 mt-1">
                      <span className="text-slate-700 dark:text-slate-400 text-sm">{job.period}</span>
                      <span className="px-2 py-1 bg-cyan-100/60 dark:bg-cyan-500/20 text-cyan-700 dark:text-cyan-400 rounded-full text-xs border border-cyan-200 dark:border-cyan-500/30">
                        {job.type}
                      </span>
                    </div>
                  </div>
                </div>
                <button className="text-slate-500 dark:text-slate-400 hover:text-black dark:hover:text-white transition-colors">
                  <ExternalLink className="h-5 w-5" />
                </button>
              </div>
              
              <p className="text-black dark:text-slate-300 mb-4">{job.description}</p>
              
              <div className="space-y-2">
                {job.achievements.map((achievement, i) => (
                  <div key={i} className="flex items-center space-x-2">
                    <Star className="h-4 w-4 text-yellow-400 flex-shrink-0" />
                    <span className="text-black dark:text-slate-300 text-sm">{achievement}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
