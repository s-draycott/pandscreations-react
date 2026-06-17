import { useEffect, useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';

import { supabase } from '../../supabase/supabaseClient';
import OfferBanner from '../offer-banner/OfferBanner';

import styles from './NavMenu.module.scss';

const logo = '/assets/white-transparent-03.png';

type NavMenuType = {
    id: number;
    name: string;
    path: string;
    parent_id: number | null;
    order: number;
};

type NavItem = NavMenuType & { children?: NavMenuType[] };

const NavMenu = () => {
    const [menu, setMenu] = useState<NavItem[]>([]);
    const [isOpen, setIsOpen] = useState(false);
    const [currentMenu, setCurrentMenu] = useState<NavItem[]>([]);
    const [menuStack, setMenuStack] = useState<NavItem[][]>([]);

    // Fetch menu from Supabase
    useEffect(() => {
        const fetchMenu = async () => {
            const { data, error } = await supabase
                .from('nav_menu')
                .select('*')
                .order('order', { ascending: true });

            if (error) {
                console.error(error.message);
                return;
            }

            if (data) {
                const topLevel = data.filter((item) => item.parent_id === null);
                const structured = topLevel.map((parent) => ({
                    ...parent,
                    children: data.filter((child) => child.parent_id === parent.id),
                }));
                setMenu(structured);
                setCurrentMenu(structured);
            }
        };
        fetchMenu();
    }, []);

    // Drill-down handlers
    const handleDrillDown = (item: NavItem) => {
        if (item.children && item.children.length > 0) {
            setMenuStack([...menuStack, currentMenu]);
            setCurrentMenu(item.children);
        } else {
            setIsOpen(false); // close if no children
        }
    };

    const handleBack = () => {
        const previousMenu = menuStack[menuStack.length - 1];
        setMenuStack(menuStack.slice(0, -1));
        setCurrentMenu(previousMenu);
    };

    return (
        <header className={styles.navBar}>
            <div className={styles.offerBanner}>
                <OfferBanner />
            </div>

            <div className={styles.menuWrapper}>
                {/* Desktop Menu */}
                <nav className={styles.menuDesktop}>
                    <ul>
                        {menu.map((item) => (
                            <li
                                key={item.id}
                                className={item.children?.length ? styles.dropdown : ''}
                            >
                                <Link to={item.path}>{item.name}</Link>
                                {item.children && (
                                    <ul className={styles.dropdownMenu}>
                                        {item.children.map((child) => (
                                            <li key={child.id}>
                                                <Link to={child.path}>{child.name}</Link>
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </li>
                        ))}
                    </ul>
                </nav>

                {/* Hamburger Toggle */}
                <button className={styles.mobileToggle} onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <FaTimes /> : <FaBars />}
                </button>

                {/* Mobile Full-Screen Drill-Down Menu */}
                <nav className={`${styles.menuMobile} ${isOpen ? styles.open : ''}`}>
                    <ul>
                        {menuStack.length > 0 && (
                            <li>
                                <button onClick={handleBack}>← Back</button>
                            </li>
                        )}
                        {currentMenu.map((item) => (
                            <li key={item.id}>
                                {item.children && item.children.length > 0 ? (
                                    <button onClick={() => handleDrillDown(item)}>
                                        {item.name}
                                    </button>
                                ) : (
                                    <Link to={item.path} onClick={() => setIsOpen(false)}>
                                        {item.name}
                                    </Link>
                                )}
                            </li>
                        ))}
                    </ul>
                </nav>

                <div className={styles.logo}>
                    <Link to="/home">
                        <img id={styles.logoImg} src={logo} alt="Logo" />
                    </Link>
                </div>

                <div>BASKET</div>
            </div>
        </header>
    );
};

export default NavMenu;
