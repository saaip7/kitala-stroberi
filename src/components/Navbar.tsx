import Image from "next/image";

const Navbar = () => {
  return (
    <nav className="relative z-50 bg-white backdrop-blur-sm py-2">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="/" className="flex items-center">
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
          </a>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <a
              href="/"
              className="text-gray-700 hover:text-red-500 transition-colors duration-200 font-medium"
            >
              Beranda
            </a>
            <a
              href="/galeri"
              className="text-gray-700 hover:text-red-500 transition-colors duration-200 font-medium"
            >
              Galeri
            </a>
            <a
              href="/tentang-kami"
              className="text-gray-700 hover:text-red-500 transition-colors duration-200 font-medium"
            >
              Tentang Kami
            </a>
            <a
              href="/artikel"
              className="text-gray-700 hover:text-red-500 transition-colors duration-200 font-medium"
            >
              Artikel
            </a>
          </div>

          {/* CTA Button */}
          <button className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-4 py-2 rounded-full transition-all duration-200 font-medium">
            Hubungi Kami
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
