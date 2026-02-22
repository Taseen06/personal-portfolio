import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const ProjectCard = ({ project }) => {
  return (
    <div className="group bg-white p-5 rounded-2xl border border-gray-100 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between h-full">
      <div>
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-2xl font-bold text-navy group-hover:text-cyan transition-colors">
            {project.name}
          </h3>
          <div className="text-navy/20 text-4xl font-bold">0{project.id}</div>
        </div>
        
        <p className="text-gray-600 mb-6 leading-relaxed">
          {project.description}
        </p>
      </div>

      <div className="flex gap-4 items-center">

        {/* GitHub Link */}
        <a 
          href={project.githubLink} 
          target="_blank" 
          rel="noopener noreferrer"
          className="bg-navy text-white p-2 rounded-lg hover:bg-cyan hover:text-navy transition-all shadow-md"
          aria-label="View Source on GitHub"
        >
          <FaGithub size={20} />
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;