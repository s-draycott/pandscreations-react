import AboutBanner from "../../components/about-banner/AboutBanner";
import Header from "../../components/header/Header";
import HeroBanner from "../../components/hero-banner/HeroBanner";
import styles from "./Home.module.css";

export default function Home() {
    return (
        <>
            <Header />
            <HeroBanner />
            <div className={styles.productScroll}>Available Products</div>
            <AboutBanner />
        </>
    );
}
