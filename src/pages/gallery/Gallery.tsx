import Footer from '../../components/footer/Footer';
import Header from '../../components/header/Header';
import styles from '../gallery/Gallery.module.scss';

export default function Gallery() {
    return (
        <div className="pageWrapper">
            <Header />
            <main className={`mainContent ${styles.mainContent}`}>
                <h2 className={styles.heading}>GALLERY</h2>
            </main>
            <Footer />
        </div>
    );
}
