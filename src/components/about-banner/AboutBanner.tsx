import styles from "./AboutBanner.module.css";
type AboutBannerProps = {
    mediaSrc: string;
    mediaType?: "image" | "video";
    heading: string;
    text: string;
    poster?: string;
};

const AboutBanner = ({
    mediaSrc,
    mediaType,
    heading,
    text,
    poster,
}: AboutBannerProps) => {
    return (
        <div className={styles.aboutContainer}>
            <div className={styles.imgContainer}>
                {mediaType === "video" ? (
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
                    <img
                        className={styles.bannerImg}
                        src={mediaSrc}
                        alt={heading}
                    />
                )}
            </div>
            <div className={styles.textContainer}>
                <p className={styles.aboutHeading}>{heading}</p>
                <p className={styles.aboutPara}>{text}</p>
            </div>
        </div>
    );
};

export default AboutBanner;
