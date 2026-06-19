import { useSiteImages } from '../../context/SiteImagesContext';
import { useSiteContent } from '../../context/SiteContentContext';
import styles from './Footer.module.css';

const Footer = () => {
    const { images } = useSiteImages();
    const { content } = useSiteContent();
    const getContent = (key: string, fallback = '') => content[key] ?? fallback;

    return (
        <div className={styles.footerContainer}>
            <div className={styles.logoContainer}>
                <a href={getContent('route_home')}>
                    <img
                        id={styles.logoImg}
                        src={images['brown_logo_transparent']?.src}
                        alt={images['brown_logo_transparent']?.alt}
                    ></img>
                </a>
                <p className={styles.para}>{getContent('site_copyright')}</p>
            </div>

            <div className={styles.quickLinksContainer}>
                <p className={styles.heading}>{getContent('footer_quick_links')}</p>
                <p>
                    <a href={getContent('route_about')} className={styles.para}>
                        {getContent('footer_about')}
                    </a>
                </p>
                <p>
                    <a href={getContent('route_contact')} className={styles.para}>
                        {getContent('footer_contact')}
                    </a>
                </p>
                <p>
                    <a href={getContent('route_terms')} className={styles.para}>
                        {getContent('footer_terms')}
                    </a>
                </p>
                <p>
                    <a href={getContent('route_noPage')} className={styles.para}>
                        {getContent('footer_security_privacy')}
                    </a>
                </p>
                <p>
                    <a href={getContent('route_noPage')} className={styles.para}>
                        {getContent('footer_cookie_policy')}
                    </a>
                </p>
            </div>
            <div className={styles.socialContainer}>
                <p className={styles.heading}>{getContent('footer_social')}</p>
                <p>
                    <a
                        href={getContent('site_instagram_link')}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.socialLink}
                    >
                        <img
                            src={images['instagram_icon_brown']?.src}
                            className={styles.socialsLogo}
                            alt={images['instagram_icon_brown']?.alt}
                        />
                        {getContent('footer_instagram')}
                    </a>
                </p>
                <p>
                    <a
                        href={getContent('site_facebook_link')}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.socialLink}
                    >
                        <img
                            src={images['facebook_icon_brown']?.src}
                            className={styles.socialsLogo}
                            alt={images['facebook_icon_brown']?.alt}
                        />
                        {getContent('footer_facebook')}
                    </a>
                </p>
                <p>
                    <a
                        href={getContent('site_etsy_link')}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.socialLink}
                    >
                        <img
                            src={images['etsy_icon_brown']?.src}
                            className={styles.socialsLogo}
                            alt={images['etsy_icon_brown']?.alt}
                        />
                        {getContent('footer_etsy')}
                    </a>
                </p>
            </div>
        </div>
    );
};

export default Footer;
