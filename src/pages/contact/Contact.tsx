import ContactForm from '../../components/contact-form/ContactForm';
import Footer from '../../components/footer/Footer';
import Header from '../../components/header/Header';

import styles from './Contact.module.css';

export default function Contact() {
    return (
        <div className={styles.pageWrapper}>
            <Header />
            <main className={styles.mainContent}>
                <ContactForm />
            </main>
            <Footer />
        </div>
    );
}
