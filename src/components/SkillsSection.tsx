import { Award, Check, Activity, Network, Server, Shield, Workflow } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const SkillsSection = () => {
  const { t } = useTranslation();

  const pillars = [
    {
      key: 'network',
      title: t('skills.pillars.network.title'),
      subtitle: t('skills.pillars.network.subtitle'),
      icon: Network,
      accent: "from-blue-600/20 via-indigo-500/10 to-amber-500/10",
      metrics: t('skills.pillars.network.metrics', { returnObjects: true }) as string[],
      bullets: t('skills.pillars.network.points', { returnObjects: true }) as string[],
    },
    {
      key: 'automation',
      title: t('skills.pillars.automation.title'),
      subtitle: t('skills.pillars.automation.subtitle'),
      icon: Server,
      accent: "from-emerald-500/20 via-teal-500/10 to-blue-500/10",
      metrics: t('skills.pillars.automation.metrics', { returnObjects: true }) as string[],
      bullets: t('skills.pillars.automation.points', { returnObjects: true }) as string[],
    },
    {
      key: 'frontend',
      title: t('skills.pillars.frontend.title'),
      subtitle: t('skills.pillars.frontend.subtitle'),
      icon: Shield,
      accent: "from-indigo-500/20 via-blue-500/10 to-slate-500/10",
      metrics: t('skills.pillars.frontend.metrics', { returnObjects: true }) as string[],
      bullets: t('skills.pillars.frontend.points', { returnObjects: true }) as string[],
    },
  ];

  const stackGroups = [
    {
      title: t('skills.stacks.automation.title'),
      subtitle: t('skills.stacks.automation.subtitle'),
      tags: t('skills.stacks.automation.tags', { returnObjects: true }) as string[],
    },
    {
      title: t('skills.stacks.cloud.title'),
      subtitle: t('skills.stacks.cloud.subtitle'),
      tags: t('skills.stacks.cloud.tags', { returnObjects: true }) as string[],
    },
    {
      title: t('skills.stacks.observability.title'),
      subtitle: t('skills.stacks.observability.subtitle'),
      tags: t('skills.stacks.observability.tags', { returnObjects: true }) as string[],
    },
    {
      title: t('skills.stacks.frontend.title'),
      subtitle: t('skills.stacks.frontend.subtitle'),
      tags: t('skills.stacks.frontend.tags', { returnObjects: true }) as string[],
    },
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
            {t('skills.subtitle')}
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {pillars.map((pillar, index) => (
            <div
              key={pillar.key}
              className="relative overflow-hidden rounded-2xl border border-slate-200/60 dark:border-slate-800/60 bg-white/70 dark:bg-slate-900/70 shadow-lg hover:shadow-2xl transition-all duration-300 animate-slide-up-fade"
              style={{ animationDelay: `${index * 120}ms` }}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${pillar.accent} opacity-60`}></div>
              <div className="absolute -right-12 -top-12 w-40 h-40 rounded-full bg-white/10 dark:bg-white/5 blur-3xl"></div>
              <div className="relative p-7 space-y-5">
                <div className="flex items-start justify-between gap-4">
                  <div className="space-y-2">
                    <p className="text-xs uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400">Pillar</p>
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white leading-tight">
                      {pillar.title}
                    </h3>
                    <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                      {pillar.subtitle}
                    </p>
                  </div>
                  <div className="p-3 rounded-xl bg-white/80 dark:bg-slate-800/80 border border-white/40 dark:border-slate-700/60 shadow-sm">
                    <pillar.icon className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  {pillar.metrics.map((metric, i) => (
                    <span
                      key={i}
                      className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full bg-slate-900/5 dark:bg-white/5 text-xs font-semibold text-slate-700 dark:text-slate-200 border border-slate-200/60 dark:border-slate-700/60 backdrop-blur-sm"
                    >
                      <Activity className="h-3.5 w-3.5 text-amber-500" />
                      <span>{metric}</span>
                    </span>
                  ))}
                </div>

                <div className="space-y-3">
                  {pillar.bullets.map((bullet, i) => (
                    <div key={i} className="flex items-start space-x-3">
                      <div className="mt-0.5">
                        <Check className="h-4 w-4 text-emerald-500" />
                      </div>
                      <p className="text-sm text-slate-700 dark:text-slate-200 leading-snug">{bullet}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 space-y-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <p className="text-xs uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400">{t('skills.section')}</p>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white">{t('skills.stacks.title')}</h3>
            </div>
            <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-blue-600/10 border border-blue-500/20 text-blue-700 dark:text-blue-300 text-sm font-semibold">
              <Workflow className="h-4 w-4" />
              <span>{t('skills.stacks.subtitle')}</span>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {stackGroups.map((group, index) => (
              <div
                key={group.title}
                className="rounded-xl border border-slate-200 dark:border-slate-800 bg-white/60 dark:bg-slate-900/60 p-5 shadow-sm hover:shadow-lg transition-all duration-300 animate-slide-up-fade"
                style={{ animationDelay: `${200 + index * 80}ms` }}
              >
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h4 className="text-lg font-semibold text-slate-900 dark:text-white">{group.title}</h4>
                    <p className="text-sm text-slate-600 dark:text-slate-400">{group.subtitle}</p>
                  </div>
                  <div className="p-2 rounded-lg bg-slate-900/5 dark:bg-white/5 border border-slate-200/50 dark:border-slate-800/60">
                    <Activity className="h-4 w-4 text-amber-500" />
                  </div>
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                  {group.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-sm font-medium text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-700"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 text-center animate-slide-up-fade delay-500">
          <div className="inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-amber-500/10 to-orange-500/10 border border-amber-500/20 rounded-full">
            <Award className="h-5 w-5 text-amber-500" />
            <span className="font-medium text-slate-700 dark:text-slate-300">
              {t('skills.badge')}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
