import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "../../index.css";
import { auth, provider } from "../../pages/SignIn/config";
import { signInWithPopup } from "firebase/auth";

const links = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Games', path: '/games' },
  { name: 'Journals', path: '/journals' },
  { name: 'Contact', path: '/contact' },
  { name: 'Talk', path: '/talk' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false); // Track login state
  const location = useLocation();
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLinkClick = (path) => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    if (path !== "/") setLoading(true);

    setTimeout(() => {
      setLoading(false);
      navigate(path);
      setIsOpen(false);
    }, 1000);
  };

  const handleClick = () => {
    signInWithPopup(auth, provider)
      .then((data) => {
        if (data.user && data.user.email) {
          const userEmail = data.user.email.toLowerCase();
          localStorage.setItem("email", userEmail);
          setIsAuthenticated(true); // Set authentication state to true
        } else {
          console.error("Error retrieving user data during sign-in.");
        }
      })
      .catch((error) => console.error("Authentication error:", error));
  };

  return (
    <nav className="bg-black z-50 text-white sticky top-0">
      <div className="lg:px-12 overflow-y-hidden sm:px-7 max-w-9xl mx-auto max-h-24 flex justify-between items-center p-6">
        <div
          className="flex cursor-pointer items-center"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <img
            src="https://res.cloudinary.com/dg361q5uv/image/upload/v1731070311/Track/trnpwwy3dcqsv6pegdj2.jpg"
            alt=" Logo"
            className="h-16 mr-8"
          />
          <span className="hidden md:block text-2xl font-ethenocentric font-semibold cursor-pointer">
            <span className="hover:[text-shadow:_0_5px_100px_rgba(0,255,255,0.9),_0_0_15px_rgba(0,255,255,1),_0_0_200px_rgba(0,255,255,1),_0_0_100px_rgba(99,102,241,0.8);] hover:text-[#00FFFF]">
              SCREENSAGE
            </span>
          </span>
        </div>

        <div className="hidden md:flex space-x-6 text-xl overflow-y-hidden font-spaced font-extrabold mx-auto">
          {links.map((link, index) => (
            <button
              key={index}
              onClick={() => handleLinkClick(link.path)}
              className={`relative group transition duration-300 overflow-y-hidden
                ${location.pathname === link.path ? "text-gray-300" : ""}`}
            >
              <span className="relative z-10 px-4 py-2">{link.name}</span>
              <span className="absolute inset-0 rounded-full border-2 border-purple-500 opacity-0 group-hover:opacity-100 group-hover:scale-110 transition duration-300 shadow-3xl group-hover:shadow-[0_0_20px_6px_rgba(128,0,128,0.9)]"></span>
            </button>
          ))}
        </div>

        {/* Conditionally render circle images or login button based on login status */}
        {isAuthenticated ? (
          <div className="hidden md:flex space-x-4">
            <img
              src="https://res.cloudinary.com/dludtk5vz/image/upload/v1731153567/userimg_p7rqie.png"
              alt="Circle 1"
              className="h-14 w-14 rounded-full border-2 border-white"
            />
            <img
              src="https://res.cloudinary.com/dludtk5vz/image/upload/v1731077632/Badge7_anw3io.jpg"
              alt="Circle 2"
              className="h-14 w-14 rounded-full border-2 border-white"
            />
          </div>
        ) : (
          <button className="bg-green-500 px-6 py-2 rounded-2xl" onClick={handleClick}>
            Login
          </button>
        )}

        <button
          className="menu-toggle flex justify-center items-center p-2 md:hidden"
          onClick={toggleMenu}
        >
          <div className="hamburger-icon text-[32px] text-accent">&#9776;</div>
        </button>
      </div>

      <div
        className={`menu-sheet z-50 fixed top-0 left-0 w-[80%] max-w-[320px] h-full bg-gray-950 transition-transform ease-in-out transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } md:hidden`}
      >
        <div className="flex items-center justify-between p-4 cursor-pointer">
          <Link to="/" onClick={toggleMenu}>
            <img
              src="https://res.cloudinary.com/dqmktpekh/image/upload/f_auto,q_auto/npansp6k2ntw7qeoqoms"
              alt="NERDS Logo"
              className="h-10 ml-0"
            />
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
              <span className="relative z-50 px-5 py-4">{link.name}</span>
              <span className="absolute inset-0 rounded-full border-2 border-purple-500 opacity-0 group-hover:opacity-100 group-hover:scale-110 transition duration-300 shadow-lg group-hover:shadow-[0_0_20px_6px_rgba(128,0,128,0.5)]"></span>
            </button>
          ))}
        </nav>
      </div>

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
