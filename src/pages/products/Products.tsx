import { useEffect } from 'react';

import Footer from '../../components/footer/Footer';
import Header from '../../components/header/Header';
import ProductCard from '../../components/product-card/ProductCard';
import products from '../../data/products.json';
import { Product } from '../../types/products';

import styles from './Products.module.css';

export default function Products() {
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
    return (
        <div className={`pageWrapper ${styles.pageWrapper}`}>
            <Header />
            <div className={`mainContent ${styles.mainContent}`}>
                <h2 className={styles.heading}>PRODUCTS</h2>
                <div className={styles.productGrid}>
                    {(products as Product[]).map((product) => (
                        <ProductCard
                            key={product.id}
                            product={product}
                            onClick={handleProductClick}
                        />
                    ))}
                </div>
            </div>

            <Footer />
        </div>
    );
}
