export interface ProductImage {
  id: string;
  src: string;
  alt: string;
}

export enum ProductCategory{
  Woodwork = 'woodwork',
  Artwork = 'artwork',
  Wedding = 'wedding',
}


export interface Product {
  id: string;
  title: string;
  category: string;
  description: string;
  price: number;
  available: boolean;
  slug: string;
  product_images?: ProductImage[];
}

export interface ProductImage {
    id: string;
    src: string;
    alt: string;
    sort_order?: number;
}