import {
  FaCss3Alt,
  FaGitAlt,
  FaHtml5,
  FaJava,
  FaJs,
  FaReact,
} from "react-icons/fa";
import { SiMongodb, SiSpringboot } from "react-icons/si";

function Skills() {
  const skills = [
    { name: "HTML", icon: <FaHtml5 className="text-orange-500" /> },
    { name: "CSS", icon: <FaCss3Alt className="text-blue-500" /> },
    { name: "JavaScript", icon: <FaJs className="text-yellow-400" /> },
    { name: "React", icon: <FaReact className="text-cyan-400" /> },
    { name: "Java Full Stack", icon: <FaJava className="text-red-400" /> },
    { name: "MongoDB", icon: <SiMongodb className="text-green-500" /> },
    { name: "Spring Boot", icon: <SiSpringboot className="text-green-300" /> },
    { name: "Git", icon: <FaGitAlt className="text-orange-400" /> },
  ];

  return (
    <section className="relative bg-gradient-to-tr from-[#020024] to-[#090979] min-h-169 text-white py-16 px-6 md:px-20 overflow-hidden">
      
      {/* 🔥 Top Blur */}
      <div className="absolute top-0 left-0 w-full h-10 bg-gradient-to-b from-white/5 to-transparent backdrop-blur-sm pointer-events-none z-0" />

      {/* 🔥 Bottom Blur */}
      <div className="absolute bottom-0 left-0 w-full h-10 bg-gradient-to-t from-white/5 to-transparent backdrop-blur-sm pointer-events-none z-0" />

      <h2 className="text-4xl font-bold text-center mb-10 text-pink-400 relative z-10">
        My Skills
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 relative z-10">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="bg-white/10 backdrop-blur-md text-white 
                       rounded-xl p-6 text-center shadow-md 
                       transition-all duration-500 transform 
                       hover:scale-105 hover:shadow-[0_8px_15px_-5px_#f472b6]"
          >
            <div className="text-4xl mb-2 flex justify-center">{skill.icon}</div>
            <p className="text-lg font-semibold">{skill.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
