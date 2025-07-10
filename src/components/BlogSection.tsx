import React from 'react';
import { BookOpen, Calendar, Clock, ArrowRight, Network, Code, Terminal, Shield } from 'lucide-react';
import { useTranslation } from 'react-i18next';

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  category: 'networking' | 'development' | 'automation' | 'security';
  readTime: string;
  date: string;
  icon: React.ElementType;
  color: string;
  tags: string[];
  featured?: boolean;
}

const BlogSection = () => {
  const { t } = useTranslation();

  const blogPosts: BlogPost[] = [
    {
      id: 'network-automation-python',
      title: 'Building Enterprise Network Automation with Python and Netmiko',
      excerpt: 'Learn how to build scalable network automation solutions using Python, Netmiko, and Jinja2 templates. This comprehensive guide covers device discovery, configuration management, and monitoring.',
      category: 'automation',
      readTime: '8 min read',
      date: '2024-01-15',
      icon: Network,
      color: 'blue',
      tags: ['Python', 'Netmiko', 'Network Automation', 'Jinja2'],
      featured: true
    },
    {
      id: 'ccna-lab-setup',
      title: 'Setting Up a Professional CCNA Lab Environment with GNS3',
      excerpt: 'Complete guide to building a professional CCNA lab environment using GNS3 and EVE-NG. Includes topology design, device configuration, and troubleshooting techniques.',
      category: 'networking',
      readTime: '12 min read',
      date: '2024-01-10',
      icon: Terminal,
      color: 'green',
      tags: ['CCNA', 'GNS3', 'Cisco', 'Lab Setup']
    },
    {
      id: 'react-typescript-best-practices',
      title: 'Modern React Development with TypeScript: Best Practices for 2024',
      excerpt: 'Explore advanced TypeScript patterns in React development, including custom hooks, type safety, and performance optimization techniques for production applications.',
      category: 'development',
      readTime: '10 min read',
      date: '2024-01-08',
      icon: Code,
      color: 'purple',
      tags: ['React', 'TypeScript', 'Frontend', 'Best Practices']
    },
    {
      id: 'network-security-fundamentals',
      title: 'Network Security Fundamentals: From Theory to Implementation',
      excerpt: 'Comprehensive overview of network security principles, including access control, encryption, monitoring, and incident response for enterprise environments.',
      category: 'security',
      readTime: '15 min read',
      date: '2024-01-05',
      icon: Shield,
      color: 'red',
      tags: ['Network Security', 'Access Control', 'Encryption', 'Monitoring']
    }
  ];

  const getCategoryColor = (category: string) => {
    const colors = {
      networking: 'bg-blue-500/20 text-blue-600 border-blue-500/30',
      development: 'bg-purple-500/20 text-purple-600 border-purple-500/30',
      automation: 'bg-green-500/20 text-green-600 border-green-500/30',
      security: 'bg-red-500/20 text-red-600 border-red-500/30'
    };
    return colors[category as keyof typeof colors] || colors.development;
  };

  const getCategoryIcon = (category: string) => {
    const icons = {
      networking: Network,
      development: Code,
      automation: Terminal,
      security: Shield
    };
    return icons[category as keyof typeof icons] || Code;
  };

  return (
    <section id="blog" className="py-20 relative bg-white dark:bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <span className="px-4 py-2 bg-indigo-500/20 text-indigo-500 rounded-full text-sm font-medium border border-indigo-500/30">
            Technical Blog
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-6 mb-6">
            <span className="bg-gradient-to-r from-indigo-600 to-purple-500 bg-clip-text text-transparent dark:from-white dark:to-slate-300">
              Technical Insights & Tutorials
            </span>
          </h2>
          <p className="text-xl text-gray-800 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Sharing knowledge about network engineering, software development, and automation. 
            Real-world solutions and best practices from my experience.
          </p>
        </div>

        {/* Featured Post */}
        <div className="mb-12">
          {blogPosts.filter(post => post.featured).map((post) => (
            <div
              key={post.id}
              className="group bg-white/80 dark:bg-slate-800/50 backdrop-blur-md rounded-2xl overflow-hidden shadow-lg border border-slate-200 dark:border-slate-700/50 transition-all duration-300 hover:scale-[1.02] hover:border-purple-500/50"
            >
              <div className="p-8">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-3">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${getCategoryColor(post.category)}`}>
                      <post.icon className="h-6 w-6" />
                    </div>
                    <div>
                      <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getCategoryColor(post.category)}`}>
                        {post.category.charAt(0).toUpperCase() + post.category.slice(1)}
                      </span>
                      <div className="flex items-center space-x-4 mt-2 text-sm text-gray-600 dark:text-slate-400">
                        <div className="flex items-center space-x-1">
                          <Calendar className="h-4 w-4" />
                          <span>{new Date(post.date).toLocaleDateString('en-US', { 
                            year: 'numeric', 
                            month: 'long', 
                            day: 'numeric' 
                          })}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Clock className="h-4 w-4" />
                          <span>{post.readTime}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="text-2xl font-bold text-gray-300 dark:text-slate-600 group-hover:text-purple-500 transition-colors">
                    FEATURED
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                  {post.title}
                </h3>

                <p className="text-gray-700 dark:text-slate-300 mb-6 leading-relaxed">
                  {post.excerpt}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {post.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 rounded-full text-sm bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-600"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <button className="inline-flex items-center text-purple-600 dark:text-purple-400 font-medium hover:text-purple-700 dark:hover:text-purple-300 transition-colors group">
                  <span>Read Full Article</span>
                  <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Regular Posts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.filter(post => !post.featured).map((post) => (
            <article
              key={post.id}
              className="group bg-white/70 dark:bg-slate-800/50 backdrop-blur-sm rounded-2xl overflow-hidden shadow-md border border-slate-200 dark:border-slate-700/50 transition-all duration-300 hover:scale-105 hover:border-purple-500/50"
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${getCategoryColor(post.category)}`}>
                    <post.icon className="h-5 w-5" />
                  </div>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium border ${getCategoryColor(post.category)}`}>
                    {post.category.charAt(0).toUpperCase() + post.category.slice(1)}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-gray-800 dark:text-white mb-3 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors line-clamp-2">
                  {post.title}
                </h3>

                <p className="text-gray-700 dark:text-slate-300 mb-4 leading-relaxed line-clamp-3">
                  {post.excerpt}
                </p>

                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3 text-sm text-gray-600 dark:text-slate-400">
                    <div className="flex items-center space-x-1">
                      <Calendar className="h-3 w-3" />
                      <span>{new Date(post.date).toLocaleDateString('en-US', { 
                        month: 'short', 
                        day: 'numeric' 
                      })}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="h-3 w-3" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-1 mb-4">
                  {post.tags.slice(0, 2).map((tag, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 rounded-full text-xs bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <button className="inline-flex items-center text-purple-600 dark:text-purple-400 text-sm font-medium hover:text-purple-700 dark:hover:text-purple-300 transition-colors group">
                  <span>Read More</span>
                  <ArrowRight className="h-3 w-3 ml-1 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </article>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <div className="bg-gradient-to-r from-indigo-500/10 to-purple-500/10 dark:from-indigo-500/20 dark:to-purple-500/20 rounded-2xl p-8 border border-indigo-500/20 dark:border-indigo-500/30">
            <BookOpen className="h-12 w-12 text-indigo-500 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
              Want to Learn More?
            </h3>
            <p className="text-gray-700 dark:text-slate-300 mb-6 max-w-2xl mx-auto">
              I regularly share technical insights about network engineering, software development, 
              and automation. Subscribe to stay updated with the latest tutorials and best practices.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg">
                View All Articles
              </button>
              <button className="px-6 py-3 border-2 border-indigo-500/50 text-indigo-600 dark:text-white rounded-xl font-semibold transition-all duration-300 hover:bg-indigo-100/30 dark:hover:bg-indigo-500/10">
                Subscribe to Newsletter
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogSection; 