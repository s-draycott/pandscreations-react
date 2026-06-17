import { Link } from 'react-router-dom';

import { Product } from '../../types/products';

import styles from './ProductCard.module.css';

interface ProductCardProps {
    product: Product;
    onClick: (id: string) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onClick }) => {
    const { title, price, available, images } = product;

    // Find the image with id '1' (the first image)
    const firstImage = images.find((img) => img.id === '1');

    // If no image with id '1' is found, fallback (optional)
    if (!firstImage) {
        return <div>No image found for this product.</div>;
    }

    const titleLines = title.split('\n');

    return (
        <div className={styles.productCard}>
            <Link
                to={`/products/${product.id}`} // Navigate to product detail page
                className={styles.productLink}
                onClick={() => onClick(product.id)} // Optionally save scroll position
            >
                <div className={styles.imgContainer}>
                    <img src={firstImage.src} alt={firstImage.alt} className={styles.productImg} />
                    {!available && <div className={styles.soldOutBanner}>SOLD OUT</div>}
                </div>
                <div className={styles.productInfo}>
                    {titleLines.map((line, index) => (
                        <span className={styles.productTitle} key={index}>
                            {line}
                            {index < titleLines.length - 1 && <br />}
                        </span>
                    ))}
                    <p className={styles.productPrice}>£{price.toFixed(2)}</p>
                </div>
            </Link>
        </div>
    );
};

export default ProductCard;
