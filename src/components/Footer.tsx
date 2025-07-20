import React from "react";
import { AiFillInstagram, AiOutlineTikTok } from "react-icons/ai";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-white">
      <div className="bg-darkGreen text-white py-8 md:py-12 rounded-t-3xl">
        <div className="mx-auto" style={{ paddingLeft: '2vw', paddingRight: '2vw' }}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 items-center">
            {/* Left Side - Logo and Address */}
            <div className="space-y-3 md:space-y-2 text-center lg:text-left">
              {/* Logo */}
              <div className="flex items-center justify-center lg:justify-start">
                <Image
                  src="/LOGO 2 WHITE.png"
                  alt="Kitala Stroberi Logo"
                  width={280}
                  height={0}
                  className="md:w-[320px]"
                />
              </div>

              {/* Address */}
              <div className="text-white text-sm md:text-base">
                <p>Kebun Krecek, Tulungrejo, Bumiaji, Batu, Kota</p>
                <p>Batu, Jawa Timur 65331</p>
              </div>
            </div>

            {/* Right Side - Collaboration and Navigation */}
            <div className="flex justify-center lg:justify-end">
              {/* Collaboration Section */}
              <div className="space-y-3 md:space-y-2 text-center lg:text-right">
                <p className="text-white mb-3 md:mb-4 italic text-sm md:text-base">Kolaborasi Dengan</p>
                <Image
                  src={"/ugm-lestari.png"}
                  alt="Logo 2"
                  width={300}
                  height={0}
                  className="md:w-[340px]"
                />
              </div>
            </div>
          </div>

          {/* Separator Line */}
          <div className="w-full h-px bg-white my-4 md:my-6"></div>

          {/* Bottom Navigation */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 md:gap-0">
            <div className="flex flex-row items-center gap-2">
              <a
                href="https://www.tiktok.com/@kitala.strawberry"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-white p-2 inline-block hover:bg-[#E12929] transition-colors duration-200 group"
              >
                <AiOutlineTikTok className="w-4 h-4 md:w-5 md:h-5 text-[#E12929] group-hover:text-white" />
              </a>

              <a
                href="https://www.instagram.com/kitala_strawberry/"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-white p-2 inline-block hover:bg-[#E12929] transition-colors duration-200 group"
              >
                <AiFillInstagram className="w-4 h-4 md:w-5 md:h-5 text-[#E12929] group-hover:text-white" />
              </a>
            </div>

            <div className="flex flex-wrap justify-center md:justify-end gap-4 md:gap-8 text-white text-sm md:text-base">
              <Link
                href="/"
                className="hover:text-white transition-colors duration-200"
              >
                Beranda
              </Link>
              <Link
                href="/galeri"
                className="hover:text-white transition-colors duration-200"
              >
                Galeri
              </Link>
              <a
                href="#/tentang-kami"
                className="hover:text-white transition-colors duration-200"
              >
                Tentang Kami
              </a>
              <Link
                href="/artikel"
                className="hover:text-white transition-colors duration-200"
              >
                Artikel
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
