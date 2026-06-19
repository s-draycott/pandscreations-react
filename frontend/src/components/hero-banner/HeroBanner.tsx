import { useSiteImages } from '../../context/SiteImagesContext';
import { useSiteContent } from '../../context/SiteContentContext';

import Btn from '../button/Button';

import styles from './HeroBanner.module.scss';

const HeroBanner = () => {
    const { images, loading } = useSiteImages();
    const { content } = useSiteContent();
    const getContent = (key: string, fallback = '') => content[key] ?? fallback;

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div
            className={styles.heroContainer}
            style={{
                backgroundImage: images['hero_banner']?.src
                    ? `url(${images['hero_banner']?.src})`
                    : 'none',
                backgroundSize: 'cover',
                backgroundPosition: 'top-left',
            }}
        >
            <div className={styles.heroTextContainer}>
                <p className={styles.heroPara}>
                    {getContent('hero_para_line1')}
                    <br />
                    {getContent('hero_para_line2')}
                </p>
                <p className={styles.heroParaTwo}>{getContent('hero_para_line3')}</p>
                <Btn to={getContent('route_products')} variant="primary" className={styles.heroBtn}>
                    {getContent('hero_btn')}
                </Btn>
            </div>
        </div>
    );
};

export default HeroBanner;
