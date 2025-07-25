import React from 'react';
import Image from 'next/image';
import { Heart, Users, Award, Target } from 'lucide-react';

const AboutUsPage = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-5xl font-semibold text-black mb-4">
              Tentang Kami
            </h1>
            <p className="text-md md:text-lg text-gray max-w-2xl mx-auto">
              Mengenal lebih dekat perjalanan kami dalam memberdayakan 
              masyarakat melalui kebun stroberi yang penuh makna
            </p>
          </div>
        </div>
      </section>

      {/* Yayasan Mental Section - Image on Right */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-700 px-4 py-2 rounded-full text-sm font-medium">
                <Heart className="w-4 h-4" />
                Yayasan Rehabilitasi Mental
              </div>
              
              <h2 className="text-3xl md:text-4xl font-semibold text-black leading-tight">
                Yayasan Rehabilitasi Mental Al-Hafish
              </h2>
              
              <p className="text-gray leading-relaxed">
                Yayasan Rehabilitasi Mental Al-Hafish adalah lembaga yang berdiri dengan <strong>komitmen kuat</strong> untuk mendampingi individu dengan gangguan kesehatan mental melalui pendekatan psikososial dan pemberdayaan ekonomi. 
                Terletak di Jalan Raya Suko No. 60, Sidoarjo, yayasan ini menjadi <strong>ruang aman dan produktif</strong> bagi mereka yang membutuhkan dukungan pemulihan.
              </p>
              
              <p className="text-gray leading-relaxed">
                Dengan fokus pada rehabilitasi psikososial, yayasan ini menggabungkan terapi, pelatihan keterampilan, dan kegiatan produktif sebagai bagian dari proses pemulihan. Melalui pendekatan ini, kami percaya bahwa setiap individu memiliki <strong>potensi untuk berkembang, mandiri, dan berdaya</strong>.
                Yayasan Al-Hafish juga legal dan aktif bekerja sama dengan berbagai institusi pendidikan dan komunitas, untuk memastikan proses rehabilitasi berjalan <strong>inklusif dan berkelanjutan</strong>.
              </p>

              {/* Stats */}
              {/* <div className="grid grid-cols-2 gap-6 pt-6">
                <div className="text-center">
                  <div className="text-3xl font-semibold text-emerald-600 mb-2">50+</div>
                  <div className="text-sm text-gray">Anak Asuh Terdampingi</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-semibold text-emerald-600 mb-2">10+</div>
                  <div className="text-sm text-gray">Tahun Pengalaman</div>
                </div>
              </div> */}
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
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Kebun Kitala Section - Image on Left */}
      <section className="py-16 bg-white pb-[20vh]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <div>
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <div className="aspect-[4/3] relative">
                  <Image
                    src="/galeripage/lahan.jpg"
                    alt="Kebun Stroberi Kitala"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 bg-red-100 text-red-700 px-4 py-2 rounded-full text-sm font-medium">
                <Award className="w-4 h-4" />
                Kebun Stroberi Kitala
              </div>
              
              <h2 className="text-3xl md:text-4xl font-semibold text-black leading-tight">
                Dari Kebun Kecil, Mimpi Besar Itu Tumbuh
              </h2>
              
              <p className="text-gray leading-relaxed">
                Kebun Stroberi Kitala bukan sekadar tempat wisata petik buah. Ini adalah 
                manifestasi dari <strong>impian besar</strong> untuk menciptakan <strong>kemandirian ekonomi</strong> bagi 
                para pengasuh dan anak asuh Yayasan Al-Hafish.
              </p>
              
              <p className="text-gray leading-relaxed">
                Dimulai dari lahan kecil di Tulungrejo, Bumiaji, Batu, kebun ini kini 
                telah menjadi <strong>sumber penghasilan yang berkelanjutan</strong>. Setiap stroberi yang 
                dipetik pengunjung tidak hanya memberikan kebahagiaan, tetapi juga 
                mendukung program rehabilitasi dan pemberdayaan yang kami jalankan.
              </p>

              <p className="text-gray leading-relaxed">
                Dengan menggabungkan terapi hortikultura dan pemberdayaan ekonomi, 
                Kebun Kitala membuktikan bahwa dengan dukungan yang tepat, setiap 
                individu dapat <strong>berkontribusi dan mandiri</strong>.
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
      {/* <section className="py-16 bg-white">
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
              <p className="text-lg font-semibold text-black mb-1">Bapak Shodikin</p>
              <p className="text-sm text-gray-500">Pendiri Yayasan Al-Hafish & Kebun Stroberi Kitala</p>
            </div>
          </div>
        </div>
      </section> */}


    </div>
  );
};

export default AboutUsPage;