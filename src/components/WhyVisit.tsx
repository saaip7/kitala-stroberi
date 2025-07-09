import React from "react";
import { Car, Heart, Users } from "lucide-react";

const WhyVisit = () => {
  const features = [
    {
      icon: Car,
      title: "Parkiran Luas",
      description:
        "Lorem ipsum dolor sit amet consectetur. Nulla in mattis egestas massa cursus.",
    },
    {
      icon: Heart,
      title: "Parkiran Luas",
      description:
        "Lorem ipsum dolor sit amet consectetur. Nulla in mattis egestas massa cursus.",
    },
    {
      icon: Users,
      title: "Parkiran Luas",
      description:
        "Lorem ipsum dolor sit amet consectetur. Nulla in mattis egestas massa cursus.",
    },
  ];

  return (
    <section className="relative py-16 bg-[#1C4E44] overflow-hidden rounded-3xl">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-semibold text-white mb-4">
            Kenapa Harus ke Kitala?
          </h2>
          <p className="text-lg text-white max-w-2xl mx-auto">
            Lebih dari sekadar petik stroberi. Inilah pengalaman yang hanya bisa
            kamu temukan di sini
          </p>
        </div>

        {/* Main Content Container */}
        <div className="relative">
          {/* Background Image Container */}
          <div className="relative rounded-3xl overflow-hidden h-[80vh]">
            {/* Strawberry Background Image */}
            <div className="absolute inset-0">
              <img
                src="/hero/hero-img.png"
                alt="Fresh strawberries on plant"
                className="w-full h-full object-cover"
              />
              {/* Progressive Blur Overlay */}
              <div className="absolute inset-0 z-10">
                <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/10 to-black/60"></div>
                <div className="absolute bottom-0 left-0 right-0 h-1/4 bg-gradient-to-t from-black/80 via-black/40 to-transparent backdrop-blur-[2px]"></div>
              </div>
            </div>

            {/* Content */}
            <div className="absolute z-10 bottom-0 left-0 right-0 pb-16">
              {/* Feature Cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto px-4">
                {features.map((feature, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                  >
                    {/* Icon */}
                    <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mb-4">
                      <feature.icon className="w-6 h-6 text-red-500" />
                    </div>

                    {/* Content */}
                    <h3 className="text-xl font-bold text-gray-800 mb-3">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
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
