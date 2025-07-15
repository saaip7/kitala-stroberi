import React from 'react';
import { ArrowRight } from 'lucide-react';

const Articles = () => {
  // Dummy articles data
  const articles = [
    {
      id: 1,
      title: "Title Artikel",
      excerpt: "Lorem ipsum dolor sit amet consectetur. Eu blandit quis sodales placerat aliquam sollicitudin. Nunc justo nullam ultrices sodales....",
      image: "https://images.pexels.com/photos/1263986/pexels-photo-1263986.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
      readMoreText: "Baca"
    },
    {
      id: 2,
      title: "Title Artikel",
      excerpt: "Lorem ipsum dolor sit amet consectetur. Eu blandit quis sodales placerat aliquam sollicitudin. Nunc justo nullam ultrices sodales....",
      image: "https://images.pexels.com/photos/1263986/pexels-photo-1263986.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
      readMoreText: "Baca"
    },
    {
      id: 3,
      title: "Title Artikel",
      excerpt: "Lorem ipsum dolor sit amet consectetur. Eu blandit quis sodales placerat aliquam sollicitudin. Nunc justo nullam ultrices sodales....",
      image: "https://images.pexels.com/photos/1122408/pexels-photo-1122408.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
      readMoreText: "Baca"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex justify-between items-start mb-12">
          <div>
            <h2 className="text-4xl md:text-5xl font-semibold text-gray-800 mb-4">
              Cerita dari Kebun
            </h2>
          </div>
          <div className="text-right max-w-md">
            <p className="text-gray-600 leading-relaxed">
              Ikuti kisah-kisah kami — dari kegiatan sehari-hari, hingga 
              perjuangan dan pencapaian para pengelola
            </p>
          </div>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {articles.map((article) => (
            <div key={article.id} className="group cursor-pointer">
              {/* Article Image */}
              <div className="rounded-2xl overflow-hidden mb-6 h-64">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>

              {/* Article Content */}
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-gray-800 group-hover:text-emerald-700 transition-colors duration-200">
                  {article.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed text-sm">
                  {article.excerpt}
                </p>

                {/* Read More Link */}
                <div className="flex items-center gap-2 text-red-500 font-medium text-sm group-hover:gap-3 transition-all duration-200">
                  <span>{article.readMoreText}</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Articles Button */}
        <div className="flex justify-center">
          <button className="bg-darkGreen hover:bg-emerald-800 text-white px-8 py-3 rounded-full transition-all duration-200 font-medium text-[14px]">
            LIHAT SEMUA ARTIKEL
          </button>
        </div>
      </div>
    </section>
  );
};

export default Articles;