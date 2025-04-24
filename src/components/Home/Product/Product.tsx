import React from 'react'
import styles from './Product.module.css'
import { FaRegEye, FaRegHeart, FaHeart, FaStar } from "react-icons/fa6";
import { MdDeleteOutline } from "react-icons/md";
import { useAppDispatch } from '../../../hooks/reduxHooks';
import { addToWishlist, removeFromWishlist } from '../../../store/wishlistSlice';
import { addToCart } from '../../../store/cartSlice';
import { useState } from 'react';
import { useAppSelector } from '../../../hooks/reduxHooks';
import { toast } from 'react-toastify';

interface ProductProps {
    imgSrc: string;
    label: string;
    price: string;
    rateNumber: number;
    discount?: string;
    isNew?: boolean;
    showAddToCartAlways?: boolean;
    showDeleteButton?: boolean;
    showAddToWishlist?: boolean;
    showPreview?: boolean;
    colors?: string[]; 
    width?: string;
    showDeleteButtonFromWishlistAfterAddToCart?: boolean;
}


export default function Product({imgSrc, label, price, rateNumber, discount, isNew, showAddToCartAlways, showDeleteButton, showAddToWishlist, showPreview, colors, width, showDeleteButtonFromWishlistAfterAddToCart} : ProductProps) {
    
    const [addedToCart, setAddedToCart] = useState(false);
    
    const dispatch = useAppDispatch();

    const wishlistItems = useAppSelector(state => state.wishlist.items);

    const isLiked = wishlistItems.some(item => item._id === label);

    const [isFading, setIsFading] = useState(false);

    const handleAddToWishlist = () => {
        if (isLiked) {
            dispatch(removeFromWishlist(label));
        } else {
            dispatch(addToWishlist({ imgSrc, label, price, _id: label, quantity: 1 }));
        }
    };

    const handleDeleteFromWishlist = () => {
        setIsFading(true);
        setTimeout(() => {
            dispatch(removeFromWishlist(label));
            toast.info('Item removed from wishlist.', {
                position: 'top-center',
                autoClose: 1500,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: false,
            });
        }, 300);
    };
    

    const handleAddToCart = () => {
        const finalPrice = discount ? discountedPrice : price;
        dispatch(addToCart({ imgSrc, label, price: finalPrice, quantity: 1, _id: label  }));
        
        if (showDeleteButtonFromWishlistAfterAddToCart) {
            setIsFading(true);
            setTimeout(() => {
                dispatch(removeFromWishlist(label));
                toast.success('Item moved to cart!', {
                    position: 'top-center',
                    autoClose: 1500,
                    hideProgressBar: true,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: false,
                });
            }, 300);
        }

        setAddedToCart(true);
        setTimeout(() => setAddedToCart(false), 1500);
    };

    const calculateDiscountedPrice = (price: string, discount: string): string => {
        const priceNumber = parseFloat(price);
        const discountNumber = parseFloat(discount);
        if (isNaN(priceNumber) || isNaN(discountNumber)) return price;
        return (priceNumber - (priceNumber * (discountNumber / 100))).toFixed(0);
    };

    const discountedPrice = calculateDiscountedPrice(price, discount || "0");

    return (
        <div className={`${styles.productItem} ${isFading ? styles.fadeOut : ''}`}>
                <div className={styles.productCard} style={{width: width, height: width}}>
                    <img src={imgSrc} alt={label} className={styles.productImage} />
                    {discount && <span className={styles.productDiscountTag}>-{discount}%</span>}
                    {isNew && <span className={styles.productNewTag}>New</span>}
                    <div className={styles.cardBtnsContainer}>
                        {showAddToWishlist && (
                            <button onClick={handleAddToWishlist} className={`${styles.cardHeartBtn} ${isLiked ? styles.liked : ''}`}>
                                <span className={styles.cardBtnsIcon}>{isLiked ? <FaHeart /> : <FaRegHeart />}</span>
                            </button>
                        )}
                        {showDeleteButton ? (
                            <button onClick={handleDeleteFromWishlist} className={styles.cardDeleteBtn}>
                                <span className={styles.cardBtnsIcon}><MdDeleteOutline /></span>
                            </button>
                        ) : showPreview ? (
                            <button onClick={() => console.log('preview button clicked')} className={styles.cardEyeBtn}>
                                <span className={styles.cardBtnsIcon}><FaRegEye /></span>
                            </button>
                        ) : null}
                    </div>
                    <button 
                        onClick={handleAddToCart} 
                        className={`${styles.cardAddToCart} ${addedToCart ? styles.added : ''} ${showAddToCartAlways ? styles.showAlways : ''}`}
                    >
                        {addedToCart ? '✔ Added!' : 'Add To Cart'}
                    </button>
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
                    {colors && colors.length > 0 && (
                        <div className={styles.productColors}>
                            {colors.map((color, index) => (
                                <span key={index} className={styles.colorCircle}>
                                    <input 
                                        type="radio" 
                                        name={`color-${label}`} 
                                        value={color} 
                                        className={styles.colorInput}
                                        style={{ backgroundColor: color }}
                                    />
                                </span>
                            ))}
                        </div>
                    )}
                </div>
            </div>
    )
}
