import { Link } from 'react-router-dom';

import styles from './HeroBanner.module.css';

const HeroBanner = () => {
    return (
        <div className={styles.heroContainer}>
            <div className={styles.heroTextContainer}>
                <p className={styles.heroPara}>
                    Handcrafted Wooden Gifts and <br></br>Country-Inspired Artwork
                </p>
                <Link to="/products">
                    <button className={styles.heroBtn}>EXPLORE PRODUCTS</button>
                </Link>
            </div>
        </div>
    );
};

export default HeroBanner;
