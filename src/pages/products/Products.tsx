import Footer from '../../components/footer/Footer';
import Header from '../../components/header/Header';
import ProductCard from '../../components/product-card/ProductCard';
import products from '../../data/products.json';
import { Product } from '../../types/products';

import styles from './Products.module.css';

export default function Products() {
    return (
        <div className={styles.pageWrapper}>
            <Header />
            <div className={styles.mainContent}>
                <h2 className={styles.heading}>PRODUCTS</h2>
                <div className={styles.productGrid}>
                    {(products as Product[]).map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            </div>

            <Footer />
        </div>
    );
}
