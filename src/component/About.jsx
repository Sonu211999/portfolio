function About() {
  return (
    <section
      className="relative min-h-169 bg-gradient-to-tr from-[#020024] to-[#090979]
 text-white py-16 px-6 md:px-20 overflow-hidden"
    >
      {/* 🔥 Top Blurred Line */}
      <div className="absolute top-0 left-0 w-full h-10 bg-gradient-to-b from-white/5 to-transparent backdrop-blur-sm pointer-events-none z-0" />
      {/* 🔥 Bottom Blur */}
      <div className="absolute bottom-0 left-0 w-full h-10 bg-gradient-to-t from-white/5 to-transparent backdrop-blur-sm pointer-events-none z-0" />

      <div className="grid md:grid-cols-2 gap-10 items-center relative z-10">
        {/* Left: Image with hover effect */}
        <div className="flex justify-center mt-20">
          <img
            src="sonu.jpg"
            alt="Sonu"
            className="w-64 h-64 object-cover rounded-full border-4 border-pink-500 shadow-xl transition-all duration-500 transform hover:scale-105 hover:shadow-pink-500/50"
          />
        </div>

        {/* Right: Text */}
        <div className="mt-20">
          <h2 className="text-4xl font-bold mb-4 text-pink-400">About Me</h2>
          <p className="text-gray-300 leading-relaxed">
            I'm Sonu, a Java Full Stack Developer with a strong passion for
            building efficient, scalable, and user-centric web applications. I
            specialize in backend development using Java, Spring Boot, and
            relational databases, while also crafting modern, responsive UIs
            using React and Next.js.
          </p>
          <p className="mt-4 text-gray-400">
           I follow clean code principles and believe in writing maintainable, performance-optimized applications. With hands-on experience in version control tools like Git and GitHub, I’m comfortable collaborating on team projects and managing code effectively.
          </p>
          <p className="mt-4 text-gray-500">I’m always exploring new tools, improving my skills, and building real-world solutions that solve real problems.</p>
        </div>
      </div>
    </section>
  );
}

export default About;
