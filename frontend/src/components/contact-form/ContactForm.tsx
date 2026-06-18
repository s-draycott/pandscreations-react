import Btn from '../button/Button';

import styles from './ContactForm.module.scss';
import { useSiteContent } from '../../context/SiteContentContext';

const ContactForm = () => {
    const { content } = useSiteContent();
    const getContent = (key: string, fallback = '') => content[key] ?? fallback;

    return (
        <>
            <div className={styles.formContainer}>
                <p className={styles.heading}>{getContent('pages_contact_heading')}</p>
                <p className={styles.para}>
                    {getContent('pages_contact_para1')}
                    <br />
                    <br />
                    {getContent('pages_contact_para2')}
                </p>
                <form className={styles.form} action="https://getform.io/f/ajjmwqva" method="POST">
                    <input
                        className={styles.formInput}
                        type="text"
                        name="name"
                        placeholder={getContent('pages_contact_form_input_name')}
                        required
                    />
                    <input
                        className={styles.formInput}
                        type="email"
                        name="email"
                        placeholder={getContent('pages_contact_form_input_email')}
                        required
                    />
                    <textarea
                        className={styles.formInput}
                        name="message"
                        placeholder={getContent('pages_contact_form_input_message')}
                        required
                    ></textarea>
                    {/* Honeypot for spam protection - hidden input field for bots */}
                    <input type="hidden" name="_gotcha" style={{ display: 'none' }} />
                    <Btn type="submit" variant="primary">
                        {getContent('pages_contact_form_btn')}
                    </Btn>
                </form>
            </div>
        </>
    );
};

export default ContactForm;
