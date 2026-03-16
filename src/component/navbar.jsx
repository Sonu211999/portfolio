import { Link } from "react-router-dom";
const Navbar = () => {
  const navItems = [
    {name: "Home",  href: "/" },
    { name: "Hero",  href: "/hero" },
    { name: "About",  href: "/about" },
    { name: "Skills",  href: "/skills" },
    { name: "Projects",  href: "/project" },
    { name: "Contact",  href: "/contact" },
  ];

  return (
    <nav className="bg-gradient-to-tr from-[#020024] to-[#090979] border-b border-gray-100 px-6 py-4 flex items-center justify-between sticky top-0 z-50">
      
      {/* Left: Logo */}
      <h1 className="text-2xl font-bold text-gray-100">SONU PANDEY</h1>

      {/* Center: Navigation Links */}
      <div className="absolute left-1/2 transform -translate-x-1/2">
        <ul className="flex space-x-8 text-gray-50 font-medium">
          {navItems.map((item, index) => (
            <li key={index} className="group relative">
              <Link
                to={item.href}
                className="inline-block px-1 py-1 transition-transform duration-300 group-hover:scale-105"
              >
                <span className="relative z-10">{item.name}</span>
                <span
                  className="absolute left-0 bottom-0 w-0 h-[2px] bg-pink-400 
                             group-hover:w-full transition-all duration-300 ease-out"
                ></span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
