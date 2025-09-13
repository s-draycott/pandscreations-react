import AboutBanner from '../../components/about-banner/AboutBanner';
import Footer from '../../components/footer/Footer';
import Header from '../../components/header/Header';
import ImgCarousel from '../../components/img-carousel/ImgCarousel';
import { peteSallySlides, peteSolo, sallySolo } from '../../data/ImageCarouselData.json';

import styles from './About.module.css';

const aboutBannerImg = '/assets/graduation.jpg';
const bannerImg = '/assets/planer-together.jpg';
const sawmillVideo = '/assets/sawmill-construction-video.mp4';
const fallback = '/assets/sawmill.jpg';

export default function About() {
    return (
        <div className="pageWrapper">
            <Header />
            <div className="mainContent">
                <AboutBanner
                    mediaSrc={aboutBannerImg}
                    mediaType="image"
                    heading="About P&S Creations"
                    text="At P&S Creations, father-daughter duo Pete and Sally
                        join forces to craft high-quality, handmade wooden
                        products with a personal touch. Our mission is to create
                        bespoke pieces that tell a story and reflect the beauty
                        of nature. Wherever possible, we source wood directly
                        from our family farm, milling timber from trees that
                        have naturally fallen onsite. This commitment to
                        sustainability ensures that every creation not only has
                        its own unique charm but also honours the natural world
                        from which it was made and inspired."
                    thankYouMessage="Thanks from Sally and Pete"
                />
                <div className={`${styles.aboutContainer} ${styles.one}`}>
                    <div className={styles.carouselContainerOne}>
                        <ImgCarousel data={peteSallySlides} autoSlide={true} />
                    </div>
                    <p className={styles.aboutText}>
                        Thanks for taking the time to get to know us! I’m Sally, one half of P&S
                        Creations. While I now manage the day-to-day and much of the making, it is
                        my dad, Pete, who has always been the guiding force behind our
                        craftsmanship. I've spent my whole life looking up to him hoping to carry
                        forward a fraction of his creativity, ingenuity and skill.
                    </p>
                </div>

                <div className={styles.quoteBanner}>
                    <img className={styles.planerImg} src={bannerImg} alt="Planer" />
                    <div className={styles.aboutQuote}>
                        <p className={styles.quoteText}>
                            <span className={`${styles.openQuote} ${styles.quoteMarks}`}>
                                &ldquo;
                            </span>
                            My dad always instilled in me a ‘fix it don’t bin it’ and ‘make it don’t
                            buy it’ attitude!
                            <span className={`${styles.closeQuote} ${styles.quoteMarks}`}>
                                &rdquo;
                            </span>
                        </p>
                    </div>
                </div>
                <div className={`${styles.aboutContainer} ${styles.two}`}>
                    <div className={styles.carouselContainerTwo}>
                        <ImgCarousel data={peteSolo} autoSlide={true} />
                    </div>
                    <p className={styles.aboutText}>
                        Pete is a third generation farmer and has spent his life running our family
                        farm in the heart of Leicestershire. Over the years, Dad has not only
                        maintained but built upon the legacy left by his father and
                        grandfather—raising high-quality cattle and growing crops with the same
                        skill and dedication that’s been passed down through generations.
                    </p>
                    <p className={styles.aboutText}>
                        For Dad, as is the case with so many farmers, farming goes beyond a job,
                        it's a way of life. With a natural flair for engineering, he’s our go-to
                        person when something breaks down or needs building. Whether it’s welding up
                        machinery, sorting the electrics, plumbing, fabricating sheds, fixing cars
                        or inventing new tools from scratch, his practical skills seem to know no
                        limit . His resourcefulness and quiet ingenuity continue to shape and
                        inspire everything we create at P&S Creations.
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
                        <ImgCarousel data={sallySolo} autoSlide={true} />
                    </div>
                    <p className={styles.aboutText}>
                        As for me, I’m a scientist by trade and have worked in research for 10 years
                        completing a PhD in molecular biology. After spending years in research labs
                        in Nottingham, Adelaide, and Oxford, I’ve decided to expand my skills
                        further and have started retraining in software development. Whilst our jobs
                        seem quite different, there is so much Dad and I have in common. We share a
                        passion for learning new skills, solving practical problems and building
                        things from scratch. That shared curiosity and drive are what fuel P&S
                        Creations, and it’s what makes the process as rewarding for us as the
                        finished pieces are for those who take them home.
                    </p>
                </div>
            </div>
            <Footer />
        </div>
    );
}
