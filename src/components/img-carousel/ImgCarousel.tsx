import React, { useState } from "react";
import styles from "./Img-Carousel.module.css";
import {
    IoIosArrowDropleftCircle,
    IoIosArrowDroprightCircle,
} from "react-icons/io";

interface Slide {
    src: string;
    alt: string;
}

interface ImgCarouselProps {
    data: Slide[];
}

const ImgCarousel: React.FC<ImgCarouselProps> = ({ data }) => {
    const [slide, setSlide] = useState(0);

    const nextSlide = () => {
        setSlide((prevSlide) => (prevSlide + 1) % data.length); // Loop back to first slide
    };

    const prevSlide = () => {
        setSlide((prevSlide) => (prevSlide - 1 + data.length) % data.length); // Loop back to last slide
    };

    return (
        <div className={styles.carousel}>
            <div
                className={styles.carouselBlur}
                style={{
                    backgroundImage: `url(${data[slide].src})`, // Apply same background image to the blur div
                }}
            />
            <IoIosArrowDropleftCircle
                className={`${styles.arrow} ${styles.arrowLeft}`}
                onClick={prevSlide}
            />
            {data.map((item, i) => {
                return (
                    <img
                        src={item.src}
                        alt={item.alt}
                        key={i}
                        className={`${styles.slide} ${
                            i === slide ? styles.show : styles.slideHidden
                        } `}
                    />
                );
            })}
            <IoIosArrowDroprightCircle
                className={`${styles.arrow} ${styles.arrowRight}`}
                onClick={nextSlide}
            />
            <span className={styles.indicators}>
                {data.map((_, i) => {
                    return (
                        <button
                            key={i}
                            className={styles.indicatorBtn}
                        ></button>
                    );
                })}
            </span>
        </div>
    );
};

export default ImgCarousel;
