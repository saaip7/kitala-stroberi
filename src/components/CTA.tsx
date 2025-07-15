import React from 'react';

const CTA = () => {
  return (
    <section className="py-16 bg-white">
      <div className="px-4 sm:px-6 lg:px-8">
        {/* Rounded Container with Background Image */}
        <div className="relative rounded-3xl overflow-hidden min-h-[500px] shadow-2xl">
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
            <div className="text-center text-white max-w-4xl">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold mb-6">
                Petik Stroberimu<br />
                Tanam Kebaikanmu
              </h2>
              
              <p className="text-lg md:text-xl mb-8 text-white max-w-2xl mx-auto">
                Dengan berkunjung ke kebun kami, kamu ikut mendukung perjuangan 
                mereka menuju kemandirian
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white hover:bg-gray-100 text-black rounded-full px-4 h-[50px] font-medium text-[14px]">
                  BAGIKAN CERITA
                </button>
                
                <button className="bg-transparent hover:bg-white/10 text-white px-8 h-[50px] text-[14px] rounded-full transition-all duration-200 font-medium text-lg border-2 border-white hover:border-white/80">
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