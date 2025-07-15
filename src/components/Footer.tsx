import React from "react";
import { AiFillInstagram, AiOutlineTikTok } from "react-icons/ai";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-white">
      <div className="bg-darkGreen text-white py-12 rounded-t-3xl">
        <div className="mx-auto px-4 sm:px-6 lg:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Left Side - Logo and Address */}
            <div className="space-y-2">
              {/* Logo */}
              <div className="flex items-center">
                <Image
                  src="/LOGO 2 WHITE.png"
                  alt="Kitala Stroberi Logo"
                  width={320}
                  height={0}
                />
              </div>

              {/* Address */}
              <div className="text-white">
                <p>Kebun Krecek, Tulungrejo, Bumiaji, Batu, Kota</p>
                <p>Batu, Jawa Timur 65331</p>
              </div>
            </div>

            {/* Right Side - Collaboration and Navigation */}
            <div className="flex justify-end space-y-6">
              {/* Collaboration Section */}
              <div className="space-y-2 text-center lg:text-right">
                <p className="text-white mb-4 italic">Kolaborasi Dengan</p>
                <Image
                  src={"/ugm-lestari.png"}
                  alt="Logo 2"
                  width={340}
                  height={0}
                />
              </div>
            </div>
          </div>

          {/* Separator Line */}
          <div className="w-full h-px bg-white my-6"></div>

          {/* Bottom Navigation */}
          <div className="flex justify-between">
            <div className="flex flex-row items-end mb-4 gap-2">
              <a
                href="https://www.tiktok.com/@yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-white p-2 inline-block hover:bg-[#E12929] transition-colors duration-200 group"
              >
                <AiOutlineTikTok className="w-5 h-5 text-[#E12929] group-hover:text-white" />
              </a>

              <a
                href="https://www.instagram.com/@yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-white p-2 inline-block hover:bg-[#E12929] transition-colors duration-200 group"
              >
                <AiFillInstagram className="w-5 h-5 text-[#E12929] group-hover:text-white" />
              </a>
            </div>

            <div className="flex gap-8 text-white">
              <a
                href="#"
                className="hover:text-white transition-colors duration-200"
              >
                Tentang Kami
              </a>
              <a
                href="#"
                className="hover:text-white transition-colors duration-200"
              >
                Galeri
              </a>
              <a
                href="#"
                className="hover:text-white transition-colors duration-200"
              >
                Wisata
              </a>
              <a
                href="#"
                className="hover:text-white transition-colors duration-200"
              >
                Cerita
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
