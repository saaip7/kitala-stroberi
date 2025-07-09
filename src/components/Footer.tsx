import React from 'react';
import { Grape, Instagram, Music } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-emerald-800 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Left Side - Logo and Address */}
          <div className="space-y-6">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center">
                <Grape className="w-7 h-7 text-white" />
              </div>
              <div className="text-2xl font-bold">
                Kitala Stroberi
              </div>
            </div>

            {/* Address */}
            <div className="text-emerald-100 leading-relaxed">
              <p>Kebun Krecek, Tulungrejo, Bumiaji, Batu, Kota</p>
              <p>Batu, Jawa Timur 65331</p>
            </div>

            {/* Social Media */}
            <div className="flex gap-4">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors duration-200 cursor-pointer">
                <Instagram className="w-5 h-5" />
              </div>
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors duration-200 cursor-pointer">
                <Music className="w-5 h-5" />
              </div>
            </div>
          </div>

          {/* Right Side - Collaboration and Navigation */}
          <div className="lg:text-right space-y-6">
            {/* Collaboration Section */}
            <div>
              <p className="text-emerald-100 mb-4 italic">Kolaborasi Dengan</p>
              <div className="flex justify-end items-center gap-4">
                {/* Government Logo Placeholder */}
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                  <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
                </div>
                
                {/* Lestari Bumiaji Logo */}
                <div className="bg-yellow-400 px-4 py-2 rounded-lg">
                  <div className="text-emerald-800 font-bold text-sm">
                    lestari bumiaji
                  </div>
                  <div className="text-emerald-700 text-xs">
                    KOTA BATU JAWA TIMUR 2025
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation Links */}
          </div>
        </div>

        {/* Separator Line */}
        <div className="w-full h-px bg-emerald-600 my-8"></div>

        {/* Bottom Navigation */}
        <div className="flex justify-center lg:justify-end">
          <div className="flex gap-8 text-emerald-100">
            <a href="#" className="hover:text-white transition-colors duration-200">
              Tentang Kami
            </a>
            <a href="#" className="hover:text-white transition-colors duration-200">
              Galeri
            </a>
            <a href="#" className="hover:text-white transition-colors duration-200">
              Wisata
            </a>
            <a href="#" className="hover:text-white transition-colors duration-200">
              Cerita
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;