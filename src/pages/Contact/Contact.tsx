import React from 'react'
import styles from './Contact.module.css'
import { BiPhone } from "react-icons/bi";
import { MdOutlineEmail } from "react-icons/md";
import Button from '../../components/Home/Button/Button';

export default function Contact() {
  return (
    <section className={styles.contactContainer}>
        <div className={styles.contactInfo}>
            <div className={styles.contactInfoPhone}>
                <div className={styles.contactInfoTitle}>
                    <BiPhone className={styles.contactInfoTitleIcon}/>
                    <span>Call To Us</span>
                </div>
                <span>We are available 24/7, 7 days a week.</span>
                <span>Phone: +8801611112222</span>
            </div>
            <hr className={styles.splitter}/>
            <div className={styles.contactInfoEmail}>
                <div className={styles.contactInfoTitle}>
                    <MdOutlineEmail className={styles.contactInfoTitleIcon}/>
                    <span>Write To Us</span>
                </div>
                <span>Fill out our form and we will contact you within 24 hours.</span>
                <span>Emails: customer@exclusive.com</span>
                <span>Emails: support@exclusive.com</span>
            </div>
        </div>
        <form className={styles.contactFields}>
            {/* */}
            <div className={styles.contactFieldsInputs}>
                <input type="text" placeholder='Your Name' required/>
                <input type="text" placeholder='Your Email' required/>
                <input type="text" placeholder='Your Phone' required/>
            </div>
            <textarea name="message" id="ContactTextArea" placeholder='Your Message' ></textarea>
            <div className={styles.contactButton}>
                <Button name='Send Message' type='submit' />
            </div>
        </form>
    </section>
  )
}
