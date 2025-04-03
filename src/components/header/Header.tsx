import React from "react";
import styles from "./Header.module.css";
import logo from "../../assets/white-transparent-03.svg";

const Header = () => {
    return (
        <div className={styles.navbar}>
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
