import { useRef } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

import products from '../../data/products.json';
import { Product } from '../../types/products';
import ProductCard from '../product-card/ProductCard';

import styles from './ProductScroll.module.css';

const ProductScroll: React.FC = () => {
    const availableProducts = (products as Product[]).filter((p) => p.available);

    const handleCardClick = (id: string) => {
        sessionStorage.setItem('scrollY', window.scrollY.toString());
        console.log(`Product ${id} clicked`);
    };

    const scrollRef = useRef<HTMLDivElement>(null);

    const scroll = (direction: 'left' | 'right') => {
        if (!scrollRef.current) return;

        const scrollAmount = 250 * 4 + 20 * 3; // width * items + gap * (items - 1)

        scrollRef.current.scrollBy({
            left: direction === 'left' ? -scrollAmount : scrollAmount,
            behavior: 'smooth',
        });
    };

    return (
        <div className={styles.wrapper}>
            <h2 className={styles.heading}>Available Products</h2>
            <div className={styles.carouselWrapper}>
                <button className={styles.arrowLeft} onClick={() => scroll('left')}>
                    <FaChevronLeft />
                </button>

                <div className={styles.scrollContainer} ref={scrollRef}>
                    {availableProducts.map((product) => (
                        <ProductCard key={product.id} product={product} onClick={handleCardClick} />
                    ))}
                </div>

                <button className={styles.arrowRight} onClick={() => scroll('right')}>
                    <FaChevronRight />
                </button>
            </div>
        </div>
    );
};

export default ProductScroll;
