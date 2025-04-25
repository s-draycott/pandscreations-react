import { useEffect, useState } from 'react';
import { useLocation, Link } from 'react-router-dom';

const logo = '/assets/white-transparent-03.png';

import OfferBanner from '../offer-banner/OfferBanner';

import styles from './Header.module.css';

const Header = () => {
    const location = useLocation();
    const isHomePage = location.pathname === '/' || location.pathname === '/home';

    // State to track scroll position and direction

    const [isNavbarVisible, setIsNavbarVisible] = useState(true);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        let lastScrollY = window.scrollY;
        let accumulatedUp = 0;
        let accumulatedDown = 0;

        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            const diff = currentScrollY - lastScrollY;

            if (diff > 0) {
                // Scrolling down
                accumulatedDown += diff;
                accumulatedUp = 0;

                if (accumulatedDown > 200) {
                    setIsNavbarVisible(false);
                }
            } else if (diff < 0) {
                // Scrolling up
                accumulatedUp += Math.abs(diff);
                accumulatedDown = 0;

                if (accumulatedUp > 150) {
                    setIsNavbarVisible(true);
                }
            }

            setIsScrolled(currentScrollY > 100); // still true after 100px
            lastScrollY = currentScrollY;
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div
            className={`${styles.navbar} 
                ${isHomePage ? styles.homePage : ''} 
                ${isNavbarVisible ? styles.visible : styles.hidden} 
                ${isScrolled ? styles.scrolled : ''}`}
        >
            <div className={styles.offerBanner}>
                <OfferBanner />
            </div>

            <div className={styles.navContainer}>
                <button className={styles.hamburgerIcon}>&#9776;</button>
                <Link to="/home">
                    <img id={styles.logoImg} src={logo} alt="P&S Creations logo" />
                </Link>
                <ul className={styles.navMenu}>
                    <li>
                        <Link className={styles.navBtn} to="/about">
                            ABOUT
                        </Link>
                    </li>
                    <li>
                        <Link className={styles.navBtn} to="/gallery">
                            GALLERY
                        </Link>
                    </li>
                    <li className={styles.dropdown}>
                        <Link className={styles.navBtn} to="/products">
                            PRODUCTS
                        </Link>
                        <ul className={styles.dropdownMenu}>
                            <li>
                                <Link className={styles.navBtn} to="/products">
                                    All
                                </Link>
                            </li>
                            <li>
                                <Link className={styles.navBtn} to="/products/category/woodwork">
                                    Woodwork
                                </Link>
                            </li>
                            <li>
                                <Link className={styles.navBtn} to="/products/category/artwork">
                                    Artwork
                                </Link>
                            </li>
                            <li>
                                <Link className={styles.navBtn} to="/products/category/wedding">
                                    Wedding Stationery
                                </Link>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <Link className={styles.navBtn} to="/contact">
                            CONTACT
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Header;
