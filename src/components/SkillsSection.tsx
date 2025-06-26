import { Network, Code, Terminal, Github, Server, Database, Globe } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const SkillsSection = () => {
  const { t } = useTranslation();

  return (
    <section id="skills" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <span className="px-4 py-2 bg-green-500/20 text-green-400 rounded-full text-sm font-medium border border-green-500/30">
            {t('skills.section')}
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-6 mb-6">
            <span className="text-black dark:bg-gradient-to-r dark:from-white dark:to-slate-300 dark:bg-clip-text dark:text-transparent">
              {t('skills.title')}
            </span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">

          {/* Networking & Infrastructure */}
          <div className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-2xl border border-slate-700/50">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-xl flex items-center justify-center border border-blue-500/30 mr-4">
                <Network className="h-6 w-6 text-blue-400" />
              </div>
              <h3 className="text-xl font-bold text-black dark:text-white">{t('skills.networking.title')}</h3>
            </div>
            <div className="space-y-4">
              {[
                { skill: t('skills.networking.ccna'), level: 90, icon: Network },
                { skill: t('skills.networking.gns3'), level: 85, icon: Server },
                { skill: t('skills.networking.automation'), level: 80, icon: Terminal },
                { skill: t('skills.networking.linux'), level: 88, icon: Terminal },
              ].map(({ skill, level, icon: Icon }) => (
                <div key={skill} className="group">
                  <div className="flex justify-between items-center mb-2">
                    <div className="flex items-center space-x-2">
                      <Icon className="h-4 w-4 text-blue-400" />
                      <span className="text-sm font-medium text-black dark:text-slate-300">{skill}</span>
                    </div>
                    <span className="text-sm text-slate-700 dark:text-slate-400">{level}%</span>
                  </div>
                  <div className="w-full bg-slate-700 rounded-full h-2">
                    <div
                      className="bg-gradient-to-r from-blue-500 to-cyan-500 h-2 rounded-full transition-all duration-1000 ease-out"
                      style={{ width: `${level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Programming & Development */}
          <div className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-2xl border border-slate-700/50">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-xl flex items-center justify-center border border-purple-500/30 mr-4">
                <Code className="h-6 w-6 text-purple-400" />
              </div>
              <h3 className="text-xl font-bold text-black dark:text-white">{t('skills.programming.title')}</h3>
            </div>
            <div className="space-y-4">
              {[
                { skill: t('skills.programming.python'), level: 92, icon: Code },
                { skill: t('skills.programming.phpmysql'), level: 75, icon: Globe },
                { skill: t('skills.programming.java'), level: 85, icon: Code },
                { skill: t('skills.programming.frontend'), level: 80, icon: Code },
              ].map(({ skill, level, icon: Icon }) => (
                <div key={skill} className="group">
                  <div className="flex justify-between items-center mb-2">
                    <div className="flex items-center space-x-2">
                      <Icon className="h-4 w-4 text-purple-400" />
                      <span className="text-sm font-medium text-black dark:text-slate-300">{skill}</span>
                    </div>
                    <span className="text-sm text-slate-700 dark:text-slate-400">{level}%</span>
                  </div>
                  <div className="w-full bg-slate-700 rounded-full h-2">
                    <div
                      className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full transition-all duration-1000 ease-out"
                      style={{ width: `${level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Tools & Technologies */}
          <div className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-2xl border border-slate-700/50">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-xl flex items-center justify-center border border-green-500/30 mr-4">
                <Terminal className="h-6 w-6 text-green-400" />
              </div>
              <h3 className="text-xl font-bold text-black dark:text-white">{t('skills.tools.title')}</h3>
            </div>
            <div className="space-y-4">
              {[
                { skill: t('skills.tools.git'), level: 85, icon: Github },
                { skill: t('skills.tools.linux'), level: 70, icon: Server },
                { skill: t('skills.tools.db'), level: 75, icon: Database },
                { skill: t('skills.tools.web'), level: 72, icon: Globe },
              ].map(({ skill, level, icon: Icon }) => (
                <div key={skill} className="group">
                  <div className="flex justify-between items-center mb-2">
                    <div className="flex items-center space-x-2">
                      <Icon className="h-4 w-4 text-green-400" />
                      <span className="text-sm font-medium text-black dark:text-slate-300">{skill}</span>
                    </div>
                    <span className="text-sm text-slate-700 dark:text-slate-400">{level}%</span>
                  </div>
                  <div className="w-full bg-slate-700 rounded-full h-2">
                    <div
                      className="bg-gradient-to-r from-green-500 to-emerald-500 h-2 rounded-full transition-all duration-1000 ease-out"
                      style={{ width: `${level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
