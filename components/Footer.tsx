import { Linkedin, Mail, MapPin, Phone } from 'lucide-react';
import React from 'react';
import { RESUME_DATA } from '../constants';

const Footer: React.FC = () => {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string | undefined) => {
    if (href?.startsWith('#')) {
      e.preventDefault();
      if (href === '#') return;
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const getIcon = (iconName: string) => {
    switch(iconName) {
        case 'mail': return <Mail size={16} />;
        case 'phone': return <Phone size={16} />;
        case 'map': return <MapPin size={16} />;
        case 'linkedin': return <Linkedin size={16} />;
        default: return null;
    }
  };

  return (
    <footer className="w-full py-8 border-t border-gray-200 mt-auto bg-white">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="text-sm font-medium text-ink-gray">
          © {new Date().getFullYear()} {RESUME_DATA.name}. All rights reserved.
        </div>
        <div className="flex gap-6">
           {RESUME_DATA.contact.map((contact, idx) => (
             <a
               key={idx}
               href={contact.href}
               onClick={(e) => handleScroll(e, contact.href)}
               className="flex items-center gap-2 text-base md:text-sm font-bold text-ink-black transition-all duration-300 hover:-translate-y-1 hover:scale-110 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-orange-600 hover:to-pink-600"
             >
               <span className="text-ink-black">{getIcon(contact.icon)}</span>
               <span>{contact.label}</span>
             </a>
           ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
