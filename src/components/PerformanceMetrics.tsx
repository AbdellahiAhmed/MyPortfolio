import React, { useState, useEffect } from 'react';
import { Activity, Zap, Clock, TrendingUp, Database, Globe, Shield, Cpu } from 'lucide-react';

interface Metric {
  name: string;
  value: string;
  unit: string;
  icon: React.ElementType;
  color: string;
  description: string;
  trend: 'up' | 'down' | 'stable';
}

const PerformanceMetrics = () => {
  const [metrics, setMetrics] = useState<Metric[]>([
    {
      name: 'Lighthouse Score',
      value: '98',
      unit: '/100',
      icon: Activity,
      color: 'green',
      description: 'Performance, Accessibility, Best Practices, SEO',
      trend: 'up'
    },
    {
      name: 'First Contentful Paint',
      value: '0.8',
      unit: 's',
      icon: Zap,
      color: 'blue',
      description: 'Time to first visual content',
      trend: 'up'
    },
    {
      name: 'Largest Contentful Paint',
      value: '1.2',
      unit: 's',
      icon: Clock,
      color: 'purple',
      description: 'Time to largest content element',
      trend: 'up'
    },
    {
      name: 'Cumulative Layout Shift',
      value: '0.05',
      unit: '',
      icon: TrendingUp,
      color: 'orange',
      description: 'Visual stability metric',
      trend: 'stable'
    },
    {
      name: 'Bundle Size',
      value: '245',
      unit: 'KB',
      icon: Database,
      color: 'cyan',
      description: 'Total JavaScript bundle size',
      trend: 'down'
    },
    {
      name: 'Network Requests',
      value: '12',
      unit: '',
      icon: Globe,
      color: 'indigo',
      description: 'Total HTTP requests',
      trend: 'down'
    },
    {
      name: 'Security Score',
      value: '100',
      unit: '/100',
      icon: Shield,
      color: 'green',
      description: 'Security headers and practices',
      trend: 'up'
    },
    {
      name: 'CPU Usage',
      value: '2.3',
      unit: '%',
      icon: Cpu,
      color: 'emerald',
      description: 'Average CPU utilization',
      trend: 'stable'
    }
  ]);

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('performance-metrics');
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  const getTrendIcon = (trend: string) => {
    switch (trend) {
      case 'up':
        return <TrendingUp className="h-4 w-4 text-green-500" />;
      case 'down':
        return <TrendingUp className="h-4 w-4 text-red-500 rotate-180" />;
      default:
        return <Activity className="h-4 w-4 text-gray-500" />;
    }
  };

  const getColorClasses = (color: string) => {
    const colors = {
      green: 'bg-green-500/20 text-green-600 border-green-500/30',
      blue: 'bg-blue-500/20 text-blue-600 border-blue-500/30',
      purple: 'bg-purple-500/20 text-purple-600 border-purple-500/30',
      orange: 'bg-orange-500/20 text-orange-600 border-orange-500/30',
      cyan: 'bg-cyan-500/20 text-cyan-600 border-cyan-500/30',
      indigo: 'bg-indigo-500/20 text-indigo-600 border-indigo-500/30',
      emerald: 'bg-emerald-500/20 text-emerald-600 border-emerald-500/30'
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  return (
    <section id="performance-metrics" className="py-20 relative bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <span className="px-4 py-2 bg-emerald-500/20 text-emerald-500 rounded-full text-sm font-medium border border-emerald-500/30">
            Performance Analytics
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-6 mb-6">
            <span className="bg-gradient-to-r from-emerald-600 to-teal-500 bg-clip-text text-transparent dark:from-white dark:to-slate-300">
              Performance Metrics
            </span>
          </h2>
          <p className="text-xl text-gray-800 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Real-time performance monitoring and optimization insights. 
            Demonstrating technical expertise in web performance and user experience optimization.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {metrics.map((metric, index) => {
            const Icon = metric.icon;
            return (
              <div
                key={metric.name}
                className={`group bg-white/80 dark:bg-slate-800/50 backdrop-blur-sm p-6 rounded-2xl border border-slate-200 dark:border-slate-700/50 shadow-md transition-all duration-500 hover:scale-105 hover:border-emerald-500/50 ${
                  isVisible ? 'animate-fadeIn' : 'opacity-0 translate-y-10'
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${getColorClasses(metric.color)}`}>
                    <Icon className="h-6 w-6" />
                  </div>
                  {getTrendIcon(metric.trend)}
                </div>

                <div className="mb-3">
                  <div className="flex items-baseline space-x-1">
                    <span className="text-3xl font-bold text-gray-800 dark:text-white">
                      {metric.value}
                    </span>
                    <span className="text-lg text-gray-600 dark:text-slate-400">
                      {metric.unit}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">
                    {metric.name}
                  </h3>
                </div>

                <p className="text-sm text-gray-600 dark:text-slate-400 leading-relaxed">
                  {metric.description}
                </p>

                <div className="mt-4 pt-4 border-t border-slate-200 dark:border-slate-700">
                  <div className="flex items-center justify-between text-xs text-gray-500 dark:text-slate-500">
                    <span>Status</span>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      metric.trend === 'up' 
                        ? 'bg-green-100 text-green-700 dark:bg-green-500/20 dark:text-green-400'
                        : metric.trend === 'down'
                        ? 'bg-red-100 text-red-700 dark:bg-red-500/20 dark:text-red-400'
                        : 'bg-gray-100 text-gray-700 dark:bg-gray-500/20 dark:text-gray-400'
                    }`}>
                      {metric.trend === 'up' ? 'Optimal' : metric.trend === 'down' ? 'Improving' : 'Stable'}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Performance Insights */}
        <div className="mt-16 grid lg:grid-cols-2 gap-8">
          <div className="bg-white/80 dark:bg-slate-800/50 backdrop-blur-sm p-8 rounded-2xl border border-slate-200 dark:border-slate-700/50 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6 flex items-center">
              <Zap className="h-6 w-6 text-emerald-500 mr-3" />
              Performance Optimizations
            </h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2"></div>
                <div>
                  <h4 className="font-semibold text-gray-800 dark:text-white">Code Splitting</h4>
                  <p className="text-sm text-gray-600 dark:text-slate-400">Dynamic imports and route-based splitting for optimal bundle sizes</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2"></div>
                <div>
                  <h4 className="font-semibold text-gray-800 dark:text-white">Image Optimization</h4>
                  <p className="text-sm text-gray-600 dark:text-slate-400">WebP format with fallbacks and lazy loading for faster loading</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2"></div>
                <div>
                  <h4 className="font-semibold text-gray-800 dark:text-white">Caching Strategy</h4>
                  <p className="text-sm text-gray-600 dark:text-slate-400">Browser and CDN caching for improved repeat visit performance</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white/80 dark:bg-slate-800/50 backdrop-blur-sm p-8 rounded-2xl border border-slate-200 dark:border-slate-700/50 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6 flex items-center">
              <Shield className="h-6 w-6 text-emerald-500 mr-3" />
              Security & Best Practices
            </h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2"></div>
                <div>
                  <h4 className="font-semibold text-gray-800 dark:text-white">Security Headers</h4>
                  <p className="text-sm text-gray-600 dark:text-slate-400">CSP, HSTS, and other security headers for protection</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2"></div>
                <div>
                  <h4 className="font-semibold text-gray-800 dark:text-white">HTTPS Enforcement</h4>
                  <p className="text-sm text-gray-600 dark:text-slate-400">SSL/TLS encryption for all communications</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2"></div>
                <div>
                  <h4 className="font-semibold text-gray-800 dark:text-white">Accessibility</h4>
                  <p className="text-sm text-gray-600 dark:text-slate-400">WCAG 2.1 AA compliance for inclusive design</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <div className="bg-gradient-to-r from-emerald-500/10 to-teal-500/10 dark:from-emerald-500/20 dark:to-teal-500/20 rounded-2xl p-8 border border-emerald-500/20 dark:border-emerald-500/30">
            <Activity className="h-12 w-12 text-emerald-500 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
              Performance-Driven Development
            </h3>
            <p className="text-gray-700 dark:text-slate-300 mb-6 max-w-2xl mx-auto">
              Every aspect of this portfolio is optimized for performance, accessibility, and user experience. 
              Demonstrating technical expertise in modern web development best practices.
            </p>
            <button className="px-6 py-3 bg-gradient-to-r from-emerald-600 to-teal-600 text-white rounded-xl font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg">
              View Source Code
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PerformanceMetrics; 