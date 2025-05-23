import ContactForm from '../../components/contact-form/ContactForm';
import Footer from '../../components/footer/Footer';
import Header from '../../components/header/Header';

export default function Contact() {
    return (
        <div className="pageWrapper">
            <Header />
            <main className="mainContent">
                <ContactForm />
            </main>
            <Footer />
        </div>
    );
}
