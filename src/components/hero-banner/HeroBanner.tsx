import { useSiteImages } from '../../context/SiteImagesContext';

import styles from './HeroBanner.module.css';

const HeroBanner = () => {
    const { images, loading } = useSiteImages();
    const heroImageUrl = images['hero_banner'];

    if (loading) {
        return <div>Loading hero banner...</div>;
    }

    return (
        <div
            className={styles.heroContainer}
            style={{
                backgroundImage: heroImageUrl ? `url(${heroImageUrl})` : 'none',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
        >
            <div className={styles.heroTextContainer}>
                <p className={styles.heroPara}>
                    Handcrafted Wooden Gifts and <br />
                    Country-Inspired Artwork
                </p>
                <button className={styles.heroBtn}>EXPLORE PRODUCTS</button>
            </div>
        </div>
    );
};

export default HeroBanner;
