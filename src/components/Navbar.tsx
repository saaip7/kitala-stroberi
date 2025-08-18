"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { useContactModal } from "@/contexts/ContactModalContext";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { openContactModal } = useContactModal();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="relative z-50 bg-white backdrop-blur-sm py-2">
      <div className="max-w-7xl mx-auto" style={{ paddingLeft: '1vw', paddingRight: '1vw' }}>
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <div className="flex items-center space-x-2 w-[110px] h-[50px]">
              <Image 
                src="/Logo.png" 
                alt="Kitala Stroberi Logo" 
                width={110} 
                height={50} 
                priority
                className="hover:scale-105 transition-transform duration-200 object-contain w-full h-full"
              />
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className="text-gray-700 hover:text-red-500 transition-colors duration-200 font-medium"
            >
              Beranda
            </Link>
            <Link
              href="/galeri"
              className="text-gray-700 hover:text-red-500 transition-colors duration-200 font-medium"
            >
              Galeri
            </Link>
            <Link
              href="/tentang-kami"
              className="text-gray-700 hover:text-red-500 transition-colors duration-200 font-medium"
            >
              Tentang Kami
            </Link>
            <Link
              href="/artikel"
              className="text-gray-700 hover:text-red-500 transition-colors duration-200 font-medium"
            >
              Artikel
            </Link>
          </div>

          {/* Desktop CTA Button */}
          <button
            onClick={openContactModal}
            className="hidden md:flex bg-white hover:bg-gray-50 border border-gray-300 border-2 text-black hover:text-red-500 px-4 py-2 rounded-full transition-all duration-200 font-medium items-center justify-center"
          >
            Hubungi Kami
          </button>

          {/* Mobile Hamburger Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden flex items-center justify-center w-10 h-10 rounded-lg hover:bg-gray-100 transition-colors duration-200"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-gray-700" />
            ) : (
              <Menu className="w-6 h-6 text-gray-700" />
            )}
          </button>
        </div>

        {/* Mobile Menu Floating Div */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full right-4 mt-2 w-64 bg-white rounded-2xl shadow-xl border border-gray-200 py-4 z-50">
            <div className="flex flex-col space-y-1">
              <Link
                href="/"
                className="text-gray-700 hover:text-red-500 hover:bg-gray-50 transition-all duration-200 font-medium px-6 py-3 rounded-lg mx-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Beranda
              </Link>
              <Link
                href="/galeri"
                className="text-gray-700 hover:text-red-500 hover:bg-gray-50 transition-all duration-200 font-medium px-6 py-3 rounded-lg mx-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Galeri
              </Link>
              <Link
                href="/tentang-kami"
                className="text-gray-700 hover:text-red-500 hover:bg-gray-50 transition-all duration-200 font-medium px-6 py-3 rounded-lg mx-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Tentang Kami
              </Link>
              <Link
                href="/artikel"
                className="text-gray-700 hover:text-red-500 hover:bg-gray-50 transition-all duration-200 font-medium px-6 py-3 rounded-lg mx-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Artikel
              </Link>
              
              {/* Mobile CTA Button */}
              <div className="px-2 pt-2">
                <button
                  onClick={() => {
                    setIsMenuOpen(false);
                    openContactModal();
                  }}
                  className="flex bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-full transition-all duration-200 font-medium items-center justify-center w-full"
                >
                  Hubungi Kami
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
