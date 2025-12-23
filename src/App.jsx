import React, { useState } from 'react';
import { ExternalLink, MessageSquare, Monitor, Smartphone, Code, Heart, Users, Menu, X, Briefcase, GraduationCap } from 'lucide-react';

export default function Portfolio() {
  const [activeMode, setActiveMode] = useState(null); // null, 'hire', or 'learn'
  const [activeFilter, setActiveFilter] = useState('all');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const projects = [
    {
      title: 'Aria Nova',
      url: 'https://aria-nova.netlify.app/',
      tech: 'React',
      responsive: true,
      featured: true,
      description: 'Modern singer landing page with animations'
    },
    {
      title: 'Brew Haven',
      url: 'https://brew-haveb.netlify.app/',
      tech: 'React + localStorage',
      responsive: true,
      featured: true,
      description: 'Coffee ordering website with cart system'
    },
    {
      title: 'Ease Shopping',
      url: 'https://easeshopping.netlify.app/',
      tech: 'React + API',
      responsive: true,
      featured: true,
      description: 'E-commerce platform with API integration'
    },
    {
      title: 'Savanna Shuffle',
      url: 'https://savannashuffle.netlify.app/',
      tech: 'React',
      responsive: true,
      featured: true,
      description: 'Interactive memory game application'
    },
    {
      title: 'Birthday Box',
      url: 'https://birthdaybox.netlify.app/',
      tech: 'HTML & CSS',
      responsive: true,
      description: 'Responsive celebration page'
    },
    {
      title: 'CV Application',
      url: 'https://cvapplication-odin.netlify.app/',
      tech: 'React',
      responsive: true,
      description: 'Resume builder application'
    },
    {
      title: 'The Voices',
      url: 'https://thevoices.netlify.app/',
      tech: 'Full Stack',
      responsive: true,
      featured: true,
      description: 'Platform for fictional writers and poets'
    },
    {
      title: 'Battleship',
      url: 'https://battleship-odin-project.netlify.app/',
      tech: 'JavaScript',
      responsive: false,
      description: 'Classic battleship game'
    },
    {
      title: 'Weather App',
      url: 'https://odin-weather-project.netlify.app/',
      tech: 'JavaScript + API',
      responsive: false,
      description: 'Weather forecast application'
    },
    {
      title: 'Calculator',
      url: 'https://odin-calculator-foundation-project.netlify.app/',
      tech: 'JavaScript',
      responsive: false,
      description: 'Functional calculator app'
    }
  ];

  const filteredProjects = projects.filter(project => {
    if (activeFilter === 'all') return true;
    if (activeFilter === 'responsive') return project.responsive;
    if (activeFilter === 'desktop') return !project.responsive;
    return true;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Navigation Header */}
      <nav className="sticky top-0 z-50 bg-slate-900/95 backdrop-blur-sm border-b border-purple-500/30 shadow-lg">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold text-white">Oyinade Olawoyin</h1>
            
            <div className="hidden md:flex gap-6">
              <a href="#about" className="text-purple-200 hover:text-white transition-colors">About</a>
              <a href="#work" className="text-purple-200 hover:text-white transition-colors">Work With Me</a>
              <a href="#contact" className="text-purple-200 hover:text-white transition-colors">Contact</a>
            </div>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden text-white"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {mobileMenuOpen && (
            <div className="md:hidden mt-4 pb-4 space-y-3">
              <a href="#about" onClick={() => setMobileMenuOpen(false)} className="block text-purple-200 hover:text-white transition-colors">About</a>
              <a href="#work" onClick={() => setMobileMenuOpen(false)} className="block text-purple-200 hover:text-white transition-colors">Work With Me</a>
              <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="block text-purple-200 hover:text-white transition-colors">Contact</a>
            </div>
          )}
        </div>
      </nav>

      {/* About Section */}
      <section id="about" className="container mx-auto px-4 py-16">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-12 bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-purple-500/20">
          <div className="w-48 h-48 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex-shrink-0 shadow-2xl border-4 border-white/10 flex items-center justify-center overflow-hidden">
            <img
              src="/pfp.jpg"
              alt="Oyin – Full Stack Developer"
              className="w-full h-full object-cover"
            />
          </div>
            <div className="flex-1">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Hi, I'm Oyinade Olawoyin
              </h2>
              <p className="text-xl text-purple-200 mb-6">
                Full-stack developer & creative storyteller
              </p>
              
              <div className="space-y-4 text-purple-100 leading-relaxed">
                <p>
                  I build responsive websites and web applications using React, JavaScript, and modern full-stack technologies. But I'm more than just code—I'm a writer who explores human emotions and psychology through storytelling, and a songwriter who finds solace in music.
                </p>
                <p>
                  I'm also the founder of <a href="https://thevoices.netlify.app/" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-purple-300 underline">The Voices</a>, a platform built for fictional writers and poets to connect with readers, grow their audience, and build a supportive creative community.
                </p>
                <p>
                  When I'm not coding or writing, you'll find me daydreaming—where all my creative ideas are born.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Work With Me Section */}
      <section id="work" className="container mx-auto px-4 py-16">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-5xl font-bold text-white mb-6 text-center">Work With Me</h2>
          <p className="text-xl text-purple-200 text-center mb-12">Choose how you'd like to collaborate</p>

          {/* Mode Selection Buttons */}
          {!activeMode && (
            <div className="grid md:grid-cols-2 gap-8 mb-16">
              <button
                onClick={() => setActiveMode('hire')}
                className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl p-8 text-left hover:from-blue-700 hover:to-purple-700 transition-all transform hover:scale-105 shadow-2xl"
              >
                <Briefcase className="w-12 h-12 text-white mb-4" />
                <h3 className="text-3xl font-bold text-white mb-3">Need a Website?</h3>
                <p className="text-blue-100 text-lg mb-4">
                  Let me build your portfolio, landing page, or web application
                </p>
                <div className="text-white font-semibold flex items-center gap-2">
                  View My Work & Services <ExternalLink className="w-4 h-4" />
                </div>
              </button>

              <button
                onClick={() => setActiveMode('learn')}
                className="bg-gradient-to-br from-purple-600 to-pink-600 rounded-2xl p-8 text-left hover:from-purple-700 hover:to-pink-700 transition-all transform hover:scale-105 shadow-2xl"
              >
                <GraduationCap className="w-12 h-12 text-white mb-4" />
                <h3 className="text-3xl font-bold text-white mb-3">Learn With Me</h3>
                <p className="text-purple-100 text-lg mb-4">
                  Join my structured learning path from HTML to full-stack React
                </p>
                <div className="text-white font-semibold flex items-center gap-2">
                  Explore Learning Path <ExternalLink className="w-4 h-4" />
                </div>
              </button>
            </div>
          )}

          {/* Back Button */}
          {activeMode && (
            <div className="text-center mb-8">
              <button
                onClick={() => setActiveMode(null)}
                className="text-purple-300 hover:text-white transition-colors font-semibold"
              >
                ← Back to options
              </button>
            </div>
          )}

          {/* HIRE MODE - Projects + Services */}
          {activeMode === 'hire' && (
            <>
              <div className="mb-16">
                <h3 className="text-4xl font-bold text-white mb-4 text-center">My Projects</h3>
                <p className="text-xl text-purple-200 text-center mb-8">See what I can build for you</p>

                <div className="flex justify-center gap-4 mb-12 flex-wrap">
                  <button
                    onClick={() => setActiveFilter('all')}
                    className={`px-6 py-3 rounded-full font-semibold transition-all ${
                      activeFilter === 'all' ? 'bg-white text-purple-900 shadow-lg scale-105' : 'bg-white/20 text-white hover:bg-white/30'
                    }`}
                  >
                    All Projects
                  </button>
                  <button
                    onClick={() => setActiveFilter('responsive')}
                    className={`px-6 py-3 rounded-full font-semibold transition-all flex items-center gap-2 ${
                      activeFilter === 'responsive' ? 'bg-white text-purple-900 shadow-lg scale-105' : 'bg-white/20 text-white hover:bg-white/30'
                    }`}
                  >
                    <Smartphone className="w-4 h-4" />
                    Responsive
                  </button>
                  <button
                    onClick={() => setActiveFilter('desktop')}
                    className={`px-6 py-3 rounded-full font-semibold transition-all flex items-center gap-2 ${
                      activeFilter === 'desktop' ? 'bg-white text-purple-900 shadow-lg scale-105' : 'bg-white/20 text-white hover:bg-white/30'
                    }`}
                  >
                    <Monitor className="w-4 h-4" />
                    Desktop Only
                  </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
                  {filteredProjects.map((project, index) => (
                    <div
                      key={index}
                      className={`bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all transform hover:scale-105 hover:shadow-2xl ${
                        project.featured ? 'ring-2 ring-yellow-400' : ''
                      }`}
                    >
                      {project.featured && (
                        <div className="flex items-center gap-1 text-yellow-400 text-sm font-semibold mb-2">
                          <Heart className="w-4 h-4 fill-current" />
                          Featured
                        </div>
                      )}
                      
                      <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                      <p className="text-purple-200 mb-3">{project.description}</p>
                      
                      <div className="flex items-center gap-2 mb-4">
                        <span className="px-3 py-1 bg-purple-500/50 text-white text-sm rounded-full">{project.tech}</span>
                        {project.responsive ? (
                          <span className="px-3 py-1 bg-green-500/50 text-white text-sm rounded-full flex items-center gap-1">
                            <Smartphone className="w-3 h-3" />
                            Responsive
                          </span>
                        ) : (
                          <span className="px-3 py-1 bg-orange-500/50 text-white text-sm rounded-full flex items-center gap-1">
                            <Monitor className="w-3 h-3" />
                            Desktop
                          </span>
                        )}
                      </div>
                      
                      <a href={project.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-white hover:text-purple-300 font-semibold transition-colors">
                        View Project
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </div>
                  ))}
                </div>
              </div>

              {/* Services */}
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 shadow-2xl">
                <h3 className="text-3xl font-bold text-white mb-6 text-center">Let's Build Your Website</h3>
                <div className="max-w-3xl mx-auto">
                  <p className="text-white text-lg leading-relaxed mb-6 text-center">
                    I'm available to help bring your ideas to life! Whether you need a personal portfolio, a business landing page, or a full web application, I'd love to work with you.
                  </p>

                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 mb-6">
                    <h4 className="text-xl font-semibold text-white mb-4">What I Can Build:</h4>
                    <ul className="space-y-2 text-white">
                      <li className="flex items-start gap-2">
                        <span className="text-green-300 mt-1">✓</span>
                        <span>Responsive websites that work on all devices</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-300 mt-1">✓</span>
                        <span>Portfolio websites to showcase your work</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-300 mt-1">✓</span>
                        <span>Landing pages for businesses or products</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-300 mt-1">✓</span>
                        <span>Interactive React applications</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-300 mt-1">✓</span>
                        <span>Full-stack projects with backend integration</span>
                      </li>
                    </ul>
                  </div>

                  <div className="text-center">
                    <a
                      href="mailto:YOUR_EMAIL_HERE"
                      className="inline-flex items-center gap-2 bg-white text-blue-700 px-8 py-4 rounded-full font-bold text-lg hover:bg-blue-50 transition-all transform hover:scale-105 shadow-lg"
                    >
                      <MessageSquare className="w-6 h-6" />
                      Let's Discuss Your Project
                    </a>
                  </div>
                </div>
              </div>
            </>
          )}

          {/* LEARN MODE - Learning Path Only */}
          {activeMode === 'learn' && (
            <div className="max-w-4xl mx-auto">
              <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-8 shadow-2xl mb-8">
                <div className="flex items-center gap-3 mb-6">
                  <Users className="w-10 h-10 text-white" />
                  <h3 className="text-3xl font-bold text-white">Guided Learning Community</h3>
                </div>
                
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 mb-6">
                  <p className="text-white text-lg leading-relaxed mb-4">
                    Learn web development with clear structure and guidance. No scattered YouTube videos, no endless confusion—just a focused path forward.
                  </p>
                  <p className="text-white text-lg leading-relaxed mb-4">
                    I guide you through each stage, help you when you're stuck, and keep you motivated. You learn with a community of others on the same journey.
                  </p>
                  <p className="text-white text-lg leading-relaxed">
                    <strong>Pick the stage you need</strong> - you don't have to start from the beginning. Jump in wherever makes sense for your goals.
                  </p>
                </div>
              </div>

              {/* Learning Path */}
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/20 mb-8">
                <h4 className="text-3xl font-bold text-white mb-4 text-center">Choose Your Stage</h4>
                <p className="text-purple-200 text-center mb-8">Pick any stage based on where you are. One-time payment per stage.</p>
                
                <div className="space-y-6 mb-8">
                  <div className="bg-gradient-to-br from-purple-600/20 to-blue-600/20 rounded-xl p-6 border border-purple-400/30">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h5 className="text-2xl font-bold text-white mb-1">Stage 1: Foundation</h5>
                        <p className="text-purple-200">HTML + CSS</p>
                      </div>
                      <div className="text-right">
                        <div className="text-3xl font-bold text-white">$15</div>
                        <p className="text-purple-200 text-sm">starting price</p>
                      </div>
                    </div>
                    <p className="text-purple-100 mb-3">Build your first responsive website and understand the web</p>
                    <ul className="space-y-2 text-purple-100 text-sm">
                      <li className="flex items-start gap-2">
                        <span className="text-green-400">✓</span>
                        <span>Clean markup and styles</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-400">✓</span>
                        <span>Responsive design basics</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-gradient-to-br from-blue-600/20 to-purple-600/20 rounded-xl p-6 border border-blue-400/30">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h5 className="text-2xl font-bold text-white mb-1">Stage 2: JavaScript Core</h5>
                        <p className="text-blue-200">Interactive websites</p>
                      </div>
                      <div className="text-right">
                        <div className="text-3xl font-bold text-white">$25</div>
                        <p className="text-blue-200 text-sm">starting price</p>
                      </div>
                    </div>
                    <p className="text-blue-100 mb-3">Write logic confidently and prepare for frameworks</p>
                    <ul className="space-y-2 text-blue-100 text-sm">
                      <li className="flex items-start gap-2">
                        <span className="text-green-400">✓</span>
                        <span>How the browser thinks</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-400">✓</span>
                        <span>Build dynamic features</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-gradient-to-br from-pink-600/20 to-purple-600/20 rounded-xl p-6 border border-pink-400/30">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h5 className="text-2xl font-bold text-white mb-1">Stage 3: React Frontend</h5>
                        <p className="text-pink-200">Component-based interfaces</p>
                      </div>
                      <div className="text-right">
                        <div className="text-3xl font-bold text-white">$40</div>
                        <p className="text-pink-200 text-sm">starting price</p>
                      </div>
                    </div>
                    <p className="text-pink-100 mb-3">Build like modern frontend developers—state, props, hooks, the works</p>
                    <ul className="space-y-2 text-pink-100 text-sm">
                      <li className="flex items-start gap-2">
                        <span className="text-green-400">✓</span>
                        <span>Real component-based apps</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-400">✓</span>
                        <span>Professional development workflow</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-gradient-to-br from-slate-600/20 to-purple-600/20 rounded-xl p-6 border border-slate-400/30">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h5 className="text-2xl font-bold text-white mb-1">Stage 4: Backend (Optional)</h5>
                        <p className="text-slate-200">Full-stack completion</p>
                      </div>
                      <div className="text-right">
                        <div className="text-3xl font-bold text-white">$50</div>
                        <p className="text-slate-200 text-sm">starting price</p>
                      </div>
                    </div>
                    <p className="text-slate-100 mb-3">APIs, authentication, and connecting frontend to backend</p>
                    <ul className="space-y-2 text-slate-100 text-sm">
                      <li className="flex items-start gap-2">
                        <span className="text-green-400">✓</span>
                        <span>Database management</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-400">✓</span>
                        <span>See the full picture</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-gradient-to-r from-green-600/20 to-emerald-600/20 rounded-xl p-6 border border-green-400/40">
                    <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4">
                      <div>
                        <h5 className="text-2xl font-bold text-white mb-1">Complete Path (Bundle)</h5>
                        <p className="text-green-200">All stages: Foundation + JS + React + Backend</p>
                      </div>
                      <div className="text-center md:text-right">
                        <div className="text-4xl font-bold text-green-300">$100</div>
                        <p className="text-green-200 text-sm">save $30</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* What You Get */}
                <div className="bg-white/5 rounded-xl p-6 mb-6">
                  <h4 className="text-xl font-semibold text-white mb-4">What You Get:</h4>
                  <ul className="space-y-3 text-purple-100">
                    <li className="flex items-start gap-3">
                      <span className="text-purple-400 mt-1">→</span>
                      <span>Structured learning path - no scattered YouTube chaos</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-purple-400 mt-1">→</span>
                      <span>Help when you're stuck - debugging, explanations, direction</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-purple-400 mt-1">→</span>
                      <span>Motivation & accountability to keep you going</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-purple-400 mt-1">→</span>
                      <span>Community support from others learning the same topics</span>
                    </li>
                  </ul>
                </div>

                {/* Requirements */}
                <div className="bg-white/5 rounded-xl p-6 mb-6">
                  <h4 className="text-xl font-semibold text-white mb-4">Requirements:</h4>
                  <ul className="space-y-3 text-purple-100">
                    <li className="flex items-start gap-3">
                      <span className="text-purple-400 text-xl">💻</span>
                      <span>A laptop or desktop computer</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-purple-400 text-xl">🎯</span>
                      <span>Willingness to practice consistently</span>
                    </li>
                  </ul>
                </div>

                <div className="text-center">
                  <a
                    href="YOUR_DISCORD_LINK_HERE"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:from-purple-700 hover:to-pink-700 transition-all transform hover:scale-105 shadow-lg"
                  >
                    <MessageSquare className="w-6 h-6" />
                    Join Discord for Full Details & Enrollment
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="text-center py-16 text-purple-200">
        <p className="text-lg mb-2">Built with passion • More projects coming soon</p>
        <p className="text-sm text-purple-300">© 2025 Oyinade Olawoyin. All rights reserved.</p>
      </footer>
    </div>
  );
}