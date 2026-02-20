import { 
  FaReact, FaPython, FaNodeJs, FaTerminal, FaChevronRight, 
  FaDocker, FaDatabase, FaCode, FaServer 
} from 'react-icons/fa';
import { SiDjango, SiJavascript, SiTailwindcss, SiNextdotjs } from 'react-icons/si';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen bg-[#0f172a] flex items-center justify-center px-10 md:px-20 overflow-hidden">
      
      {/* REFINED GRADIENT BACKGROUND: 
          Uses a radial gradient to create a 'light' center that fades into a deep navy.
      */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_#1e293b_0%,_#0f172a_100%)]"></div>

      {/* Decorative Glow Orbs - Opacity slightly increased for the 'Light' effect */}
      <div className="absolute top-[-5%] right-[-5%] w-[600px] h-[600px] bg-cyan/20 rounded-full blur-[120px] animate-pulse"></div>
      <div className="absolute bottom-[-5%] left-[-5%] w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-[100px]"></div>
      
      {/* Subtle Grid Pattern Overlay */}
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none" 
           style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 30 L30 0 M30 30 L60 30' stroke='%23ffffff' stroke-width='1' fill='none' /%3E%3C/svg%3E")` }}>
      </div>

      <div className="max-w-7xl w-full grid lg:grid-cols-2 gap-12 items-center z-10">
        
        {/* Left Side: Content */}
        <div className="text-left">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 mb-8 backdrop-blur-xl">
            <span className="w-2 h-2 rounded-full bg-cyan shadow-[0_0_10px_#00d4ff] animate-ping"></span>
            <span className="text-[10px] font-mono text-cyan tracking-[0.2em] uppercase font-bold">Available for new opportunities</span>
          </div>

          <h1 className="text-6xl md:text-[5.5rem] font-black text-white mb-6 tracking-tighter leading-[0.9] drop-shadow-2xl">
            Software <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan via-blue-400 to-indigo-400">Architect</span> <br />
            & Engineer<span className="text-cyan">.</span>
          </h1>
          
          <h2 className="text-xl md:text-3xl font-light text-slate-300 mb-8 max-w-xl leading-relaxed">
            Specializing in <span className="text-white font-semibold">high-load architectures</span> and elegant interface engineering.
          </h2>
          
          <p className="max-w-xl text-lg text-slate-400 mb-12 leading-relaxed font-normal border-l-2 border-cyan/30 pl-6">
            I am <span className="text-white font-medium">Toufiqur Rahman Tasin</span>. I transform complex business requirements into scalable, clean-code reality using the modern web stack.
          </p>

          <div className="flex flex-col sm:flex-row gap-5">
            <a 
              href="#projects" 
              className="group flex items-center justify-center gap-3 bg-cyan text-[#0f172a] px-10 py-4 rounded-2xl font-bold hover:bg-white transition-all duration-500 shadow-[0_10px_30px_-10px_rgba(0,212,255,0.5)] active:scale-95"
            >
              Check out my work!
              <FaChevronRight className="group-hover:translate-x-2 transition-transform text-sm" />
            </a>
            
            <a 
              href="#contact" 
              className="flex items-center justify-center border-2 border-white/10 text-white px-10 py-4 rounded-2xl font-bold hover:bg-white hover:text-navy transition-all backdrop-blur-md active:scale-95"
            >
              Contact Me
            </a>
          </div>
        </div>

        {/* Right Side: Enhanced Tech Cloud */}
        <div className="hidden lg:block relative h-[600px] w-full">
          {/* Central Anchor */}
          <Badge icon={<SiDjango className="text-white" />} text="Django Core" pos="top-[40%] left-[35%]" size="p-7 scale-125 border-cyan/40" />
          
          {/* Satellite Expertise */}
          <Badge icon={<FaReact className="text-[#61DAFB]" />} text="React.js" pos="top-[10%] left-[10%]" delay="0s" />
          <Badge icon={<FaPython className="text-[#FFE873]" />} text="Python 3" pos="top-[15%] right-[15%]" delay="1.5s" />
          <Badge icon={<SiNextdotjs className="text-white" />} text="Next.js" pos="bottom-[15%] left-[15%]" delay="0.5s" />
          <Badge icon={<FaNodeJs className="text-[#8CC84B]" />} text="Node.js" pos="bottom-[20%] right-[10%]" delay="2s" />
          <Badge icon={<FaDocker className="text-[#2496ED]" />} text="Containerization" pos="top-[50%] -right-10" delay="0.8s" />
          <Badge icon={<SiTailwindcss className="text-[#38BDF8]" />} text="Interface" pos="bottom-[45%] -left-12" delay="1.2s" />
          <Badge icon={<FaDatabase className="text-cyan" />} text="Scalable DB" pos="top-[65%] left-[40%]" delay="2.5s" />
        </div>
      </div>
    </section>
  );
};

// Reusable Premium Badge
const Badge = ({ icon, text, pos, delay, size = "p-4", border = "border-white/10" }) => (
  <div 
    style={{ animationDelay: delay }}
    className={`absolute ${pos} ${size} flex items-center gap-3 bg-white/5 backdrop-blur-2xl border ${border} rounded-[2rem] shadow-[0_20px_50px_rgba(0,0,0,0.3)] animate-bounce-slow hover:border-cyan/60 hover:bg-white/10 transition-all duration-700 group z-20 cursor-default`}
  >
    <div className="text-4xl drop-shadow-[0_0_10px_rgba(255,255,255,0.2)] group-hover:scale-110 transition-transform">
      {icon}
    </div>
    <div className="hidden xl:flex flex-col">
      <span className="text-[9px] text-cyan font-black tracking-[0.25em] uppercase opacity-80">Tech Stack</span>
      <span className="font-bold text-white text-[13px] whitespace-nowrap tracking-tight">{text}</span>
    </div>
  </div>
);

export default Hero;