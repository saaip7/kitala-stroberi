"use client";

import React from 'react';

const CTA = () => {
  const handleShare = async () => {
    const shareData = {
      title: 'Kebun Stroberi Kitala',
      text: 'Petik Stroberimu, Tanam Kebaikanmu - Wisata petik stroberi yang mendukung pemberdayaan disabilitas mental',
      url: window.location.origin
    };

    try {
      if (navigator.share) {
        // Use native share API if available (mobile devices)
        await navigator.share(shareData);
      } else {
        // Fallback to copying URL to clipboard
        await navigator.clipboard.writeText(window.location.origin);
        alert('Link website telah disalin ke clipboard!');
      }
    } catch (error) {
      // If both fail, show the URL
      prompt('Salin link website ini untuk dibagikan:', window.location.origin);
    }
  };

  const handleWhatsApp = () => {
    const message = encodeURIComponent('Halo! Saya tertarik untuk berkunjung ke Kebun Stroberi Kitala. Bisa minta informasi lebih lanjut?');
    const phoneNumber = '6281234567890'; // Replace with actual WhatsApp number
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };
  return (
    <section className="py-16 bg-white">
      <div className="px-4 sm:px-6 lg:px-8">
        {/* Rounded Container with Background Image */}
        <div className="relative rounded-3xl overflow-hidden min-h-[500px] shadow-2xl" data-aos="fade-up">
          {/* Background Image */}
          <div className="absolute inset-0">
            <img
              src="/hero/hero-img.png"
              alt="Strawberry garden background"
              className="w-full h-full object-cover"
            />
            {/* Overlay for better text readability */}
            <div className="absolute inset-0 bg-black/60"></div>
          </div>

          {/* Content */}
          <div className="relative z-10 flex items-center justify-center min-h-[500px] px-8 py-16">
            <div className="text-center text-white max-w-4xl" data-aos="fade-up" data-aos-delay="200">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold mb-6">
                Petik Stroberimu<br />
                Tanam Kebaikanmu
              </h2>
              
              <p className="text-lg md:text-xl mb-8 text-white max-w-2xl mx-auto">
                Dengan berkunjung ke kebun kami, kamu ikut mendukung perjuangan 
                mereka menuju kemandirian
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center" data-aos="fade-up" data-aos-delay="400">
                <button 
                  onClick={handleShare}
                  className="cursor-pointer bg-white hover:bg-gray-100 text-black rounded-full px-4 h-[50px] font-medium text-[14px] transition-all duration-200"
                >
                  BAGIKAN CERITA
                </button>
                
                <button 
                  onClick={handleWhatsApp}
                  className="cursor-pointer bg-transparent hover:bg-white/10 text-white px-8 h-[50px] text-[14px] rounded-full transition-all duration-200 font-medium border-2 border-white hover:border-white/80"
                >
                  HUBUNGI SEKARANG
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;