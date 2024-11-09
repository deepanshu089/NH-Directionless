import React from 'react';
import { useNavigate } from 'react-router-dom';

const gamePosters = [
  { id: 1, src: 'https://res.cloudinary.com/dg361q5uv/image/upload/v1731064839/Track/jcfso52rtx8zgyjqlhiq.webp' },
  { id: 2, src: 'https://res.cloudinary.com/dg361q5uv/image/upload/v1731065264/Track/ko7qteo9dr6wqzpv3yam.webp' },
  { id: 3, src: 'https://res.cloudinary.com/dg361q5uv/image/upload/v1731065265/Track/oly1msqwaod24odnz5ld.webp' },
  { id: 4, src: 'https://res.cloudinary.com/dg361q5uv/image/upload/v1731065465/Track/ncnj2gnxtjocuyfmuaiv.webp' },
];

const Games = () => {
  const navigate = useNavigate(); 

 
  const handlePosterClick = () => {
    navigate('/quiz'); 
  };

  return (
    <div className="flex flex-col items-center overflow-x-hidden bg-gray-900 min-h-screen text-white px-4 py-8 md:px-8">
     
      <div className="flex flex-col items-center justify-center w-full space-y-8 md:space-y-0 md:flex-row md:space-x-8 lg:space-x-36 mb-12">
        
        <div
          className="floating-banner w-full h-40 sm:h-60 md:w-1/4 md:h-80 bg-cover rounded-lg flex items-center justify-center shadow-lg animate-float-left"
          style={{
            backgroundImage:
              "url('https://res.cloudinary.com/dg361q5uv/image/upload/v1731064234/Track/vok2mbxicpshmbqxdxmn.webp')",
          }}
        ></div>

        <div className="text-center px-4 md:px-0">
          <h1 className="text-3xl h-[60px] mt-10 md:text-4xl lg:text-5xl font-extrabold text-yellow-400 animate-bounce mb-4 overflow-y-hidden ">
            Pooh's Play Area
          </h1>
          <h3 className="text-base md:text-lg lg:text-xl font-semibold text-white max-w-lg">
            In the heart of the forest, a bear's poo reveals the importance of nature's playground. Just as bears roam freely, we too should embrace the outdoors. Real games foster creativity, teamwork, and physical health, unlike screens that isolate us. Let’s step outside, explore, and reconnect with the world around us! See our collection of games to reduce your screen time.
          </h3>
        </div>

       
        <div
          className="floating-banner w-full h-40 sm:h-60 md:w-1/4 md:h-80 bg-cover rounded-lg flex items-center justify-center shadow-lg animate-float-right"
          style={{
            backgroundImage:
              "url('https://res.cloudinary.com/dg361q5uv/image/upload/v1731064234/Track/z1op5lb0odwtwrwsolji.webp')",
          }}
        ></div>
      </div>

      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-6xl w-full px-4 md:px-0">
        {gamePosters.map((poster) => (
          <div
            key={poster.id}
            className="relative h-60 w-full sm:h-72 md:h-80 bg-gray-800 rounded-lg shadow-lg overflow-hidden cursor-pointer transform hover:scale-105 transition-transform duration-300"
            onClick={handlePosterClick}
          >
            <img
              src={poster.src}
              alt={`Game ${poster.id}`}
              className="w-full h-full object-cover"
              style={{
                clipPath: 'polygon(0 0, 95% 0, 100% 95%, 5% 100%)',
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Games;
