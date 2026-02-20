import { 
  FaCode, FaServer, FaTerminal, FaLightbulb, 
  FaPython, FaReact, FaJs, FaHtml5, FaCss3Alt, FaGitAlt, FaNodeJs, FaPhp, FaLaravel, FaDocker 
} from 'react-icons/fa';
import { 
  SiDjango, SiTailwindcss, SiPostgresql, SiFramer, SiExpress, SiNextdotjs, SiMongodb 
} from 'react-icons/si';

const About = () => {
  const services = [
    {
      icon: <FaCode className="text-cyan text-4xl" />,
      title: "Frontend Development",
      description: "Building responsive, high-performance web applications using React.js and modern CSS frameworks like Tailwind."
    },
    {
      icon: <FaServer className="text-cyan text-4xl" />,
      title: "Backend Development",
      description: "Crafting robust server-side logic and RESTful APIs using Python and Django to ensure seamless data flow."
    },
    {
      icon: <FaTerminal className="text-cyan text-4xl" />,
      title: "Software Solutions",
      description: "Developing custom tech solutions tailored to business needs, focusing on scalability and clean code architecture."
    },
    {
      icon: <FaLightbulb className="text-cyan text-4xl" />,
      title: "Creative Problem Solving",
      description: "Turning complex requirements into simple, elegant digital experiences through strategic thinking and modern tech stacks."
    }
  ];

  const technologies = [
    { name: "Python", icon: <FaPython className="text-[#3776AB]" /> },
    { name: "Django", icon: <SiDjango className="text-[#092E20]" /> },
    { name: "React.js", icon: <FaReact className="text-[#61DAFB]" /> },
    { name: "Next.js", icon: <SiNextdotjs className="text-black" /> },
    { name: "Node.js", icon: <FaNodeJs className="text-[#339933]" /> },
    { name: "Express", icon: <SiExpress className="text-black" /> },
    { name: "PHP", icon: <FaPhp className="text-[#777BB4]" /> },
    { name: "Laravel", icon: <FaLaravel className="text-[#FF2D20]" /> },
    { name: "Docker", icon: <FaDocker className="text-[#2496ED]" /> },
    { name: "MongoDB", icon: <SiMongodb className="text-[#47A248]" /> },
    { name: "PostgreSQL", icon: <SiPostgresql className="text-[#4169E1]" /> },
    { name: "Tailwind", icon: <SiTailwindcss className="text-[#06B6D4]" /> },
  ];

  return (
    <section id="about" className="py-24 px-10 md:px-20 bg-white">
      <div className="max-w-7xl mx-auto">
        
        {/* About Content */}
        <div className="flex flex-col lg:flex-row gap-16 mb-20 items-center">
          <div className="flex-1">
            <h2 className="text-4xl md:text-5xl font-extrabold text-navy mb-6 tracking-tight">
              About Me
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              I am a passionate <span className="text-navy font-bold">Full Stack Developer</span> based in Sylhet, Bangladesh. 
              My journey in tech is driven by a desire to craft seamless digital solutions that solve real-world business challenges.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              With expertise in <span className="text-teal-600 font-semibold">Python, Django, and React.js</span>, 
              I specialize in bridging the gap between complex backend logic and intuitive frontend interfaces.
            </p>
          </div>
          
          <div className="flex-1 grid grid-cols-2 gap-4">
            <div className="p-8 bg-gray-50 rounded-2xl border-b-4 border-cyan text-center">
              <span className="block text-4xl font-bold text-navy mb-2">2+</span>
              <span className="text-gray-500 uppercase text-xs tracking-widest">Years Experience</span>
            </div>
            <div className="p-8 bg-gray-50 rounded-2xl border-b-4 border-navy text-center">
              <span className="block text-4xl font-bold text-navy mb-2">20+</span>
              <span className="text-gray-500 uppercase text-xs tracking-widest">Projects Done</span>
            </div>
          </div>
        </div>

        {/* What I Do Grid */}
        <h3 className="text-2xl font-bold text-navy mb-12 text-center uppercase tracking-[0.2em]">What I Do</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
          {services.map((service, index) => (
            <div key={index} className="group p-8 rounded-3xl bg-gray-50 hover:bg-navy transition-all duration-500 hover:-translate-y-2">
              <div className="mb-6 group-hover:scale-110 transition-transform duration-500">
                {service.icon}
              </div>
              <h4 className="text-xl font-bold text-navy group-hover:text-white mb-4 transition-colors">
                {service.title}
              </h4>
              <p className="text-gray-600 group-hover:text-gray-300 transition-colors leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        {/* Technologies Section */}
        <div className="border-t border-gray-100 pt-16">
          <h3 className="text-xl font-bold text-gray-400 mb-12 text-center uppercase tracking-[0.3em]">Technologies I Use</h3>
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-y-10 gap-x-4">
            {technologies.map((tech, index) => (
              <div key={index} className="flex flex-col items-center gap-3 group">
                <div className="text-5xl filter grayscale group-hover:grayscale-0 transition-all duration-300 transform group-hover:scale-110 cursor-default">
                  {tech.icon}
                </div>
                <span className="text-[10px] font-bold text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity uppercase tracking-widest text-center">
                  {tech.name}
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;