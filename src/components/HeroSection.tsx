import { ArrowDown, Github, Linkedin, Mail, Terminal, Activity, Cpu } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { useEffect, useState, useRef } from 'react';

// Network Node Component
const NetworkNode = ({ x, y, size, delay, label }: { x: number; y: number; size: number; delay: number; label?: string }) => {
  return (
    <g className="network-node">
      <circle
        cx={x}
        cy={y}
        r={size}
        className="fill-cyan-500/20 stroke-cyan-400 stroke-2"
        style={{ animationDelay: `${delay}ms` }}
      />
      <circle
        cx={x}
        cy={y}
        r={size * 0.5}
        className="fill-cyan-400 animate-pulse"
        style={{ animationDelay: `${delay + 100}ms` }}
      />
      {label && (
        <text
          x={x}
          y={y + size + 20}
          className="fill-cyan-400 text-xs font-mono"
          textAnchor="middle"
        >
          {label}
        </text>
      )}
    </g>
  );
};

// Animated Data Packet
const DataPacket = ({ pathId, delay }: { pathId: string; delay: number }) => {
  return (
    <circle r="3" className="fill-lime-400 drop-shadow-[0_0_8px_rgba(57,255,20,0.8)]">
      <animateMotion
        dur="4s"
        repeatCount="indefinite"
        begin={`${delay}s`}
      >
        <mpath href={`#${pathId}`} />
      </animateMotion>
    </circle>
  );
};

const HeroSection = () => {
  const { t } = useTranslation();
  const [typedText, setTypedText] = useState('');
  const [showCursor, setShowCursor] = useState(true);
  const fullText = "$ NETWORK_ARCHITECT && FULLSTACK_DEV";
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Terminal typing effect
  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      setTypedText(fullText.slice(0, index + 1));
      index++;
      if (index > fullText.length) clearInterval(timer);
    }, 80);

    const cursorBlink = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 530);

    return () => {
      clearInterval(timer);
      clearInterval(cursorBlink);
    };
  }, []);

  // Matrix-style background canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const chars = '01';
    const fontSize = 14;
    const columns = canvas.width / fontSize;
    const drops: number[] = [];

    for (let i = 0; i < columns; i++) {
      drops[i] = Math.random() * -100;
    }

    const draw = () => {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = '#00FFD9';
      ctx.font = `${fontSize}px monospace`;

      for (let i = 0; i < drops.length; i++) {
        const text = chars[Math.floor(Math.random() * chars.length)];
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }
    };

    const interval = setInterval(draw, 50);

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    return () => {
      clearInterval(interval);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16 bg-black">
      {/* Matrix Background */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 opacity-10 pointer-events-none"
      />

      {/* Scan Lines */}
      <div className="absolute inset-0 pointer-events-none bg-scan-lines opacity-5" />

      {/* Grid Overlay */}
      <div className="absolute inset-0 pointer-events-none opacity-10">
        <div className="h-full w-full" style={{
          backgroundImage: `
            linear-gradient(to right, rgba(0,255,217,0.1) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(0,255,217,0.1) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px'
        }} />
      </div>

      {/* Glowing Orbs */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-lime-500/20 rounded-full blur-3xl animate-pulse-slow delay-1000" />

      {/* Network Topology SVG */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-30" viewBox="0 0 1200 800">
        <defs>
          <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#00FFD9" stopOpacity="0" />
            <stop offset="50%" stopColor="#00FFD9" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#00FFD9" stopOpacity="0" />
          </linearGradient>
        </defs>

        {/* Network Connections */}
        <path id="path1" d="M 200,400 Q 400,200 600,400" stroke="url(#lineGradient)" strokeWidth="2" fill="none" className="animate-pulse" />
        <path id="path2" d="M 600,400 Q 800,600 1000,400" stroke="url(#lineGradient)" strokeWidth="2" fill="none" className="animate-pulse delay-300" />
        <path id="path3" d="M 200,400 L 600,400" stroke="url(#lineGradient)" strokeWidth="2" fill="none" className="animate-pulse delay-500" />
        <path id="path4" d="M 600,400 L 1000,400" stroke="url(#lineGradient)" strokeWidth="2" fill="none" className="animate-pulse delay-700" />

        {/* Nodes */}
        <NetworkNode x={200} y={400} size={12} delay={0} label="CLIENT" />
        <NetworkNode x={600} y={400} size={16} delay={200} label="SERVER" />
        <NetworkNode x={1000} y={400} size={12} delay={400} label="DATABASE" />

        {/* Animated Packets */}
        <DataPacket pathId="path1" delay={0} />
        <DataPacket pathId="path2" delay={0.5} />
        <DataPacket pathId="path3" delay={1} />
        <DataPacket pathId="path4" delay={1.5} />
      </svg>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="flex flex-col items-center text-center space-y-12">

          {/* Status Badge */}
          <div className="inline-flex items-center space-x-3 px-5 py-2.5 bg-black/60 border-2 border-lime-400/50 rounded-lg backdrop-blur-sm animate-bounce-in font-mono group hover:border-lime-400 transition-colors">
            <div className="relative">
              <div className="w-3 h-3 bg-lime-400 rounded-full animate-pulse" />
              <div className="absolute inset-0 w-3 h-3 bg-lime-400 rounded-full animate-ping" />
            </div>
            <span className="text-sm font-bold text-lime-400 tracking-wider uppercase">SYSTEM_ONLINE // AVAILABLE_FOR_HIRE</span>
          </div>

          {/* Main Heading */}
          <div className="space-y-6 animate-slideInLeft">
            <div className="text-cyan-400 font-mono text-sm md:text-base tracking-wider">
              <span className="text-lime-400">&gt;</span> {t('hero.greeting')}
            </div>

            <h1 className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter">
              <span className="block text-white drop-shadow-[0_0_30px_rgba(255,255,255,0.3)] mb-2" style={{ fontFamily: "'JetBrains Mono', 'Courier New', monospace" }}>
                {t('hero.name')}
              </span>
              <span className="block bg-gradient-to-r from-cyan-400 via-lime-400 to-amber-400 bg-clip-text text-transparent animate-gradient-shift drop-shadow-[0_0_50px_rgba(0,255,217,0.5)]">
                ABDELLAHI
              </span>
            </h1>

            {/* Terminal Output */}
            <div className="inline-block bg-black/80 border-2 border-cyan-500/50 rounded-lg p-6 shadow-[0_0_30px_rgba(0,255,217,0.3)] backdrop-blur-sm font-mono text-left">
              <div className="flex items-center space-x-2 mb-4 pb-3 border-b border-cyan-500/30">
                <Terminal className="h-4 w-4 text-lime-400" />
                <span className="text-xs text-cyan-400 tracking-wider">TERMINAL v2.1.0</span>
                <div className="flex-1" />
                <div className="flex space-x-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500" />
                  <div className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                  <div className="w-2.5 h-2.5 rounded-full bg-lime-400" />
                </div>
              </div>
              <div className="space-y-2">
                <div className="text-cyan-400 text-base md:text-xl">
                  {typedText}
                  <span className={`inline-block w-2 h-5 ml-1 bg-lime-400 ${showCursor ? 'opacity-100' : 'opacity-0'}`} />
                </div>
                <div className="text-lime-400/60 text-xs md:text-sm">
                  <span className="text-amber-400">→</span> {t('hero.description')}
                </div>
              </div>
            </div>
          </div>

          {/* Stats Display */}
          <div className="grid grid-cols-3 gap-4 md:gap-8 w-full max-w-3xl animate-slideInRight">
            <div className="bg-black/60 border border-cyan-500/30 rounded-lg p-4 backdrop-blur-sm hover:border-cyan-400 transition-all group">
              <div className="flex items-center justify-center mb-2">
                <Activity className="h-6 w-6 text-cyan-400 group-hover:scale-110 transition-transform" />
              </div>
              <div className="text-2xl md:text-3xl font-bold text-white font-mono">5+</div>
              <div className="text-xs text-cyan-400/70 uppercase tracking-wider">Years</div>
            </div>
            <div className="bg-black/60 border border-lime-500/30 rounded-lg p-4 backdrop-blur-sm hover:border-lime-400 transition-all group">
              <div className="flex items-center justify-center mb-2">
                <Cpu className="h-6 w-6 text-lime-400 group-hover:scale-110 transition-transform" />
              </div>
              <div className="text-2xl md:text-3xl font-bold text-white font-mono">20+</div>
              <div className="text-xs text-lime-400/70 uppercase tracking-wider">Projects</div>
            </div>
            <div className="bg-black/60 border border-amber-500/30 rounded-lg p-4 backdrop-blur-sm hover:border-amber-400 transition-all group">
              <div className="flex items-center justify-center mb-2">
                <Terminal className="h-6 w-6 text-amber-400 group-hover:scale-110 transition-transform" />
              </div>
              <div className="text-2xl md:text-3xl font-bold text-white font-mono">99%</div>
              <div className="text-xs text-amber-400/70 uppercase tracking-wider">Uptime</div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-4 animate-slide-up-fade delay-300">
            <a
              href="#projects"
              className="group relative px-8 py-4 bg-cyan-500 text-black rounded-lg font-bold font-mono uppercase tracking-wider shadow-[0_0_30px_rgba(0,255,217,0.5)] hover:shadow-[0_0_50px_rgba(0,255,217,0.8)] transition-all duration-300 hover:-translate-y-1 overflow-hidden border-2 border-cyan-400"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer" />
              <span className="relative flex items-center space-x-2">
                <span>{t('hero.cta')}</span>
                <ArrowDown className="h-5 w-5 group-hover:translate-y-1 transition-transform" />
              </span>
            </a>

            <div className="flex items-center space-x-4">
              <a
                href="https://github.com/AbdellahiAhmed"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 bg-black/60 backdrop-blur-sm rounded-lg border-2 border-white/20 hover:border-cyan-400 hover:text-cyan-400 text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(0,255,217,0.4)]"
              >
                <Github className="h-6 w-6" />
              </a>
              <a
                href="https://www.linkedin.com/in/abdellahiahmedahmedbaba/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 bg-black/60 backdrop-blur-sm rounded-lg border-2 border-white/20 hover:border-lime-400 hover:text-lime-400 text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(57,255,20,0.4)]"
              >
                <Linkedin className="h-6 w-6" />
              </a>
              <a
                href="mailto:AbdellahiAhmedAhmedBaba@gmail.com"
                className="p-4 bg-black/60 backdrop-blur-sm rounded-lg border-2 border-white/20 hover:border-amber-400 hover:text-amber-400 text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(255,176,0,0.4)]"
              >
                <Mail className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce hidden md:flex flex-col items-center">
          <span className="text-xs mb-2 tracking-widest uppercase text-cyan-400 font-mono">SCROLL_DOWN</span>
          <ArrowDown className="h-5 w-5 text-cyan-400" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
