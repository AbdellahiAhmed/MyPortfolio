import React, { useState } from 'react';
import { BookOpen, Calendar, Clock, ArrowRight, Network, Code, Terminal, Shield, X, ExternalLink, Mail } from 'lucide-react';
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
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);
  const [showModal, setShowModal] = useState(false);

  const blogPosts: BlogPost[] = [
    {
      id: 'network-automation-python',
      title: 'Building Enterprise Network Automation with Python and Netmiko',
      excerpt: 'Learn how to build scalable network automation solutions using Python, Netmiko, and Jinja2 templates. This comprehensive guide covers device discovery, configuration management, and monitoring.',
      category: 'automation',
      readTime: '8 min read',
      date: '2025-07-15',
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
      date: '2025-07-01',
      icon: Terminal,
      color: 'green',
      tags: ['CCNA', 'GNS3', 'Cisco', 'Lab Setup']
    },
    {
      id: 'react-typescript-best-practices',
      title: 'Modern React Development with TypeScript: Best Practices for 2025',
      excerpt: 'Explore advanced TypeScript patterns in React development, including custom hooks, type safety, and performance optimization techniques for production applications.',
      category: 'development',
      readTime: '10 min read',
      date: '2025-07-05',
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
      date: '2025-07-06',
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

  const handleReadArticle = (post: BlogPost) => {
    setSelectedPost(post);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedPost(null);
  };

  const getBlogContent = (postId: string) => {
    const content = {
      'network-automation-python': {
        title: 'Building Enterprise Network Automation with Python and Netmiko',
        content: `
          <h2>Introduction</h2>
          <p>Network automation has become essential in modern enterprise environments. This comprehensive guide will walk you through building scalable network automation solutions using Python, Netmiko, and Jinja2 templates.</p>
          
          <h3>Prerequisites</h3>
          <ul>
            <li>Python 3.9+</li>
            <li>Basic understanding of networking concepts</li>
            <li>Access to network devices (physical or virtual)</li>
          </ul>
          
          <h3>Setting Up Your Environment</h3>
          <pre><code>pip install netmiko jinja2 pyyaml</code></pre>
          
          <h3>Device Discovery</h3>
          <p>Automated device discovery is the foundation of any network automation solution. We'll use SNMP and SSH to identify and catalog network devices.</p>
          
          <h3>Configuration Management</h3>
          <p>Using Jinja2 templates, we can generate consistent configurations across multiple devices while maintaining flexibility for device-specific requirements.</p>
          
          <h3>Monitoring and Alerting</h3>
          <p>Real-time monitoring with automated alerting ensures network health and quick response to issues.</p>
          
          <h3>Best Practices</h3>
          <ul>
            <li>Always backup configurations before making changes</li>
            <li>Use version control for your automation scripts</li>
            <li>Implement proper error handling and logging</li>
            <li>Test in a lab environment before production deployment</li>
          </ul>
        `
      },
      'ccna-lab-setup': {
        title: 'Setting Up a Professional CCNA Lab Environment with GNS3',
        content: `
          <h2>Introduction</h2>
          <p>A professional CCNA lab environment is crucial for hands-on learning and certification preparation. This guide covers setting up GNS3 and EVE-NG for comprehensive network simulation.</p>
          
          <h3>GNS3 Installation</h3>
          <p>Download and install GNS3 from the official website. Ensure you have sufficient system resources for running multiple virtual devices.</p>
          
          <h3>Device Images</h3>
          <p>Obtain Cisco IOS images for routers and switches. These are essential for realistic network simulation.</p>
          
          <h3>Topology Design</h3>
          <p>Design your lab topology to cover all CCNA exam objectives including routing, switching, and network services.</p>
          
          <h3>Configuration Examples</h3>
          <p>Practice with real-world configuration scenarios that you'll encounter in production environments.</p>
        `
      },
      'react-typescript-best-practices': {
        title: 'Modern React Development with TypeScript: Best Practices for 2025',
        content: `
          <h2>Introduction</h2>
          <p>TypeScript has become the standard for modern React development. This guide covers best practices for building scalable, maintainable React applications.</p>
          
          <h3>Type Safety</h3>
          <p>Leverage TypeScript's type system to catch errors at compile time and improve code quality.</p>
          
          <h3>Custom Hooks</h3>
          <p>Create reusable custom hooks with proper TypeScript typing for better code organization.</p>
          
          <h3>Performance Optimization</h3>
          <p>Use React.memo, useMemo, and useCallback to optimize component rendering and prevent unnecessary re-renders.</p>
          
          <h3>State Management</h3>
          <p>Choose the right state management solution for your application size and complexity.</p>
        `
      },
      'network-security-fundamentals': {
        title: 'Network Security Fundamentals: From Theory to Implementation',
        content: `
          <h2>Introduction</h2>
          <p>Network security is critical in today's interconnected world. This comprehensive guide covers fundamental security principles and their practical implementation.</p>
          
          <h3>Access Control</h3>
          <p>Implement proper access control mechanisms including authentication, authorization, and accounting (AAA).</p>
          
          <h3>Encryption</h3>
          <p>Understand encryption protocols and implement them to protect data in transit and at rest.</p>
          
          <h3>Monitoring and Detection</h3>
          <p>Set up comprehensive monitoring and intrusion detection systems to identify and respond to security threats.</p>
          
          <h3>Incident Response</h3>
          <p>Develop and maintain incident response procedures to handle security breaches effectively.</p>
        `
      }
    };
    return content[postId as keyof typeof content] || { title: '', content: '' };
  };

  return (
    <section id="blog" className="py-20 relative bg-white dark:bg-transparent">
      <div className="max-w-7xl mx-auto px-2 sm:px-4 md:px-6 lg:px-8 relative z-10">
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

                <button 
                  onClick={() => handleReadArticle(post)}
                  className="inline-flex items-center text-purple-600 dark:text-purple-400 font-medium hover:text-purple-700 dark:hover:text-purple-300 transition-colors group"
                >
                  <span>Read Full Article</span>
                  <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Regular Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
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

                <button 
                  onClick={() => handleReadArticle(post)}
                  className="inline-flex items-center text-purple-600 dark:text-purple-400 text-sm font-medium hover:text-purple-700 dark:hover:text-purple-300 transition-colors group"
                >
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
              <a 
                href="https://github.com/AbdellahiAhmed?tab=repositories"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg inline-flex items-center justify-center"
              >
                <ExternalLink className="h-5 w-5 mr-2" />
                View All Projects
              </a>
              <a 
                href="mailto:AbdellahiAhmedAhmedBaba@gmail.com?subject=Blog%20Subscription%20Request"
                className="px-6 py-3 border-2 border-indigo-500/50 text-indigo-600 dark:text-white rounded-xl font-semibold transition-all duration-300 hover:bg-indigo-100/30 dark:hover:bg-indigo-500/10 inline-flex items-center justify-center"
              >
                <Mail className="h-5 w-5 mr-2" />
                Subscribe to Newsletter
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Blog Modal */}
      {showModal && selectedPost && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-2 sm:p-4">
          <div className="bg-white dark:bg-slate-900 rounded-2xl w-full max-w-2xl sm:max-w-3xl md:max-w-4xl max-h-[90vh] overflow-y-auto shadow-2xl">
            <div className="sticky top-0 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-700 p-4 sm:p-6 rounded-t-2xl">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${getCategoryColor(selectedPost.category)}`}>
                    <selectedPost.icon className="h-5 w-5" />
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getCategoryColor(selectedPost.category)}`}>
                    {selectedPost.category.charAt(0).toUpperCase() + selectedPost.category.slice(1)}
                  </span>
                </div>
                <button
                  onClick={closeModal}
                  className="p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors"
                >
                  <X className="h-6 w-6 text-slate-500" />
                </button>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-800 dark:text-white mb-2">
                {selectedPost.title}
              </h2>
              <div className="flex items-center space-x-4 text-sm text-gray-600 dark:text-slate-400">
                <div className="flex items-center space-x-1">
                  <Calendar className="h-4 w-4" />
                  <span>{new Date(selectedPost.date).toLocaleDateString('en-US', { 
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric' 
                  })}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Clock className="h-4 w-4" />
                  <span>{selectedPost.readTime}</span>
                </div>
              </div>
            </div>
            
            <div className="p-4 sm:p-6">
              <div 
                className="prose prose-slate dark:prose-invert max-w-none text-sm sm:text-base"
                dangerouslySetInnerHTML={{ 
                  __html: getBlogContent(selectedPost.id).content 
                }}
              />
              
              <div className="mt-8 pt-6 border-t border-slate-200 dark:border-slate-700">
                <div className="flex flex-wrap gap-2 mb-4">
                  {selectedPost.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 rounded-full text-sm bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-600"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex items-center justify-between">
                  <button
                    onClick={closeModal}
                    className="px-4 py-2 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-lg hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
                  >
                    Close
                  </button>
                  <a
                    href={`https://github.com/AbdellahiAhmed?tab=repositories`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
                  >
                    <ExternalLink className="h-4 w-4 mr-2" />
                    View Related Projects
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default BlogSection; 