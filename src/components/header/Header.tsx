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
                <a href="/home">
                    <img
                        id={styles.logoImg}
                        src={logo}
                        alt="P&S Creations logo"
                    ></img>
                </a>
                <div className={styles.navMenu}>
                    <a className={styles.navBtn} href="/about">
                        ABOUT
                    </a>
                    <a className={styles.navBtn} href="/gallery">
                        GALLERY
                    </a>
                    <a className={styles.navBtn} href="/products">
                        PRODUCTS
                    </a>
                    <a className={styles.navBtn} href="/contact">
                        CONTACT
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Header;
