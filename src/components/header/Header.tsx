import { useEffect, useState } from 'react';
import { useLocation, Link } from 'react-router-dom';

const logo = '/assets/white-transparent-03.png';

import OfferBanner from '../offer-banner/OfferBanner';

import styles from './Header.module.css';

const Header = () => {
    const location = useLocation();
    const isHomePage = location.pathname === '/' || location.pathname === '/home';

    // State to track scroll position and direction
    const [scrollPosition, setScrollPosition] = useState(0);
    const [isNavbarVisible, setIsNavbarVisible] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        let lastScrollY = window.scrollY; // Track the last scroll position

        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            // Check if we've scrolled down by 100px or more
            if (currentScrollY > 100) {
                setIsScrolled(true); // Set the scrolled state
            } else {
                setIsScrolled(false); // Reset if less than 100px
            }

            // Check if the user is scrolling up or down
            if (currentScrollY < lastScrollY) {
                // User is scrolling up, show navbar
                setIsNavbarVisible(true);
            } else setIsNavbarVisible(false);

            lastScrollY = currentScrollY; // Update the last scroll position
            setScrollPosition(currentScrollY);
        };

        // Listen to scroll events
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
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
                        <span className={styles.navBtn}>PRODUCTS</span>
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
