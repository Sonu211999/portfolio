function Projects() {
  const projects = [
    {
      title: "AI Yoga Trainer",
      description: "A yoga posture detection app using TensorFlow.js in React.",
      img: "yoga.png",
      link: "#"
    },
    {
      title: "Smart Home App",
      description: "Control fan, light & camera using Firebase and ESP32-CAM.",
      img: "https://via.placeholder.com/300x200?text=Home+App",
      link: "#"
    },
    {
      title: "Share Buddy",
      description: "Uber-like app to pick up college mates via GPS.",
      img: "https://via.placeholder.com/300x200?text=Share+Buddy",
      link: "#"
    },
  ];

  return (
    <section id="projects" className="relative bg-gradient-to-tr from-[#020024] to-[#090979] min-h-169 text-white py-16 px-6 md:px-20 overflow-hidden">
      
      {/* ✅ Only Bottom Blur */}
      <div className="absolute bottom-0 left-0 w-full h-10 bg-gradient-to-t from-white/5 to-transparent backdrop-blur-sm pointer-events-none z-0" />
      
      <h2 className="text-4xl font-bold text-center mb-10 text-pink-400 relative z-10">
        My Projects
      </h2>

      <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 relative z-10">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white/10 backdrop-blur-md 
                       rounded-xl shadow-md overflow-hidden 
                       transition-all duration-500 transform 
                       hover:scale-105 
                       hover:shadow-[0_8px_15px_-5px_#f472b6] 
                       w-full max-w-sm mx-auto"
          >
            <img
              src={project.img}
              alt={project.title}
              className="w-full h-40 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="mb-3 text-gray-300 text-sm">{project.description}</p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-pink-500 hover:bg-pink-600 text-white px-3 py-1 text-sm rounded"
              >
                View Project
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
