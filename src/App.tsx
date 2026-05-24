import React, { useCallback, useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Expertise from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import TerminalBoot from './components/TerminalBoot';

function App() {
  const [hasBooted, setHasBooted] = useState(false);
  const completeBoot = useCallback(() => setHasBooted(true), []);

  return (
    <div className="App">
      {!hasBooted && <TerminalBoot onComplete={completeBoot} />}
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Expertise />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
