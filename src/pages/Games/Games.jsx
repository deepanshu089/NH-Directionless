import React, { useState, useEffect } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';  // Import useNavigate hook
import Quiz from './quiz';  // Import the Quiz component

const gamePosters = [
  { id: 1, src: 'https://res.cloudinary.com/dg361q5uv/image/upload/v1731064839/Track/jcfso52rtx8zgyjqlhiq.webp' },
  { id: 2, src: 'https://res.cloudinary.com/dg361q5uv/image/upload/v1731065264/Track/ko7qteo9dr6wqzpv3yam.webp' },
  { id: 3, src: 'https://res.cloudinary.com/dg361q5uv/image/upload/v1731065265/Track/oly1msqwaod24odnz5ld.webp' },
  { id: 4, src: 'https://res.cloudinary.com/dg361q5uv/image/upload/v1731065465/Track/ncnj2gnxtjocuyfmuaiv.webp' },
];

const Games = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const navigate = useNavigate();  // Hook to navigate to a different route

  // Function to handle sliding
  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? gamePosters.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === gamePosters.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Automatically slide the poster every 2 seconds
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === gamePosters.length - 1 ? 0 : prevIndex + 1
      );
    }, 2000); // 2 seconds

    // Clear interval when component unmounts
    return () => clearInterval(intervalId);
  }, []);

  // Handle click on game poster to navigate to quiz route
  const handlePosterClick = () => {
    navigate('/quiz');  // Navigate to the "/quiz" route
  };

  return (
    <div className="flex flex-col items-center overflow-x-hidden bg-gray-900 min-h-screen text-white p-8">
      {/* Horizontal Layout: Game Banner, Pooh's Play Area, Another Game Banner */}
      <div className="flex items-center justify-center w-full space-x-36 mb-12">
        {/* Left Floating Banner */}
        <div
          className="floating-banner w-1/4 h-80 bg-cover rounded-lg flex items-center justify-center shadow-lg animate-float-left"
          style={{
            backgroundImage:
              "url('https://res.cloudinary.com/dg361q5uv/image/upload/v1731064234/Track/vok2mbxicpshmbqxdxmn.webp')",
          }}
        ></div>

        {/* Funky Text in the Middle */}
        <h1 className="text-5xl font-extrabold text-yellow-400 animate-bounce">
          Pooh's Play Area
        </h1>

        {/* Right Floating Banner */}
        <div
          className="floating-banner w-1/4 h-80 bg-cover rounded-lg flex items-center justify-center shadow-lg animate-float-right"
          style={{
            backgroundImage:
              "url('https://res.cloudinary.com/dg361q5uv/image/upload/v1731064234/Track/z1op5lb0odwtwrwsolji.webp')",
          }}
        ></div>
      </div>

      {/* Game Poster Slider */}
      <div className="relative overflow-x-hidden  w-full max-w-4xl flex items-center">
        {/* Left Button */}
        <button
          onClick={handlePrev}
          className="absolute left-4 z-10 bg-gray-800 hover:bg-gray-700 text-white p-3 rounded-full shadow-lg"
        >
          <FaChevronLeft />
        </button>

        {/* Cards Container */}
        <div className="w-full bg-cover flex overflow-hidden justify-center">
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {gamePosters.map((poster, index) => (
              <div
                key={poster.id}
                className="w-full flex-shrink-0 p-4"
                onClick={handlePosterClick} // Handle poster click
              >
                <div className="relative h-160 w-full bg-gray-800 rounded-lg shadow-lg">
                  <img
                    src={poster.src}
                    alt={`Game ${index + 1}`}
                    className="w-full h-full object-cover rounded-lg transform hover:scale-105 transition-all duration-500"
                    style={{
                      clipPath: 'polygon(0 0, 95% 0, 100% 95%, 5% 100%)',
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Button */}
        <button
          onClick={handleNext}
          className="absolute right-4 z-10 bg-gray-800 hover:bg-gray-700 text-white p-3 rounded-full shadow-lg"
        >
          <FaChevronRight />
        </button>
      </div>
    </div>
  );
};

export default Games;
