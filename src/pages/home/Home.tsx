import AboutBanner from "../../components/about-banner/AboutBanner";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import HeroBanner from "../../components/hero-banner/HeroBanner";
import styles from "./Home.module.css";
import aboutBannerImg from "../../assets/graduation.jpg";
export default function Home() {
    return (
        <>
            <Header />
            <HeroBanner />
            <div className={styles.productScroll}>Available Products</div>
            <AboutBanner
                mediaSrc={aboutBannerImg}
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
            />
            <div className={styles.holdingContainer}></div>

            <Footer />
        </>
    );
}
