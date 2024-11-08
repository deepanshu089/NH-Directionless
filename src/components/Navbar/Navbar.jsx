import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import '../../index.css';

const links = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Games', path: '/games' },
  { name: 'Journals', path: '/journals' },
  { name: 'Contact', path: '/contact' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLinkClick = (path) => {
    // Scroll to the top of the page
    window.scrollTo({ top: 0, behavior: 'smooth' });

    // Set loading state and navigate to the selected path
    if (path !== '/') {
      setLoading(true);
    }

    setTimeout(() => {
      setLoading(false);
      navigate(path);
      setIsOpen(false); // Close the mobile menu after clicking the link
    }, 1000);
  };

  return (
    <nav className="bg-black z-50 text-white sticky top-0">
      <div className="lg:px-12 sm:px-7 max-w-9xl mx-auto max-h-24 flex justify-between items-center p-6">
        
        <div className="flex cursor-pointer items-center"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <img src="https://res.cloudinary.com/dg361q5uv/image/upload/v1731070311/Track/trnpwwy3dcqsv6pegdj2.jpg" alt=" Logo" className="h-16 mr-8" />
          <span className="hidden md:block text-2xl font-ethenocentric font-semibold cursor-pointer">
            <span
              className="hover:[text-shadow:_0_5px_100px_rgba(0,255,255,0.9),_0_0_15px_rgba(0,255,255,1),_0_0_200px_rgba(0,255,255,1),_0_0_100px_rgba(99,102,241,0.8);] hover:text-[#00FFFF]"
            >
              SCREENSAGE
            </span>
          </span>
        </div>

        {/* Links Container */}
        <div className="hidden md:flex space-x-6 text-xl font-spaced font-extrabold mx-auto">
          {links.map((link, index) => (
            <button
              key={index}
              onClick={() => handleLinkClick(link.path)}
              className={`relative group transition duration-300 
                ${location.pathname === link.path ? "text-gray-300" : ""}`}
            >
              <span className="relative z-10 px-4 py-2">
                {link.name}
              </span>
              <span className="absolute inset-0 rounded-full border-2 border-purple-500 opacity-0 group-hover:opacity-100 group-hover:scale-110 transition duration-300 shadow-3xl group-hover:shadow-[0_0_20px_6px_rgba(128,0,128,0.9)]"></span>
            </button>
          ))}
        </div>

        {/* Circle Images */}
        <div className="flex space-x-4">
          <img 
            src="data:image/png;base64,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" 
            alt="Circle 1" 
            className="h-14 w-14 rounded-full border-2 border-white" 
          />
          <img 
            src="data:image/png;base64,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" 
            alt="Circle 2" 
            className="h-14 w-14 rounded-full border-2 border-white" 
          />
        </div>

        {/* Hamburger Menu for mobile view */}
        <button
          className="menu-toggle flex justify-center items-center p-2 md:hidden"
          onClick={toggleMenu}
        >
          <div className="hamburger-icon text-[32px] text-accent">
            &#9776;
          </div>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`menu-sheet z-50 fixed top-0 left-0 w-[80%] max-w-[320px] h-full bg-gray-950 transition-transform ease-in-out transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } md:hidden`}
      >
        <div className="flex items-center justify-between p-4 cursor-pointer">
          <Link to="/" onClick={toggleMenu}>
            <img src="https://res.cloudinary.com/dqmktpekh/image/upload/f_auto,q_auto/npansp6k2ntw7qeoqoms" alt="NERDS Logo" className="h-10 ml-0" />
          </Link>
          <button className="text-2xl text-white rounded-md" onClick={toggleMenu}>
            &#10005;
          </button>
        </div>

        <nav className="menu-links flex flex-col justify-center items-start gap-8 p-6">
          {links.map((link, index) => (
            <button
              key={index}
              onClick={() => handleLinkClick(link.path)}
              className="relative group w-full py-2 text-lg capitalize text-white transition-all font-spaced"
            >
              <span className="relative z-50 px-5 py-4"> 
                {link.name}
              </span>
              <span className="absolute inset-0 rounded-full border-2 border-purple-500 opacity-0 group-hover:opacity-100 group-hover:scale-110 transition duration-300 shadow-lg group-hover:shadow-[0_0_20px_6px_rgba(128,0,128,0.5)]"></span>
            </button>
          ))}
        </nav>
      </div>

      {/* Overlay for mobile menu */}
      {isOpen && (
        <div
          className="menu-overlay fixed top-0 left-0 w-full h-full bg-black opacity-50 z-40 md:hidden"
          onClick={toggleMenu}
        ></div>
      )}
    </nav>
  );
};

export default Navbar;
