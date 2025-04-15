import aboutBannerImg from '../../assets/graduation.jpg';
import bannerImg from '../../assets/planer-together.jpg';
import sawmillVideo from '../../assets/sawmill-construction-video.mp4';
import fallback from '../../assets/sawmill.jpg';
import AboutBanner from '../../components/about-banner/AboutBanner';
import Footer from '../../components/footer/Footer';
import Header from '../../components/header/Header';
import ImgCarousel from '../../components/img-carousel/ImgCarousel';
import { peteSallySlides, peteSolo, sallySolo } from '../../data/ImageCarouselData.json';

import styles from './About.module.css';

export default function About() {
    return (
        <>
            <Header />
            <AboutBanner
                mediaSrc={aboutBannerImg}
                mediaType="image"
                heading="About P&S Creations"
                text="  At P&S Creations, father-daughter duo Pete and Sally
                        join forces to craft high-quality, handmade wooden
                        products with a personal touch. Our mission is to create
                        bespoke pieces that tell a story and reflect the beauty
                        of nature. Wherever possible, we source wood directly
                        from our family farm, milling timber from trees that
                        have naturally fallen onsite. This commitment to
                        sustainability ensures that every creation not only has
                        its own unique charm but also honours the natural world
                        from which it was made and inspired."
            />
            <div className={`${styles.aboutContainer} ${styles.one}`}>
                <div className={styles.carouselContainerOne}>
                    <ImgCarousel data={peteSallySlides} />
                </div>
                <p className={styles.aboutText}>
                    Thanks for taking the time to get to know us! I’m Sally and one half of P&S
                    Creations. Whilst I now run the day-to-day and handle much of the making, it is
                    my dad, Pete, who has always been the guiding force behind our craftmanship. I
                    have spent my whole life looking up to him hoping to carry forward a fraction of
                    his creativity, ingenuity and skill.
                </p>
            </div>

            <div className={styles.quoteBanner}>
                <img className={styles.planerImg} src={bannerImg} alt="Planer" />
                <div className={styles.aboutQuote}>
                    <p className={styles.quoteText}>
                        <span className={`${styles.openQuote} ${styles.quoteMarks}`}>&ldquo;</span>
                        My dad always instilled in me a ‘fix it don’t bin it’ and ‘make it don’t buy
                        it’ attitude!
                        <span className={`${styles.closeQuote} ${styles.quoteMarks}`}>&rdquo;</span>
                    </p>
                </div>
            </div>
            <div className={`${styles.aboutContainer} ${styles.two}`}>
                <div className={styles.carouselContainerTwo}>
                    <ImgCarousel data={peteSolo} />
                </div>
                <p className={styles.aboutText}>
                    Pete is a third generation farmer and has spent his life running our family farm
                    in the heart Leicestershire. Over the years, Pete has not only maintained but
                    built upon the legacy left by his father and grandfather—raising high-quality
                    cattle and growing crops with the same skill and dedication that’s been passed
                    down through generations.
                    <br /> <br />
                    Farming is more than just a job for Pete, it’s a way of life. With a natural
                    flair for engineering, he’s our go-to person when something breaks down or needs
                    building. Whether it’s welding up machinery, sorting the electrics, plumbing,
                    fabricating sheds, fixing cars or inventing new tools from scratch, his
                    practical skills seem to know no limit . His resourcefulness and quiet ingenuity
                    continue to shape and inspire everything we create at P&S Creations.
                </p>
            </div>
            <AboutBanner
                mediaSrc={sawmillVideo}
                mediaType="video"
                heading=""
                text="A perfect example of his craftmanship is our bandsaw mill
                    that he made completely from scratch, repurposing the motor
                    from an old grain dryer, gear box from a silage feeder and
                    the steel from old farm buildings and the remains of an
                    artic lorry! His ability to reimagine and repurpose
                    materials that others might discard is what truly sets him
                    apart, and it’s a mindset that we embrace in every piece we
                    create."
                poster={fallback}
            />
            <div className={`${styles.aboutContainer} ${styles.two}`}>
                <div className={styles.carouselContainerTwo}>
                    <ImgCarousel data={sallySolo} />
                </div>
                <p className={styles.aboutText}>
                    As for me, I’m a scientist by trade and have worked in research for 10 years
                    completing a PhD in molecular biology. My scientific background has shaped my
                    approach to problem-solving and attention to detail, but I have always had a
                    strong creative side. After spending years in research labs in Nottingham,
                    Adelaide, and Oxford, I’ve decided to expand my skills further and have started
                    retraining as a software developer. This new venture allows me to combine my
                    analytical mindset with my creative passions, adding a new dimension to the work
                    we do. Together, my scientific, artistic and technical skills alongside dads
                    craftmanship, ingenuity and engineering genius, allow us to create unique,
                    well-thought-out pieces that reflect both our heritage and innovative spirit.
                </p>
            </div>
            <Footer />
        </>
    );
}
