function About() {
  return (
    <section className="relative w-full bg-gradient-to-tr from-[#020024] to-[#090979] text-white py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-10 overflow-hidden">

      {/* Top Blur */}
      <div className="absolute top-0 left-0 w-full h-10 bg-gradient-to-b from-white/5 to-transparent backdrop-blur-sm pointer-events-none z-0" />

      {/* Bottom Blur */}
      <div className="absolute bottom-0 left-0 w-full h-10 bg-gradient-to-t from-white/5 to-transparent backdrop-blur-sm pointer-events-none z-0" />

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center relative z-10">

        {/* Image */}
        <div className="flex justify-center">
          <img
            src="sonu.jpg"
            alt="Sonu"
            className="w-40 h-40 sm:w-52 sm:h-52 md:w-64 md:h-64 object-cover rounded-full border-4 border-pink-500 shadow-xl transition-all duration-500 hover:scale-105 hover:shadow-pink-500/50"
          />
        </div>

        {/* Text */}
        <div className="text-center md:text-left">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-pink-400">
            About Me
          </h2>

          <p className="text-gray-300 text-sm sm:text-base md:text-lg leading-relaxed">
            I'm Sonu, a Full Stack Developer focused on building scalable,
            efficient, and user-friendly web applications. I work with Java,
            Spring Boot, and modern frontend technologies like React.
          </p>

          <p className="mt-4 text-gray-400 text-sm sm:text-base leading-relaxed">
            I follow clean code practices and focus on performance and
            maintainability. I’m comfortable with Git, team collaboration, and
            real-world project development.
          </p>

          <p className="mt-4 text-gray-500 text-sm sm:text-base leading-relaxed">
            Currently improving my skills and building projects that solve real
            problems.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;