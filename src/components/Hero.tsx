import React from "react";
import { ArrowRight, Clock, Ticket } from "lucide-react";
import { AiFillInstagram, AiOutlineTikTok } from "react-icons/ai";

const Hero = () => {
  return (
    <div className="min-h-screen py-2">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        {/* Rounded Container with Background Image */}
        <div className="relative rounded-3xl overflow-hidden min-h-[95vh] bg-white" data-aos="fade-up">
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <img
              src="/hero/hero-img.png"
              alt="Strawberry Garden"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Progressive Blur Overlay */}
          <div className="absolute inset-0 z-10">
            <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/10 to-black/60"></div>
            <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-black/80 via-black/40 to-transparent backdrop-blur-[1px]"></div>
          </div>

          {/* Content */}
          <div className="absolute bottom-0 left-0 right-0 z-20 pb-8">
            <div className="w-full px-6 md:px-8 lg:px-12">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 md:gap-8 items-end">
                {/* Mobile Price Badge - Only visible on mobile */}
                <div className="md:hidden" data-aos="fade-right" data-aos-delay="200">
                  <div className="bg-white backdrop-blur-sm rounded-full px-4 py-2 flex items-center gap-2 w-[fit-content]">
                    <Ticket className="w-4 h-4 text-red-500" />
                    <span className="text-sm font-medium text-black">
                      Petik stroberi mulai Rp15.000
                    </span>
                  </div>
                </div>
                {/* Left Content */}
                <div className="lg:col-span-7 text-white" data-aos="fade-right" data-aos-delay="300">
                  <h1 className="text-3xl md:text-4xl lg:text-6xl font-semibold mb-4 md:mb-6 font-sans">
                    Petik Buahnya
                    <br />
                    Bantu Tumbuh
                    <br />
                    Jiwanya
                  </h1>

                  <p className="text-base md:text-lg lg:text-xl mb-6 md:mb-8 text-white max-w-lg leading-relaxed">
                    Bukan sekadar kebun — ini adalah ladang pemulihan dan tempat
                    tumbuhnya masa depan
                  </p>

                  {/* Action Buttons */}
                  <div className="flex flex-col sm:flex-row gap-3 md:gap-4" data-aos="fade-up" data-aos-delay="500">
                    <a 
                      href="https://maps.app.goo.gl/S3fLvZbcyxJJbRHb8"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-white hover:bg-gray-100 text-black px-6 py-3 rounded-full flex items-center justify-center gap-3 transition-all duration-200 font-medium text-sm md:text-base group shadow-lg"
                    >
                      KUNJUNGI KAMI
                      <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center group-hover:rotate-360 transition-transform duration-500">
                        <ArrowRight className="w-4 h-4 text-white" />
                      </div>
                    </a>

                    <a 
                      href="https://wa.me/6281234567890"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white px-6 md:px-8 flex items-center rounded-full transition-all duration-200 font-medium text-sm md:text-base border border-white/30"
                    >
                      HUBUNGI
                    </a>
                  </div>
                </div>

                {/* Right Content - Information Card - Hidden on mobile */}
                <div className="hidden lg:flex lg:col-span-5 lg:justify-end flex-col items-end" data-aos="fade-left" data-aos-delay="400">
                  <div className="flex flex-row items-end mb-4 gap-2">
                    <a
                      href="https://www.tiktok.com/@yourusername"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-full bg-white p-2 inline-block hover:bg-[#E12929] transition-colors duration-200 group"
                    >
                      <AiOutlineTikTok className="w-5 h-5 text-[#E12929] group-hover:text-white" />
                    </a>

                    <a
                      href="https://www.instagram.com/@yourusername"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-full bg-white p-2 inline-block hover:bg-[#E12929] transition-colors duration-200 group"
                    >
                      <AiFillInstagram className="w-5 h-5 text-[#E12929] group-hover:text-white" />
                    </a>
                  </div>

                  <div className="w-full max-w-md bg-white/95 backdrop-blur-sm rounded-2xl p-4 flex flex-row gap-6">
                    <div className="flex-none font-sans">
                      <h3 className="text-xl font-semibold text-black mb-2">
                        Informasi
                      </h3>

                      <div className="space-y-2">
                        <div className="flex items-start gap-3">
                          <Ticket className="w-5 h-5 text-red-500 mt-0.5" />
                          <div>
                            <p className="text-gray-600 text-sm">Tiket</p>
                            <p className="font-semibold text-black">
                              15 Ribu /pax
                            </p>
                          </div>
                        </div>

                        <div className="flex items-start gap-3">
                          <Clock className="w-5 h-5 text-red-500 mt-0.5" />
                          <div>
                            <p className="text-gray-600 text-sm">Jam Buka</p>
                            <p className="font-semibold text-black">
                              07.00 - 17.00
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* Decorative Image */}
                    <div className="w-full h-full">
                      <div className="rounded-xl overflow-hidden h-full">
                        <img
                          src="/hero/hero-little.png"
                          alt="Fresh Strawberries"
                          className="w-full h-34 object-fit"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
