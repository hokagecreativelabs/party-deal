"use client";
import { FiArrowRight, FiMenu, FiX } from "react-icons/fi";
import Image from "next/image";
import { useState } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Toggle menu visibility on hamburger click
  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="sticky top-0 backdrop-blur-sm z-20 h-[9vh] mt-4 flex flex-col justify-center">
      <div className="flex justify-center items-center py-2 bg-black text-white text-sm gap-3">
        <p className="text-white/60 hidden md:block font-satoshi tracking-wider">
          Discover the best party deals and experiences
        </p>
        <div className="inline-flex gap-1 items-center font-satoshi tracking-wider">
          <p>Get A Quote</p>
          <FiArrowRight className="h-4 w-4 inline-flex justify-center items-center" />
        </div>
      </div>
      <div className="h-full flex items-center max-h-[9vh]">
        <div className="container mx-auto flex items-center justify-between px-4 relative">
          {/* Logo for Desktop and Mobile */}
          <Image
            src="/assets/img/log.png"
            alt="Party Deal Logo"
            height={100}
            width={150}
            className="md:ml-0 -ml-4 z-20" // Ensure it's above other elements
            priority
          />

          {/* Hamburger menu */}
          <button
            className="md:hidden text-white relative z-30" // Ensure it's on top of other items
            onClick={handleMenuToggle}
          >
            {isMenuOpen ? (
              <FiX className="h-8 w-8 text-white mt-2 z-30" />
            ) : (
              <FiMenu className="h-8 w-8 text-black mt-2" />
            )}
          </button>

          {/* Desktop menu */}
          <nav className="hidden md:flex gap-6 font-satoshi tracking-wider text-black/80 font-medium items-center text-lg">
            <a href="#">Home</a>
            <a href="#">Bookings</a>
            <a href="#">Company</a>
            <button className="bg-black text-white px-4 py-2 rounded-lg font-medium inline-flex items-center justify-center tracking-tight">
              Book Now
            </button>
          </nav>

          {/* Mobile menu */}
          <div
            className={`${
              isMenuOpen ? "block" : "hidden"
            } md:hidden font-satoshi tracking-wider absolute top-3 left-0 w-full h-screen bg-black text-white text-4xl space-y-6 flex flex-col items-center justify-center gap-6 z-20`}
          >
            <a href="#" onClick={handleMenuToggle}>
              Home
            </a>
            <a href="#" onClick={handleMenuToggle}>
              Bookings
            </a>
            <a href="#" onClick={handleMenuToggle}>
              Company
            </a>
            <button
              className="bg-black text-white px-4 py-2 rounded-lg font-medium inline-flex items-center justify-center tracking-tight"
              onClick={handleMenuToggle}
            >
              Get for free
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
