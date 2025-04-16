export interface ProductImage {
  id: number;
  src: string;
  alt: string;
}


export interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  available: boolean;
  images: ProductImage[];
}