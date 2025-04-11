import styles from "./AboutBanner.module.css";
import aboutImg from "../../assets/graduation.jpg";

const AboutBanner = () => {
    return (
        <>
            <div className={styles.aboutContainer}>
                <div className={styles.imgContainer}>
                    <img className={styles.aboutImg} src={aboutImg}></img>
                </div>
                <div className={styles.textContainer}>
                    <p className={styles.aboutHeading}>About P&S Creations</p>
                    <p className={styles.aboutPara}>
                        At P&S Creations, father-daughter duo Pete and Sally
                        join forces to craft high-quality, handmade wooden
                        products with a personal touch. Our mission is to create
                        bespoke pieces that tell a story and reflect the beauty
                        of nature. Wherever possible, we source wood directly
                        from our family farm, milling timber from trees that
                        have naturally fallen onsite. This commitment to
                        sustainability ensures that every creation not only has
                        its own unique charm but also honours the natural world
                        from which it was made and inspired.
                    </p>
                </div>
            </div>
        </>
    );
};

export default AboutBanner;
