import React from 'react';
import styles from './Header.module.css'

function Header() {
    return (
        <header id={styles.Header}>
        <section id={styles.logoAndLogoName}>
            <div id={styles.logo}>logo</div>
            <div id={styles.logoName}>logoName</div>
        </section>
        <section id={styles.Search}>Search</section>
        <section id={styles.registerAndCart}>
            <div>Login</div>
            <div>Register</div>
            <div>Cart</div>
        </section>
        </header>
    );
}

export default Header;