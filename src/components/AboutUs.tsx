import React from "react";
import { ArrowRight } from "lucide-react";

const AboutUs = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto" style={{ paddingLeft: '2vw', paddingRight: '2vw' }}>
        {/* Header */}
        <div className="mb-12" data-aos="fade-up">
          <h2 className="text-4xl md:text-5xl font-semibold text-black">
            Dari Kebun Kecil,
            <br />
            Mimpi Besar Itu Tumbuh
          </h2>
        </div>

        {/* Main Content - Parent div with 2 child divs */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {/* Left Child Div */}
          <div className="relative" data-aos="fade-right" data-aos-delay="200">
            <div className="rounded-2xl overflow-hidden h-96 relative">
              <img
                src="/aboutus/kitala.jpg"
                alt="Fresh strawberries in colander"
                className="w-full h-full object-cover"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/40"></div>

              {/* Text Overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <p className="text-lg">
                  Kebun Stroberi Kitala merupakan hasil budidaya pengasuh dan
                  anak asuh Yayasan Rehabilitasi Mental Al-Hafish sebagai upaya
                  pemberdayaan para disabilitas mental menuju kemandirian.
                </p>
              </div>
            </div>
          </div>

          {/* Right Child Div */}
          <div className="space-y-6" data-aos="fade-left" data-aos-delay="300">
            {/* Top Image */}
            <div className="rounded-2xl overflow-hidden h-56">
              <img
                src="/aboutus/ttg kita.jpeg"
                alt="Strawberries growing on plant"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Text Content */}
            <div className="space-y-4 ">
              <p className="text-gray leading-relaxed">
                Di antara barisan daun hijau dan tanah yang basah, tumbuh
                harapan baru. Di sinilah mereka belajar, bekerja, dan bermimpi —
                memetik bukan hanya buah, tapi juga masa depan.
              </p>

              {/* Read More Button */}
              <a
                href="/tentang-kami"
                className="inline-flex text-[14px] items-center gap-2 bg-darkGreen hover:bg-emerald-800 text-white px-6 py-3 rounded-full transition-all duration-200 font-medium"
              >
                BACA LEBIH
                <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center">
                  <ArrowRight className="w-3 h-3" />
                </div>
              </a>
            </div>
          </div>
        </div>

        {/* Quote Section */}
        <div
          className="flex justify-center py-12"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          <div className="bg-gray-200 rounded-3xl px-12 py-16 w-full">
            <div className="text-center">
              {/* Quote Icons */}
              <div className="flex justify-center items-center mb-8 gap-4">
                <svg
                  className="w-12 h-12 text-gray-400"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z" />
                </svg>
                <svg
                  className="w-12 h-12 text-gray-400 transform rotate-180"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z" />
                </svg>
              </div>

              {/* Quote Text */}
              <blockquote className="text-2xl md:text-4xl text-gray-700 font-light italic mb-8 ">
                Mereka tidak butuh dikasihani,
                <br />
                mereka butuh kesempatan
              </blockquote>

              {/* Divider Line */}
              <div className="w-16 h-0.5 bg-gray-400 mx-auto mb-6"></div>

              {/* Author */}
              <div className="text-center">
                <p className="text-lg font-semibold text-black mb-1">
                  Bapak Shodikin
                </p>
                <p className="text-sm text-gray-500">
                  Pendiri Kebun Stroberi Kitala
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
