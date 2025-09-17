import { Link } from 'react-router-dom';

import { useSiteImages } from '../../context/SiteImagesContext';

import styles from './HeroBanner.module.scss';

const HeroBanner = () => {
    const { images, loading } = useSiteImages();
    const heroImageUrl = images['hero_banner'];

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div
            className={styles.heroContainer}
            style={{
                backgroundImage: heroImageUrl ? `url(${heroImageUrl})` : 'none',
                backgroundSize: 'cover',
                backgroundPosition: 'top',
            }}
        >
            <div className={styles.heroTextContainer}>
                <p className={styles.heroPara}>
                    Handcrafted Wooden Gifts & <br />
                    Country-Inspired Artwork
                </p>
                <p className={styles.heroParaTwo}>MADE ON OUR FAMILY FARM IN LEICESTERSHIRE</p>
                <Link to="/products" className={styles.heroBtn}>
                    EXPLORE PRODUCTS
                </Link>
            </div>
        </div>
    );
};

export default HeroBanner;
