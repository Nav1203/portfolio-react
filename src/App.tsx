import React, { useCallback, useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Expertise from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import PulseBoot from './components/PulseBoot';

function App() {
  const [hasBooted, setHasBooted] = useState(
    () => typeof window !== 'undefined' && sessionStorage.getItem('hasBooted') === 'true'
  );
  // Fixed at mount: true only when the boot animation is about to play on
  // this page load, so Hero can skip its own type-in and hand off in sync.
  const [willPlayBoot] = useState(() => !hasBooted);
  const completeBoot = useCallback(() => {
    sessionStorage.setItem('hasBooted', 'true');
    setHasBooted(true);
  }, []);

  return (
    <div className="App">
      {!hasBooted && <PulseBoot onComplete={completeBoot} />}
      <Navbar />
      <Hero skipTypingIntro={willPlayBoot} startSignal={hasBooted || !willPlayBoot} />
      <About />
      <Skills />
      <Expertise />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
