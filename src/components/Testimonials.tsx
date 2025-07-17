"use client";

import React, { useState, useRef, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  // Check if device is mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Handle touch scroll on mobile
  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container || !isMobile) return;

    let isScrolling = false;
    let startX = 0;
    let scrollLeft = 0;

    const handleTouchStart = (e: TouchEvent) => {
      isScrolling = true;
      startX = e.touches[0].pageX - container.offsetLeft;
      scrollLeft = container.scrollLeft;
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (!isScrolling) return;
      e.preventDefault();
      const x = e.touches[0].pageX - container.offsetLeft;
      const walk = (x - startX) * 2;
      container.scrollLeft = scrollLeft - walk;
    };

    const handleTouchEnd = () => {
      isScrolling = false;
    };

    container.addEventListener('touchstart', handleTouchStart, { passive: true });
    container.addEventListener('touchmove', handleTouchMove, { passive: false });
    container.addEventListener('touchend', handleTouchEnd, { passive: true });

    return () => {
      container.removeEventListener('touchstart', handleTouchStart);
      container.removeEventListener('touchmove', handleTouchMove);
      container.removeEventListener('touchend', handleTouchEnd);
    };
  }, [isMobile]);

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
    // Mobile: show 1 card, Desktop: show 3 cards
    const cardsVisible = window.innerWidth < 768 ? 1 : 3;
    const maxIndex = testimonials.length - cardsVisible;
    const newIndex = currentIndex < maxIndex ? currentIndex + 1 : 0;
    setCurrentIndex(newIndex);
    scrollToIndex(newIndex);
  };

  const prevTestimonial = () => {
    const cardsVisible = window.innerWidth < 768 ? 1 : 3;
    const maxIndex = testimonials.length - cardsVisible;
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
    <section className="py-12 md:py-16">
      <div className="mx-auto">
        {/* Header */}
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 flex flex-col md:flex-row justify-between items-start md:items-end mb-8 md:mb-12 gap-6 md:gap-0" data-aos="fade-up">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-black mb-3 md:mb-4">
              Apa Kata Mereka
            </h2>
            <p className="text-base md:text-lg text-gray">
              Berbagai kesan dari pengunjung yang merasakan sendiri 
              kehangatan dan keunikan Kebun Kitala
            </p>
          </div>

          {/* Navigation Buttons */}
          <div className="flex gap-2 self-end md:self-auto">
            <button
              onClick={prevTestimonial}
              className="w-10 h-10 md:w-12 md:h-12 bg-white hover:bg-gray-50 border border-gray-200 rounded-lg flex items-center justify-center transition-all duration-200 group shadow-sm"
            >
              <ChevronLeft className="w-4 h-4 md:w-5 md:h-5 text-gray-600 group-hover:text-black" />
            </button>
            
            <button
              onClick={nextTestimonial}
              className="w-10 h-10 md:w-12 md:h-12 bg-darkGreen hover:bg-emerald-800 rounded-lg flex items-center justify-center transition-all duration-200 group shadow-lg"
            >
              <ChevronRight className="w-4 h-4 md:w-5 md:h-5 text-white" />
            </button>
          </div>
        </div>

        {/* Testimonials Container */}
        <div className="relative" data-aos="fade-up" data-aos-delay="200">
          <div
            ref={scrollContainerRef}
            className="flex gap-4 md:gap-6 overflow-x-auto md:overflow-x-hidden scroll-smooth px-6 md:pl-[7.5rem] pb-12 touch-pan-x"
            style={{ 
              scrollbarWidth: 'none', 
              msOverflowStyle: 'none',
              WebkitOverflowScrolling: 'touch'
            }}
          >
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="flex-shrink-0 w-72 md:w-80 bg-[#F5F5F5] rounded-xl md:rounded-2xl p-4 md:p-6"
              >
                {/* Testimonial Text */}
                <p className="text-gray-600 leading-relaxed mb-4 md:mb-6 text-sm">
                  {testimonial.text}
                </p>

                {/* User Info */}
                <div className="flex items-center gap-3 md:gap-4">
                  {/* Avatar */}
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-full overflow-hidden bg-gray-200 flex-shrink-0">
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="flex-1">
                    {/* Name */}
                    <h4 className="font-semibold text-black mb-1 text-sm md:text-base">
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