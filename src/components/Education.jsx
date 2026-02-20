import { education } from '../data/education';
import { FaGraduationCap, FaUniversity, FaAward } from 'react-icons/fa';

const Education = () => {
  return (
    /* Changed bg-white to bg-gray-50 for a subtle gray background */
    <section className="py-24 px-10 md:px-20 bg-gray-200">
      <div className="max-w-4xl mx-auto"> {/* Narrowed max-width for better vertical look */}
        
        {/* Section Title */}
        <div className="flex items-center gap-4 mb-16">
          <div className="relative">
            <div className="absolute inset-0 bg-navy/10 rounded-full scale-150 blur-sm"></div>
            <div className="relative bg-navy p-4 rounded-full text-3xl text-cyan shadow-lg">
              <FaGraduationCap />
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-navy tracking-tight">
            Education
          </h2>
        </div>

        {/* Education List (Vertical Stack) */}
        {/* Changed grid-cols-2 to flex-col for one-by-one vertical placement */}
        <div className="flex flex-col gap-8">
          {education.map((edu, idx) => (
            <div 
              key={idx} 
              className="group relative bg-white p-8 rounded-3xl border border-gray-200 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              {/* Decorative Background Icon */}
              <FaUniversity className="absolute -right-4 -bottom-4 text-gray-50 text-9xl group-hover:text-cyan/10 transition-colors" />

              <div className="relative z-10">
                <div className="flex justify-between items-start mb-4">
                  <span className="bg-cyan/10 text-teal-700 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest">
                    {edu.year}
                  </span>
                </div>
                
                <h3 className="text-2xl font-bold text-navy mb-1 group-hover:text-teal-600 transition-colors">
                  {edu.school}
                </h3>
                <p className="text-lg text-gray-600 font-medium mb-4">{edu.degree}</p>
                
                <div className="flex items-center gap-2 text-navy font-bold">
                  <FaAward className="text-cyan" />
                  <span>{edu.grade}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;