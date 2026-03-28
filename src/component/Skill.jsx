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
  const skillGroups = [
    {
      title: "Frontend",
      skills: [
        { name: "HTML", icon: <FaHtml5 className="text-orange-500" /> },
        { name: "CSS", icon: <FaCss3Alt className="text-blue-500" /> },
        { name: "JavaScript", icon: <FaJs className="text-yellow-400" /> },
        { name: "React", icon: <FaReact className="text-cyan-400" /> },
      ],
    },
    {
      title: "Backend",
      skills: [
        { name: "Java", icon: <FaJava className="text-red-400" /> },
        { name: "Spring Boot", icon: <SiSpringboot className="text-green-300" /> },
        { name: "MongoDB", icon: <SiMongodb className="text-green-500" /> },
      ],
    },
    {
      title: "Tools",
      skills: [
        { name: "Git", icon: <FaGitAlt className="text-orange-400" /> },
      ],
    },
  ];

  return (
    <section className="relative w-full bg-gradient-to-tr from-[#020024] to-[#090979] text-white py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-10 overflow-hidden">

      {/* Top Blur */}
      <div className="absolute top-0 left-0 w-full h-10 bg-gradient-to-b from-white/5 to-transparent backdrop-blur-sm" />

      {/* Bottom Blur */}
      <div className="absolute bottom-0 left-0 w-full h-10 bg-gradient-to-t from-white/5 to-transparent backdrop-blur-sm" />

      <div className="max-w-6xl mx-auto">

        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-12 text-pink-400">
          My Skills
        </h2>

        <div className="space-y-10">

          {skillGroups.map((group, index) => (
            <div key={index}>

              <h3 className="text-lg sm:text-xl font-semibold mb-4 text-pink-300">
                {group.title}
              </h3>

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">

                {group.skills.map((skill, i) => (
                  <div
                    key={i}
                    className="group bg-white/10 backdrop-blur-md rounded-xl p-4 text-center shadow-md transition duration-500 hover:-translate-y-2 hover:shadow-pink-500/40"
                  >
                    <div className="text-3xl mb-2 flex justify-center group-hover:scale-110 transition">
                      {skill.icon}
                    </div>

                    <p className="text-sm sm:text-base font-medium">
                      {skill.name}
                    </p>
                  </div>
                ))}

              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}

export default Skills;