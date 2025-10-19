import { Network, Code, Terminal, Github, Server, Database, Globe, Cpu, Shield, Zap } from 'lucide-react';
import { FaPython, FaJava, FaPhp, FaHtml5, FaCss3Alt, FaJs, FaReact, FaLinux, FaGitAlt, FaDocker } from 'react-icons/fa';
import { SiMysql, SiCisco, SiGnome } from 'react-icons/si';
import { useTranslation } from 'react-i18next';

const SkillsSection = () => {
  const { t } = useTranslation();

  const Card = ({
    icon,
    title,
    skills,
    gradientFrom,
    gradientTo,
    iconColor,
  }: {
    icon: React.ElementType;
    title: string;
    skills: { skill: string; level: number; icon: React.ElementType; color?: string }[];
    gradientFrom: string;
    gradientTo: string;
    iconColor: string;
  }) => {
    const Icon = icon;
    return (
      <div className="group bg-white/70 dark:bg-slate-800/50 backdrop-blur-sm p-8 rounded-2xl border border-slate-200 dark:border-slate-700/50 shadow-md dark:shadow-none transition-all duration-300 hover:scale-105 hover:shadow-xl hover:border-purple-500/50">
        <div className="flex items-center mb-6">
          <div
            className={`w-12 h-12 bg-gradient-to-r from-${gradientFrom}-500/20 to-${gradientTo}-500/20 rounded-xl flex items-center justify-center border border-${gradientFrom}-500/30 mr-4 group-hover:scale-110 transition-transform duration-300`}
          >
            <Icon className={`h-6 w-6 text-${iconColor}-500`} />
          </div>
          <h3 className="text-xl font-bold text-gray-800 dark:text-white">{title}</h3>
        </div>

        <div className="space-y-4">
          {skills.map(({ skill, level, icon: SubIcon, color }) => (
            <div key={skill} className="group/skill">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center space-x-2">
                  <SubIcon className={`h-4 w-4 ${color || `text-${iconColor}-500`}`} />
                  <span className="text-sm font-medium text-gray-800 dark:text-slate-300">{skill}</span>
                </div>
                <span className="text-xs text-gray-500 dark:text-slate-400 font-mono">{level}%</span>
              </div>
              <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2 relative overflow-hidden">
                <div
                  className={`absolute top-0 left-0 h-full bg-gradient-to-r from-${gradientFrom}-500 to-${gradientTo}-500 rounded-full transition-all duration-1000 ease-out group-hover/skill:animate-pulse`}
                  style={{ width: `${level}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <section id="skills" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <span className="px-4 py-2 bg-green-500/20 text-green-500 rounded-full text-sm font-medium border border-green-500/30">
            {t("skills.section")}
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-6 mb-6">
            <span className="bg-gradient-to-r from-green-600 to-teal-400 bg-clip-text text-transparent dark:from-white dark:to-slate-300">
              {t("skills.title")}
            </span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <Card
            icon={Network}
            title={t("skills.networking.title")}
            skills={[
              { skill: t("skills.networking.ccna"), level: 90, icon: SiCisco, color: "text-blue-600" },
              { skill: t("skills.networking.gns3"), level: 85, icon: Server, color: "text-green-600" },
              { skill: t("skills.networking.automation"), level: 80, icon: Zap, color: "text-yellow-600" },
              { skill: t("skills.networking.linux"), level: 88, icon: FaLinux, color: "text-orange-600" },
            ]}
            gradientFrom="blue"
            gradientTo="cyan"
            iconColor="blue"
          />

          <Card
            icon={Code}
            title={t("skills.programming.title")}
            skills={[
              { skill: t("skills.programming.python"), level: 92, icon: FaPython, color: "text-yellow-500" },
              { skill: t("skills.programming.phpmysql"), level: 75, icon: FaPhp, color: "text-purple-600" },
              { skill: t("skills.programming.java"), level: 85, icon: FaJava, color: "text-red-600" },
              { skill: t("skills.programming.frontend"), level: 80, icon: FaReact, color: "text-cyan-500" },
            ]}
            gradientFrom="purple"
            gradientTo="pink"
            iconColor="purple"
          />

          <Card
            icon={Terminal}
            title={t("skills.tools.title")}
            skills={[
              { skill: t("skills.tools.git"), level: 85, icon: FaGitAlt, color: "text-orange-600" },
              { skill: t("skills.tools.linux"), level: 70, icon: FaLinux, color: "text-orange-600" },
              { skill: t("skills.tools.db"), level: 75, icon: SiMysql, color: "text-blue-600" },
              { skill: t("skills.tools.web"), level: 72, icon: Globe, color: "text-green-600" },
            ]}
            gradientFrom="green"
            gradientTo="emerald"
            iconColor="green"
          />
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
