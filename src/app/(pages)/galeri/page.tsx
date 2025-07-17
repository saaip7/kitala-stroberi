"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, Play, Pause } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const GalleryPage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Slideshow images - featured/hero images
  const slideshowImages = [
    {
      id: 1,
      src: "https://images.pexels.com/photos/89775/strawberries-frisch-ripe-sweet-89775.jpeg?auto=compress&cs=tinysrgb&w=1200&h=600&fit=crop",
      alt: "Kebun stroberi yang hijau dan segar",
      title: "Kebun Stroberi Kitala",
      description: "Hamparan hijau kebun stroberi yang dikelola dengan penuh kasih"
    },
    {
      id: 2,
      src: "https://images.pexels.com/photos/1327838/pexels-photo-1327838.jpeg?auto=compress&cs=tinysrgb&w=1200&h=600&fit=crop",
      alt: "Aktivitas petik stroberi bersama",
      title: "Aktivitas Petik Stroberi",
      description: "Momen kebersamaan saat memetik stroberi segar langsung dari kebun"
    },
    {
      id: 3,
      src: "https://images.pexels.com/photos/1263986/pexels-photo-1263986.jpeg?auto=compress&cs=tinysrgb&w=1200&h=600&fit=crop",
      alt: "Hasil panen stroberi segar",
      title: "Hasil Panen Berkualitas",
      description: "Stroberi segar hasil kerja keras para pengelola kebun"
    },
    {
      id: 4,
      src: "https://images.pexels.com/photos/1122408/pexels-photo-1122408.jpeg?auto=compress&cs=tinysrgb&w=1200&h=600&fit=crop",
      alt: "Stroberi matang siap dipetik",
      title: "Stroberi Matang Sempurna",
      description: "Buah stroberi yang matang sempurna dan siap untuk dipetik"
    },
    {
      id: 5,
      src: "https://images.pexels.com/photos/162689/strawberries-red-fruit-royalty-free-162689.jpeg?auto=compress&cs=tinysrgb&w=1200&h=600&fit=crop",
      alt: "Koleksi stroberi merah segar",
      title: "Stroberi Merah Segar",
      description: "Koleksi stroberi merah segar yang menggugah selera"
    }
  ];

  // Gallery images data
  const galleryImages = [
    {
      id: 1,
      src: "https://images.pexels.com/photos/89775/strawberries-frisch-ripe-sweet-89775.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      alt: "Fresh strawberries on plant"
    },
    {
      id: 2,
      src: "https://images.pexels.com/photos/1122408/pexels-photo-1122408.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
      alt: "Strawberry close up"
    },
    {
      id: 3,
      src: "https://images.pexels.com/photos/1263986/pexels-photo-1263986.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
      alt: "Strawberries in basket"
    },
    {
      id: 4,
      src: "https://images.pexels.com/photos/1327838/pexels-photo-1327838.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
      alt: "Strawberry field view"
    },
    {
      id: 5,
      src: "https://images.pexels.com/photos/1435735/pexels-photo-1435735.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop",
      alt: "Picking strawberries"
    },
    {
      id: 6,
      src: "https://images.pexels.com/photos/162689/strawberries-red-fruit-royalty-free-162689.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
      alt: "Strawberry harvest"
    },
    {
      id: 7,
      src: "https://images.pexels.com/photos/1327838/pexels-photo-1327838.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
      alt: "Garden workers"
    },
    {
      id: 8,
      src: "https://images.pexels.com/photos/89775/strawberries-frisch-ripe-sweet-89775.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
      alt: "Strawberry plants"
    },
    {
      id: 9,
      src: "https://images.pexels.com/photos/1122408/pexels-photo-1122408.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop",
      alt: "Fresh picked strawberries"
    },
    {
      id: 10,
      src: "https://images.pexels.com/photos/1263986/pexels-photo-1263986.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
      alt: "Strawberry garden path"
    },
    {
      id: 11,
      src: "https://images.pexels.com/photos/162689/strawberries-red-fruit-royalty-free-162689.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
      alt: "Ripe strawberries"
    },
    {
      id: 12,
      src: "https://images.pexels.com/photos/1327838/pexels-photo-1327838.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      alt: "Garden overview"
    }
  ];

  // Auto-slide functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slideshowImages.length);
    }, 4000); // Change slide every 4 seconds

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
            <h1 className="text-4xl md:text-5xl font-semibold text-black mb-4">
              Galeri Kebun Kitala
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
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
            <div className="relative h-96 md:h-[500px] overflow-hidden">
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
                  <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 text-white">
                    <h3 className="text-2xl md:text-3xl font-semibold mb-2">{image.title}</h3>
                    <p className="text-lg text-gray-200 max-w-2xl">{image.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center transition-all duration-200 group"
            >
              <ChevronLeft className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
            </button>
            
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center transition-all duration-200 group"
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