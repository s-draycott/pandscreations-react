import { useParams } from 'react-router-dom';

import Footer from '../../components/footer/Footer';
import Header from '../../components/header/Header';
import ImgCarousel from '../../components/img-carousel/ImgCarousel';
import products from '../../data/products.json';
import { Product } from '../../types/products';
import NoPage from '../NoPage';

import styles from './ProductDetail.module.css';

const ProductDetail = () => {
    const { id } = useParams<{ id: string }>();
    const product = (products as Product[]).find((p) => p.id === id);
    console.log('Product:', product);
    console.log('Product images:', product?.images);

    if (!product)
        return (
            <p>
                <NoPage />
            </p>
        );

    const carouselData = product.images.map((img) => ({
        src: img.src,
        alt: img.alt,
    }));
    console.log(product);
    return (
        <div className="pageWrapper">
            <Header />
            <div className={`"mainContent" ${styles.mainContent}`}>
                <ImgCarousel
                    data={carouselData}
                    autoSlide={false}
                    customClass={styles.productImg}
                />
                <div className={styles.productInfo}>
                    <h1 className={styles.title}>{product.title}</h1>
                    <p className={styles.price}>£{product.price.toFixed(2)}</p>
                    <p className={styles.description}>{product.description}</p>
                    <p className={styles.status}>{product.available ? 'In stock' : 'SOLD OUT'}</p>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default ProductDetail;
