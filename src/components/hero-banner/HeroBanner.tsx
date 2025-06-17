import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import styles from './HeroBanner.module.css';

const HeroBanner = () => {
    const [imageUrl, setImageUrl] = useState('');

    useEffect(() => {
        async function fetchHeroImage() {
            try {
                const response = await fetch(`${import.meta.env.VITE_API_URL}/api/hero-image`);
                if (!response.ok) {
                    throw new Error(`Failed to fetch hero image, status: ${response.status}`);
                }
                const data = await response.json();
                setImageUrl(data.url);
            } catch (error) {
                console.error('Error fetching hero image:', error);
            }
        }
        fetchHeroImage();
    }, []);

    return (
        <div
            className={styles.heroContainer}
            style={{
                backgroundImage: imageUrl ? `url(${imageUrl})` : 'none',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
        >
            <div className={styles.heroTextContainer}>
                <p className={styles.heroPara}>
                    Handcrafted Wooden Gifts and <br />
                    Country-Inspired Artwork
                </p>
                <Link to="/products">
                    <button className={styles.heroBtn}>EXPLORE PRODUCTS</button>
                </Link>
            </div>
        </div>
    );
};

export default HeroBanner;
