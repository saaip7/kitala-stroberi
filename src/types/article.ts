export interface Article {
  id: number;
  documentId: string;
  judul: string;
  penulis: string;
  konten: string;
  slug: string;
  publishedAt: string;
  createdAt: string;
  updatedAt: string;
  foto?: {
    id: number;
    documentId: string;
    name: string;
    alternativeText?: string;
    caption?: string;
    width: number;
    height: number;
    formats?: {
      thumbnail?: ImageFormat;
      small?: ImageFormat;
      medium?: ImageFormat;
      large?: ImageFormat;
    };
    hash: string;
    ext: string;
    mime: string;
    size: number;
    url: string;
    previewUrl?: string;
    provider: string;
    provider_metadata?: Record<string, unknown>;
    createdAt: string;
    updatedAt: string;
  };
  author?: {
    data?: {
      id: number;
      attributes: {
        name: string;
        email: string;
        avatar?: {
          data?: {
            attributes: {
              url: string;
              alternativeText?: string;
            };
          };
        };
      };
    };
  };
  category?: {
    data?: {
      id: number;
      attributes: {
        name: string;
        slug: string;
      };
    };
  };
}

export interface ImageFormat {
  name: string;
  hash: string;
  ext: string;
  mime: string;
  path: string | null;
  width: number;
  height: number;
  size: number;
  sizeInBytes: number;
  url: string;
}

export interface StrapiResponse<T> {
  data: T;
  meta: {
    pagination?: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
}

export interface StrapiError {
  data: null;
  error: {
    status: number;
    name: string;
    message: string;
    details: Record<string, unknown>;
  };
}