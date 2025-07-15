import Image from "next/image";

const Navbar = () => {
  return (
    <nav className="relative z-50 bg-white backdrop-blur-sm py-2">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <Image
              src="/logo.png"
              alt="Logo"
              width={110}
              height={1000}
            />
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-gray-700 hover:text-red-500 transition-colors duration-200 font-medium">
              Tentang Kami
            </a>
            <a href="#" className="text-gray-700 hover:text-red-500 transition-colors duration-200 font-medium">
              Galeri
            </a>
            <a href="#" className="text-gray-700 hover:text-red-500 transition-colors duration-200 font-medium">
              Wisata
            </a>
            <a href="#" className="text-gray-700 hover:text-red-500 transition-colors duration-200 font-medium">
              Cerita
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