import { Code, Database, Globe, Layout, Server, Settings, Shield, Smartphone, Terminal, Cpu, Cloud, Award } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { FaReact, FaNodeJs, FaPython, FaDocker, FaAws, FaJava } from 'react-icons/fa';
import { SiTypescript, SiTailwindcss, SiPostgresql, SiMongodb, SiNextdotjs, SiCisco } from 'react-icons/si';

const SkillsSection = () => {
  const { t } = useTranslation();

  const skills = [
    {
      category: t('skills.categories.frontend'),
      icon: Layout,
      color: "text-blue-500",
      bg: "bg-blue-500/10",
      border: "border-blue-500/20",
      items: [
        { name: "React", level: "90%", icon: FaReact, color: "text-blue-400" },
        { name: "TypeScript", level: "85%", icon: SiTypescript, color: "text-blue-600" },
        { name: "Tailwind CSS", level: "95%", icon: SiTailwindcss, color: "text-cyan-400" },
        { name: "Next.js", level: "80%", icon: SiNextdotjs, color: "text-white" }
      ]
    },
    {
      category: t('skills.categories.backend'),
      icon: Server,
      color: "text-emerald-500",
      bg: "bg-emerald-500/10",
      border: "border-emerald-500/20",
      items: [
        { name: "Node.js", level: "85%", icon: FaNodeJs, color: "text-green-500" },
        { name: "Python", level: "80%", icon: FaPython, color: "text-yellow-500" },
        { name: "Java", level: "75%", icon: FaJava, color: "text-red-500" },
        { name: "PostgreSQL", level: "80%", icon: SiPostgresql, color: "text-blue-400" }
      ]
    },
    {
      category: t('skills.categories.network'),
      icon: Globe,
      color: "text-amber-500",
      bg: "bg-amber-500/10",
      border: "border-amber-500/20",
      items: [
        { name: "Cisco Networking", level: "90%", icon: SiCisco, color: "text-blue-800" },
        { name: "Network Security", level: "85%", icon: Shield, color: "text-red-500" },
        { name: "Cloud (AWS)", level: "75%", icon: FaAws, color: "text-orange-500" },
        { name: "Docker", level: "80%", icon: FaDocker, color: "text-blue-500" }
      ]
    },
    {
      category: t('skills.categories.tools'),
      icon: Settings,
      color: "text-slate-500",
      bg: "bg-slate-500/10",
      border: "border-slate-500/20",
      items: [
        { name: "Git & GitHub", level: "90%", icon: Code, color: "text-orange-600" },
        { name: "Linux", level: "85%", icon: Terminal, color: "text-yellow-400" },
        { name: "VS Code", level: "95%", icon: Code, color: "text-blue-500" },
        { name: "DevOps", level: "75%", icon: Settings, color: "text-slate-400" }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-gradient-to-b from-slate-100 to-transparent dark:from-slate-900/50 dark:to-transparent rounded-full blur-3xl opacity-50"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 animate-slide-up-fade">
          <span className="px-4 py-2 bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 rounded-full text-sm font-medium border border-indigo-500/20 inline-block">
            {t('skills.section')}
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-6 mb-6">
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400 bg-clip-text text-transparent">
              {t('skills.title')}
            </span>
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
            A comprehensive toolkit for building modern, scalable applications.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {skills.map((category, index) => (
            <div
              key={index}
              className={`glass-card p-8 rounded-2xl hover:border-blue-500/30 transition-all duration-300 animate-slide-up-fade`}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="flex items-center space-x-4 mb-8">
                <div className={`p-3 rounded-xl ${category.bg} ${category.color} border ${category.border}`}>
                  <category.icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-800 dark:text-white">{category.category}</h3>
              </div>

              <div className="space-y-6">
                {category.items.map((skill, i) => (
                  <div key={i} className="group">
                    <div className="flex justify-between mb-2">
                      <div className="flex items-center space-x-2">
                        <skill.icon className={`h-5 w-5 ${skill.color} transition-transform group-hover:scale-110`} />
                        <span className="font-medium text-slate-700 dark:text-slate-300">{skill.name}</span>
                      </div>
                      <span className="text-sm text-slate-500 dark:text-slate-400 font-mono">{skill.level}</span>
                    </div>
                    <div className="h-2 bg-slate-100 dark:bg-slate-700 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full relative overflow-hidden group-hover:from-blue-400 group-hover:to-indigo-500 transition-colors"
                        style={{ width: skill.level }}
                      >
                        <div className="absolute inset-0 bg-white/20 animate-shimmer"></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Certifications Badge */}
        <div className="mt-16 text-center animate-slide-up-fade delay-500">
          <div className="inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-amber-500/10 to-orange-500/10 border border-amber-500/20 rounded-full">
            <Award className="h-5 w-5 text-amber-500" />
            <span className="font-medium text-slate-700 dark:text-slate-300">
              Certified in <span className="text-amber-600 dark:text-amber-400 font-bold">Cisco Networking</span> & <span className="text-amber-600 dark:text-amber-400 font-bold">Full Stack Development</span>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
