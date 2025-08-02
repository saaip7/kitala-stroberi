import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const Articles = () => {
  // Dummy articles data
  const articles = [
    {
      id: 1,
      title: "Manisnya Pemulihan: Kisah Inspiratif dari Kitala Petik Stroberi untuk Kesehatan Jiwa",
      excerpt: "Isu kesehatan mental pada zaman modern ini telah menjadi salah satu kekhawatiran utama baik bagi kalangan muda maupun usia lanjut, mengingat jumlah individu yang terdampak setiap tahunnya semakin meningkat dengan variasi keparahan yang beragam.",
      image: "/article/erisa 1.png",
      slug: "manisnya-pemulihan-kisah-inspiratif-dari-kitala-petik-stroberi-untuk-kesehatan-jiwa",
      readMoreText: "Baca"
    },
    {
      id: 2,
      title: "Dari Kebun Ke Meja Makan : Inovasi Pangan Fungsional Selai Stroberi",
      excerpt: "Stroberi tidak hanya segar ketika dimakan langsung, buah kecil berwarna merah ini dapat diolah menjadi pangan fungsional yang sehat dan bernilai jual tinggi. Salah satu pangan fungsional stroberi adalah selai stroberi yang diperkaya dengan chia seed. ",
      image: "/article/maisun.png",
      slug: "dari-kebun-ke-meja-makan-inovasi-pangan-fungsional-selai-stroberi",
      readMoreText: "Baca"
    },
    {
      id: 3,
      title: "Lebih dari Sekedar Manis: Kekuatan Stroberi untuk Kesehatan Tubuhmu",
      excerpt: "Siapa yang tidak suka dengan stroberi? Buah berwarna merah ini tidak hanya memanjakan lidah dengan rasa manis segarnya yang sedikit asam, tetapi juga dapat diolah menjadi berbagai produk olahan untuk dikonsumsi masyarakat, mulai dari selai, jus, hingga dessert. ",
      image: "/article/erisa 2.png",
      slug: "lebih-dari-sekedar-manis-kekuatan-stroberi-untuk-kesehatan-tubuhmu",
      readMoreText: "Baca"
    }
  ];

  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="max-w-7xl mx-auto" style={{ paddingLeft: '2vw', paddingRight: '2vw' }}>
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start mb-8 md:mb-12 gap-4 md:gap-0" data-aos="fade-up">
          <div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-black mb-3 md:mb-4">
              Cerita dari Kebun
            </h2>
          </div>
          <div className="text-left md:text-right max-w-md">
            <p className="text-gray-600 leading-relaxed text-sm md:text-base">
              Ikuti kisah-kisah kami — dari kegiatan sehari-hari, hingga 
              perjuangan dan pencapaian para pengelola
            </p>
          </div>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-8 md:mb-12">
          {articles.map((article, index) => (
            <Link 
              key={article.id} 
              href={`/artikel/${article.slug}`}
              className="group cursor-pointer block" 
              data-aos="fade-up" 
              data-aos-delay={200 + (index * 100)}
            >
              {/* Article Image */}
              <div className="rounded-xl md:rounded-2xl overflow-hidden mb-4 md:mb-6 h-48 md:h-64">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>

              {/* Article Content */}
              <div className="space-y-3 md:space-y-4">
                <h3 className="text-lg md:text-xl font-bold text-black group-hover:text-emerald-700 transition-colors duration-200 line-clamp-1 md:line-clamp-2">
                  {article.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed text-sm line-clamp-2 md:line-clamp-3">
                  {article.excerpt}
                </p>

                {/* Read More Link */}
                <div className="flex items-center gap-2 text-red-500 font-medium text-sm group-hover:gap-3 transition-all duration-200">
                  <span>{article.readMoreText}</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* View All Articles Button */}
        <div className="flex justify-center">
          <Link href="/artikel" className="bg-darkGreen hover:bg-emerald-800 text-white px-6 md:px-8 py-3 rounded-full transition-all duration-200 font-medium text-sm md:text-[14px] w-full md:w-auto block text-center">
            LIHAT SEMUA ARTIKEL
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Articles;