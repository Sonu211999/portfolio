import { useEffect, useState } from "react";

function Hero() {
  const fullText1 = "Hello 👋";
  const fullText2 = "I'm Sonu";
  const speed = 100;

  const [displayedText1, setDisplayedText1] = useState("");
  const [displayedText2, setDisplayedText2] = useState("");

  useEffect(() => {
    let i = 0;
    let j = 0;

    const typeLine1 = setInterval(() => {
      if (i < fullText1.length) {
        setDisplayedText1(fullText1.slice(0, i + 1));
        i++;
      } else {
        clearInterval(typeLine1);

        setTimeout(() => {
          const typeLine2 = setInterval(() => {
            if (j < fullText2.length) {
              setDisplayedText2(fullText2.slice(0, j + 1));
              j++;
            } else {
              clearInterval(typeLine2);
            }
          }, speed);
        }, 300);
      }
    }, speed);

    return () => clearInterval(typeLine1);
  }, []);

  return (
    <section className="relative w-full min-h-screen flex items-center bg-gradient-to-tr from-[#020024] to-[#090979] text-white px-4 sm:px-6 md:px-10 py-12 overflow-hidden">

      {/* Top blur */}
      <div className="absolute top-0 left-0 w-full h-10 bg-gradient-to-b from-white/5 to-transparent backdrop-blur-sm" />

      {/* Bottom blur */}
      <div className="absolute bottom-0 left-0 w-full h-10 bg-gradient-to-t from-white/5 to-transparent backdrop-blur-sm" />

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-10">

        {/* LEFT */}
        <div className="space-y-5 text-center md:text-left">

          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-pink-400 min-h-[2rem]">
            {displayedText1}
          </h1>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-orange-300 min-h-[3rem]">
            {displayedText2}
          </h2>

          <p className="text-gray-300 text-sm sm:text-base md:text-lg max-w-lg mx-auto md:mx-0 leading-relaxed">
            Full Stack Developer specializing in Java, Spring Boot, and modern
            frontend technologies. I build scalable, high-performance
            applications that solve real-world problems.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">

            <a
              href="#project"
              className="px-6 py-2 bg-pink-500 hover:bg-pink-600 rounded-full text-white transition"
            >
              View Projects
            </a>

            <a
              href="mailto:sonupandeykumar6313@gmail.com"
              className="px-6 py-2 border border-pink-400 text-pink-300 hover:bg-pink-500 hover:text-white rounded-full transition"
            >
              Contact Me
            </a>

          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="flex justify-center">
          <img
            src="sonu.jpg"
            alt="Sonu"
            className="w-48 sm:w-64 md:w-72 lg:w-80 rounded-xl shadow-lg hover:scale-105 transition duration-500"
          />
        </div>

      </div>
    </section>
  );
}

export default Hero;