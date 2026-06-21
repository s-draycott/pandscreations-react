import { useEffect, useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { useLocation, Link } from 'react-router-dom';
import { useSiteImages } from '../../context/SiteImagesContext';
import { useSiteContent } from '../../context/SiteContentContext';
import { useSiteNavigation } from '../../context/SiteNavigationContext';

import OfferBanner from '../offer-banner/OfferBanner';

import styles from './Header.module.css';

type NavItem = {
    id: number;
    name: string;
    path: string;
    visible?: boolean;
    children?: NavItem[];
};

const Header = () => {
    const { images } = useSiteImages();
    const { content } = useSiteContent();
    const location = useLocation();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [menuStack, setMenuStack] = useState<NavItem[][]>([]);
    const [activeItemId, setActiveItemId] = useState<number | null>(null);
    const [isNavbarVisible, setIsNavbarVisible] = useState(true);
    const [isScrolled, setIsScrolled] = useState(false);

    const { navigation, loading } = useSiteNavigation();

    const getContent = (key: string, fallback = '') => content[key] ?? fallback;

    const isHomePage = location.pathname === '/' || location.pathname === '/home';

    const isActive = (path: string) => {
        return location.pathname === path;
    };

    const resetMenu = () => {
        setMenuStack([navigation]); // back to root
    };

    const toggleMenu = () => {
        setIsMenuOpen((prev) => {
            const next = !prev;

            if (!next) {
                resetMenu(); // 👈 reset when closing
            }

            return next;
        });
    };

    useEffect(() => {
        if (navigation.length) {
            setMenuStack([navigation]);
        }
    }, [navigation]);

    const handleDrillDown = (item: NavItem) => {
        if ((item.children?.length ?? 0) > 0) {
            setActiveItemId(item.id);
            setMenuStack((prev) => [...prev, item.children!]);
        }
    };

    const handleBack = () => {
        setMenuStack((prev) => prev.slice(0, -1));
        setActiveItemId(null);
    };

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

    if (loading) {
        return null;
    }

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

                <nav className={`${styles.mobileMenu} ${isMenuOpen ? styles.open : ''}`}>
                    <div
                        className={styles.mobileMenuTrack}
                        style={{
                            transform: `translateX(-${(menuStack.length - 1) * 100}%)`,
                        }}
                    >
                        {menuStack.map((menu, level) => (
                            <div key={level} className={styles.mobileMenuPanel}>
                                <ul>
                                    {level > 0 && (
                                        <li>
                                            <button
                                                className={styles.backButton}
                                                onClick={handleBack}
                                            >
                                                ← Back
                                            </button>
                                        </li>
                                    )}

                                    {menu.map((item) => (
                                        <li key={item.id}>
                                            {(item.children?.length ?? 0) > 0 ? (
                                                <button
                                                    className={`${styles.mobileMenuButton} ${
                                                        activeItemId === item.id
                                                            ? styles.active
                                                            : ''
                                                    } ${isActive(item.path) ? styles.active : ''}`}
                                                    onClick={() => handleDrillDown(item)}
                                                >
                                                    <span>{item.name}</span>
                                                    <span>›</span>
                                                </button>
                                            ) : (
                                                <Link
                                                    className={`${styles.mobileMenuLink} ${
                                                        activeItemId === item.id
                                                            ? styles.active
                                                            : ''
                                                    } ${isActive(item.path) ? styles.active : ''}`}
                                                    to={item.path}
                                                    onClick={() => setIsMenuOpen(false)}
                                                >
                                                    {item.name}
                                                </Link>
                                            )}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </nav>
            </div>
        </div>
    );
};

export default Header;
