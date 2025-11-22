import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/sections/Hero';
import BentoGrid from './components/sections/BentoGrid';
import Contact from './components/sections/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-paper-bg text-ink-black font-sans selection:bg-accent-yellow selection:text-ink-black">
      <Navbar />
      <main className="flex-grow">
        <div id="about">
          <Hero />
        </div>
        <BentoGrid />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;