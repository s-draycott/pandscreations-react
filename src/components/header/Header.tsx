import { useEffect, useState } from 'react';
import { useLocation, Link } from 'react-router-dom';

const logo = '/assets/white-transparent-03.png';

import styles from './Header.module.css';

const Header = () => {
    // Location Handler
    const location = useLocation();
    const isHomePage = location.pathname === '/' || location.pathname === '/home';

    // Handle mobile menu
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const toggleMobileMenu = () => {
        setIsMobileMenuOpen((prev) => !prev);
    };

    // Scroll Handler
    const [isScrolled, setIsScrolled] = useState(false);

    const handleScroll = () => {
        if (window.scrollY > 0) {
            setIsScrolled(true);
        } else {
            setIsScrolled(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [location]);

    return (
        <div
            className={`${styles.navbar} ${isHomePage ? styles.homePage : ''} ${isScrolled ? styles.scrolled : ''}`}
        >
            <div className={styles.navContainer}>
                <button className={styles.hamburgerIcon} onClick={toggleMobileMenu}>
                    &#9776;
                </button>
                <Link to="/home">
                    <img id={styles.logoImg} src={logo} alt="P&S Creations logo" />
                </Link>
                <ul className={`${styles.navMenu} ${isMobileMenuOpen ? styles.open : ''}`}>
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
