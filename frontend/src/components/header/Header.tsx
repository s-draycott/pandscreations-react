import { useEffect, useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { useLocation, Link } from 'react-router-dom';
import { useSiteImages } from '../../context/SiteImagesContext';
import { useSiteContent } from '../../context/SiteContentContext';
import { useSiteNavigation } from '../../context/SiteNavigationContext';

import OfferBanner from '../offer-banner/OfferBanner';

import styles from './Header.module.css';

const Header = () => {
    const { images } = useSiteImages();
    const { content } = useSiteContent();
    const getContent = (key: string, fallback = '') => content[key] ?? fallback;

    const { navigation, loading } = useSiteNavigation();
    if (loading) {
        return null;
    }

    const location = useLocation();
    const isHomePage = location.pathname === '/' || location.pathname === '/home';

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen((prev) => !prev);
    };

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

            setIsScrolled(currentScrollY > 100);
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
                <button className={styles.hamburgerIcon} onClick={toggleMenu}>
                    {isMenuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
                </button>

                <Link to={getContent('route_home')}>
                    <img
                        id={styles.logoImg}
                        src={images['logo_white_transparent']?.src}
                        alt={images['logo_white_transparent']?.alt}
                    />
                </Link>

                <ul className={`${styles.navMenu} ${isMenuOpen ? styles.open : ''}`}>
                    {navigation.map((item) => (
                        <li key={item.id} className={item.children?.length ? styles.dropdown : ''}>
                            <Link className={styles.navBtn} to={item.path}>
                                {item.name}
                            </Link>

                            {(item.children?.length ?? 0) > 0 && (
                                <ul className={styles.dropdownMenu}>
                                    {item.children?.map((child) => (
                                        <li key={child.id}>
                                            <Link className={styles.navBtn} to={child.path}>
                                                {child.name}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Header;
