import AboutBanner from "../../components/about-banner/AboutBanner";
import Header from "../../components/header/Header";
import ImgCarousel from "../../components/img-carousel/ImgCarousel";
import { slides } from "../../data/AboutCarouselData.json";
import styles from "./About.module.css";

export default function About() {
    return (
        <>
            <Header />
            <AboutBanner />
            <div className={styles.aboutContainer}>
                <div className={styles.carouselContainer}>
                    <ImgCarousel data={slides} />
                </div>
                <div className={styles.textContainer}>
                    <p className={styles.aboutText}>
                        At P&S Creations, father-daughter duo Pete and Sally
                        join forces to craft high-quality, handmade wooden
                        products with a personal touch. Our mission is to create
                        bespoke pieces that tell a story and reflect the beauty
                        of nature. Wherever possible, we source wood directly
                        from our family farm, milling timber from trees that
                        have naturally fallen onsite. This commitment to
                        sustainability ensures that every creation not only has
                        its own unique charm but also honours the natural world
                        from which it was made and inspired by. At P&S
                        Creations, father-daughter duo Pete and Sally join
                        forces to craft high-quality, handmade wooden products
                        with a personal touch. Our mission is to create bespoke
                        pieces that tell a story and reflect the beauty of
                        nature. Wherever possible, we source wood directly from
                        our family farm, milling timber from trees that have
                        naturally fallen onsite. This commitment to
                        sustainability ensures that every creation not only has
                        its own unique charm but also honours the natural world
                        from which it was made and inspired by. At P&S
                        Creations, father-daughter duo Pete and Sally join
                        forces to craft high-quality, handmade wooden products
                        with a personal touch. Our mission is to create bespoke
                        pieces that tell a story and reflect the beauty of
                        nature. Wherever possible, we source wood directly from
                        our family farm, milling timber from trees that have
                        naturally fallen onsite. This commitment to
                        sustainability ensures that every creation not only has
                        its own unique charm but also honours the natural world
                        from which it was made and inspired by. At P&S
                        Creations, father-daughter duo Pete and Sally join
                        forces to craft high-quality, handmade wooden products
                        with a personal touch. Our mission is to create bespoke
                        pieces that tell a story and reflect the beauty of
                        nature. Wherever possible, we source wood directly from
                        our family farm, milling timber from trees that have
                        naturally fallen onsite. This commitment to
                        sustainability ensures that every creation not only has
                        its own unique charm but also honours the natural world
                        from which it was made and inspired by. At P&S
                        Creations, father-daughter duo Pete and Sally join
                        forces to craft high-quality, handmade wooden products
                        with a personal touch. Our mission is to create bespoke
                        pieces that tell a story and reflect the beauty of
                        nature. Wherever possible, we source wood directly from
                        our family farm, milling timber from trees that have
                        naturally fallen onsite. This commitment to
                        sustainability ensures that every creation not only has
                        its own unique charm but also honours the natural world
                        from which it was made and inspired by. ut also honours
                        the natural world from which it was made and inspired
                        by. At P&S Creations, father-daughter duo Pete and Sally
                        join forces to craft high-quality, handmade wooden
                        products with a personal touch. Our mission is to create
                        bespoke pieces that tell a story and reflect the beauty
                        of nature. Wherever possible, we source wood directly
                        from our family farm, milling timber from trees that
                        have naturally fallen onsite. This commitment to
                        sustainability ensures that every creation not only has
                        its own unique charm but also honours the natural world
                        from which it was made and inspired by. ut also honours
                        the natural world from which it was made and inspired
                        by. At P&S Creations, father-daughter duo Pete and Sally
                        join forces to craft high-quality, handmade wooden
                        products with a personal touch. Our mission is to create
                        bespoke pieces that tell a story and reflect the beauty
                        of nature. Wherever possible, we source wood directly
                        from our family farm, milling timber from trees that
                        have naturally fallen onsite. This commitment to
                        sustainability ensures that every creation not only has
                        its own unique charm but also honours the natural world
                        from which it was made and inspired by. ut also honours
                        the natural world from which it was made and inspired
                        by. At P&S Creations, father-daughter duo Pete and Sally
                        join forces to craft high-quality, handmade wooden
                        products with a personal touch. Our mission is to create
                        bespoke pieces that tell a story and reflect the beauty
                        of nature. Wherever possible, we source wood directly
                        from our family farm, milling timber from trees that
                        have naturally fallen onsite. This commitment to
                        sustainability ensures that every creation not only has
                        its own unique charm but also honours the natural world
                        from which it was made and inspired by.
                    </p>
                </div>
            </div>
        </>
    );
}
