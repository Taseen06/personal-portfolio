import ProjectCard from './ProjectCard';
import { projects } from '../data/projects';
import { FaLaptopCode, FaGithub } from 'react-icons/fa'; // <--- Added FaGithub here

const Projects = () => {
  return (
    <>
    <section className="py-24 px-10 md:px-20 bg-gray-200">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Heading */}
        <div className="flex items-center gap-4 mb-16">
          <div className="relative">
            <div className="absolute inset-0 bg-cyan/20 rounded-full scale-150 blur-sm"></div>
            <div className="relative bg-white p-4 rounded-full text-3xl text-cyan shadow-md">
              <FaLaptopCode />
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-navy tracking-tight">
            Projects
          </h2>
        </div>

        {/* Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {projects.map((proj, idx) => (
            <ProjectCard key={idx} project={{ ...proj, id: idx + 1 }} />
          ))}
        </div>

        
        
        
      </div>
    </section>
    <div className="mt-10 text-center py-20 border-t border-gray-100">
  <h3 className="text-2xl md:text-5xl font-black text-navy mb-10 tracking-tighter">
    Want to see the source code?
  </h3>
  <a 
    href="https://github.com/Taseen06?tab=repositories" 
    target="_blank" 
    rel="noreferrer"
    className="inline-flex items-center gap-4 px-10 py-4 bg-navy text-white rounded-2xl font-bold text-lg hover:bg-cyan hover:text-navy hover:shadow-[0_20px_40px_rgba(0,212,255,0.3)] hover:-translate-y-1 transition-all duration-500 group"
  >
    <span>Explore my GitHub</span>
    <FaGithub className="text-2xl group-hover:rotate-12 transition-transform" /> 
  </a>
</div>
    </>
    
  );
};

export default Projects;