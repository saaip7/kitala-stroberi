import React from 'react';
import Image from 'next/image';
import { Heart, Users, Award, Target } from 'lucide-react';

const AboutUsPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Tentang Kami
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Mengenal lebih dekat perjalanan kami dalam memberdayakan 
              masyarakat melalui kebun stroberi yang penuh makna
            </p>
          </div>
        </div>
      </section>

      {/* Yayasan Mental Section - Image on Right */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-700 px-4 py-2 rounded-full text-sm font-medium">
                <Heart className="w-4 h-4" />
                Yayasan Rehabilitasi Mental
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 leading-tight">
                Yayasan Rehabilitasi Mental Al-Hafish
              </h2>
              
              <p className="text-lg text-gray-600 leading-relaxed">
                Didirikan dengan misi mulia untuk memberikan harapan baru bagi para penyandang 
                disabilitas mental. Yayasan Al-Hafish telah menjadi rumah bagi mereka yang 
                membutuhkan dukungan, perawatan, dan pemberdayaan.
              </p>
              
              <p className="text-gray-600 leading-relaxed">
                Dengan pendekatan holistik yang menggabungkan terapi, pendampingan, dan 
                program pemberdayaan ekonomi, kami percaya bahwa setiap individu memiliki 
                potensi untuk berkembang dan mandiri. Kebun Stroberi Kitala adalah salah 
                satu wujud nyata dari komitmen kami dalam menciptakan peluang kerja dan 
                kemandirian bagi para pengasuh dan anak asuh.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-6 pt-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-emerald-600 mb-2">50+</div>
                  <div className="text-sm text-gray-600">Anak Asuh Terdampingi</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-emerald-600 mb-2">10+</div>
                  <div className="text-sm text-gray-600">Tahun Pengalaman</div>
                </div>
              </div>
            </div>

            {/* Image */}
            <div className="lg:order-last">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <div className="aspect-[4/3] relative">
                  <Image
                    src="https://images.pexels.com/photos/6646918/pexels-photo-6646918.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
                    alt="Yayasan Rehabilitasi Mental Al-Hafish"
                    fill
                    className="object-cover"
                  />
                </div>
                
                {/* Floating Card */}
                <div className="absolute -bottom-6 -left-6 bg-white rounded-xl p-6 shadow-xl max-w-xs">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center">
                      <Users className="w-5 h-5 text-emerald-600" />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-800">Komunitas</div>
                      <div className="text-sm text-gray-600">Saling Mendukung</div>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600">
                    Membangun lingkungan yang inklusif dan penuh kasih
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Kebun Kitala Section - Image on Left */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <div>
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <div className="aspect-[4/3] relative">
                  <Image
                    src="https://images.pexels.com/photos/89775/strawberries-frisch-ripe-sweet-89775.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
                    alt="Kebun Stroberi Kitala"
                    fill
                    className="object-cover"
                  />
                </div>
                
                {/* Floating Card */}
                <div className="absolute -bottom-6 -right-6 bg-white rounded-xl p-6 shadow-xl max-w-xs">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center">
                      <Target className="w-5 h-5 text-red-600" />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-800">Kemandirian</div>
                      <div className="text-sm text-gray-600">Melalui Pertanian</div>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600">
                    Menciptakan peluang ekonomi yang berkelanjutan
                  </p>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 bg-red-100 text-red-700 px-4 py-2 rounded-full text-sm font-medium">
                <Award className="w-4 h-4" />
                Kebun Stroberi Kitala
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 leading-tight">
                Dari Kebun Kecil, Mimpi Besar Itu Tumbuh
              </h2>
              
              <p className="text-lg text-gray-600 leading-relaxed">
                Kebun Stroberi Kitala bukan sekadar tempat wisata petik buah. Ini adalah 
                manifestasi dari impian besar untuk menciptakan kemandirian ekonomi bagi 
                para pengasuh dan anak asuh Yayasan Al-Hafish.
              </p>
              
              <p className="text-gray-600 leading-relaxed">
                Dimulai dari lahan kecil di Tulungrejo, Bumiaji, Batu, kebun ini kini 
                telah menjadi sumber penghasilan yang berkelanjutan. Setiap stroberi yang 
                dipetik pengunjung tidak hanya memberikan kebahagiaan, tetapi juga 
                mendukung program rehabilitasi dan pemberdayaan yang kami jalankan.
              </p>

              <p className="text-gray-600 leading-relaxed">
                Dengan menggabungkan terapi hortikultura dan pemberdayaan ekonomi, 
                Kebun Kitala membuktikan bahwa dengan dukungan yang tepat, setiap 
                individu dapat berkontribusi dan mandiri.
              </p>

              {/* Features */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Heart className="w-4 h-4 text-emerald-600" />
                  </div>
                  <span className="text-gray-700">Terapi Hortikultura</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Users className="w-4 h-4 text-emerald-600" />
                  </div>
                  <span className="text-gray-700">Pemberdayaan Ekonomi</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Award className="w-4 h-4 text-emerald-600" />
                  </div>
                  <span className="text-gray-700">Wisata Edukatif</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Target className="w-4 h-4 text-emerald-600" />
                  </div>
                  <span className="text-gray-700">Kemandirian Berkelanjutan</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gray-50 rounded-3xl px-8 py-12 md:px-12 md:py-16">
            <div className="flex justify-center items-center mb-8">
              <svg className="w-12 h-12 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z"/>
              </svg>
            </div>
            
            <blockquote className="text-2xl md:text-3xl text-gray-700 font-light italic mb-8 leading-relaxed">
              "Mereka tidak butuh dikasihani, mereka butuh kesempatan untuk 
              menunjukkan bahwa mereka juga bisa berkarya dan mandiri"
            </blockquote>

            <div className="w-16 h-0.5 bg-gray-400 mx-auto mb-6"></div>

            <div>
              <p className="text-lg font-semibold text-gray-800 mb-1">Bapak Shodikin</p>
              <p className="text-sm text-gray-500">Pendiri Yayasan Al-Hafish & Kebun Stroberi Kitala</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUsPage;