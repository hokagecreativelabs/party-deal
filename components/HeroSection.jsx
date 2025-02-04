"use client";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { FiPlay, FiChevronDown, FiX } from "react-icons/fi";

const Hero = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [videoOpen, setVideoOpen] = useState(false);

  return (
    <section className="w-full p-4 md:px-10 py-16 md:pt-24 grid grid-cols-1 md:grid-cols-2 items-center max-w-9xl mx-auto relative">
      <div>
        <h2 className="font-satoshi tracking-wider bg-yellow-400 w-max font-bold text-xs uppercase px-3 py-1 text-black rounded-md mb-4">
          Unforgettable Celebrations
        </h2>
        <h1 className="font-coolvetica tracking-wider text-4xl md:text-7xl font-bold text-black leading-light">
          The Ultimate Party Experience Starts Here
        </h1>
        <p className="font-satoshi text-base text- mt-6 max-w-lg">
          Discover exclusive party deals, VIP packages, and seamless event planning to make your celebrations truly special. Let’s turn your dream party into reality!
        </p>
        <div className="flex gap-4 mt-8 relative">
          <div className="relative">
            <button 
              className="bg-black font-satoshi tracking-wider text-white font-semibold py-3 px-4 md:py-4 md:px-6 rounded-lg transition-all hover:bg-gray-900 active:scale-95 flex items-center gap-2 whitespace-nowrap"
              onClick={() => setDropdownOpen(!dropdownOpen)}
            >
              Explore Deals <FiChevronDown />
            </button>
            {dropdownOpen && (
              <div className="absolute left-0 top-[-160px] w-48 bg-white shadow-lg rounded-lg py-2 text-black z-50">
                <a href="#" className="block px-4 py-2 hover:bg-gray-100">Catering</a>
                <a href="#" className="block px-4 py-2 hover:bg-gray-100">Packages</a>
                <a href="#" className="block px-4 py-2 hover:bg-gray-100">Planning</a>
                <a href="#" className="block px-4 py-2 hover:bg-gray-100">VIP</a>
              </div>
            )}
          </div>
          {!videoOpen && (
            <button 
              className="hidden md:flex bg-yellow-400 tracking-wider text-black font-semibold py-3 px-4 md:py-4 md:px-6 rounded-lg transition-all hover:bg-yellow-500 active:scale-95 items-center gap-2 whitespace-nowrap"
              onClick={() => setVideoOpen(true)}
            >
              <FiPlay /> Recent Event
            </button>
          )}
        </div>
      </div>
      {/* Desktop Image Grid & Mobile Video */}
      <div className="mt-6">
        <div className="hidden md:block">
          <ShuffleGrid />
        </div>
        <div className="md:hidden">
          <video src="/assets/img/hero-vid.mp4" controls className="w-full rounded-lg" />
        </div>
      </div>
      {/* Video Modal */}
      {videoOpen && (
        <div className="p-4 fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
          <div className="relative bg-white p-6 rounded-lg max-w-2xl w-full">
            <button className="absolute top-2 right-2 text-black" onClick={() => setVideoOpen(false)}>
              <FiX size={24} />
            </button>
            <video src="/assets/img/hero-vid.mp4" controls autoPlay className="w-full rounded-lg" />
          </div>
        </div>
      )}
    </section>
  );
};

const shuffle = (array) => {
  let currentIndex = array.length, randomIndex;
  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
  }
  return array;
};

const imageSources = [
  "/assets/img/8.jpeg", "/assets/img/2.jpg", "/assets/img/7.jpg", "/assets/img/4.jpg",
  "/assets/img/5.jpg", "/assets/img/5.jpg"
];
  
const generateSquares = () => {
  return shuffle(imageSources).map((src, index) => (
    <motion.div
      key={index}
      layout
      transition={{ duration: 1.5, type: "spring" }}
      className="w-full h-full bg-cover bg-center rounded-lg shadow-lg"
      style={{ backgroundImage: `url(${src})` }}
    ></motion.div>
  ));
};

const ShuffleGrid = () => {
  const timeoutRef = useRef(null);
  const [squares, setSquares] = useState(generateSquares());

  useEffect(() => {
    shuffleSquares();
    return () => clearTimeout(timeoutRef.current);
  }, []);

  const shuffleSquares = () => {
    setSquares(generateSquares());
    timeoutRef.current = setTimeout(shuffleSquares, 4000);
  };

  return (
    <div className="grid grid-cols-3 grid-rows-2 h-[450px] gap-2">
      {squares.map((sq) => sq)}
    </div>
  );
};

export default Hero;
