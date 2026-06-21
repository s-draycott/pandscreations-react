import { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import { Product } from '../types/products';

interface ProductsContextType {
    products: Product[];
    loading: boolean;
}

const ProductsContext = createContext<ProductsContextType>({
    products: [],
    loading: true,
});

export const ProductsProvider = ({ children }: { children: ReactNode }) => {
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchProducts() {
            try {
                const response = await fetch(`${import.meta.env.VITE_API_URL}/api/products`);
                const data = await response.json();
                setProducts(data);
            } catch (error) {
                console.error('Failed to fetch products:', error);
            } finally {
                setLoading(false);
            }
        }

        fetchProducts();
    }, []);

    console.log('PRODUCT', products);

    return (
        <ProductsContext.Provider value={{ products, loading }}>
            {children}
        </ProductsContext.Provider>
    );
};

export const useProducts = () => useContext(ProductsContext);
