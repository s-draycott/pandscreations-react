import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import CheckoutButton from '../../components/checkout-button/CheckoutButton';
import Footer from '../../components/footer/Footer';
import Header from '../../components/header/Header';
import ImgCarousel from '../../components/img-carousel/ImgCarousel';
import NoPage from '../NoPage';
import { useProducts } from '../../context/ProductsContext';

import styles from './ProductDetail.module.css';

const ProductDetail = () => {
    const { products, loading } = useProducts();

    const { slug } = useParams();

    const product = products.find((p) => p.slug === slug);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    if (!product)
        return (
            <p>
                <NoPage />
            </p>
        );

    const carouselData =
        product.product_images?.map((img) => ({
            src: img.src,
            alt: img.alt,
        })) ?? [];

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div className="pageWrapper">
            <Header />
            <div className={`mainContent ${styles.mainContent}`}>
                <div className={styles.carouselContainer}>
                    <ImgCarousel
                        data={carouselData}
                        autoSlide={false}
                        customClass={styles.productImg}
                    />
                </div>

                <div className={styles.productInfo}>
                    <h1 className={styles.title}>{product.title}</h1>
                    <p className={styles.price}>£{product.price.toFixed(2)}</p>
                    <p className={styles.status}>{product.available ? 'In stock' : 'SOLD OUT'}</p>
                    <p className={styles.description}>{product.description}</p>
                    <CheckoutButton product={product} />
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default ProductDetail;
