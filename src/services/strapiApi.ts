import { Article, StrapiResponse } from '../types/article';

const API_URL = process.env.NEXT_PUBLIC_STRAPI_URL || 'http://localhost:1337';

class StrapiApiService {
  private baseUrl: string;

  constructor() {
    // Use Next.js API routes instead of direct Strapi calls
    this.baseUrl = '/api';
  }

  private async fetchFromApi<T>(endpoint: string): Promise<T> {
    try {
      const response = await fetch(`${this.baseUrl}${endpoint}`, {
        cache: 'no-store' // Disable caching to get fresh data
      });
      
      if (!response.ok) {
        const errorText = await response.text();
        console.error('API Error:', errorText);
        throw new Error(`HTTP error! status: ${response.status}, message: ${errorText}`);
      }
      
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('API Error:', error);
      throw error;
    }
  }

  // Get all articles with pagination
  async getArticles(page: number = 1, pageSize: number = 10): Promise<StrapiResponse<Article[]>> {
    const endpoint = `/articles?page=${page}&pageSize=${pageSize}`;
    return this.fetchFromApi<StrapiResponse<Article[]>>(endpoint);
  }

  // Get single article by slug
  async getArticleBySlug(slug: string): Promise<StrapiResponse<Article[]>> {
    const endpoint = `/articles/${slug}`;
    return this.fetchFromApi<StrapiResponse<Article[]>>(endpoint);
  }

  // Get single article by ID
  async getArticleById(id: number): Promise<StrapiResponse<Article>> {
    const endpoint = `/articles/id/${id}`;
    return this.fetchFromApi<StrapiResponse<Article>>(endpoint);
  }

  // Helper method to get full image URL
  getImageUrl(imageUrl: string): string {
    if (!imageUrl) return '';
    
    // If it's already a full URL, return as is
    if (imageUrl.startsWith('http')) {
      return imageUrl;
    }
    
    // Otherwise, prepend the API URL
    return `${API_URL}${imageUrl}`;
  }

  // Helper method to format date
  formatDate(dateString: string): string {
    const date = new Date(dateString);
    return date.toLocaleDateString('id-ID', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  }
}

export const strapiApi = new StrapiApiService();