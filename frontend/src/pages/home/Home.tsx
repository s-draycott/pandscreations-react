import AboutBanner from '../../components/about-banner/AboutBanner';
import ContactForm from '../../components/contact-form/ContactForm';
import Footer from '../../components/footer/Footer';
import Header from '../../components/header/Header';
import HeroBanner from '../../components/hero-banner/HeroBanner';
import ProductScroll from '../../components/product-scroll/ProductScroll';
import { useSiteImages } from '../../context/SiteImagesContext';

import styles from './Home.module.scss';

export default function Home() {
    const { images, loading } = useSiteImages();
    const aboutImgUrl = images['graduation'];

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
                    mediaSrc={aboutImgUrl}
                    mediaType="image"
                    heading="About P&S Creations"
                    text="  At P&S Creations, father-daughter duo Pete and Sally
                        join forces to craft high-quality, handmade wooden
                        products with a personal touch. Our mission is to create
                        bespoke pieces that tell a story and reflect the beauty
                        of nature. Wherever possible, we source wood directly
                        from our family farm, milling timber from trees that
                        have naturally fallen onsite. This commitment to
                        sustainability ensures that every creation not only has
                        its own unique charm but also honours the natural world
                        from which it was made and inspired."
                    thankYouMessage="Thanks from Sally and Pete"
                    moreBtn="FIND OUT MORE"
                    moreBtnLink="/about"
                />
                <ContactForm />
            </div>
            <Footer />
        </div>
    );
}
