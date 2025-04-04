// import React from "react";
import { useLocation } from "react-router-dom";
import React, { useEffect, useState } from "react";
import styles from "./Header.module.css";
import logo from "../../assets/white-transparent-03.svg";

const Header = () => {
    //Location Handler
    const location = useLocation();
    const isHomePage =
        location.pathname === "/" || location.pathname === "/home";

    //Handle mobile menu
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
        // Only add the scroll listener if we're on the Home page
        if (location.pathname === "/" || location.pathname === "/home") {
            window.addEventListener("scroll", handleScroll);
        }

        // Clean up the scroll listener
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [location]);

    return (
        <div
            className={`${styles.navbar} ${isHomePage ? styles.homePage : ""} ${
                isScrolled ? styles.scrolled : ""
            }`}
        >
            <div className={styles.navContainer}>
                <button
                    className={styles.hamburgerIcon}
                    onClick={toggleMobileMenu}
                >
                    &#9776;
                </button>
                <a href="/home">
                    <img
                        id={styles.logoImg}
                        src={logo}
                        alt="P&S Creations logo"
                    ></img>
                </a>
                <ul
                    className={`${styles.navMenu} ${
                        isMobileMenuOpen ? styles.open : ""
                    }`}
                >
                    <li>
                        <a className={styles.navBtn} href="/about">
                            ABOUT
                        </a>
                    </li>
                    <li>
                        <a className={styles.navBtn} href="/gallery">
                            GALLERY
                        </a>
                    </li>
                    <li>
                        <a className={styles.navBtn} href="/products">
                            PRODUCTS
                        </a>
                    </li>
                    <li>
                        <a className={styles.navBtn} href="/contact">
                            CONTACT
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Header;
