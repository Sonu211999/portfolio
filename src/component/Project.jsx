function Projects() {
  const projects = [
    {
      title: "AI Yoga Trainer",
      description:
        "Real-time yoga posture detection using TensorFlow.js with interactive UI.",
      tech: ["React", "TensorFlow.js"],
      img: "yoga.png",
      live: "#",
      github: "#",
    },
    {
      title: "Smart Home App",
      description:
        "IoT-based system to control home devices using ESP32 and Firebase.",
      tech: ["React", "Firebase", "ESP32"],
      img: "https://via.placeholder.com/300x200?text=Smart+Home",
      live: "#",
      github: "#",
    },
    {
      title: "Share Buddy",
      description:
        "Ride-sharing platform for students with real-time location tracking.",
      tech: ["React", "Node.js", "MongoDB"],
      img: "https://via.placeholder.com/300x200?text=Share+Buddy",
      live: "#",
      github: "#",
    },
  ];

  return (
    <section className="relative w-full bg-gradient-to-tr from-[#020024] to-[#090979] text-white py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-10 overflow-hidden">

      {/* Bottom Blur */}
      <div className="absolute bottom-0 left-0 w-full h-10 bg-gradient-to-t from-white/5 to-transparent backdrop-blur-sm" />

      <div className="max-w-6xl mx-auto">

        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-10 text-pink-400">
          My Projects
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-white/10 backdrop-blur-md rounded-xl overflow-hidden shadow-md transition duration-500 hover:shadow-pink-500/40 hover:-translate-y-2"
            >
              {/* Image */}
              <div className="overflow-hidden">
                <img
                  src={project.img}
                  alt={project.title}
                  className="w-full h-40 object-cover group-hover:scale-110 transition duration-500"
                />
              </div>

              {/* Content */}
              <div className="p-4 space-y-3">

                <h3 className="text-lg sm:text-xl font-semibold">
                  {project.title}
                </h3>

                <p className="text-gray-300 text-sm leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t, i) => (
                    <span
                      key={i}
                      className="text-xs bg-pink-500/20 text-pink-300 px-2 py-1 rounded"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="flex gap-3 pt-2">
                  <a
                    href={project.live}
                    target="_blank"
                    className="text-sm px-3 py-1 bg-pink-500 hover:bg-pink-600 rounded"
                  >
                    Live
                  </a>

                  <a
                    href={project.github}
                    target="_blank"
                    className="text-sm px-3 py-1 border border-pink-400 text-pink-300 hover:bg-pink-500 hover:text-white rounded"
                  >
                    GitHub
                  </a>
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;