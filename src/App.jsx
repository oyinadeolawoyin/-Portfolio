import React, { useState } from 'react';
import { ExternalLink, MessageSquare, Menu, X, Instagram, Send, Mail } from 'lucide-react';

export default function Portfolio() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const projects = [
    {
      title: 'The Voices',
      url: 'https://thevoices-gamma.vercel.app/',
      tech: 'Full Stack (React, Node.js, PostgreSQL)',
      description: 'A complete platform for fictional writers and poets to connect with readers, featuring user authentication, story publishing, and community engagement.',
      featured: true,
      screenshot: '/voices.png'
    },
    {
      title: 'Brew Haven',
      url: 'https://brew-haven-gamma.vercel.app/',
      tech: 'React + localStorage',
      description: 'Coffee ordering website with shopping cart functionality, order management, and persistent storage.',
      featured: true,
      screenshot: '/brewhaven.png'
    },
    {
      title: 'Aria Nova',
      url: 'https://aria-nova.vercel.app/',
      tech: 'React',
      description: 'Modern singer landing page featuring smooth animations and contemporary design aesthetics.',
      screenshot: '/aria.png'
    },
    {
      title: 'Savanna Shuffle',
      url: 'https://savanna-shuffle.vercel.app/',
      tech: 'React',
      description: 'Interactive memory game application with engaging gameplay mechanics and responsive interface.',
      screenshot: '/savannah.png'
    },
    {
      title: 'CV Application',
      url: 'https://cv-application-rust-alpha.vercel.app/',
      tech: 'React',
      description: 'Dynamic resume builder allowing users to create and customize professional CVs.',
      screenshot: '/cv.png'
    },
    {
      title: 'Birthday Box',
      url: 'https://birthday-box-ashen.vercel.app/',
      tech: 'HTML & CSS',
      description: 'Responsive celebration page with creative design and animations.',
      screenshot: '/birthday.png'
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-black/95 backdrop-blur-sm border-b border-white/10">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-xl md:text-2xl font-bold tracking-tight">
              Oyinade Olawoyin
            </h1>
            
            <div className="hidden md:flex items-center gap-8">
              <a href="#about" className="text-gray-400 hover:text-white transition-colors text-sm font-medium">About</a>
              <a href="#projects" className="text-gray-400 hover:text-white transition-colors text-sm font-medium">Projects</a>
              <a href="#services" className="text-gray-400 hover:text-white transition-colors text-sm font-medium">Services</a>
              <a href="#contact" className="bg-white text-black px-6 py-2 rounded-full font-semibold hover:bg-gray-100 transition-all text-sm">
                Contact
              </a>
            </div>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden text-white"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {mobileMenuOpen && (
            <div className="md:hidden mt-6 pb-4 space-y-4">
              <a href="#about" onClick={() => setMobileMenuOpen(false)} className="block text-gray-400 hover:text-white transition-colors">About</a>
              <a href="#projects" onClick={() => setMobileMenuOpen(false)} className="block text-gray-400 hover:text-white transition-colors">Projects</a>
              <a href="#services" onClick={() => setMobileMenuOpen(false)} className="block text-gray-400 hover:text-white transition-colors">Services</a>
              <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="block text-gray-400 hover:text-white transition-colors">Contact</a>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-5xl">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="w-40 h-40 md:w-48 md:h-48 rounded-full bg-white flex-shrink-0 overflow-hidden border-4 border-white/10">
              <img
                src="/pfp.jpg"
                alt="Oyinade Olawoyin"
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className="flex-1 text-center md:text-left">
              <h2 className="text-4xl md:text-6xl font-bold mb-4 tracking-tight">
                Full-Stack Developer
              </h2>
              <p className="text-xl md:text-2xl text-gray-400 mb-6">
                Building responsive websites & web applications
              </p>
              <div className="flex flex-wrap gap-3 justify-center md:justify-start">
                <span className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-sm">React</span>
                <span className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-sm">JavaScript</span>
                <span className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-sm">Node.js</span>
                <span className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-sm">PostgreSQL</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 bg-white/5">
        <div className="container mx-auto max-w-4xl">
          <h3 className="text-3xl md:text-4xl font-bold mb-8 text-center">About Me</h3>
          <div className="space-y-6 text-gray-300 leading-relaxed text-lg">
            <p>
              I build responsive websites and web applications using React, JavaScript, and modern full-stack technologies. But I'm more than just code—I'm a writer who explores human emotions and psychology through storytelling, and a songwriter who finds solace in music.
            </p>
            <p>
              I'm also the founder of <a href="https://thevoices.netlify.app/" target="_blank" rel="noopener noreferrer" className="text-white hover:underline font-medium">The Voices</a>, a platform built for fictional writers and poets to connect with readers, grow their audience, and build a supportive creative community.
            </p>
            <p>
              When I'm not coding or writing, you'll find me daydreaming—where all my creative ideas are born.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h3>
            <p className="text-xl text-gray-400">All projects are fully responsive and mobile-friendly</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="group bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-white/20 transition-all"
              >
                {/* Screenshot */}
                <div className="w-full aspect-video bg-white/5 border border-white/10 rounded-lg mb-6 flex items-center justify-center overflow-hidden">
                  <img 
                    src={project.screenshot} 
                    alt={`${project.title} screenshot`}
                    className="w-full h-full object-cover"
                  />
                </div>

                {project.featured && (
                  <div className="inline-block px-3 py-1 bg-white text-black text-xs font-semibold rounded-full mb-3">
                    Featured
                  </div>
                )}
                
                <h4 className="text-2xl font-bold mb-3 group-hover:text-gray-300 transition-colors">
                  {project.title}
                </h4>
                
                <p className="text-gray-400 mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <p className="text-sm text-gray-500 mb-4 font-medium">
                  {project.tech}
                </p>
                
                <a 
                  href={project.url} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-flex items-center gap-2 text-white hover:text-gray-300 font-semibold transition-colors group"
                >
                  View Project
                  <ExternalLink className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4 bg-white/5">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">Work With Me</h3>
            <p className="text-xl text-gray-400">Let's bring your ideas to life</p>
          </div>

          <div className="bg-white text-black rounded-2xl p-8 md:p-12">
            <h4 className="text-2xl md:text-3xl font-bold mb-6">What I Can Build For You</h4>
            
            <ul className="space-y-4 mb-8 text-lg">
              <li className="flex items-start gap-3">
                <span className="text-2xl">✓</span>
                <span>Responsive websites that work perfectly on all devices</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-2xl">✓</span>
                <span>Portfolio websites to showcase your work professionally</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-2xl">✓</span>
                <span>Landing pages for businesses or products</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-2xl">✓</span>
                <span>Interactive React applications with modern features</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-2xl">✓</span>
                <span>Full-stack projects with backend integration</span>
              </li>
            </ul>

            <div className="bg-black/5 rounded-xl p-6 mb-8">
              <h5 className="font-bold text-xl mb-3">Investment Range</h5>
              <p className="text-gray-700 text-lg leading-relaxed">
                Most projects range from <span className="font-bold">₦30,000 to ₦60,000</span> depending on scope, features, and timeline. Complex full-stack applications may fall outside this range based on specific requirements.
              </p>
              <p className="text-gray-700 mt-3">
                Every project is unique, so I provide custom quotes tailored to your needs.
              </p>
              <p className="text-gray-700 mt-3">
                <span className="font-semibold">Includes:</span> Free hosting setup, mobile-responsive design, and professional delivery.
              </p>
            </div>

            <div className="text-center">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 bg-black text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-900 transition-all"
              >
                <MessageSquare className="w-5 h-5" />
                Get a Free Quote
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">Let's Connect</h3>
            <p className="text-xl text-gray-400">Ready to start your project? Get in touch</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {/* Email */}
            <a
              href="mailto:oyinadeolwaoyin@proton.me"
              className="flex items-center gap-4 bg-white/5 border border-white/10 rounded-xl p-6 hover:bg-white/10 hover:border-white/20 transition-all group"
            >
              <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-white/20 transition-all">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <div className="font-semibold mb-1">Email</div>
                <div className="text-sm text-gray-400 break-all">oyinadeolwaoyin@proton.me</div>
              </div>
            </a>

            {/* WhatsApp */}
            <a
              href="https://wa.me/YOUR_WHATSAPP_NUMBER"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 bg-white/5 border border-white/10 rounded-xl p-6 hover:bg-white/10 hover:border-white/20 transition-all group"
            >
              <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-white/20 transition-all">
                <MessageSquare className="w-6 h-6" />
              </div>
              <div>
                <div className="font-semibold mb-1">WhatsApp</div>
                <div className="text-sm text-gray-400">Chat with me directly</div>
              </div>
            </a>

            {/* Instagram */}
            <a
              href="https://instagram.com/YOUR_INSTAGRAM_HANDLE"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 bg-white/5 border border-white/10 rounded-xl p-6 hover:bg-white/10 hover:border-white/20 transition-all group"
            >
              <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-white/20 transition-all">
                <Instagram className="w-6 h-6" />
              </div>
              <div>
                <div className="font-semibold mb-1">Instagram</div>
                <div className="text-sm text-gray-400">@your_handle</div>
              </div>
            </a>

            {/* Discord */}
            <a
              href="https://discord.gg/YOUR_DISCORD_LINK"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 bg-white/5 border border-white/10 rounded-xl p-6 hover:bg-white/10 hover:border-white/20 transition-all group"
            >
              <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-white/20 transition-all">
                <Send className="w-6 h-6" />
              </div>
              <div>
                <div className="font-semibold mb-1">Discord</div>
                <div className="text-sm text-gray-400">Join my community</div>
              </div>
            </a>
          </div>

          <div className="text-center bg-white/5 border border-white/10 rounded-xl p-8">
            <h4 className="text-2xl font-bold mb-3">Prefer Email?</h4>
            <p className="text-gray-400 mb-6">
              Send me a message about your project and I'll get back to you within 24 hours
            </p>
            <a
              href="mailto:oyinadeolwaoyin@proton.me"
              className="inline-flex items-center gap-2 bg-white text-black px-8 py-4 rounded-full font-bold hover:bg-gray-100 transition-all"
            >
              <Mail className="w-5 h-5" />
              Send an Email
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-12 px-4 text-center text-gray-500">
        <div className="container mx-auto max-w-4xl">
          <p className="mb-2">Built with passion • Oyinade Olawoyin</p>
          <p className="text-sm">© 2026 All rights reserved</p>
        </div>
      </footer>
    </div>
  );
}