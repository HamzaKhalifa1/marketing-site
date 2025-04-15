import styles from './Wishlist.module.css'
import { GoTrash } from "react-icons/go";
import React from 'react'

interface ProductProps {
    imgSrc: string;
    discount: string;
    label: string;
    price: string;
}

export default function WishlistProduct({imgSrc, discount, label, price} : ProductProps) {
    const calculateDiscountedPrice = (price: string, discount: string): string => {
        const priceNumber = parseFloat(price);
        const discountNumber = parseFloat(discount);
        if (isNaN(priceNumber) || isNaN(discountNumber)) return price;
        return (priceNumber - (priceNumber * (discountNumber / 100))).toFixed(0);
    };

    const discountedPrice = calculateDiscountedPrice(price, discount);

    return (
        <div className={styles.productItem}>
            <div className={styles.productCard}>
                <img src={imgSrc} alt={label} className={styles.productImage} />
                {discount && <span className={styles.productDiscountTag}>-{discount}%</span>}
                <div className={styles.cardBtnsContainer}>
                    <button className={styles.cardHeartBtn}><span className={styles.cardBtnsIcon}><GoTrash /></span></button>
                </div>
                <button className={styles.cardAddToCart}>Add To Cart</button>
            </div>
            <div className={styles.productContext}>
                <span className={styles.productLabel}>{label}</span>
                <div className={styles.productPriceContainer}>
                    <span className={styles.productPrice}>${discount ? discountedPrice : price}</span>
                    {discount && <span className={styles.productBeforeDiscount}>${price}</span>}
                </div>
            </div>
        </div>
    )
}
