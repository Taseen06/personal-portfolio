import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Education from './components/Education';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-white min-h-screen">
      {/* The Header contains the navigation logic */}
      <Header />

      <main>
        {/* Each section ID must match the text.toLowerCase() from Header.jsx */}
        
        <section id="home">
          <Hero />
        </section>

        {/* scroll-mt-20 ensures the sticky header doesn't cover the title when scrolling */}
        <section id="about" className="scroll-mt-20">
          <About />
        </section>

        <section id="projects" className="scroll-mt-20">
          <Projects />
        </section>

        <section id="education" className="scroll-mt-20">
          <Education />
        </section>
      </main>

      {/* The Footer serves as the 'Contact' destination */}
      <footer id="contact" className="scroll-mt-20">
        <Footer />
      </footer>
    </div>
  );
}

export default App;