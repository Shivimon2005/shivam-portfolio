import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
  ];

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        setIsOpen(false);
      }
    }
  };

  return (
    <nav className="w-full py-6 px-4 md:px-8 max-w-7xl mx-auto">
      <div className="bg-card-bg border border-ink-black rounded-full px-6 py-3 flex items-center justify-between shadow-sm">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-ink-black rounded-full flex items-center justify-center text-white font-bold font-display">
            S
          </div>
          <span className="font-display font-bold text-lg tracking-tight">Shivam</span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              onClick={(e) => handleScroll(e, link.href)}
              className="text-sm font-medium text-ink-black hover:underline underline-offset-4 decoration-2"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* CTA */}
        <div className="hidden md:block">
          <a 
            href="mailto:s.ksharma30189@gmail.com"
            className="bg-accent-yellow border border-ink-black px-6 py-2 rounded-full text-sm font-bold hover:bg-yellow-400 transition-colors shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] active:translate-y-0.5 active:shadow-none"
          >
            Get in touch
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden p-1" 
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="mt-2 bg-card-bg border border-ink-black rounded-2xl p-4 md:hidden flex flex-col gap-4 absolute z-50 left-4 right-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              onClick={(e) => handleScroll(e, link.href)}
              className="text-lg font-medium text-center py-2 border-b border-gray-100 last:border-none"
            >
              {link.name}
            </a>
          ))}
          <a 
            href="mailto:s.ksharma30189@gmail.com"
            className="bg-accent-yellow text-center border border-ink-black px-6 py-3 rounded-full font-bold shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"
          >
            Get in touch
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;