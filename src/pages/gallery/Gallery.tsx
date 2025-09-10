import Footer from '../../components/footer/Footer';
import GalleryImages from '../../components/gallery/GalleryComponent';
import Header from '../../components/header/Header';
import styles from '../gallery/Gallery.module.css';

export default function Gallery() {
    return (
        <div className="pageWrapper">
            <Header />
            <main className={`mainContent ${styles.mainContent}`}>
                <h2 className={styles.heading}>GALLERY</h2>
            </main>
            <GalleryImages table="gallery_images" orderColumn="order" />
            <Footer />
        </div>
    );
}
