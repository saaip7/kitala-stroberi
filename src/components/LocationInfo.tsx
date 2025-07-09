import React from 'react';
import { Clock, MapPin, DollarSign } from 'lucide-react';

const LocationInfo = () => {
  // You can set your Google Maps API key here
  const GOOGLE_MAPS_API_KEY = process.env.GOOGLE_MAPS_API_KEY || '';
  
  // Coordinates for Kebun Kitala (you can adjust these)
  const latitude = -7.2575; // Example coordinates - adjust to actual location
  const longitude = 112.7521;
  
  // Google Maps embed URL
  const mapEmbedUrl = GOOGLE_MAPS_API_KEY 
    ? `https://www.google.com/maps/embed/v1/place?key=${GOOGLE_MAPS_API_KEY}&q=Kebun+Kitala+Wisata+Petik+Strawberry&center=${latitude},${longitude}&zoom=15`
    : '';

  return (
    <section className="py-16 bg-gradient-to-br from-emerald-800 via-emerald-700 to-emerald-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {/* Left Side - Information */}
          <div className="text-white">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Informasi Kunjungan
            </h2>
            
            <p className="text-lg text-emerald-100 mb-8 leading-relaxed">
              Sebelum kamu datang ke Kebun Kitala, berikut 
              informasi penting yang perlu kamu tahu
            </p>

            {/* Information Cards */}
            <div className="space-y-4">
              {/* Operating Hours Card */}
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-emerald-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-3">
                      Jam Operasional
                    </h3>
                    <div className="space-y-1 text-gray-600">
                      <p>Senin–Jumat: 08.00–16.00</p>
                      <p>Sabtu–Minggu: 08.00–17.00</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Ticket Price Card */}
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <DollarSign className="w-6 h-6 text-red-500" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-3">
                      Harga Tiket
                    </h3>
                    <div className="space-y-1 text-gray-600">
                      <p>Masuk Kebun: Rp15.000 / orang</p>
                      <p>Petik Stroberi: Rp20.000 / kg</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Map */}
          <div className="lg:pl-8">
            <div className="bg-white rounded-2xl overflow-hidden shadow-2xl h-96 lg:h-[500px]">
              {GOOGLE_MAPS_API_KEY && mapEmbedUrl ? (
                // Google Maps Embed
                <iframe
                  src={mapEmbedUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Kebun Kitala Location"
                />
              ) : (
                // Placeholder Map - You can customize this
                <div className="w-full h-full bg-gradient-to-br from-green-100 to-green-200 relative flex items-center justify-center">
                  {/* Map Placeholder Content */}
                  <div className="text-center p-8">
                    <MapPin className="w-16 h-16 text-emerald-600 mx-auto mb-4" />
                    <h3 className="text-xl font-bold text-gray-800 mb-2">
                      Kebun Kitala Wisata
                    </h3>
                    <p className="text-gray-600 mb-4">
                      Petik Strawberry
                    </p>
                    <div className="bg-white rounded-lg p-4 shadow-md max-w-xs mx-auto">
                      <p className="text-sm text-gray-600 mb-2">
                        To display Google Maps:
                      </p>
                      <ol className="text-xs text-gray-500 text-left space-y-1">
                        <li>1. Get Google Maps API key</li>
                        <li>2. Add to .env file as REACT_APP_GOOGLE_MAPS_API_KEY</li>
                        <li>3. Enable Maps Embed API</li>
                      </ol>
                    </div>
                  </div>

                  {/* Decorative Map Elements */}
                  <div className="absolute top-4 left-4 w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                  <div className="absolute top-8 right-8 w-2 h-2 bg-blue-500 rounded-full"></div>
                  <div className="absolute bottom-6 left-8 w-2 h-2 bg-green-500 rounded-full"></div>
                  
                  {/* Mock Roads */}
                  <div className="absolute inset-0 opacity-20">
                    <div className="absolute top-1/3 left-0 right-0 h-0.5 bg-gray-400 transform rotate-12"></div>
                    <div className="absolute top-2/3 left-0 right-0 h-0.5 bg-gray-400 transform -rotate-6"></div>
                    <div className="absolute left-1/4 top-0 bottom-0 w-0.5 bg-gray-400 transform rotate-3"></div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationInfo;