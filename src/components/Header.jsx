import React, { useState } from 'react';
import { MoreHorizontal, X, Instagram, Github, Linkedin } from 'lucide-react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <>
      {/* --- Main Navigation Bar --- */}
      <header className="bg-[#112240] text-white px-6 md:px-16 py-3 flex justify-between items-center fixed w-full top-0 z-40 shadow-xl">
        
        {/* Fancy Signature Logo (Left Aligned) */}
        <div 
          className="text-3xl md:text-5xl tracking-wider cursor-pointer select-none py-2"
          style={{ 
            fontFamily: "'Mrs Saint Delafield', cursive",
            textShadow: "0px 2px 4px rgba(0,0,0,0.3)" 
          }}
        >
          Toufiqur Rahman Tasin
        </div>

        {/* Right Side Group */}
        <div className="flex items-center gap-8">
          {/* Social Icons with subtle hover glow */}
          <div className="hidden sm:flex items-center gap-6">
            <Instagram size={19} className="hover:text-pink-400 cursor-pointer transition-all duration-300 hover:-translate-y-1" />
            <Github size={19} className="hover:text-gray-400 cursor-pointer transition-all duration-300 hover:-translate-y-1" />
            <Linkedin size={19} className="hover:text-blue-400 cursor-pointer transition-all duration-300 hover:-translate-y-1" />
          </div>

          {/* More Icon */}
          <button 
            onClick={toggleMenu} 
            className="hover:bg-white/10 p-2 rounded-full transition-all duration-300"
          >
            <MoreHorizontal size={30} />
          </button>
        </div>
      </header>

      {/* --- Full Screen Overlay Menu --- */}
      <div 
        className={`fixed inset-0 bg-white z-50 transition-all duration-700 ease-[cubic-bezier(0.19,1,0.22,1)] flex flex-col ${
          isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full pointer-events-none'
        }`}
      >
        <div className="flex justify-between p-10 items-center text-black">
          <span className="font-black tracking-[0.3em] text-xs uppercase opacity-50">TASIN</span>
          <button onClick={toggleMenu} className="hover:rotate-180 transition-transform duration-500">
            <X size={40} strokeWidth={1} />
          </button>
        </div>

        <nav className="flex flex-col items-center justify-center flex-grow space-y-12">
          {['Home', 'Portfolio', 'About', 'Contact'].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase()}`}
              onClick={toggleMenu}
              className="group relative text-5xl md:text-8xl font-serif text-gray-900 transition-all"
            >
              <span className="relative z-10 group-hover:italic">{item}</span>
              {/* Animated underline effect */}
              <span className="absolute bottom-0 left-0 w-0 h-1 bg-black transition-all duration-500 group-hover:w-full"></span>
            </a>
          ))}
        </nav>
      </div>
    </>
  );
};

export default Header;