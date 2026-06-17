import React, { useEffect, useState, useCallback } from 'react';
import { IoIosArrowDropleftCircle, IoIosArrowDroprightCircle } from 'react-icons/io';

import styles from './Img-Carousel.module.css';

interface Slide {
    src: string;
    alt: string;
}

interface ImgCarouselProps {
    data: Slide[];
    autoSlide?: boolean;
    customClass?: string;
}

const ImgCarousel: React.FC<ImgCarouselProps> = ({ data, autoSlide = true, customClass = '' }) => {
    const [slide, setSlide] = useState(0);

    const nextSlide = useCallback(() => {
        setSlide((prevSlide) => (prevSlide + 1) % data.length);
    }, [data.length]);

    const prevSlide = () => {
        setSlide((prevSlide) => (prevSlide - 1 + data.length) % data.length);
    };

    useEffect(() => {
        if (autoSlide) {
            const intervalId = setInterval(nextSlide, 10000);
            return () => clearInterval(intervalId);
        }
    }, [autoSlide, data.length, nextSlide]);

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
                        }  ${customClass} `}
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
