import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope, FaMapMarkerAlt, FaPaperPlane } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer id="contact" className="relative w-full bg-[#0f172a] pt-24 pb-12 px-10 md:px-20 overflow-hidden border-t border-white/5">
      
      {/* Background Glows to match Hero theme */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-cyan/5 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-blue-600/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-16 mb-20">
          
          {/* Left Side: Contact Content */}
          <div className="flex-1 text-center md:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan/10 border border-cyan/20 mb-6 backdrop-blur-md">
              <FaPaperPlane className="text-cyan text-xs" />
              <span className="text-[10px] font-mono text-cyan tracking-widest uppercase font-bold">Available for Talk</span>
            </div>

            <h2 className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tighter leading-none">
              Let's build the <br /> 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan to-blue-400">Next Big Thing.</span>
            </h2>
            
            <p className="text-xl text-slate-400 mb-8 max-w-xl font-light">
              Discuss a project or just want to say hi? My inbox is always open for bold ideas and technical challenges.
            </p>

            {/* Info Badges */}
            <div className="flex flex-wrap justify-center md:justify-start gap-4 mb-10">
              <div className="flex items-center gap-3 bg-white/5 border border-white/10 px-5 py-3 rounded-2xl backdrop-blur-xl">
                <FaEnvelope className="text-cyan" />
                <span className="text-white font-medium">tasin@example.com</span>
              </div>
              <div className="flex items-center gap-3 bg-white/5 border border-white/10 px-5 py-3 rounded-2xl backdrop-blur-xl">
                <FaMapMarkerAlt className="text-cyan" />
                <span className="text-white font-medium">Sylhet, Bangladesh</span>
              </div>
            </div>

            {/* Premium Social Icons */}
            <div className="flex justify-center md:justify-start gap-5">
              <SocialIcon icon={<FaLinkedin />} link="#" label="LinkedIn" />
              <SocialIcon icon={<FaGithub />} link="#" label="GitHub" />
              <SocialIcon icon={<FaInstagram />} link="#" label="Instagram" />
            </div>
          </div>

          {/* Right Side: Visual Profile Component */}
          <div className="relative">
            {/* Animated Ring */}
            <div className="absolute inset-0 border-2 border-cyan/20 rounded-full scale-110 animate-pulse"></div>
            
            <div className="relative w-64 h-64 md:w-96 md:h-96 rounded-full bg-gradient-to-b from-slate-800 to-navy border-[12px] border-white/5 overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.5)]">
              <img 
                src="/profile.png" 
                alt="Toufiqur Rahman Tasin" 
                className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity duration-500 scale-110"
              />
              {/* Overlay Gradient for Profile */}
              <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-transparent to-transparent"></div>
            </div>
            
            {/* Floating Experience Badge */}
            <div className="absolute -bottom-4 -right-4 bg-white px-6 py-4 rounded-2xl shadow-2xl transform rotate-3 hover:rotate-0 transition-transform cursor-default">
              <p className="text-navy font-black text-2xl leading-none">2+</p>
              <p className="text-slate-500 text-[10px] font-bold uppercase tracking-tighter">Years of Dev</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-slate-500 text-sm font-medium">
            © 2026 Toufiqur Rahman Tasin. Built with <span className="text-cyan">React & Tailwind.</span>
          </p>
          <div className="text-slate-500 text-[10px] font-mono tracking-[0.4em] uppercase italic">
            Quality Over Quantity
          </div>
        </div>
      </div>
    </footer>
  );
};

// Refined Social Icon Component
const SocialIcon = ({ icon, link, label }) => (
  <a 
    href={link} 
    target="_blank" 
    rel="noreferrer"
    className="group relative flex items-center justify-center w-14 h-14 bg-white/5 border border-white/10 rounded-2xl text-white text-2xl hover:border-cyan/50 hover:bg-cyan hover:text-navy transition-all duration-500 shadow-xl"
  >
    {icon}
    <span className="absolute -top-10 scale-0 group-hover:scale-100 transition-all duration-300 bg-white text-navy text-[10px] font-bold px-2 py-1 rounded">
      {label}
    </span>
  </a>
);

export default Footer;