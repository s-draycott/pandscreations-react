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

const ImgCarousel: React.FC<ImgCarouselProps> = ({
    data = [],
    autoSlide = true,
    customClass = '',
}) => {
    const [slide, setSlide] = useState(0);

    useEffect(() => {
        setSlide(0);
    }, [data.length]);

    const nextSlide = useCallback(() => {
        if (!data.length) return;
        setSlide((prev) => (prev + 1) % data.length);
    }, [data.length]);

    const prevSlide = () => {
        if (!data.length) return;
        setSlide((prev) => (prev - 1 + data.length) % data.length);
    };

    useEffect(() => {
        if (!autoSlide || !data.length) return;

        const id = setInterval(nextSlide, 10000);
        return () => clearInterval(id);
    }, [autoSlide, data.length, nextSlide]);

    if (!data.length) return null;

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
