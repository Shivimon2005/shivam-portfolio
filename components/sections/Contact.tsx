import { Check, Linkedin, Mail, MapPin, Phone, Send } from 'lucide-react';
import React, { useState } from 'react';
import { RESUME_DATA } from '../../constants';

const Contact: React.FC = () => {
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');
    // Simulate network request
    setTimeout(() => {
      setFormStatus('success');
    }, 1500);
  };

  const getIcon = (label: string) => {
    switch (label.toLowerCase()) {
      case 'email': return <Mail size={20} />;
      case 'phone': return <Phone size={20} />;
      case 'location': return <MapPin size={20} />;
      case 'linkedin': return <Linkedin size={20} />;
      default: return <Mail size={20} />;
    }
  };

  return (
    <section id="contact" className="px-4 pb-20 max-w-7xl mx-auto">
        <div className="bg-ink-black text-white rounded-3xl p-6 md:p-12 overflow-hidden relative shadow-[8px_8px_0px_0px_#EDF259] border-2 border-ink-black">

            <div className="grid md:grid-cols-2 gap-12 relative z-10">
                {/* Left Side */}
                <div className="flex flex-col justify-center">
                    <div className="mb-8">
                        <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">Get in Touch</h2>
                        <p className="text-gray-400 text-lg">
                            Have a project in mind or want to discuss automation?
                            I'm always open to discussing new opportunities and ideas.
                        </p>
                    </div>

                    <div className="space-y-4">
                        {RESUME_DATA.contact.map((item, idx) => (
                            <a
                                key={idx}
                                href={item.href}
                                className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all hover:translate-x-2 group"
                            >
                                <div className="bg-accent-yellow text-ink-black p-3 rounded-full group-hover:scale-110 transition-transform">
                                    {getIcon(item.label)}
                                </div>
                                <div>
                                    <p className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-0.5">{item.label}</p>
                                    <p className="text-lg font-medium text-white">{item.value}</p>
                                </div>
                            </a>
                        ))}
                    </div>
                </div>

                {/* Right Side - Form */}
                <div className="bg-white rounded-2xl p-6 md:p-8 text-ink-black border border-ink-black shadow-[4px_4px_0px_0px_rgba(255,255,255,0.3)]">
                    {formStatus === 'success' ? (
                         <div className="h-full min-h-[400px] flex flex-col items-center justify-center text-center">
                            <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6 animate-bounce">
                                <Check size={40} />
                            </div>
                            <h3 className="font-display text-3xl font-bold mb-2">Message Sent!</h3>
                            <p className="text-ink-gray mb-8">Thank you for reaching out. I'll get back to you shortly.</p>
                            <button
                                onClick={() => setFormStatus('idle')}
                                className="text-sm font-bold underline hover:text-accent-orange transition-colors"
                            >
                                Send another message
                            </button>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className="space-y-5">
                            <h3 className="font-display text-2xl font-bold mb-2">Send a Message</h3>

                            <div className="space-y-1">
                                <label htmlFor="name" className="text-sm font-bold ml-1">Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    required
                                    className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-ink-black focus:ring-0 outline-none transition-all"
                                    placeholder="Your Name"
                                />
                            </div>

                            <div className="space-y-1">
                                <label htmlFor="email" className="text-sm font-bold ml-1">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    required
                                    className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-ink-black focus:ring-0 outline-none transition-all"
                                    placeholder="your@email.com"
                                />
                            </div>

                             <div className="space-y-1">
                                <label htmlFor="message" className="text-sm font-bold ml-1">Message</label>
                                <textarea
                                    id="message"
                                    required
                                    rows={4}
                                    className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-ink-black focus:ring-0 outline-none transition-all resize-none"
                                    placeholder="How can I help you?"
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                disabled={formStatus === 'submitting'}
                                className="w-full bg-ink-black text-white py-4 rounded-xl font-bold text-lg shadow-[4px_4px_0px_0px_#EDF259] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_0px_#EDF259] active:translate-y-[0px] active:shadow-[0px_0px_0px_0px_#EDF259] transition-all flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                            >
                                {formStatus === 'submitting' ? 'Sending...' : (
                                    <>Send Message <Send size={18} /></>
                                )}
                            </button>
                        </form>
                    )}
                </div>
            </div>

            {/* Decorations */}
            <div className="absolute -top-32 -right-32 w-96 h-96 bg-accent-orange rounded-full blur-[120px] opacity-20 pointer-events-none"></div>
            <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-accent-yellow rounded-full blur-[120px] opacity-10 pointer-events-none"></div>
        </div>
    </section>
  );
};

export default Contact;
