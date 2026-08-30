import React, { useState } from 'react';
import { X } from 'lucide-react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const WHATSAPP_NUMBER = '918628989364';

const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  const [name, setName] = useState('');
  const [companyRole, setCompanyRole] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  if (!isOpen) return null;

  const resetAndClose = () => {
    setName('');
    setCompanyRole('');
    setMessage('');
    setError('');
    onClose();
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!name.trim() || !message.trim()) {
      setError('Please fill in your name and a short message.');
      return;
    }

    let text = `Hi Shivam, I'm ${name.trim()}`;
    if (companyRole.trim()) {
      text += ` (${companyRole.trim()})`;
    }
    text += `.\n\n${message.trim()}`;

    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
    resetAndClose();
  };

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-ink-black/50 backdrop-blur-sm px-4"
      onClick={resetAndClose}
    >
      <div
        className="w-full max-w-md bg-card-bg border border-ink-black rounded-2xl p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={resetAndClose}
          aria-label="Close"
          className="absolute top-4 right-4 p-1 rounded-full hover:bg-paper-bg transition-colors"
        >
          <X size={20} />
        </button>

        <h3 className="font-display font-bold text-xl mb-1">Let's connect</h3>
        <p className="text-ink-gray text-sm mb-6">
          Quick intro before we chat on WhatsApp.
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div>
            <label htmlFor="contact-name" className="block text-sm font-medium mb-1">
              Your name
            </label>
            <input
              id="contact-name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="e.g. Priya Sharma"
              className="w-full border border-ink-black rounded-xl px-4 py-2 bg-paper-bg focus:outline-none focus:ring-2 focus:ring-accent-yellow"
            />
          </div>

          <div>
            <label htmlFor="contact-role" className="block text-sm font-medium mb-1">
              Company / Role (optional)
            </label>
            <input
              id="contact-role"
              type="text"
              value={companyRole}
              onChange={(e) => setCompanyRole(e.target.value)}
              placeholder="e.g. Hiring Manager at Acme"
              className="w-full border border-ink-black rounded-xl px-4 py-2 bg-paper-bg focus:outline-none focus:ring-2 focus:ring-accent-yellow"
            />
          </div>

          <div>
            <label htmlFor="contact-message" className="block text-sm font-medium mb-1">
              What would you like to discuss?
            </label>
            <textarea
              id="contact-message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Tell me a bit about why you're reaching out..."
              rows={3}
              className="w-full border border-ink-black rounded-xl px-4 py-2 bg-paper-bg focus:outline-none focus:ring-2 focus:ring-accent-yellow resize-none"
            />
          </div>

          {error && <p className="text-accent-orange text-sm">{error}</p>}

          <button
            type="submit"
            className="mt-2 bg-accent-yellow border border-ink-black px-6 py-3 rounded-full font-bold shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] active:translate-y-0.5 active:shadow-none transition-colors hover:bg-yellow-400"
          >
            Continue to WhatsApp
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactModal;
