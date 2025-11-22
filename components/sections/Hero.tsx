import React from 'react';
import { RESUME_DATA } from '../../constants';

const Hero: React.FC = () => {
  return (
    <div className="flex flex-col items-center text-center py-12 md:py-20 px-4 space-y-6">
      <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-ink-black bg-white text-xs font-bold uppercase tracking-wide shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
        <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
        Available for work
      </div>

      <h1 className="font-display text-4xl md:text-7xl lg:text-8xl font-medium tracking-tight leading-[0.95]">
        {RESUME_DATA.role.split(' ').map((word, i) => (
          <span key={i} className="block md:inline-block mx-2">{word}</span>
        ))}
      </h1>

      <p className="max-w-2xl text-lg md:text-xl text-ink-gray leading-relaxed">
        {RESUME_DATA.summary}
      </p>

      <div className="flex flex-wrap gap-4 justify-center pt-4">
        {RESUME_DATA.skills.slice(0, 4).map(skill => (
           <span key={skill} className="px-4 py-2 border border-ink-black rounded-full bg-white text-sm font-medium transform -rotate-1 hover:rotate-0 transition-transform">
             {skill}
           </span>
        ))}
      </div>
    </div>
  );
};

export default Hero;
