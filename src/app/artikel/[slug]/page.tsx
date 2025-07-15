'use client';

import React, { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { Calendar, User, ArrowLeft, Share2 } from 'lucide-react';
import { Article } from '@/types/article';
import { strapiApi } from '@/services/strapiApi';

const ArticleDetail = () => {
  const params = useParams();
  const slug = params?.slug as string;
  const [article, setArticle] = useState<Article | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (slug) {
      fetchArticle(slug);
    }
  }, [slug]);

  const fetchArticle = async (articleSlug: string) => {
    try {
      setLoading(true);
      setError(null);
      
      // Try to fetch by slug first
      let response = await strapiApi.getArticleBySlug(articleSlug);
      
      // If no article found by slug, try by ID (in case slug is actually an ID)
      if (!response.data || response.data.length === 0) {
        const id = parseInt(articleSlug);
        if (!isNaN(id)) {
          const idResponse = await strapiApi.getArticleById(id);
          setArticle(idResponse.data);
        } else {
          throw new Error('Article not found');
        }
      } else {
        setArticle(response.data[0]);
      }
    } catch (err) {
      setError('Article not found or failed to load.');
      console.error('Error fetching article:', err);
    } finally {
      setLoading(false);
    }
  };

  const getImageUrl = (article: Article): string => {
    const imageData = article.foto;
    if (imageData) {
      return strapiApi.getImageUrl(imageData.url);
    }
    return 'https://images.pexels.com/photos/89775/strawberries-frisch-ripe-sweet-89775.jpeg?auto=compress&cs=tinysrgb&w=1200&h=600&fit=crop';
  };

  const getImageAlt = (article: Article): string => {
    return article.foto?.alternativeText || article.judul;
  };

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: article?.judul,
          text: article?.judul,
          url: window.location.href,
        });
      } catch (err) {
        console.log('Error sharing:', err);
      }
    } else {
      // Fallback: copy to clipboard
      navigator.clipboard.writeText(window.location.href);
      alert('Link copied to clipboard!');
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-white">
        <div className="flex items-center justify-center min-h-[60vh]">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-emerald-600 mx-auto mb-4"></div>
            <p className="text-gray-600">Memuat...</p>
          </div>
        </div>
      </div>
    );
  }

  if (error || !article) {
    return (
      <div className="min-h-screen bg-white">
        <div className="flex items-center justify-center min-h-[60vh]">
          <div className="text-center">
            <p className="text-red-600 mb-4">{error}</p>
            <Link 
              href="/artikel"
              className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-2 rounded-lg transition-colors duration-200"
            >
              Kembali
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white pb-[20vh]">
      
      {/* Back Button */}
      <section className="py-8 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link 
            href="/artikel"
            className="inline-flex items-center gap-2 text-gray-600 hover:text-emerald-600 transition-colors duration-200 mb-6"
          >
            <ArrowLeft className="w-4 h-4" />
            Kembali
          </Link>
        </div>
      </section>

      {/* Article Header */}
      <section className="bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Featured Image */}
          <div className="rounded-2xl overflow-hidden mb-8 shadow-lg relative h-64 md:h-96">
            <Image
              src={getImageUrl(article)}
              alt={getImageAlt(article)}
              fill
              className="object-cover"
            />
          </div>

          {/* Article Meta */}
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-4 text-sm text-gray-500">
              <div className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                <span>{strapiApi.formatDate(article.publishedAt)}</span>
              </div>
              
              {article.author?.data && (
                <div className="flex items-center gap-1">
                  <User className="w-4 h-4" />
                  <span>{article.author.data.attributes.name}</span>
                </div>
              )}

              {/* Display penulis field */}
              {article.penulis && (
                <div className="flex items-center gap-1">
                  <User className="w-4 h-4" />
                  <span>{article.penulis}</span>
                </div>
              )}

              {article.category?.data && (
                <div className="bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full text-xs font-medium">
                  {article.category.data.attributes.name}
                </div>
              )}
            </div>

            <button
              onClick={handleShare}
              className="flex items-center gap-2 text-gray-600 hover:text-emerald-600 transition-colors duration-200"
            >
              <Share2 className="w-4 h-4" />
              <span className="text-sm">Bagi</span>
            </button>
          </div>

          {/* Article Title */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 leading-tight mb-6">
            {article.judul}
          </h1>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-8 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <div 
              className="text-gray-700 leading-relaxed"
              dangerouslySetInnerHTML={{ 
                __html: article.konten || 'Content not available.' 
              }}
            />
          </div>
        </div>
      </section>

      {/* Article Footer */}
      <section className="py-8 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl p-6 shadow-lg">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  Bagikan artikel ini
                </h3>
                <p className="text-gray-600 text-sm">
                  Bantu sebarkan cerita dari Kebun Kitala
                </p>
              </div>
              
              <button
                onClick={handleShare}
                className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-lg transition-colors duration-200 flex items-center gap-2"
              >
                <Share2 className="w-4 h-4" />
                Bagikan
              </button>
            </div>
          </div>

          {/* Back to Articles */}
          <div className="text-left mt-8">
            <Link 
              href="/artikel"
              className="inline-flex items-center gap-2 bg-gray-200 hover:bg-gray-300 text-gray-800 px-6 py-3 rounded-lg transition-colors duration-200"
            >
              <ArrowLeft className="w-4 h-4" />
              Lihat Artikel Lainnya
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ArticleDetail;