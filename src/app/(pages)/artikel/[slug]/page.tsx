'use client';

import React, { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { Calendar, User, ArrowLeft, Share2 } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
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
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black leading-tight mb-6">
            {article.judul}
          </h1>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-8 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-none text-gray-700 leading-relaxed">
            <ReactMarkdown 
              remarkPlugins={[remarkGfm]}
              components={{
                h1: ({children}) => <h1 className="text-3xl font-bold text-black mt-8 mb-4 leading-tight">{children}</h1>,
                h2: ({children}) => <h2 className="text-2xl font-semibold text-black mt-6 mb-3 leading-tight">{children}</h2>,
                h3: ({children}) => <h3 className="text-xl font-semibold text-black mt-5 mb-2 leading-tight">{children}</h3>,
                h4: ({children}) => <h4 className="text-lg font-semibold text-black mt-4 mb-2">{children}</h4>,
                h5: ({children}) => <h5 className="text-base font-semibold text-black mt-3 mb-1">{children}</h5>,
                h6: ({children}) => <h6 className="text-sm font-semibold text-black mt-3 mb-1">{children}</h6>,
                p: ({children}) => <p className="text-gray-700 mb-4 leading-relaxed text-base">{children}</p>,
                ul: ({children}) => <ul className="list-disc list-inside mb-4 text-gray-700 pl-4">{children}</ul>,
                ol: ({children}) => <ol className="list-decimal list-inside mb-4 text-gray-700 pl-4">{children}</ol>,
                li: ({children}) => <li className="mb-1 leading-relaxed">{children}</li>,
                blockquote: ({children}) => (
                  <blockquote className="border-l-4 border-emerald-500 pl-6 py-4 mb-6 bg-emerald-50 italic text-gray-700 rounded-r-lg">
                    {children}
                  </blockquote>
                ),
                code: ({children}) => (
                  <code className="bg-gray-100 px-2 py-1 rounded text-sm font-mono text-black border">
                    {children}
                  </code>
                ),
                pre: ({children}) => (
                  <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto mb-6 border">
                    {children}
                  </pre>
                ),
                a: ({href, children}) => (
                  <a 
                    href={href} 
                    className="text-emerald-600 hover:text-emerald-700 underline hover:underline-offset-2 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {children}
                  </a>
                ),
                img: ({src, alt}) => (
                  <div className="my-8">
                    <Image 
                      src={String(src) || ''} 
                      alt={String(alt) || ''} 
                      width={800} 
                      height={400} 
                      className="rounded-lg object-cover w-full h-auto shadow-lg" 
                    />
                    {alt && (
                      <p className="text-sm text-gray-500 text-center mt-2 italic">
                        {String(alt)}
                      </p>
                    )}
                  </div>
                ),
                strong: ({children}) => <strong className="font-semibold text-black">{children}</strong>,
                em: ({children}) => <em className="italic text-gray-700">{children}</em>,
                hr: () => <hr className="my-8 border-gray-300" />,
                table: ({children}) => (
                  <div className="overflow-x-auto my-6">
                    <table className="min-w-full border border-gray-300 rounded-lg">
                      {children}
                    </table>
                  </div>
                ),
                thead: ({children}) => <thead className="bg-gray-50">{children}</thead>,
                tbody: ({children}) => <tbody className="bg-white">{children}</tbody>,
                tr: ({children}) => <tr className="border-b border-gray-200">{children}</tr>,
                th: ({children}) => (
                  <th className="px-4 py-2 text-left font-semibold text-black border-r border-gray-200 last:border-r-0">
                    {children}
                  </th>
                ),
                td: ({children}) => (
                  <td className="px-4 py-2 text-gray-700 border-r border-gray-200 last:border-r-0">
                    {children}
                  </td>
                ),
              }}
            >
              {article.konten || 'Content not available.'}
            </ReactMarkdown>
          </div>
        </div>
      </section>

      {/* Article Footer */}
      <section className="py-8 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl p-6 shadow-lg">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-semibold text-black mb-2">
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
              className="inline-flex items-center gap-2 bg-gray-200 hover:bg-gray-300 text-black px-6 py-3 rounded-lg transition-colors duration-200"
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