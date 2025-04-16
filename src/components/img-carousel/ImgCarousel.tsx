import React, { useEffect, useState } from 'react';
import { IoIosArrowDropleftCircle, IoIosArrowDroprightCircle } from 'react-icons/io';

import styles from './Img-Carousel.module.css';

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

    useEffect(() => {
        const intervalId = setInterval(nextSlide, 10000);
        return () => {
            clearInterval(intervalId);
        };
    }, [data.length]);

    return (
        <div className={styles.carousel}>
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
                            onClick={() => setSlide(i)}
                            className={`${styles.indicatorBtn} ${
                                i === slide ? '' : styles.indicatorBtnInactive
                            }`}
                        ></button>
                    );
                })}
            </span>
        </div>
    );
};

export default ImgCarousel;
