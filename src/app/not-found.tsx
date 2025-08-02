"use client";

import React from 'react';
import Link from 'next/link';
import { ArrowLeft, Home } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-4">
      <div className="max-w-md mx-auto text-center">
        {/* 404 Number */}
        <div className="mb-8">
          <h1 className="text-8xl md:text-9xl font-bold text-emerald-600">
            404
          </h1>
        </div>

        {/* Error Message */}
        <div className="mb-8">
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-4">
            Halaman Tidak Ditemukan
          </h2>
          <p className="text-gray-600 text-base md:text-lg leading-relaxed">
            Maaf, halaman yang Anda cari tidak dapat ditemukan. 
            Mungkin halaman tersebut telah dipindahkan atau tidak tersedia.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link 
            href="/"
            className="inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-full transition-all duration-200 font-medium"
          >
            <Home className="w-4 h-4" />
            Kembali ke Beranda
          </Link>
          
          <button 
            onClick={() => window.history.back()}
            className="inline-flex items-center justify-center gap-2 border border-gray-300 hover:border-gray-400 text-gray-700 hover:text-gray-900 px-6 py-3 rounded-full transition-all duration-200 font-medium"
          >
            <ArrowLeft className="w-4 h-4" />
            Halaman Sebelumnya
          </button>
        </div>

        {/* Additional Help */}
        <div className="mt-12 pt-8 border-t border-gray-100">
          <p className="text-sm text-gray-500 mb-4">
            Butuh bantuan? Kunjungi halaman-halaman berikut:
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <Link 
              href="/tentang-kami" 
              className="text-emerald-600 hover:text-emerald-700 transition-colors"
            >
              Tentang Kami
            </Link>
            <Link 
              href="/artikel" 
              className="text-emerald-600 hover:text-emerald-700 transition-colors"
            >
              Artikel
            </Link>
            <Link 
              href="/galeri" 
              className="text-emerald-600 hover:text-emerald-700 transition-colors"
            >
              Galeri
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
