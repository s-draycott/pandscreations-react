import AboutBanner from '../../components/about-banner/AboutBanner';
import ContactForm from '../../components/contact-form/ContactForm';
import Footer from '../../components/footer/Footer';
import Header from '../../components/header/Header';
import HeroBanner from '../../components/hero-banner/HeroBanner';
import ProductScroll from '../../components/product-scroll/ProductScroll';
import { useSiteImages } from '../../context/SiteImagesContext';
import { useSiteContent } from '../../context/SiteContentContext';

import styles from './Home.module.scss';

export default function Home() {
    const { images, loading } = useSiteImages();
    const { content } = useSiteContent();
    const getContent = (key: string, fallback = '') => content[key] ?? fallback;

    if (loading) {
        return <div>Loading...</div>;
    }
    return (
        <div className="pageWrapper">
            <Header />
            <div className="mainContent">
                <HeroBanner />
                <div className={styles.productScroll}>
                    <ProductScroll />
                </div>
                <AboutBanner
                    mediaSrc={images['graduation']?.src}
                    mediaType="image"
                    heading="About P&S Creations"
                    text={getContent('about_banner_para')}
                    thankYouMessage={getContent('about_thank_you')}
                    moreBtn={getContent('home_aboutBanner_btn')}
                    moreBtnLink={getContent('route_about')}
                />
                <ContactForm />
            </div>
            <Footer />
        </div>
    );
}
