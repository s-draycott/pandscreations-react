import Footer from '../../components/footer/Footer';
import GalleryImages from '../../components/gallery/GalleryComponent';
import Header from '../../components/header/Header';
import styles from '../gallery/Gallery.module.css';

type GalleryPageProps = {
    table: string;
    title?: string;
};

const Gallery = ({ table, title }: GalleryPageProps) => {
    return (
        <div className="pageWrapper">
            <Header />
            <main className={`mainContent ${styles.mainContent}`}>
                <h2 className={styles.heading}>{title || 'Gallery'}</h2>
            </main>
            <GalleryImages table={table} orderColumn="order" />
            <Footer />
        </div>
    );
};

export default Gallery;
