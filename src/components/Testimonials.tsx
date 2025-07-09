"use client";

import React, { useState, useRef } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // Dummy testimonial data
  const testimonials = [
    {
      id: 1,
      name: "Jay Jo",
      rating: 5,
      text: "Lorem ipsum dolor sit amet consectetur. Massa enim est diam nunc fusce quis turpis. In sem faucibus amet lacus. Ut aliquam tristique tellus ut. Orci dictum massa malesuada morbi pharetra semper cursus elementum. Purus volutpat amet amet ut. Eu.",
      avatar: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop"
    },
    {
      id: 2,
      name: "Sarah Kim",
      rating: 5,
      text: "Lorem ipsum dolor sit amet consectetur. Massa enim est diam nunc fusce quis turpis. In sem faucibus amet lacus. Ut aliquam tristique tellus ut. Orci dictum massa malesuada morbi pharetra semper cursus elementum. Purus volutpat amet amet ut. Eu.",
      avatar: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop"
    },
    {
      id: 3,
      name: "Mike Chen",
      rating: 5,
      text: "Lorem ipsum dolor sit amet consectetur. Massa enim est diam nunc fusce quis turpis. In sem faucibus amet lacus. Ut aliquam tristique tellus ut. Orci dictum massa malesuada morbi pharetra semper cursus elementum. Purus volutpat amet amet ut. Eu.",
      avatar: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop"
    },
    {
      id: 4,
      name: "Lisa Wang",
      rating: 5,
      text: "Lorem ipsum dolor sit amet consectetur. Massa enim est diam nunc fusce quis turpis. In sem faucibus amet lacus. Ut aliquam tristique tellus ut. Orci dictum massa malesuada morbi pharetra semper cursus elementum. Purus volutpat amet amet ut. Eu.",
      avatar: "https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop"
    },
    {
      id: 5,
      name: "David Park",
      rating: 5,
      text: "Lorem ipsum dolor sit amet consectetur. Massa enim est diam nunc fusce quis turpis. In sem faucibus amet lacus. Ut aliquam tristique tellus ut. Orci dictum massa malesuada morbi pharetra semper cursus elementum. Purus volutpat amet amet ut. Eu.",
      avatar: "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop"
    },
    {
      id: 6,
      name: "Emma Johnson",
      rating: 5,
      text: "Lorem ipsum dolor sit amet consectetur. Massa enim est diam nunc fusce quis turpis. In sem faucibus amet lacus. Ut aliquam tristique tellus ut. Orci dictum massa malesuada morbi pharetra semper cursus elementum. Purus volutpat amet amet ut. Eu.",
      avatar: "https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop"
    }
  ];

  const scrollToIndex = (index: number) => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const cardWidth = container.children[0]?.clientWidth || 0;
      const gap = 24; // 1.5rem gap
      const scrollPosition = index * (cardWidth + gap);
      
      container.scrollTo({
        left: scrollPosition,
        behavior: 'smooth'
      });
    }
  };

  const nextTestimonial = () => {
    const maxIndex = testimonials.length - 3; // Show 3 cards at once
    const newIndex = currentIndex < maxIndex ? currentIndex + 1 : 0;
    setCurrentIndex(newIndex);
    scrollToIndex(newIndex);
  };

  const prevTestimonial = () => {
    const maxIndex = testimonials.length - 3;
    const newIndex = currentIndex > 0 ? currentIndex - 1 : maxIndex;
    setCurrentIndex(newIndex);
    scrollToIndex(newIndex);
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`w-4 h-4 ${
          index < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
        }`}
      />
    ));
  };

  return (
    <section className="py-16">
      <div className=" mx-auto">
        {/* Header */}
        <div className="max-w-7xl mx-auto flex justify-between items-end mb-12">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-semibold text-black mb-4">
              Apa Kata Mereka
            </h2>
            <p className="text-lg text-gray">
              Berbagai kesan dari pengunjung yang merasakan sendiri 
              kehangatan dan keunikan Kebun Kitala
            </p>
          </div>

          {/* Navigation Buttons */}
          <div className="flex gap-2">
            <button
              onClick={prevTestimonial}
              className="w-12 h-12 bg-white hover:bg-gray-50 border border-gray-200 rounded-lg flex items-center justify-center transition-all duration-200 group shadow-sm"
            >
              <ChevronLeft className="w-5 h-5 text-gray-600 group-hover:text-gray-800" />
            </button>
            
            <button
              onClick={nextTestimonial}
              className="w-12 h-12 bg-darkGreen hover:bg-emerald-800 rounded-lg flex items-center justify-center transition-all duration-200 group shadow-lg"
            >
              <ChevronRight className="w-5 h-5 text-white" />
            </button>
          </div>
        </div>

        {/* Testimonials Container */}
        <div className="relative">
          <div
            ref={scrollContainerRef}
            className="flex gap-6 overflow-x-hidden scroll-smooth pl-[7.5rem] pb-12"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="flex-shrink-0 w-80 bg-[#F5F5F5] rounded-2xl p-6"
              >
                {/* Testimonial Text */}
                <p className="text-gray-600 leading-relaxed mb-6 text-sm">
                  {testimonial.text}
                </p>

                {/* User Info */}
                <div className="flex items-center gap-4">
                  {/* Avatar */}
                  <div className="w-12 h-12 rounded-full overflow-hidden bg-gray-200 flex-shrink-0">
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="flex-1">
                    {/* Name */}
                    <h4 className="font-semibold text-gray-800 mb-1">
                      {testimonial.name}
                    </h4>

                    {/* Rating */}
                    <div className="flex gap-1">
                      {renderStars(testimonial.rating)}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .scroll-smooth::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
};

export default Testimonials;