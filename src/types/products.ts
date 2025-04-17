export interface ProductImage {
  id: string;
  src: string;
  alt: string;
}


export interface Product {
  id: string;
  title: string;
  description: string;
  price: number;
  available: boolean;
  images: ProductImage[];
}