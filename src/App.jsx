import React, { useState } from 'react';
import { ExternalLink, Github, MessageSquare, Monitor, Smartphone, Code, Heart, Users } from 'lucide-react';

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState('all');

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
      description: 'Complete full-stack web application'
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
            <div className="flex gap-6">
              <a href="#about" className="text-purple-200 hover:text-white transition-colors">About</a>
              <a href="#projects" className="text-purple-200 hover:text-white transition-colors">Projects</a>
              <a href="#community" className="text-purple-200 hover:text-white transition-colors">Community</a>
              <a href="#services" className="text-purple-200 hover:text-white transition-colors">Services</a>
              <a href="#contact" className="text-purple-200 hover:text-white transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* About/Introduction Section */}
      <section id="about" className="container mx-auto px-4 py-16">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-12 bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-purple-500/20">
            {/* Avatar Placeholder */}
            <div className="w-64 h-64 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex-shrink-0 shadow-2xl border-4 border-white/10 flex items-center justify-center overflow-hidden">
              {/* Replace this with your actual image */}
              <div className="text-white text-6xl">👤</div>
              {/* When you have your image, use: <img src="your-image.jpg" alt="Oyinade Olawoyin" className="w-full h-full object-cover" /> */}
            </div>
            
            {/* Introduction Text */}
            <div className="flex-1">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Hi, I'm Oyinade Olawoyin
              </h2>
              <p className="text-xl text-purple-200 mb-6">
                A web developer and creative storyteller
              </p>
              
              <div className="space-y-4 text-purple-100 leading-relaxed">
                <p>
                  I build responsive websites and web applications using React, JavaScript, and modern web technologies. But I'm more than just code—I'm a writer who explores human emotions and psychology through storytelling, and a songwriter who finds solace in music.
                </p>
                <p>
                  I'm also the founder of <a href="https://thevoices.netlify.app/" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-purple-300 underline">The Voices</a>, a platform built for fictional writers and poets to connect with readers, grow their audience, and build a supportive creative community.
                </p>
                <p>
                  When I'm not coding or writing, you'll find me daydreaming—because creativity is how I bring my imagination to life.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-4">
            My Projects
          </h1>
          <p className="text-xl text-purple-200">
            A collection of websites I've built while learning and growing
          </p>
        </div>

        {/* Learning Community Section */}
        <div id="community" className="max-w-3xl mx-auto mb-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 shadow-2xl">
          <div className="flex items-center gap-3 mb-4">
            <Users className="w-8 h-8 text-white" />
            <h2 className="text-3xl font-bold text-white">Join My Learning Community</h2>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 mb-6">
            <p className="text-white text-lg leading-relaxed mb-4">
              If you want to learn how to build your own website but feel stuck or overwhelmed, you're not alone.
            </p>
            <p className="text-white text-lg leading-relaxed mb-4">
              I created a learning hub for beginners where we learn step by step and build real websites together, without the confusion of hopping between endless videos.
            </p>
            <p className="text-white text-lg leading-relaxed">
              If you're ready to start with clarity and consistency, you're welcome to join.
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
            <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
              <Code className="w-6 h-6" />
              What We'll Learn Together:
            </h3>
            <ul className="space-y-3 text-white">
              <li className="flex items-start gap-2">
                <span className="text-yellow-300 mt-1">→</span>
                <span>Frontend Development: HTML, CSS, JavaScript, and React</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-yellow-300 mt-1">→</span>
                <span>Backend Development: Building APIs and server-side logic</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-yellow-300 mt-1">→</span>
                <span>Responsive Design: Making websites work on all devices</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-yellow-300 mt-1">→</span>
                <span>Real Projects: Build actual websites you can showcase</span>
              </li>
            </ul>
          </div>

          <div className="mt-6 text-center">
            <a
              href="YOUR_DISCORD_LINK_HERE"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white text-purple-700 px-8 py-4 rounded-full font-bold text-lg hover:bg-purple-100 transition-all transform hover:scale-105 shadow-lg"
            >
              <MessageSquare className="w-6 h-6" />
              Join Discord Community
            </a>
            <p className="text-white/80 text-sm mt-3">
              Note: I'm learning too! We'll grow together as a community.
            </p>
          </div>
        </div>

        {/* Filter Buttons */}
        <div className="flex justify-center gap-4 mb-12 flex-wrap">
          <button
            onClick={() => setActiveFilter('all')}
            className={`px-6 py-3 rounded-full font-semibold transition-all ${
              activeFilter === 'all'
                ? 'bg-white text-purple-900 shadow-lg scale-105'
                : 'bg-white/20 text-white hover:bg-white/30'
            }`}
          >
            All Projects
          </button>
          <button
            onClick={() => setActiveFilter('responsive')}
            className={`px-6 py-3 rounded-full font-semibold transition-all flex items-center gap-2 ${
              activeFilter === 'responsive'
                ? 'bg-white text-purple-900 shadow-lg scale-105'
                : 'bg-white/20 text-white hover:bg-white/30'
            }`}
          >
            <Smartphone className="w-4 h-4" />
            Responsive
          </button>
          <button
            onClick={() => setActiveFilter('desktop')}
            className={`px-6 py-3 rounded-full font-semibold transition-all flex items-center gap-2 ${
              activeFilter === 'desktop'
                ? 'bg-white text-purple-900 shadow-lg scale-105'
                : 'bg-white/20 text-white hover:bg-white/30'
            }`}
          >
            <Monitor className="w-4 h-4" />
            Desktop Only
          </button>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
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
              
              <h3 className="text-2xl font-bold text-white mb-2">
                {project.title}
              </h3>
              
              <p className="text-purple-200 mb-3">{project.description}</p>
              
              <div className="flex items-center gap-2 mb-4">
                <span className="px-3 py-1 bg-purple-500/50 text-white text-sm rounded-full">
                  {project.tech}
                </span>
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
              
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-white hover:text-purple-300 font-semibold transition-colors"
              >
                View Project
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          ))}
        </div>

        {/* Services Section */}
        <div id="services" className="max-w-3xl mx-auto mt-16 mb-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 shadow-2xl">
          <div className="text-center mb-6">
            <h2 className="text-3xl font-bold text-white mb-4">Need a Website?</h2>
            <p className="text-white text-lg leading-relaxed mb-4">
              I'm available to help bring your ideas to life! Whether you need a personal portfolio, a business landing page, or a simple web application, I'd love to work with you.
            </p>
            <p className="text-white/90 text-base leading-relaxed mb-6">
              I'm still learning and growing as a developer, which means I'm eager to take on new projects and offer affordable rates. You'll get a dedicated developer who cares about your project and wants to deliver quality work.
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 mb-6">
            <h3 className="text-xl font-semibold text-white mb-4">What I Can Build:</h3>
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
                <span>Interactive web applications with React</span>
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
            <p className="text-white/80 text-sm mt-3">
              Or reach out via Discord for a casual chat about your ideas!
            </p>
          </div>
        </div>

        {/* Footer */}
        <footer id="contact" className="text-center mt-16 text-purple-200">
          <p className="text-lg mb-2">
            Built with passion while learning • More projects coming soon!
          </p>
          <p className="text-sm text-purple-300">
            © 2025 Oyinade Olawoyin. All rights reserved.
          </p>
        </footer>
      </section>
    </div>
  );
}