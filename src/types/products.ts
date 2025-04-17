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
  images: ProductImage[];
}