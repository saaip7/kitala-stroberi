'use client';

import React, { useState, useEffect, useMemo, useCallback } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Calendar, User } from 'lucide-react';
import { Article, StrapiResponse } from '@/types/article';
import { strapiApi } from '@/services/strapiApi';

const ArticlesPage = () => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const pageSize = 6;

  // Simple cache to avoid refetching the same page
  const [cache, setCache] = useState<Map<number, Article[]>>(new Map());

  useEffect(() => {
    fetchArticles(currentPage);
  }, [currentPage]); // eslint-disable-line react-hooks/exhaustive-deps

  const fetchArticles = async (page: number, forceRefresh: boolean = false) => {
    try {
      // Check cache first (unless forced refresh)
      if (!forceRefresh && cache.has(page)) {
        setArticles(cache.get(page) || []);
        setLoading(false);
        return;
      }

      setLoading(true);
      setError(null);
      
      // Add performance timing
      const startTime = performance.now();
      
      const response: StrapiResponse<Article[]> = await strapiApi.getArticles(page, pageSize);
      
      const endTime = performance.now();
      console.log(`Article fetch took ${endTime - startTime} milliseconds`);
      
      const fetchedArticles = response.data || [];
      setArticles(fetchedArticles);
      
      // Cache the results (clear old cache for this page first)
      setCache(prev => {
        const newCache = new Map(prev);
        newCache.set(page, fetchedArticles);
        return newCache;
      });
      
      if (response.meta?.pagination) {
        setTotalPages(response.meta.pagination.pageCount);
      }
    } catch (err) {
      setError('Gagal dalam memuat artikel. Silakan coba lagi nanti.');
      console.error('Error fetching articles:', err);
    } finally {
      setLoading(false);
    }
  };

  const getImageUrl = useCallback((article: Article): string => {
    const imageData = article.foto;
    if (imageData) {
      return strapiApi.getImageUrl(imageData.url);
    }
    return 'https://images.pexels.com/photos/89775/strawberries-frisch-ripe-sweet-89775.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop';
  }, []);

  const getImageAlt = useCallback((article: Article): string => {
    return article.foto?.alternativeText || article.judul;
  }, []);

  const stripMarkdown = useCallback((markdown: string): string => {
    return markdown
      // Remove headers
      .replace(/^#+\s+/gm, '')
      // Remove bold and italic
      .replace(/\*\*([^*]+)\*\*/g, '$1')
      .replace(/\*([^*]+)\*/g, '$1')
      .replace(/__([^_]+)__/g, '$1')
      .replace(/_([^_]+)_/g, '$1')
      // Remove links
      .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1')
      // Remove images
      .replace(/!\[([^\]]*)\]\([^)]+\)/g, '$1')
      // Remove code blocks
      .replace(/```[^`]*```/g, '')
      .replace(/`([^`]+)`/g, '$1')
      // Remove blockquotes
      .replace(/^>\s+/gm, '')
      // Remove list markers
      .replace(/^[\s]*[-*+]\s+/gm, '')
      .replace(/^[\s]*\d+\.\s+/gm, '')
      // Remove horizontal rules
      .replace(/^---+$/gm, '')
      // Remove extra whitespace and newlines
      .replace(/\n\s*\n/g, ' ')
      .replace(/\n/g, ' ')
      .replace(/\s+/g, ' ')
      .trim();
  }, []);

  const truncateContent = useCallback((content: string, maxLength: number = 150): string => {
    const cleanText = stripMarkdown(content);
    if (cleanText.length <= maxLength) return cleanText;
    return cleanText.substring(0, maxLength) + '...';
  }, [stripMarkdown]);

  // Memoize processed articles to avoid re-processing on every render
  const processedArticles = useMemo(() => {
    return articles.map(article => ({
      ...article,
      imageUrl: getImageUrl(article),
      imageAlt: getImageAlt(article),
      excerpt: truncateContent(article.konten),
      formattedDate: strapiApi.formatDate(article.publishedAt)
    }));
  }, [articles, getImageUrl, getImageAlt, truncateContent]);

  if (loading) {
    return (
      <div className="min-h-screen bg-white">
        <div className="flex items-center justify-center min-h-[60vh]">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-emerald-600 mx-auto mb-4"></div>
            <p className="text-gray-600">Memuat artikel...</p>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-white">
        <div className="flex items-center justify-center min-h-[60vh]">
          <div className="text-center">
            <p className="text-red-600 mb-4">{error}</p>
            <button 
              onClick={() => fetchArticles(currentPage, true)}
              className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-2 rounded-lg transition-colors duration-200"
            >
              Coba Lagi
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white ">
      
      {/* Hero Section */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto" style={{ paddingLeft: '1vw', paddingRight: '1vw' }}>
          <div className="text-center">
            <h1 className="text-3xl md:text-5xl font-semibold text-black mb-4">
              Cerita dari Kebun Kitala
            </h1>
            <p className="text-md md:text-lg text-gray max-w-3xl mx-auto">
              Ikuti perjalanan kami dalam membangun komunitas yang kuat melalui 
              kebun stroberi yang lebih dari sekadar tempat bercocok tanam.
            </p>
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-16 pb-[20vw]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {articles.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">Belum ada artikel yang tersedia.</p>
            </div>
          ) : (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {processedArticles.map((article) => (
                  <article 
                    key={article.id} 
                    className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                  >
                    {/* Article Image */}
                    <div className="relative h-48 overflow-hidden">
                      <Image
                        src={article.imageUrl}
                        alt={article.imageAlt}
                        fill
                        className="object-cover hover:scale-105 transition-transform duration-300"
                        priority={false}
                        loading="lazy"
                      />
                    </div>

                    {/* Article Content */}
                    <div className="p-6">
                      {/* Meta Information */}
                      <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          <span>{article.formattedDate}</span>
                        </div>
                        
                        {article.penulis && (
                          <div className="flex items-center gap-1">
                            <User className="w-4 h-4" />
                            <span>{article.penulis}</span>
                          </div>
                        )}
                      </div>

                      {/* Article Title */}
                      <h2 className="text-xl font-semibold text-black mb-3 line-clamp-1  ">
                        {article.judul}
                      </h2>

                      {/* Article Excerpt */}
                      <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-2 h-12">
                        {article.excerpt}
                      </p>

                      {/* Read More Link */}
                      <Link 
                        href={`/artikel/${article.slug}`}
                        className="inline-flex items-center text-emerald-600 hover:text-emerald-700 font-medium transition-colors duration-200"
                      >
                        Baca Selengkapnya →
                      </Link>
                    </div>
                  </article>
                ))}
              </div>

              {/* Pagination */}
              {totalPages > 1 && (
                <div className="flex justify-center items-center gap-2 mt-12">
                  <button
                    onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                    disabled={currentPage === 1}
                    className="px-4 py-2 rounded-lg border border-gray-300 text-gray-600 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200"
                  >
                    Previous
                  </button>
                  
                  <div className="flex gap-1">
                    {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                      <button
                        key={page}
                        onClick={() => setCurrentPage(page)}
                        className={`px-3 py-2 rounded-lg transition-colors duration-200 ${
                          page === currentPage
                            ? 'bg-emerald-600 text-white'
                            : 'text-gray-600 hover:bg-gray-100'
                        }`}
                      >
                        {page}
                      </button>
                    ))}
                  </div>
                  
                  <button
                    onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                    disabled={currentPage === totalPages}
                    className="px-4 py-2 rounded-lg border border-gray-300 text-gray-600 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200"
                  >
                    Next
                  </button>
                </div>
              )}
            </>
          )}
        </div>
      </section>

    </div>
  );
};

export default ArticlesPage;
