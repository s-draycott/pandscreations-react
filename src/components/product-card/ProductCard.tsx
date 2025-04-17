import { Link } from 'react-router-dom';

import { Product } from '../../types/products';
import ImgCarousel from '../img-carousel/ImgCarousel';

import styles from './ProductCard.module.css';

interface ProductCardProps {
    product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
    const { title, price, available, images } = product;
    const carouselData = images.map((img) => ({
        src: img.src,
        alt: img.alt,
    }));
    const titleLines = title.split('\n');

    return (
        <div className={styles.productCard}>
            <Link to={`/products/${product.id}`} className={styles.productLink}>
                <ImgCarousel
                    data={carouselData}
                    autoSlide={false}
                    customClass={styles.productImg}
                />

                <div className={styles.productInfo}>
                    {titleLines.map((line, index) => (
                        <span className={styles.productTitle} key={index}>
                            {line}
                            {index < titleLines.length - 1 && <br />}
                        </span>
                    ))}
                    <p className={styles.productPrice}>£{price.toFixed(2)}</p>
                    <p
                        className={`${styles.productStatus} ${available ? 'available' : 'sold-out'}`}
                    >
                        {available ? '' : 'SOLD OUT'}
                    </p>
                </div>
            </Link>
        </div>
    );
};

export default ProductCard;
