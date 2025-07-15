import React from 'react';
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const GalleryPage = () => {
  // Gallery images data
  const galleryImages = [
    {
      id: 1,
      src: "https://images.pexels.com/photos/89775/strawberries-frisch-ripe-sweet-89775.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      alt: "Fresh strawberries on plant"
    },
    {
      id: 2,
      src: "https://images.pexels.com/photos/1122408/pexels-photo-1122408.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
      alt: "Strawberry close up"
    },
    {
      id: 3,
      src: "https://images.pexels.com/photos/1263986/pexels-photo-1263986.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
      alt: "Strawberries in basket"
    },
    {
      id: 4,
      src: "https://images.pexels.com/photos/1327838/pexels-photo-1327838.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
      alt: "Strawberry field view"
    },
    {
      id: 5,
      src: "https://images.pexels.com/photos/1435735/pexels-photo-1435735.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop",
      alt: "Picking strawberries"
    },
    {
      id: 6,
      src: "https://images.pexels.com/photos/162689/strawberries-red-fruit-royalty-free-162689.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
      alt: "Strawberry harvest"
    },
    {
      id: 7,
      src: "https://images.pexels.com/photos/1327838/pexels-photo-1327838.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
      alt: "Garden workers"
    },
    {
      id: 8,
      src: "https://images.pexels.com/photos/89775/strawberries-frisch-ripe-sweet-89775.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
      alt: "Strawberry plants"
    },
    {
      id: 9,
      src: "https://images.pexels.com/photos/1122408/pexels-photo-1122408.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop",
      alt: "Fresh picked strawberries"
    },
    {
      id: 10,
      src: "https://images.pexels.com/photos/1263986/pexels-photo-1263986.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
      alt: "Strawberry garden path"
    },
    {
      id: 11,
      src: "https://images.pexels.com/photos/162689/strawberries-red-fruit-royalty-free-162689.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
      alt: "Ripe strawberries"
    },
    {
      id: 12,
      src: "https://images.pexels.com/photos/1327838/pexels-photo-1327838.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      alt: "Garden overview"
    }
  ];

  return (
    <div className="min-h-screen bg-white pb-[20vh]">
      {/* Header Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Galeri Kebun Kitala
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Jelajahi keindahan kebun stroberi kami melalui koleksi foto-foto 
              yang menampilkan aktivitas sehari-hari dan momen-momen berharga
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-8 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Simple responsive grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {galleryImages.map((image) => (
              <div key={image.id} className="relative rounded-2xl overflow-hidden shadow-lg group cursor-pointer hover:shadow-xl transition-all duration-300">
                <div className="aspect-square relative bg-gray-200">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300" />
                  
                  {/* Image overlay with title */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <p className="text-white text-sm font-medium">{image.alt}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default GalleryPage;