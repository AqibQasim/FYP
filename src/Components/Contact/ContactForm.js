import React from 'react';
import styles from './ContactForm.module.css'; // Update the import to treat the CSS file as a module
import border from "../../assets/border.png";
import voice from "../../assets/voice.png";

const ContactForm = () => {
    return (
        <React.Fragment>
        <div className={styles.contactFormContainer}>
            <div className={styles.introSection}>
                <h1>Automate your data extraction with us</h1>
                <h2>Let's talk <span> <img src={voice}/> </span></h2>
                <p>lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum.</p>
                <a href="#form">Fill up the form</a> to speak with an automation expert.
            </div>
            <div className={styles.formSection}>
                <form id="form">
                    <label>
                        First name* <input type="text" required />
                    </label>
                    <label>
                        Last name* <input type="text" required />
                    </label>
                    <label>
                        Work email* <input type="email" required />
                    </label>
                    <label>
                        Phone number* <input type="tel" required />
                    </label>
                    <label>
                        Document Type*
                        <select required>
                            <option value="">Please Select</option>
                            <option value="pdf">PDF</option>
                            <option value="docx">DOCX</option>
                        </select>
                    </label>
                    <button type="submit">Send US</button>
                </form>
            </div>
            <img src={border} style={{width : "100%"}}/>
        </div>
        </React.Fragment>
    );
}
export default ContactForm;