import React from 'react';
import styles from './Footer.module.css'


function Footer() {
    return (
        <footer id={styles.footer}>
            <div className={styles.inFooter}>
                <div className={`${styles.footerContain} ${styles.footerContainHeaderLogo}`}>Exclusive</div>
                <div className={styles.footerContain}>Subscribe</div>
                <div className={styles.footerContain}>Get 10% off your first order</div>
                <div className={styles.footerContain}>Hi</div>
            </div>
            <div className={styles.inFooter}>
                <div className={`${styles.footerContain} ${styles.footerContainHeader}`}>Support</div>
                <div className={styles.footerContain}>111 Bijoy sarani, Dhaka,
                    DH 1515, Banglade</div>
                <div className={styles.footerContain}>exclusive@gmail.com</div>
                <div className={styles.footerContain}>+88015-88888-9999</div>
            </div>
            <div className={styles.inFooter}>
                <div className={`${styles.footerContain} ${styles.footerContainHeader}`}>Account</div>
                <div className={styles.footerContain}>Shop</div>
                <div className={styles.footerContain}>cost</div>
                <div className={styles.footerContain}>Wishlist</div>
            </div>
            <div className={styles.inFooter}>
                <div className={`${styles.footerContain} ${styles.footerContainHeader}`}>Quick Link</div>
                <div className={styles.footerContain}>Privacy policy</div>
                <div className={styles.footerContain}>Terms Of Use</div>
                <div className={styles.footerContain}>Contact</div>
            </div>
        </footer>
    );
}

export default Footer;