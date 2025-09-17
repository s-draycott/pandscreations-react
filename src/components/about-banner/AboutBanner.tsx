import styles from './AboutBanner.module.scss';
type AboutBannerProps = {
    mediaSrc: string;
    mediaType?: 'image' | 'video';
    heading: string;
    text: string;
    thankYouMessage?: string;
    poster?: string;
};

const AboutBanner = ({
    mediaSrc,
    mediaType,
    heading,
    text,
    thankYouMessage,
    poster,
}: AboutBannerProps) => {
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
            </div>
        </div>
    );
};

export default AboutBanner;
