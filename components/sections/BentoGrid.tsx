import { ArrowRight, ArrowUpRight, BookOpen, Code, Database, GraduationCap, Mail, MapPin, Server, Star, Terminal, Trophy } from 'lucide-react';
import React from 'react';
import { RESUME_DATA } from '../../constants';
import Card from '../ui/Card';

const BentoGrid: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6 px-4 pb-20 max-w-7xl mx-auto">

      {/* --- ROW 1 --- */}

      {/* Projects Highlight (Large Box) */}
      <div className="md:col-span-7 flex flex-col h-full">
        <Card className="h-full bg-[#FAF9F6] relative group" id="projects">
          <div className="flex justify-between items-start mb-6">
            <div>
              <h2 className="font-display text-3xl font-bold">Projects</h2>
              <p className="text-ink-gray mt-1">Recent development work</p>
            </div>
            <div className="p-3 bg-ink-black text-white rounded-full">
              <Code size={24} />
            </div>
          </div>

          <div className="space-y-4">
            {RESUME_DATA.projects.map((project, idx) => (
              <div key={idx} className="group/item bg-white border border-ink-black rounded-xl p-4 transition-all hover:shadow-md cursor-default">
                <div className="flex justify-between items-start mb-2">
                  <div className="flex flex-wrap items-center gap-2">
                    <h3 className="font-bold text-lg leading-tight">{project.title}</h3>
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-[10px] uppercase tracking-wider font-bold border border-ink-black px-2 py-0.5 rounded-full hover:bg-ink-black hover:text-white transition-colors"
                      >
                        View <ArrowUpRight size={10} />
                      </a>
                    )}
                  </div>
                  <span className="text-xs font-bold border border-ink-black px-2 py-1 rounded bg-accent-yellow shrink-0 ml-2">
                    {project.tech}
                  </span>
                </div>
                <p className="text-sm text-ink-gray">{project.description}</p>
              </div>
            ))}
          </div>

          <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-accent-orange rounded-full blur-3xl opacity-20 group-hover:opacity-30 transition-opacity"></div>
        </Card>
      </div>

      {/* Experience (Tall Box) */}
      <div className="md:col-span-5 flex flex-col h-full">
        <Card className="h-full bg-ink-black text-white" id="experience">
          <div className="flex items-center justify-between mb-8">
             <h2 className="font-display text-3xl font-bold text-white">Experience</h2>
             <Terminal className="text-accent-yellow" />
          </div>

          <div className="space-y-8">
            {RESUME_DATA.experience.map((job, idx) => (
              <div key={idx} className="relative pl-6 border-l border-gray-700">
                 <div className="absolute -left-1.5 top-1.5 w-3 h-3 rounded-full bg-accent-yellow"></div>
                 <h3 className="text-xl font-bold">{job.company}</h3>
                 <div className="flex items-center gap-2 text-gray-400 text-sm mb-3">
                   <span>{job.role}</span>
                   <span>•</span>
                   <span>{job.period}</span>
                 </div>
                 <ul className="space-y-3">
                   {job.details.map((detail, dIdx) => (
                     <li key={dIdx} className="text-gray-300 text-sm leading-relaxed">
                       {detail}
                     </li>
                   ))}
                 </ul>
              </div>
            ))}
          </div>

          <div className="mt-auto pt-8 flex items-center gap-2">
            <div className="h-[1px] bg-gray-700 flex-1"></div>
            <span className="text-xs text-gray-500 uppercase tracking-widest">Work History</span>
          </div>
        </Card>
      </div>

      {/* --- ROW 2 --- */}

      {/* Skills (Wide Box) */}
      <div className="md:col-span-8">
        <Card className="h-full bg-accent-yellow" id="skills">
          <div className="flex flex-col h-full justify-between">
            <div>
               <h2 className="font-display text-3xl font-bold mb-6">Technical Arsenal</h2>
               <div className="flex flex-wrap gap-3">
                 {RESUME_DATA.skills.map((skill, idx) => (
                   <span
                    key={idx}
                    className="bg-white border border-ink-black px-4 py-2 rounded-lg font-medium text-sm shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:bg-ink-black hover:text-white hover:-translate-y-1 hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all cursor-default animate-fade-in-up"
                    style={{ animationDelay: `${idx * 100}ms` }}
                    title={skill}
                   >
                     {skill}
                   </span>
                 ))}
               </div>
            </div>

            <div className="mt-8 pt-6 border-t border-ink-black border-dashed flex justify-between items-end">
               <div>
                 <p className="font-bold text-sm mb-2">Tools & Frameworks</p>
                 <div className="flex gap-4 text-ink-black opacity-75">
                    <Server size={20} />
                    <Database size={20} />
                    <Terminal size={20} />
                 </div>
               </div>
               <span className="text-4xl font-display font-bold opacity-50">10+</span>
            </div>
          </div>
        </Card>
      </div>

      {/* Education (Square Box) */}
      <div className="md:col-span-4">
        <Card className="h-full flex flex-col justify-between bg-white relative overflow-hidden group">
           {/* Decorative Background */}
           <div className="absolute -right-4 top-12 opacity-5 transform rotate-12 group-hover:scale-110 group-hover:opacity-10 transition-all duration-500">
             <GraduationCap size={180} />
           </div>

           <div className="flex justify-between items-start relative z-10">
             <div className="p-2 bg-[#E0E7FF] rounded-lg border border-ink-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
               <BookOpen className="text-indigo-600" size={24} />
             </div>
             <span className="font-display font-bold text-3xl text-ink-black/20 group-hover:text-ink-black/40 transition-colors">{RESUME_DATA.education.year}</span>
           </div>

           <div className="mt-6 relative z-10">
             <h3 className="font-bold text-xl leading-tight mb-2">{RESUME_DATA.education.institution}</h3>
             <p className="text-ink-gray text-sm font-medium">{RESUME_DATA.education.degree}</p>
             <div className="mt-4 inline-block bg-[#E0E7FF] text-indigo-900 text-xs font-bold px-3 py-1 rounded-full border border-ink-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
               GPA: {RESUME_DATA.education.grade}
             </div>
           </div>
        </Card>
      </div>

      {/* --- ROW 3 --- */}

      {/* Certificates (Medium Box) */}
      <div className="md:col-span-4">
        <Card className="h-full bg-[#FDF2F8]"> {/* Light Pinkish */}
           <h2 className="font-display text-xl font-bold mb-4 flex items-center gap-2">
             <Trophy size={20} className="text-pink-500" />
             Certifications
           </h2>
           <div className="space-y-4">
             {RESUME_DATA.certificates.map((cert, idx) => (
               <div key={idx} className="flex items-start gap-3 border-b border-pink-200 last:border-0 pb-3 last:pb-0">
                  <div className="mt-1 min-w-[6px] h-[6px] rounded-full bg-pink-500"></div>
                  <div>
                    <p className="font-bold text-sm leading-tight">{cert.name}</p>
                    <p className="text-xs text-pink-600 mt-0.5">{cert.issuer} • {cert.date}</p>
                  </div>
               </div>
             ))}
           </div>
        </Card>
      </div>

      {/* Naddi Castle (Feature Card with Image Feel) */}
      <div className="md:col-span-4">
        <Card className="h-full relative overflow-hidden group min-h-[300px]" noPadding>
           {/* Background Image with Overlay */}
           <div className="absolute inset-0 bg-ink-black">
             <img
               src="https://images.unsplash.com/photo-1542718610-a1d656d1884c?q=80&w=1000&auto=format&fit=crop"
               alt="Naddi Castle Surroundings"
               className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-700"
             />
             <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
           </div>

           <div className="relative z-10 flex flex-col h-full justify-between p-6 text-white">
             <div>
               <div className="flex items-center gap-2 mb-3">
                  <div className="p-1.5 bg-white/20 backdrop-blur-md rounded-full border border-white/10 shadow-sm">
                    <MapPin size={14} className="text-white" />
                  </div>
                  <span className="font-bold text-xs uppercase tracking-wider text-white/90">Host Experience</span>
               </div>
               <h3 className="font-display text-2xl font-bold leading-tight mb-2 shadow-black drop-shadow-md">{RESUME_DATA.extra.title}</h3>
               <p className="text-white/90 text-sm leading-relaxed drop-shadow-sm line-clamp-3">{RESUME_DATA.extra.description}</p>
             </div>

             <div className="mt-6 bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20 shadow-lg group-hover:bg-white/20 transition-colors">
                <div className="flex justify-between items-center divide-x divide-white/20">
                  <div className="flex-1 text-center px-2">
                    <p className="text-[10px] uppercase tracking-wider opacity-80 mb-1">Google</p>
                    <div className="flex items-center gap-1 justify-center">
                      <span className="font-bold text-xl">4.7</span>
                      <Star size={12} fill="currentColor" className="text-yellow-400" />
                    </div>
                  </div>
                  <div className="flex-1 text-center px-2">
                    <p className="text-[10px] uppercase tracking-wider opacity-80 mb-1">Booking</p>
                    <p className="font-bold text-xl">9.4</p>
                  </div>
                </div>
             </div>
           </div>
        </Card>
      </div>

      {/* Contact CTA (End Box) */}
      <div className="md:col-span-4">
        <Card className="h-full bg-ink-black text-white flex flex-col justify-center items-center text-center p-8 group cursor-pointer" hoverEffect={false}>
           <a href={`mailto:${RESUME_DATA.contact.find(c => c.label === 'Email')?.value}`} className="flex flex-col items-center w-full h-full justify-center">
             <div className="w-16 h-16 rounded-full border-2 border-white flex items-center justify-center mb-4 group-hover:scale-110 transition-transform bg-white text-ink-black">
               <Mail size={32} />
             </div>
             <h3 className="font-display text-2xl font-bold mb-2">Let's Talk</h3>
             <p className="text-gray-400 text-sm mb-4">Have a project in mind?</p>
             <div className="flex items-center gap-2 text-accent-yellow font-bold text-sm group-hover:underline">
               Send Email <ArrowRight size={16} />
             </div>
           </a>
        </Card>
      </div>

    </div>
  );
};

export default BentoGrid;
