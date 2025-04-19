import React from 'react'
import styles from './Product.module.css'
import { FaRegEye, FaRegHeart, FaHeart, FaStar } from "react-icons/fa6";
import { useAppDispatch } from '../../../hooks/reduxHooks';
import { addToWishlist, removeFromWishlist } from '../../../store/wishlistSlice';
import { addToCart } from '../../../store/cartSlice';
import { useState } from 'react';
import { useAppSelector } from '../../../hooks/reduxHooks';

interface ProductProps {
    imgSrc: string;
    discount: string;
    label: string;
    price: string;
    rateNumber: number;
}

export default function Product({imgSrc, discount, label, price, rateNumber} : ProductProps) {
    
    const [addedToCart, setAddedToCart] = useState(false);
    
    const dispatch = useAppDispatch();

    const wishlistItems = useAppSelector(state => state.wishlist.items);

    const isLiked = wishlistItems.some(item => item._id === label);

    const handleAddToWishlist = () => {
        if (isLiked) {
            dispatch(removeFromWishlist(label));
        } else {
            dispatch(addToWishlist({ imgSrc, label, price, _id: label, quantity: 1 }));
        }
    };

    const handleAddToCart = () => {
        const finalPrice = discount ? discountedPrice : price;
        dispatch(addToCart({ imgSrc, label, price: finalPrice, quantity: 1, _id: label  }));
        setAddedToCart(true);
        setTimeout(() => setAddedToCart(false), 1500);
    };

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
                        <button onClick={handleAddToWishlist} className={`${styles.cardHeartBtn} ${isLiked ? styles.liked : ''}`}>
                            <span className={styles.cardBtnsIcon}>{isLiked ? <FaHeart /> : <FaRegHeart />}</span>
                        </button>
                        <button className={styles.cardEyeBtn}>
                            <span className={styles.cardBtnsIcon}><FaRegEye /></span>
                        </button>
                    </div>
                    <button onClick={handleAddToCart} className={`${styles.cardAddToCart} ${addedToCart ? styles.added : ''}`}>{addedToCart ? '✔ Added!' : 'Add To Cart'}</button>
                </div>
                <div className={styles.productContext}>
                    <span className={styles.productLabel}>{label}</span>
                    <div className={styles.productPriceContainer}>
                        <span className={styles.productPrice}>${discount ? discountedPrice : price}</span>
                        {discount && <span className={styles.productBeforeDiscount}>${price}</span>}
                    </div>
                    <div className={styles.productRateContainer}>
                        <span className={styles.productRate}><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></span>
                        <span className={styles.productRateNumber}>({rateNumber})</span>
                    </div>
                </div>
            </div>
    )
}
