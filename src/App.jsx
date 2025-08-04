import React, { useEffect, useState } from 'react';
import { Lenis as ReactLenis } from 'lenis/react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import Education from './components/Education';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Achievements from './components/Achievements';
import Footer from './components/Footer';
import Preloader from './components/Preloader';
import BackToTopButton from './components/BackToTopButton';

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // The preloader timer
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 4500);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    // Wrap the entire app with the ReactLenis provider
    <ReactLenis root>
      {isLoading && <Preloader />}
      
      <div className="bg-gray-900 text-white overflow-x-hidden">
        <Header />
        <main>
          <HeroSection />
          <Education />
          <Experience />
          <Projects />
          <Skills />
          <Achievements />
          <Footer />
        </main>
        <BackToTopButton />
      </div>
    </ReactLenis>
  );
};

export default App;
