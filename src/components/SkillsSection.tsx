import { Award, Check, Activity, Network, Server, Shield, Workflow, Zap, Database, Code2 } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { useState, useEffect } from 'react';

const SkillsSection = () => {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState(0);

  const pillars = [
    {
      key: 'network',
      title: t('skills.pillars.network.title'),
      subtitle: t('skills.pillars.network.subtitle'),
      icon: Network,
      color: 'cyan',
      metrics: t('skills.pillars.network.metrics', { returnObjects: true }) as string[],
      bullets: t('skills.pillars.network.points', { returnObjects: true }) as string[],
      level: 95
    },
    {
      key: 'automation',
      title: t('skills.pillars.automation.title'),
      subtitle: t('skills.pillars.automation.subtitle'),
      icon: Server,
      color: 'lime',
      metrics: t('skills.pillars.automation.metrics', { returnObjects: true }) as string[],
      bullets: t('skills.pillars.automation.points', { returnObjects: true }) as string[],
      level: 92
    },
    {
      key: 'frontend',
      title: t('skills.pillars.frontend.title'),
      subtitle: t('skills.pillars.frontend.subtitle'),
      icon: Code2,
      color: 'amber',
      metrics: t('skills.pillars.frontend.metrics', { returnObjects: true }) as string[],
      bullets: t('skills.pillars.frontend.points', { returnObjects: true }) as string[],
      level: 88
    },
  ];

  const stackGroups = [
    {
      title: t('skills.stacks.automation.title'),
      subtitle: t('skills.stacks.automation.subtitle'),
      tags: t('skills.stacks.automation.tags', { returnObjects: true }) as string[],
      icon: Zap,
      color: 'cyan'
    },
    {
      title: t('skills.stacks.cloud.title'),
      subtitle: t('skills.stacks.cloud.subtitle'),
      tags: t('skills.stacks.cloud.tags', { returnObjects: true }) as string[],
      icon: Server,
      color: 'lime'
    },
    {
      title: t('skills.stacks.observability.title'),
      subtitle: t('skills.stacks.observability.subtitle'),
      tags: t('skills.stacks.observability.tags', { returnObjects: true }) as string[],
      icon: Activity,
      color: 'amber'
    },
    {
      title: t('skills.stacks.frontend.title'),
      subtitle: t('skills.stacks.frontend.subtitle'),
      tags: t('skills.stacks.frontend.tags', { returnObjects: true }) as string[],
      icon: Database,
      color: 'cyan'
    },
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      cyan: {
        border: 'border-cyan-500/30 hover:border-cyan-400',
        text: 'text-cyan-400',
        bg: 'bg-cyan-500/10',
        shadow: 'shadow-[0_0_20px_rgba(0,255,217,0.3)]',
        glow: 'shadow-[0_0_30px_rgba(0,255,217,0.5)]'
      },
      lime: {
        border: 'border-lime-500/30 hover:border-lime-400',
        text: 'text-lime-400',
        bg: 'bg-lime-500/10',
        shadow: 'shadow-[0_0_20px_rgba(57,255,20,0.3)]',
        glow: 'shadow-[0_0_30px_rgba(57,255,20,0.5)]'
      },
      amber: {
        border: 'border-amber-500/30 hover:border-amber-400',
        text: 'text-amber-400',
        bg: 'bg-amber-500/10',
        shadow: 'shadow-[0_0_20px_rgba(255,176,0,0.3)]',
        glow: 'shadow-[0_0_30px_rgba(255,176,0,0.5)]'
      }
    };
    return colors[color as keyof typeof colors];
  };

  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-black">
      {/* Grid Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="h-full w-full" style={{
          backgroundImage: `
            linear-gradient(to right, rgba(0,255,217,0.1) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(0,255,217,0.1) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px'
        }} />
      </div>

      {/* Glowing Orbs */}
      <div className="absolute top-20 right-20 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-lime-500/20 rounded-full blur-3xl animate-pulse-slow delay-1000" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="mb-16 animate-slide-up-fade">
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-black/60 border-2 border-cyan-500/50 rounded-lg mb-6 font-mono backdrop-blur-sm">
            <Shield className="h-4 w-4 text-cyan-400" />
            <span className="text-sm font-bold text-cyan-400 tracking-wider uppercase">{t('skills.section')}</span>
          </div>
          <h2 className="text-5xl md:text-7xl font-black mb-6 tracking-tighter">
            <span className="bg-gradient-to-r from-cyan-400 via-lime-400 to-amber-400 bg-clip-text text-transparent drop-shadow-[0_0_50px_rgba(0,255,217,0.5)]" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
              {t('skills.title')}
            </span>
          </h2>
          <p className="text-xl text-white/60 max-w-3xl font-mono">
            <span className="text-lime-400">&gt;</span> {t('skills.subtitle')}
          </p>
        </div>

        {/* Core Competencies */}
        <div className="grid lg:grid-cols-3 gap-6 mb-20">
          {pillars.map((pillar, index) => {
            const colors = getColorClasses(pillar.color);
            return (
              <div
                key={pillar.key}
                className={`relative bg-black/60 border-2 ${colors.border} rounded-lg p-6 backdrop-blur-sm transition-all duration-300 hover:${colors.glow} animate-slide-up-fade group`}
                style={{ animationDelay: `${index * 120}ms` }}
              >
                {/* Scan Line Effect */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" style={{ animation: 'scan 2s linear infinite' }} />

                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-2">
                      <pillar.icon className={`h-6 w-6 ${colors.text}`} />
                      <span className={`text-xs uppercase tracking-wider ${colors.text} font-mono font-bold`}>
                        CORE_SKILL
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2 font-mono">
                      {pillar.title}
                    </h3>
                    <p className="text-sm text-white/60 leading-relaxed">
                      {pillar.subtitle}
                    </p>
                  </div>
                </div>

                {/* Progress Bar */}
                <div className="mb-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-xs text-white/40 font-mono uppercase">Proficiency</span>
                    <span className={`text-sm font-bold ${colors.text} font-mono`}>{pillar.level}%</span>
                  </div>
                  <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                    <div
                      className={`h-full ${colors.bg} ${colors.shadow} transition-all duration-1000 ease-out`}
                      style={{ width: `${pillar.level}%` }}
                    />
                  </div>
                </div>

                {/* Metrics */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {pillar.metrics.map((metric, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 bg-white/5 border border-white/10 rounded text-xs font-mono text-white/70"
                    >
                      {metric}
                    </span>
                  ))}
                </div>

                {/* Bullets */}
                <div className="space-y-2">
                  {pillar.bullets.slice(0, 3).map((bullet, i) => (
                    <div key={i} className="flex items-start space-x-2">
                      <span className={`${colors.text} mt-1 flex-shrink-0`}>▸</span>
                      <p className="text-sm text-white/70 font-mono leading-tight">{bullet}</p>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Tech Stack */}
        <div className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h3 className="text-3xl font-bold text-white mb-2 font-mono">
                <span className="text-cyan-400">//</span> TECH_STACK
              </h3>
              <p className="text-white/60 font-mono text-sm">
                <span className="text-lime-400">&gt;</span> {t('skills.stacks.subtitle')}
              </p>
            </div>
            <div className="hidden md:flex items-center space-x-2 px-4 py-2 bg-black/60 border border-lime-500/30 rounded-lg font-mono">
              <Workflow className="h-4 w-4 text-lime-400" />
              <span className="text-xs text-lime-400 tracking-wider uppercase">PRODUCTION_READY</span>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {stackGroups.map((group, index) => {
              const colors = getColorClasses(group.color);
              return (
                <div
                  key={group.title}
                  className={`bg-black/60 border ${colors.border} rounded-lg p-5 backdrop-blur-sm transition-all duration-300 hover:${colors.glow} animate-slide-up-fade`}
                  style={{ animationDelay: `${200 + index * 80}ms` }}
                >
                  <div className="flex items-center justify-between mb-4">
                    <group.icon className={`h-5 w-5 ${colors.text}`} />
                    <div className={`w-2 h-2 rounded-full ${colors.bg} ${colors.shadow} animate-pulse`} />
                  </div>
                  <h4 className="text-lg font-bold text-white mb-1 font-mono">{group.title}</h4>
                  <p className="text-xs text-white/50 mb-4 font-mono">{group.subtitle}</p>
                  <div className="flex flex-wrap gap-2">
                    {group.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="px-2 py-1 bg-white/5 border border-white/10 rounded text-xs font-mono text-white/70 hover:border-white/30 hover:text-white transition-colors"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Badge */}
        <div className="text-center animate-slide-up-fade delay-500">
          <div className="inline-flex items-center space-x-3 px-6 py-3 bg-black/60 border-2 border-amber-500/50 rounded-lg backdrop-blur-sm font-mono shadow-[0_0_30px_rgba(255,176,0,0.3)]">
            <Award className="h-5 w-5 text-amber-400" />
            <span className="font-bold text-amber-400 tracking-wider uppercase">
              {t('skills.badge')}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
