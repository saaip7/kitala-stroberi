import React from 'react';
import { Car, Heart, Users } from 'lucide-react';
import Image from 'next/image';

const WhyVisit = () => {
  const features = [
    {
      icon: Car,
      title: "Parkiran Luas",
      description: "Lorem ipsum dolor sit amet consectetur. Nulla in mattis egestas massa cursus."
    },
    {
      icon: Heart,
      title: "Parkiran Luas",
      description: "Lorem ipsum dolor sit amet consectetur. Nulla in mattis egestas massa cursus."
    },
    {
      icon: Users,
      title: "Parkiran Luas",
      description: "Lorem ipsum dolor sit amet consectetur. Nulla in mattis egestas massa cursus."
    }
  ];

  return (
    <section className="relative py-16 bg-darkGreen overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 relative z-10">
        {/* Header */}
        <div className="text-center mb-12" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Kenapa Harus ke Kitala?
          </h2>
          <p className="text-base md:text-lg text-white max-w-2xl mx-auto px-4">
            Lebih dari sekadar petik stroberi. Inilah pengalaman yang hanya bisa 
            kamu temukan di sini
          </p>
        </div>

        {/* Main Content Container */}
        <div className="relative" data-aos="fade-up" data-aos-delay="200">
          {/* Background Image Container */}
          <div className="relative rounded-3xl overflow-hidden bg-black/20 backdrop-blur-sm">
            {/* Strawberry Background Image */}
            <div className="absolute inset-0">
              <Image 
                src="/hero/hero-img.png"
                alt="Fresh strawberries on plant"
                fill
                className="object-cover"
              />
              {/* Overlay for better text readability */}
              <div className="absolute inset-0 bg-black/30"></div>
            </div>

            {/* Content */}
            <div className="relative z-10 px-4 py-12 md:px-8 md:py-16 lg:px-12 lg:py-20">
              {/* Feature Cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 max-w-5xl mx-auto">
                {features.map((feature, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-2xl p-4 md:p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                    data-aos="fade-up"
                    data-aos-delay={300 + (index * 100)}
                  >
                    {/* Icon */}
                    <div className="w-10 h-10 md:w-12 md:h-12 bg-red-100 rounded-full flex items-center justify-center mb-3 md:mb-4">
                      <feature.icon className="w-5 h-5 md:w-6 md:h-6 text-red-500" />
                    </div>

                    {/* Content */}
                    <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-2 md:mb-3">
                      {feature.title}
                    </h3>
                    <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyVisit;