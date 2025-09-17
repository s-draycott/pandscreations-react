import { useNavigate } from 'react-router-dom';

import styles from './AboutBanner.module.scss';
type AboutBannerProps = {
    mediaSrc: string;
    mediaType?: 'image' | 'video';
    heading: string;
    text: string;
    thankYouMessage?: string;
    moreBtn?: string;
    moreBtnLink?: string;
    poster?: string;
};

const AboutBanner = ({
    mediaSrc,
    mediaType,
    heading,
    text,
    thankYouMessage,
    moreBtn,
    moreBtnLink,
    poster,
}: AboutBannerProps) => {
    const navigate = useNavigate();

    const handleMoreClick = () => {
        if (moreBtnLink) {
            navigate(moreBtnLink);
        } else {
            navigate('/about'); // default fallback route
        }
    };

    return (
        <div className={styles.aboutContainer}>
            <div className={styles.imgContainer}>
                {mediaType === 'video' ? (
                    <div className={styles.videoContainer}>
                        <video
                            className={styles.bannerVideo}
                            src={mediaSrc}
                            autoPlay
                            loop
                            playsInline
                            poster={poster}
                            muted
                        />
                    </div>
                ) : (
                    <img className={styles.bannerImg} src={mediaSrc} alt={heading} />
                )}
            </div>
            <div className={styles.textContainer}>
                <p className={styles.aboutHeading}>{heading}</p>
                <p className={styles.aboutPara}>{text}</p>
                <p className={styles.thankYou}>{thankYouMessage}</p>

                {moreBtn && (
                    <button onClick={handleMoreClick} className={styles.moreBtn}>
                        {moreBtn}
                    </button>
                )}
            </div>
        </div>
    );
};

export default AboutBanner;
