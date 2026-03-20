import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: "#", text: "Home" },
    { href: "#about", text: "About" },
    { href: "#skills", text: "Skills" },
    { href: "#projects", text: "Projects" },
    { href: "#achievements", text: "Achievements" },
    { href: "#contact", text: "Contact" },
  ];

  return (
    <>
      {/* Menu Button */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-4 left-4 z-50 p-2 rounded-md text-gray-300 bg-slate-900/50 hover:text-white hover:bg-slate-800/70 transition-colors"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Sliding Drawer */}
      <div 
        className={`fixed top-0 left-0 h-full w-72 bg-slate-950/90 backdrop-blur-sm transform transition-transform duration-300 ease-in-out z-40 flex flex-col pt-32 px-8 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <nav className="flex flex-col gap-8">
          {navLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-gray-300 hover:text-white hover:bg-cyan-500/10 text-lg font-medium py-3 px-4 -mx-4 rounded-md transition-colors"
            >
              {link.text}
            </a>
          ))}
        </nav>
      </div>
    </>
  );
};

export default Navbar;
