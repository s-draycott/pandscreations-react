import Btn from '../button/Button';

import styles from './ContactForm.module.scss';

const ContactForm = () => {
    return (
        <>
            <div className={styles.formContainer}>
                <p className={styles.heading}>CONTACT</p>
                <p className={styles.para}>
                    Hello! Please feel free to contact us with any questions, requests or feedback -
                    we love to hear from you! If you'd prefer to chat in person then feel free to
                    leave a contact number in the message and we'll give you a call. <br />
                    <br />
                    Alternatively you can message us through our social pages - links can be found
                    at the bottom!
                </p>
                <form className={styles.form} action="https://getform.io/f/ajjmwqva" method="POST">
                    <input
                        className={styles.formInput}
                        type="text"
                        name="name"
                        placeholder="Your Name"
                        required
                    />
                    <input
                        className={styles.formInput}
                        type="email"
                        name="email"
                        placeholder="Your Email"
                        required
                    />
                    <textarea
                        className={styles.formInput}
                        name="message"
                        placeholder="Your Message"
                        required
                    ></textarea>
                    {/* Honeypot for spam protection - hidden input field for bots */}
                    <input type="hidden" name="_gotcha" style={{ display: 'none' }} />
                    <Btn type="submit" variant="primary">
                        SEND
                    </Btn>
                </form>
            </div>
        </>
    );
};

export default ContactForm;
