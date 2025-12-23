import React, { useState } from 'react';
import {
  ExternalLink,
  MessageSquare,
  Monitor,
  Smartphone,
  Code,
  Heart,
  Users,
  Menu,
  X,
  Layers
} from 'lucide-react';

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const projects = [
    {
      title: 'Aria Nova',
      url: 'https://aria-nova.netlify.app/',
      tech: 'React',
      responsive: true,
      featured: true,
      description: 'Modern singer landing page with smooth animations'
    },
    {
      title: 'Brew Haven',
      url: 'https://brew-haveb.netlify.app/',
      tech: 'React + localStorage',
      responsive: true,
      featured: true,
      description: 'Coffee ordering website with cart functionality'
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
      description: 'Interactive memory game built with React'
    },
    {
      title: 'Birthday Box',
      url: 'https://birthdaybox.netlify.app/',
      tech: 'HTML & CSS',
      responsive: true,
      description: 'Responsive celebration landing page'
    },
    {
      title: 'CV Application',
      url: 'https://cvapplication-odin.netlify.app/',
      tech: 'React',
      responsive: true,
      description: 'Resume builder web application'
    },
    {
      title: 'The Voices',
      url: 'https://thevoices.netlify.app/',
      tech: 'Full Stack',
      responsive: true,
      featured: true,
      description: 'Full-stack platform for writers and readers'
    },
    {
      title: 'Battleship',
      url: 'https://battleship-odin-project.netlify.app/',
      tech: 'JavaScript',
      responsive: false,
      description: 'Classic battleship game (desktop-focused)'
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
      description: 'Functional calculator application'
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
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-slate-900/95 backdrop-blur-sm border-b border-purple-500/30">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-white">Oyinade Olawoyin</h1>

          <div className="hidden md:flex gap-6">
            {['about', 'projects', 'community', 'services', 'contact'].map(link => (
              <a
                key={link}
                href={`#${link}`}
                className="text-purple-200 hover:text-white transition-colors"
              >
                {link.charAt(0).toUpperCase() + link.slice(1)}
              </a>
            ))}
          </div>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-white"
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden px-4 pb-4 space-y-3">
            {['about', 'projects', 'community', 'services', 'contact'].map(link => (
              <a
                key={link}
                href={`#${link}`}
                onClick={() => setMobileMenuOpen(false)}
                className="block text-purple-200 hover:text-white"
              >
                {link.charAt(0).toUpperCase() + link.slice(1)}
              </a>
            ))}
          </div>
        )}
      </nav>

      {/* About */}
      <section id="about" className="container mx-auto px-4 py-16">
        <div className="max-w-5xl mx-auto bg-white/5 rounded-3xl p-8 border border-purple-500/20">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Hi, I’m Oyinade Olawoyin
          </h2>
          <p className="text-xl text-purple-200 mb-6">
            Full-stack web developer • React-focused
          </p>
          <p className="text-purple-100 leading-relaxed">
            I build responsive, modern web applications using React, JavaScript,
            and backend technologies. Alongside coding, I’m a writer and creative
            thinker who values clarity, structure, and growth.
          </p>
        </div>
      </section>

      {/* Learning Community */}
      <section id="community" className="container mx-auto px-4 py-16 max-w-4xl">
        <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8">
          <div className="flex items-center gap-3 mb-4">
            <Users className="text-white" />
            <h2 className="text-3xl font-bold text-white">Learn With Me</h2>
          </div>

          <p className="text-white mb-6">
            Want to build your own website but don’t know where to start?
            Instead of jumping between scattered tutorials, I guide beginners
            step by step through real projects in a focused learning hub.
          </p>

          <ul className="space-y-3 text-white mb-8">
            <li>→ HTML & CSS foundations</li>
            <li>→ JavaScript fundamentals</li>
            <li>→ React for modern interfaces</li>
            <li>→ Backend concepts for full-stack growth</li>
          </ul>

          {/* Pricing */}
          <div className="bg-white/10 rounded-xl p-6">
            <h3 className="text-2xl font-bold text-white mb-6 text-center">
              Learning Path
            </h3>

            <div className="grid md:grid-cols-4 gap-4">
              <PriceCard title="Foundation" price="$15" desc="HTML & CSS" />
              <PriceCard title="JavaScript" price="$25" desc="Core JS skills" />
              <PriceCard title="React" price="$40" desc="Modern frontend" />
              <PriceCard title="Backend" price="Soon" desc="Full-stack" muted />
            </div>

            <div className="mt-6 text-purple-100">
              <p>Requirements:</p>
              <ul className="list-disc ml-6">
                <li>Laptop or desktop</li>
                <li>Consistency and curiosity</li>
              </ul>
            </div>

            <div className="text-center mt-8">
              <a
                href="YOUR_DISCORD_LINK"
                className="inline-flex items-center gap-2 bg-white text-purple-700 px-6 py-3 rounded-full font-bold"
              >
                <MessageSquare />
                Join the Discord Hub
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="container mx-auto px-4 py-16">
        <div className="flex justify-center gap-4 mb-10">
          {['all', 'responsive', 'desktop'].map(filter => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-5 py-2 rounded-full ${
                activeFilter === filter
                  ? 'bg-white text-purple-900'
                  : 'bg-white/20 text-white'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {filteredProjects.map((project, i) => (
            <div
              key={i}
              className="bg-white/10 rounded-xl p-6 hover:scale-105 transition"
            >
              {project.featured && (
                <div className="text-yellow-400 flex items-center gap-1 mb-2">
                  <Heart className="fill-current" size={16} />
                  Featured
                </div>
              )}
              <h3 className="text-xl font-bold text-white">
                {project.title}
              </h3>
              <p className="text-purple-200 mb-3">{project.description}</p>

              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white inline-flex gap-1"
              >
                View
                <ExternalLink size={16} />
              </a>
            </div>
          ))}
        </div>
      </section>

      <footer id="contact" className="text-center py-10 text-purple-300">
        © 2025 Oyinade Olawoyin
      </footer>
    </div>
  );
}

function PriceCard({ title, price, desc, muted }) {
  return (
    <div
      className={`rounded-xl p-4 text-center border ${
        muted
          ? 'border-slate-400/30 text-slate-300'
          : 'border-purple-400/40 text-white'
      }`}
    >
      <Layers className="mx-auto mb-2" />
      <h4 className="font-bold text-lg">{title}</h4>
      <p className="text-sm mb-2">{desc}</p>
      <p className="text-2xl font-bold">{price}</p>
    </div>
  );
}