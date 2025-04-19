import styles from './Product.module.css'
import { FaRegEye } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa6";
import { FaStar } from "react-icons/fa6";
import React from 'react'
import { useAppDispatch } from '../../../hooks/reduxHooks';
import { addToWishlist } from '../../../store/wishlistSlice';
import { addToCart } from '../../../store/cartSlice';

interface ProductProps {
    imgSrc: string;
    discount: string;
    label: string;
    price: string;
    rateNumber: number;
}

export default function Product({imgSrc, discount, label, price, rateNumber} : ProductProps) {
    const dispatch = useAppDispatch();

    const handleAddToWishlist = () => {
        dispatch(addToWishlist({ imgSrc, discount, label, price, rateNumber, _id: label }));
    };

    const handleAddToCart = () => {
        dispatch(addToCart({ imgSrc,  
            label, 
            price: finalPrice,
            quantity: 1,
            _id: label  }));
    };

    const calculateDiscountedPrice = (price: string, discount: string): string => {
        const priceNumber = parseFloat(price);
        const discountNumber = parseFloat(discount);
        if (isNaN(priceNumber) || isNaN(discountNumber)) return price;
        return (priceNumber - (priceNumber * (discountNumber / 100))).toFixed(0);
    };

    const discountedPrice = calculateDiscountedPrice(price, discount);

    const finalPrice = discount ? discountedPrice : price;

    return (
        <div className={styles.productItem}>
                <div className={styles.productCard}>
                    <img src={imgSrc} alt={label} className={styles.productImage} />
                    {discount && <span className={styles.productDiscountTag}>-{discount}%</span>}
                    <div className={styles.cardBtnsContainer}>
                        <button onClick={handleAddToWishlist} className={styles.cardHeartBtn}><span className={styles.cardBtnsIcon}><FaRegHeart /></span></button>
                        <button className={styles.cardEyeBtn}><span className={styles.cardBtnsIcon}><FaRegEye /></span></button>
                    </div>
                    <button onClick={handleAddToCart} className={styles.cardAddToCart}>Add To Cart</button>
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
