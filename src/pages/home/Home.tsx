import Header from "../../components/header/Header";
import HeroBanner from "../../components/hero-banner/HeroBanner";
import styles from "./Home.module.css";

export default function Home() {
    return (
        <>
            <Header />
            <HeroBanner />
            <section>
                <p className={styles.para}>PRODUCTS AVAILABLE</p>
            </section>
            <section>
                <p className={styles.para}>PRODUCTS AVAILABLE</p>
            </section>
            <section>
                <p className={styles.para}>PRODUCTS AVAILABLE</p>
            </section>
            <section>
                <p className={styles.para}>PRODUCTS AVAILABLE</p>
            </section>
            <section>
                <p className={styles.para}>PRODUCTS AVAILABLE</p>
            </section>
        </>
    );
}
