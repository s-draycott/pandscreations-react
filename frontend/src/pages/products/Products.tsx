import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import Footer from '../../components/footer/Footer';
import Header from '../../components/header/Header';
import ProductCard from '../../components/product-card/ProductCard';
import productsData from '../../data/products.json';
import { Product } from '../../types/products';

import styles from './Products.module.css';

export default function Products() {
    const { category } = useParams();
    const [filteredProducts, setFilteredProducts] = useState<Product[]>(productsData);

    useEffect(() => {
        console.log('Category from URL:', category);
        if (category) {
            const filtered = productsData.filter((product) => product.category === category);
            console.log('Filtered Products:', filtered);
            setFilteredProducts(filtered);
        } else {
            setFilteredProducts(productsData);
        }
    }, [category]);

    const handleProductClick = () => {
        sessionStorage.setItem('scrollPos', window.scrollY.toString());
    };

    useEffect(() => {
        const scrollY = sessionStorage.getItem('scrollPos');
        if (scrollY) {
            window.scrollTo(0, parseInt(scrollY));
            sessionStorage.removeItem('scrollPos');
        }
    }, []);

    const sentenceCase = (str: string) => str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();

    return (
        <div className={`pageWrapper ${styles.pageWrapper}`}>
            <Header />
            <div className={`mainContent ${styles.mainContent}`}>
                <h2 className={styles.heading}>
                    {category ? sentenceCase(category) : 'All Products'}
                </h2>

                {filteredProducts.length === 0 ? (
                    <p>No products available in this category.</p>
                ) : (
                    <div className={styles.productGrid}>
                        {filteredProducts.map((product) => (
                            <ProductCard
                                key={product.id}
                                product={product}
                                onClick={handleProductClick}
                            />
                        ))}
                    </div>
                )}
            </div>
            <Footer />
        </div>
    );
}
