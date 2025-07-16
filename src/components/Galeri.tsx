"use client";

import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';

const Gallery = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [hoveredImage, setHoveredImage] = useState<number | null>(null);

  // Gallery images data - organized in slides of 3 images each
  const gallerySlides = [
    [
      {
        id: 1,
        src: "https://images.pexels.com/photos/89775/strawberries-frisch-ripe-sweet-89775.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
        alt: "Strawberry plants in garden"
      },
      {
        id: 2,
        src: "https://images.pexels.com/photos/1122408/pexels-photo-1122408.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
        alt: "Fresh strawberries close up"
      },
      {
        id: 3,
        src: "https://images.pexels.com/photos/1263986/pexels-photo-1263986.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
        alt: "Strawberries in basket"
      }
    ],
    [
      {
        id: 4,
        src: "https://images.pexels.com/photos/1327838/pexels-photo-1327838.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
        alt: "Strawberry field view"
      },
      {
        id: 5,
        src: "https://images.pexels.com/photos/1435735/pexels-photo-1435735.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
        alt: "Picking strawberries"
      },
      {
        id: 6,
        src: "https://images.pexels.com/photos/1327838/pexels-photo-1327838.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
        alt: "Strawberry harvest"
      }
    ]
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % gallerySlides.length);
    setHoveredImage(null);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + gallerySlides.length) % gallerySlides.length);
    setHoveredImage(null);
  };

  const currentImages = gallerySlides[currentSlide];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-8 md:mb-12 gap-6" data-aos="fade-up">
          <div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
              Potret dari<br />
              Kebun Kitala
            </h2>
          </div>
          <div className="md:text-right max-w-md">
            <p className="text-gray-600 leading-relaxed">
              Lihat lebih dekat aktivitas kami — mulai dari menanam, 
              merawat, hingga memetik stroberi bersama
            </p>
          </div>
        </div>

        {/* Gallery Container */}
        <div className="relative" data-aos="fade-up" data-aos-delay="200">
          {/* Images Grid */}
          <div className="flex flex-col md:flex-row gap-4 md:h-96 rounded-2xl overflow-hidden mb-8">
            {currentImages.map((image, index) => (
              <div
                key={image.id}
                className={`relative rounded-2xl overflow-hidden cursor-pointer transition-all duration-500 ease-out h-64 md:h-auto ${
                  index === 0 
                    ? hoveredImage === index
                      ? 'md:flex-[3] shadow-2xl'
                      : hoveredImage !== null && hoveredImage !== index
                      ? 'md:flex-[1.5] opacity-80'
                      : 'md:flex-[2]'
                    : hoveredImage === index
                      ? 'md:flex-[2] shadow-2xl'
                      : hoveredImage !== null && hoveredImage !== index
                      ? 'md:flex-[0.5] opacity-80'
                      : 'md:flex-1'
                }`}
                onMouseEnter={() => setHoveredImage(index)}
                onMouseLeave={() => setHoveredImage(null)}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-300 hover:scale-101"
                />
                
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
              </div>
            ))}
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-center md:justify-end gap-2">
            <button
              onClick={prevSlide}
              className="w-12 h-12 bg-gray-100 hover:bg-gray-200 rounded-lg flex items-center justify-center transition-all duration-200 group disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={currentSlide === 0}
            >
              <ChevronLeft className="w-5 h-5 text-gray-600 group-hover:text-gray-800" />
            </button>
            
            <button
              onClick={nextSlide}
              className="w-12 h-12 bg-red-500 hover:bg-red-600 rounded-lg flex items-center justify-center transition-all duration-200 group shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={currentSlide === gallerySlides.length - 1}
            >
              <ChevronRight className="w-5 h-5 text-white" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;