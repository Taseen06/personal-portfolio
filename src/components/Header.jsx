import { useState } from 'react';
import { FaGithub, FaLinkedin, FaInstagram, FaTwitter, FaEllipsisH, FaTimes } from 'react-icons/fa';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    // Prevent background scrolling when menu is active
    if (!isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  };

  return (
    <>
      {/* --- Sticky Navigation Bar --- */}
      <header className="sticky top-0 z-50 bg-navy text-white px-10 py-6 shadow-md flex justify-between items-center">
      <div className="relative group">
      <h1 className="text-4xl md:text-5xl font-signature px-2 text-white pb-1 leading-none ">
            Toufiqur Rahman Tasin
          </h1>
</div>
        
        <nav className="flex items-center gap-6">
          {/* Social Icons (Desktop Only) */}
          <div className="hidden md:flex gap-6 text-2xl">
            <a href="https://github.com/Taseen06" target="_blank" rel="noreferrer" className="hover:text-cyan transition-colors"><FaGithub /></a>
            <a href="https://www.linkedin.com/in/taseen06" target="_blank" rel="noreferrer" className="hover:text-cyan transition-colors"><FaLinkedin /></a>
            <a href="https://www.instagram.com/taseen06/" target="_blank" rel="noreferrer" className="hover:text-cyan transition-colors"><FaInstagram /></a>
            <a href="https://twitter.com/Toufiqur99" target="_blank" rel="noreferrer" className="hover:text-cyan transition-colors"><FaTwitter /></a>
          </div>

          {/* Menu Toggle Trigger */}
          <button 
            onClick={toggleMenu}
            className="text-2xl hover:text-cyan transition-all p-2 focus:outline-none"
          >
            <FaEllipsisH />
          </button>
        </nav>
      </header>

      {/* --- Full Screen Overlay Menu --- */}
      <div 
        className={`fixed inset-0 z-[100] bg-white transition-all duration-500 ease-in-out ${
          isMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
        }`}
      >
        {/* Top Bar inside Overlay */}
        <div className="flex justify-between items-center px-10 py-6 ">
           <h1 className="text-4xl md:text-5xl font-signature px-2 text-black pb-1 leading-none ">
            Toufiqur Rahman Tasin
          </h1>
          <button 
            onClick={toggleMenu} 
            className="text-3xl text-navy hover:rotate-90 transition-transform duration-300 p-2"
          >
            <FaTimes />
          </button>
        </div>

        {/* Vertical Navigation Links */}
        <div className="flex flex-col items-center justify-center h-[75vh] gap-4 md:gap-8">
          <div className={`transition-all duration-700 delay-100 ${isMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <MenuLink text="Home" onClick={toggleMenu} />
          </div>
          <div className={`transition-all duration-700 delay-200 ${isMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <MenuLink text="About" onClick={toggleMenu} />
          </div>
          <div className={`transition-all duration-700 delay-300 ${isMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <MenuLink text="Projects" onClick={toggleMenu} />
          </div>
          <div className={`transition-all duration-700 delay-400 ${isMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <MenuLink text="Education" onClick={toggleMenu} />
          </div>          
          <div className={`transition-all duration-700 delay-500 ${isMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <MenuLink text="Contact" onClick={toggleMenu} />
          </div>
        </div>

       
      </div>
    </>
  );
};

/* Reusable Link Component 
  Note: href is dynamically generated to match section IDs in App.jsx
*/
const MenuLink = ({ text, onClick }) => (
  <a 
    href={`#${text.toLowerCase()}`} 
    onClick={onClick}
    className="text-5xl md:text-8xl font-bold text-navy hover:text-sky-400 hover:italic hover:tracking-widest transition-all duration-300 cursor-pointer block text-center"
  >
    {text}
  </a>
);

export default Header;