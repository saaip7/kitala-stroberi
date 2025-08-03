"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, Play, Pause } from 'lucide-react';

const GalleryPage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Slideshow images - featured/hero images
  const slideshowImages = [
    {
      id: 1,
      src: "/galeri/7.jpg",
      alt: "Dua orang Tersenyum Bersama Stroberi",
      title: "Tersenyum Bersama Stroberi",
      description: "Lihat wajah-wajah bahagia saat pengunjung menikmati pengalaman memetik stroberi langsung dari kebunnya."
    },
    {
      id: 2,
      src: "/galeri/1.jpg",
      alt: "Ruang Luas, Udara Sejuk",
      title: "Ruang Luas, Udara Sejuk",
      description: "Berjalan santai di tengah lahan stroberi yang terbuka dan sejuk — tempat terbaik untuk melepas penat bersama keluarga."
    },
    {
      id: 3,
      src: "/galeripage/semprot.jpg",
      alt: "Merawat Tanaman Stroberi",
      title: "Ditanam dengan Perhatian, Dirawat dengan Cinta",
      description: "Di balik setiap tanaman, ada dedikasi dari para pengelola yang merawat lahan ini dengan sepenuh hati."
    },
    {
      id: 4,
      src: "/galeripage/petik.jpg",
      alt: "Stroberi matang siap dipetik",
      title: "Langsung Petik, Langsung Nikmati",
      description: "Petik sendiri stroberi segar dari pohonnya. Aktivitas yang seru dan mengasyikkan untuk semua usia."
    },
    {
      id: 5,
      src: "/galeripage/parkiran.jpg",
      alt: "Parkir Luas dan Nyaman",
      title: "Datang Rame-Rame? Tenang Saja!",
      description: "Parkiran luas siap menyambut kendaraan pengunjung, dari motor hingga rombongan keluarga."
    }
  ];

  // Gallery images data
  const galleryImages = [
    {
      id: 1,
      src: "/galeri/4.jpg",
      alt: "Buah stroberi muda mulai memerah di tengah dedaunan hijau"
    },
    {
      id: 2,
      src: "/galeri/3.jpeg",
      alt: "Stroberi segar siap panen di tangan pengunjung"
    },
    {
      id: 3,
      src: "/galeripage/new/IMG_9305.jpg",
      alt: "Tanaman stroberi tumbuh subur"
    },
    {
      id: 4,
      src: "/galeri/9.jpg",
      alt: "Memetik stroberi merah ranum langsung dari pohonnya"
    },
    {
      id: 5,
      src: "/galeripage/new/IMG_9285.jpg",
      alt: "Keranjang warna-warni berisi hasil panen stroberi"
    },
    {
      id: 6,
      src: "/galeripage/metik.jpg",
      alt: "Pengunjung fokus memetik stroberi di antara barisan tanaman"
    },
    {
      id: 7,
      src: "/galeripage/new/IMG_9325.jpg",
      alt: "Kebun stroberi organik yang luas di kaki bukit"
    },
    {
      id: 8,
      src: "/galeripage/lahan2.jpg",
      alt: "Terasing di tengah alam: barisan tanaman stroberi di lereng"
    },
    {
      id: 9,
      src: "/galeripage/stro.jpg",
      alt: "Buah stroberi matang bergantung di antara bunga yang masih mekar"
    },
  ];

  // Auto-slide functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slideshowImages.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [isAutoPlaying, slideshowImages.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slideshowImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slideshowImages.length) % slideshowImages.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const toggleAutoPlay = () => {
    setIsAutoPlaying(!isAutoPlaying);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-5xl font-semibold text-black mb-4">
              Galeri Kebun Kitala
            </h1>
            <p className="text-md md:text-lg text-gray-600 max-w-2xl mx-auto">
              Jelajahi keindahan kebun stroberi kami melalui koleksi foto-foto 
              yang menampilkan aktivitas sehari-hari dan momen-momen berharga
            </p>
          </div>
        </div>
      </section>

      {/* Slideshow Section */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-white">
            {/* Slideshow Container */}
            <div className="relative h-96 md:h-[600px] overflow-hidden">
              {slideshowImages.map((image, index) => (
                <div
                  key={image.id}
                  className={`absolute inset-0 transition-transform duration-500 ease-in-out ${
                    index === currentSlide ? 'translate-x-0' : 
                    index < currentSlide ? '-translate-x-full' : 'translate-x-full'
                  }`}
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover"
                    priority={index === 0}
                  />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  
                  {/* Content */}
                  <div className="absolute bottom-0 left-0 right-0 mb-4 p-6 md:p-8 text-white">
                    <h3 className="text-md md:text-3xl font-semibold mb-2">{image.title}</h3>
                    <p className="text-sm md:text-lg text-gray-200 max-w-2xl">{image.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center transition-all duration-200 group"
            >
              <ChevronLeft className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
            </button>
            
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center transition-all duration-200 group"
            >
              <ChevronRight className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
            </button>

            {/* Auto-play Toggle */}
            <button
              onClick={toggleAutoPlay}
              className="absolute top-4 right-4 w-10 h-10 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center transition-all duration-200"
            >
              {isAutoPlaying ? (
                <Pause className="w-5 h-5 text-white" />
              ) : (
                <Play className="w-5 h-5 text-white ml-0.5" />
              )}
            </button>

            {/* Dots Indicator */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
              {slideshowImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-200 ${
                    index === currentSlide 
                      ? 'bg-white scale-110' 
                      : 'bg-white/50 hover:bg-white/70'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 pb-[20vh] bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h2 className="text-2xl md:text-3xl font-semibold text-black mb-4">
              Koleksi Foto Lainnya
            </h2>
            <p className="text-gray-600">
              Jelajahi lebih banyak momen indah dari Kebun Kitala
            </p>
          </div>
          
          {/* Larger responsive grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((image) => (
              <div key={image.id} className="relative rounded-2xl overflow-hidden shadow-lg group cursor-pointer hover:shadow-xl transition-all duration-300">
                <div className="aspect-square relative bg-gray-200">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300" />
                  
                  {/* Image overlay with title */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <p className="text-white text-sm font-medium">{image.alt}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default GalleryPage;