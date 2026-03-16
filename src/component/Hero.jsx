import { useEffect, useState } from "react";

function Hero() {
  const fullText1 = "Hello";
  const fullText2 = "I'm Sonu";
  const speed = 150;
  const [displayedText1, setDisplayedText1] = useState("");
  const [displayedText2, setDisplayedText2] = useState("");

  useEffect(() => {
    let interval;

    const startTyping = () => {
      setDisplayedText1("");
      setDisplayedText2("");

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
    };

    // Start immediately
    startTyping();

    // Repeat every 10 seconds
    interval = setInterval(() => {
      startTyping();
    }, 10000); // 10s

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <section
      className="relative min-h-169 grid grid-cols-1 md:grid-cols-2 items-center px-10 py-20 bg-gradient-to-tr from-[#020024] to-[#090979]
 text-white overflow-hidden"
    >
      {/* Top blur line */}
      <div className="absolute top-0 left-0 w-full h-10 bg-gradient-to-b from-white/5 to-transparent backdrop-blur-sm pointer-events-none z-0" />

      {/* Bottom blur line */}
      <div className="absolute bottom-0 left-0 w-full h-10 bg-gradient-to-t from-white/5 to-transparent backdrop-blur-sm pointer-events-none z-0" />

      {/* Left Content */}
      <div className="space-y-6 z-10">
        <h1 className="text-5xl font-bold text-pink-500 min-h-[3rem]">
          {displayedText1}
        </h1>
        <h2 className="text-6xl font-extrabold text-orange-300 min-h-[4rem]">
          {displayedText2}
        </h2>
        <p className="text-gray-300 max-w-md">
          Java Full Stack Developer building clean, powerful, and purposeful web
          apps. I bring backend strength with Spring Boot and frontend magic
          with modern frameworks — turning ideas into seamless digital
          experiences.
        </p>
        <div className="flex gap-4">
          <button className="px-6 py-2 border border-pink-400 rounded-full hover:bg-pink-500 transition">
             <a href="sonupandeykumar6313@gmail.com" className="text-pink-300 hover:text-white">
               Contact Me
          </a>
          </button>
        </div>
      </div>
    </section>
  );
}

export default Hero;
