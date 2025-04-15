import logo from '../../assets/brown-transparent-logo-03-03.png';
import etsyLogo from '../../assets/etsy-brands.svg';
import facebookLogo from '../../assets/facebook-f-brands.svg';
import instagramLogo from '../../assets/instagram-brands.svg';

import styles from './Footer.module.css';

const Footer = () => {
    return (
        <div className={styles.footerContainer}>
            <div className={styles.logoContainer}>
                <a href="/home">
                    <img id={styles.logoImg} src={logo} alt="P&S Creations logo"></img>
                </a>
                <p className={styles.para}>© 2025 P&S Creations</p>
            </div>

            <div className={styles.quickLinksContainer}>
                <p className={styles.heading}>QUICK LINKS</p>
                <p>
                    <a href="/about" className={styles.para}>
                        About
                    </a>
                </p>
                <p>
                    <a href="/contact" className={styles.para}>
                        Contact
                    </a>
                </p>
                <p>
                    <a href="/noPage" className={styles.para}>
                        Terms & Conditions
                    </a>
                </p>
                <p>
                    <a href="/noPage" className={styles.para}>
                        Security & Privacy
                    </a>
                </p>
                <p>
                    <a href="/noPage" className={styles.para}>
                        Cookie Policy
                    </a>
                </p>
            </div>
            <div className={styles.socialContainer}>
                <p className={styles.heading}>SOCIAL</p>
                <p>
                    <a
                        href="https://www.instagram.com/pandscreations/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.socialLink}
                    >
                        <img
                            src={instagramLogo}
                            className={styles.socialsLogo}
                            alt="Instagram logo"
                        />
                        Instagram
                    </a>
                </p>
                <p>
                    <a
                        href="https://www.facebook.com/profile.php?id=61565937200204"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.socialLink}
                    >
                        <img
                            src={facebookLogo}
                            className={styles.socialsLogo}
                            alt="Facebook logo"
                        />
                        Facebook
                    </a>
                </p>
                <p>
                    <a
                        href="https://www.etsy.com/uk/shop/PandSCreationsUK"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.socialLink}
                    >
                        <img src={etsyLogo} className={styles.socialsLogo} alt="Etsy logo" />
                        Etsy
                    </a>
                </p>
            </div>
        </div>
    );
};

export default Footer;
