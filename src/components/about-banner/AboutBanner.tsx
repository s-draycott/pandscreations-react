import styles from "./AboutBanner.module.css";
import ImgCarousel from "../img-carousel/ImgCarousel";
import { slides } from "../../data/AboutCarouselData.json";

const AboutBanner = () => {
    return (
        <>
            <div className={styles.aboutContainer}>
                <ImgCarousel data={slides} />
                <p className={styles.aboutHeading}>About P&S Creations</p>
                <p className={styles.aboutPara}>
                    My goal is to offer you an escape to the tranquil Yorkshire
                    Dales through my artwork. With dedication to my craft and a
                    deep commitment to authenticity, I strive to create timeless
                    pieces that not only adorn your walls but also bring the
                    serene beauty of nature into your everyday life.
                </p>
            </div>
        </>
    );
};

export default AboutBanner;
