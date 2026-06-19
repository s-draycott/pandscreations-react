import AboutBanner from '../../components/about-banner/AboutBanner';
import Footer from '../../components/footer/Footer';
import Header from '../../components/header/Header';
import ImgCarousel from '../../components/img-carousel/ImgCarousel';
import { useSiteImages } from '../../context/SiteImagesContext';
import { useSiteContent } from '../../context/SiteContentContext';

import styles from './About.module.scss';

const fallback = '/assets/sawmill.jpg';

export default function About() {
    const { images, galleries } = useSiteImages();
    const { content } = useSiteContent();
    const getContent = (key: string, fallback = '') => content[key] ?? fallback;

    return (
        <div className="pageWrapper">
            <Header />
            <div className="mainContent">
                <AboutBanner
                    mediaSrc={images['graduation']?.src}
                    mediaType="image"
                    heading={getContent('about_banner_heading')}
                    text={getContent('about_banner_para')}
                    thankYouMessage={getContent('about_thank_you')}
                />
                <div className={`${styles.aboutContainer} ${styles.one}`}>
                    <div className={styles.carouselContainerOne}>
                        <ImgCarousel data={galleries['pete_sally_slides']} autoSlide={true} />
                    </div>
                    <p className={styles.aboutText}>{getContent('about_text_para1')}</p>
                </div>

                <div className={styles.quoteBanner}>
                    <img
                        className={styles.planerImg}
                        src={images['planer_together']?.src}
                        alt="Planer"
                    />
                    <div className={styles.aboutQuote}>
                        <p className={styles.quoteText}>
                            <span className={`${styles.openQuote} ${styles.quoteMarks}`}>
                                &ldquo;
                            </span>
                            {getContent('about_image_quote')}
                            <span className={`${styles.closeQuote} ${styles.quoteMarks}`}>
                                &rdquo;
                            </span>
                        </p>
                    </div>
                </div>
                <div className={`${styles.aboutContainer} ${styles.two}`}>
                    <div className={styles.carouselContainerTwo}>
                        <ImgCarousel data={galleries['pete_slides']} autoSlide={true} />
                    </div>
                    <p className={styles.aboutText}>{getContent('about_text_para2')}</p>
                    <p className={styles.aboutText}>{getContent('about_text_para3')}</p>
                </div>
                <AboutBanner
                    mediaSrc={images['sawmill_construction_video']?.src}
                    mediaType="video"
                    heading=""
                    text={getContent('about_video_banner_para')}
                    poster={fallback}
                />
                <div className={`${styles.aboutContainer} ${styles.two}`}>
                    <div className={styles.carouselContainerTwo}>
                        <ImgCarousel data={galleries['sally_slides']} autoSlide={true} />
                    </div>
                    <p className={styles.aboutText}>{getContent('about_text_para4')}</p>
                </div>
            </div>
            <Footer />
        </div>
    );
}
