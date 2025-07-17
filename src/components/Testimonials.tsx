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
    name: "Iskandar NS",
    rating: 5,
    text: "Wisata petik strawberry di kebun Kitala sangat berkesan, alamnya Asri, pemandangan keren, hawa nya sejuk beda dengan tempat yang lain, yang membuat saya kagum Kebun Kitala Strawberry di kelola sama saudara kita yang mengalami disabilitas mental sebagai bentuk pembelajaran kemandirian buat mereka.",
    avatar: "https://lh3.googleusercontent.com/a-/ALV-UjVIHiVZXGT8pYIHy9fcMYXzvNtETuwEkXZ_r6uh5ZwfGgjPQ5NN=w90-h90-p-rp-mo-br100"
  },
  {
    id: 2,
    name: "Nyoman Adi Susila",
    rating: 5,
    text: "Saya sudah pernah dua kali ke kebun kitala petik strawberry. Sekarang saya dari Bali bersama rombongan. Harga masih ramah di kantong strawberrynya manis. Terima kasih kepada pengelola yang sangat ramah.",
    avatar: "https://lh3.googleusercontent.com/a-/ALV-UjWl4XAQFWL3Z8fg6xtpm14Lg3jAgqvrezLpiAULfoky_q0Xy1k=w90-h90-p-rp-mo-ba5-br100"
  },
  {
    id: 3,
    name: "Prasetyo Hari P",
    rating: 5,
    text: "Suasana sejuk dan dingin, buah nya juga besar lokasinya sangat strategis 👍",
    avatar: "/avatar-testimoni/prasetyo.png"
  },
  {
    id: 4,
    name: "Sinta Yunita Sari",
    rating: 5,
    text: "Kualitas strawberry nya tidak usah diragukan lagi, rasanya manis, dan ukurannya besar. Tempatnya nyaman, sejuk dan luas. Very recommended. Dijamin tidak menyesal.",
    avatar: "/avatar-testimoni/sinta.png"
  },
  {
    id: 5,
    name: "Zenni Afifah",
    rating: 5,
    text: "Mantap luar biasaa kebu Strowbery Kitalah tdk mengecewakan , luar biasa buahnyaa manis2 merah2 besar2. Mantappp dan puasss🥰🙏❤️❤️❤️❤️",
    avatar: "/avatar-testimoni/zeeni.png"
  },
  {
    id: 6,
    name: "Parley Davit'son",
    rating: 5,
    text: "Kebun Kitala merupakan tempat refreshing.. sekaligus menikmati langsung buah strawberry 🍓 dari pohon nya.. Juga merupakan tempat berproses.. Atau terapi bekerja bagi para disabilitas mental 🙏👍🙏",
    avatar: "https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop"
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
        <div className="max-w-7xl mx-auto px-8 md:px-0 flex flex-col md:flex-row justify-between items-start md:items-end mb-8 md:mb-12 gap-6 md:gap-0" data-aos="fade-up">
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
                <p className="text-gray-600 leading-relaxed mb-4 md:mb-6 text-sm min-h-[180px]">
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