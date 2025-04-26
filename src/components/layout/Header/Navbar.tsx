import React, {useState} from 'react';
import styles from './Navbar.module.css'
import {NavLink} from "react-router-dom";
import PropTypes from "prop-types";
import Component2 from "./../../../assets/images/Component2.svg";
import { CiHeart } from "react-icons/ci";
import { PiShoppingCartThin } from "react-icons/pi";
import { useAppSelector } from '../../../hooks/reduxHooks';
import {IoIosSearch} from "react-icons/io";

interface Props {
    property1: "active" | "default";
}

function Navbar({ property1 }: Props ){
    const [menuOpen, setMenuOpen] = useState(false);

    const wishlistItems = useAppSelector(state => state.wishlist.items);
    const cartItems = useAppSelector(state => state.cart.items);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <>
        <header id={styles.Header}>
        <section id={styles.logoAndLogoName}>
            <div className={styles.logo}>
                <div className={styles.text_wrapper}>Exclusive</div>
            </div>
        </section>
            <section>
                <div className={styles.navbar}>
                    <div className={`${styles.frame} ${menuOpen ? styles.open : ''}`}>
                        <NavLink to="/" className={styles.header_instance}>Home</NavLink>
                        <NavLink to="/Contact" className={styles.header_instance}>Contact</NavLink>
                        <NavLink to="/About" className={styles.header_instance}>About</NavLink>
                    </div>
                </div>
            </section>
            <section id={styles.SearchAndWishlistAndCart}>
                <section id={styles.Search}>
                    <div className={`${styles.name} ${styles[property1]}`}>
                        {property1 === "active" && (
                            <div className={styles.frame}>
                                <p className={styles.text_wrapper}>What are you looking for?</p>
                                <img alt="Vector" src={Component2} />
                            </div>
                        )}
                    </div>
                </section>
                <section id={styles.wishlistAndCart}>
                    <NavLink to="wishlist" className={styles.header_instance}>
                        <div className={styles.iconWrapper}>
                            <CiHeart className={styles.header_instanceIcon} />
                            {wishlistItems.length > 0 && (
                                <span className={styles.badge}>{wishlistItems.length}</span>
                            )}
                        </div>
                    </NavLink>
                    <NavLink to="cart" className={styles.header_instance}>
                        <div className={styles.iconWrapper}>
                            <PiShoppingCartThin className={styles.header_instanceIcon} />
                            {cartItems.length > 0 && (
                                <span className={styles.badge}>{cartItems.length}</span>
                            )}
                        </div>
                    </NavLink>
                    <div className={`${styles.Search2} ${styles.icon}`}>
                        <IoIosSearch />
                    </div>

                    <button className={styles.menuButton} onClick={toggleMenu}>
                        ☰
                    </button>
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