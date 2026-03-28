import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Hero", href: "/hero" },
    { name: "About", href: "/about" },
    { name: "Skills", href: "/skills" },
    { name: "Projects", href: "/project" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav className="bg-gradient-to-tr from-[#020024] to-[#090979] border-b border-gray-700 px-4 sm:px-6 py-4 sticky top-0 z-50">

      <div className="max-w-7xl mx-auto flex items-center justify-between">

        {/* Logo */}
        <h1 className="text-lg sm:text-xl md:text-2xl font-bold text-white">
          SONU PANDEY
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 text-gray-200 font-medium">
          {navItems.map((item, index) => (
            <li key={index} className="group relative">
              <Link
                to={item.href}
                className="inline-block px-1 py-1 transition duration-300 group-hover:scale-105"
              >
                {item.name}
                <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-pink-400 group-hover:w-full transition-all duration-300"></span>
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Button */}
        <button
          className="md:hidden text-white text-2xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden mt-4 bg-[#020024] rounded-lg shadow-lg p-4 space-y-4 text-center">
          {navItems.map((item, index) => (
            <Link
              key={index}
              to={item.href}
              onClick={() => setIsOpen(false)}
              className="block text-gray-200 hover:text-pink-400 transition"
            >
              {item.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;