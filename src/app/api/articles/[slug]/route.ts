import { NextRequest, NextResponse } from 'next/server';

const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL || 'http://localhost:1337';
const STRAPI_TOKEN = process.env.STRAPI_API_TOKEN; // Server-side only

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  try {
    const { slug } = await params;
    console.log('Fetching article with slug:', slug);
    
    const headers: HeadersInit = {
      'Content-Type': 'application/json',
    };

    if (STRAPI_TOKEN) {
      headers['Authorization'] = `Bearer ${STRAPI_TOKEN}`;
    }

    // Try to fetch by slug first
    let response = await fetch(
      `${STRAPI_URL}/api/artikels?populate=*&filters[slug][$eq]=${slug}`,
      { 
        headers,
        cache: 'no-store' // Disable caching for individual articles
      }
    );

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    let data = await response.json();
    
    // If no article found by slug, try by ID (in case slug is actually an ID)
    if (!data.data || data.data.length === 0) {
      const id = parseInt(slug);
      if (!isNaN(id)) {
        response = await fetch(
          `${STRAPI_URL}/api/artikels/${id}?populate=*`,
          { 
            headers,
            cache: 'no-store' // Disable caching for ID fallback
          }
        );
        
        if (response.ok) {
          const idData = await response.json();
          // Wrap single article in array format to match slug response
          data = {
            data: [idData.data],
            meta: idData.meta
          };
        }
      }
    }

    return NextResponse.json(data);
  } catch (error) {
    console.error('API Route Error:', error);
    return NextResponse.json(
      { error: 'Failed to fetch article' },
      { status: 500 }
    );
  }
}
