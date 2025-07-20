import React from 'react';
import { Clock, DollarSign } from 'lucide-react';

const LocationInfo = () => {
  return (
    <section className="py-12 md:py-16 bg-darkGreen rounded-2xl">
      <div className="max-w-7xl mx-auto" style={{ paddingLeft: '2vw', paddingRight: '2vw' }}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 items-start">
          {/* Left Side - Information */}
          <div className="text-white" data-aos="fade-right">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-4 md:mb-6">
              Informasi Kunjungan
            </h2>
            
            <p className="text-base md:text-lg text-white mb-6 md:mb-8 leading-relaxed">
              Sebelum kamu datang ke Kebun Kitala, berikut 
              informasi penting yang perlu kamu tahu
            </p>

            {/* Information Cards */}
            <div className="space-y-3 md:space-y-4">
              {/* Operating Hours Card - Compact */}
              <div className="bg-white rounded-lg p-3 md:p-4 shadow-lg" data-aos="fade-up" data-aos-delay="200">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Clock className="w-4 h-4 text-emerald-600" />
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-black">Jam Operasional</h3>
                    <div className="flex items-center gap-2 text-sm">
                      <span className="font-medium text-black">07.00 - 17.00</span>
                      <span className="text-xs italic text-gray-500">• Hubungi dulu untuk kepastian</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Ticket Price Card */}
              <div className="bg-white rounded-xl md:rounded-2xl p-4 md:p-6 shadow-lg" data-aos="fade-up" data-aos-delay="300">
                <div className="flex items-start gap-3 md:gap-4">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <DollarSign className="w-5 h-5 md:w-6 md:h-6 text-red-500" />
                  </div>
                  <div className="w-full">
                    <h3 className="text-lg md:text-xl font-semibold text-black mb-2 md:mb-3">
                      Harga Tiket & Petik
                    </h3>
                    
                    {/* Ticket Prices */}
                    <div className="mb-2">
                      <p className="font-medium text-gray-700 text-sm mb-2">Tiket Masuk:</p>
                      <div className="grid grid-cols-2 gap-2 text-xs md:text-sm">
                        <div className="flex justify-between bg-gray-50 rounded px-2 py-1">
                          <span className="text-gray-600">Mahasiswa</span>
                          <span className="font-semibold text-black">Rp10.000</span>
                        </div>
                        <div className="flex justify-between bg-gray-50 rounded px-2 py-1">
                          <span className="text-gray-600">Pelanggan Setia</span>
                          <span className="font-semibold text-black">Rp15.000</span>
                        </div>
                        <div className="flex justify-between bg-gray-50 rounded px-2 py-1">
                          <span className="text-gray-600">Tidak Musim</span>
                          <span className="font-semibold text-black">Rp20.000</span>
                        </div>
                        <div className="flex justify-between bg-gray-50 rounded px-2 py-1">
                          <span className="text-gray-600">Panen Raya</span>
                          <span className="font-semibold text-black">Rp25.000</span>
                        </div>
                      </div>
                    </div>
                    
                    {/* Strawberry Price */}
                    <div>
                      <p className="font-medium text-gray-700 text-sm mb-1">Petik Stroberi:</p>
                      <div className="bg-red-50 rounded px-3 py-1">
                        <span className="text-red-600 font-semibold text-sm md:text-base">Rp10.000 / ons</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Map */}
          <div className="mt-6 lg:mt-0" style={{ paddingLeft: '0', paddingRight: '0' }} data-aos="fade-up" data-aos-delay="200">
            <div className="bg-white rounded-xl md:rounded-2xl overflow-hidden shadow-2xl h-64 md:h-80 lg:h-[500px]">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3952.9594621886595!2d112.53212101542759!3d-7.794116969103092!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e787f440e5649e3%3A0xa44b8c9567c9144c!2sKebun%20Kitala%20Wisata%20Petik%20Strawberry!5e0!3m2!1sid!2sid!4v1752703736471!5m2!1sid!2sid" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Kebun Kitala Wisata Petik Strawberry Location"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationInfo;