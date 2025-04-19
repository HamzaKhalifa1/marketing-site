import React from 'react';
import styles from './Navbar.module.css'
import {NavLink} from "react-router-dom";
import PropTypes from "prop-types";
import Component2 from "./../../../assets/images/Component2.svg";
import wishlist from "./../../../assets/images/Wishlist.svg";
import { CiHeart } from "react-icons/ci";
import { PiShoppingCartThin } from "react-icons/pi";
import Cart1 from "./../../../assets/images/Cart1.svg";

interface Props {
    property1: "active" | "default";
}

function Navbar({ property1 }: Props ){
    return (

        <>
        <header id={styles.Header}>
        <section id={styles.logoAndLogoName}>
            <div className={styles.logo}>
                <div className={styles.text_wrapper}>Exclusive</div>
            </div>
        </section>
            <section>
                <div className={styles.frame}>
                    <NavLink to="/" className={styles.header_instance}>
                        Home
                    </NavLink>
                    <NavLink to="Contact" className={styles.header_instance}>
                        Contact
                    </NavLink>
                    <NavLink to="About" className={styles.header_instance}>
                        About
                    </NavLink>
                </div>
            </section>
            <section id={styles.SearchAndWishlistAndCart}>
                <section id={styles.Search}>
                    <div className={`${styles.name} ${styles[property1]}`}>
                        {property1 === "active" && (
                            <div className={styles.frame}>
                                <p className={styles.text_wrapper}>What are you looking for?</p>
                                <img  alt="Vector" src={Component2} />
                            </div>
                        )}
                    </div>
                </section>
                <section id={styles.wishlistAndCart}>
                    <NavLink to="wishlist" className={styles.header_instance}>
                        <CiHeart className={styles.header_instanceIcon}/>
                    </NavLink>
                    <NavLink to="cart" className={styles.header_instance}>
                        <PiShoppingCartThin className={styles.header_instanceIcon}/>
                    </NavLink>
                </section>
            </section>      
        </header>
        <hr className='lineThrough'/>  
</>
    );
}


Navbar.propTypes = {
    property1: PropTypes.oneOf(["active", "default"]),
};

export default Navbar;