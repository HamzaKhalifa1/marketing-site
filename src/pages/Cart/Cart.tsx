import React, { Fragment } from 'react';
import styles from "./Cart.module.css";
import { FaAngleUp, FaAngleDown } from "react-icons/fa";
import { TiDelete } from "react-icons/ti";
import ButtonWhite from '../../common/ButtonWhite/ButtonWhite.tsx';
import Button from '../../components/Home/Button/Button';
import { NavLink } from 'react-router-dom';
import { useAppSelector, useAppDispatch } from '../../hooks/reduxHooks';
import { clearCart, decrementQuantity, incrementQuantity, removeFromCart } from '../../store/cartSlice.ts';

function Cart () {

    const cartItems = useAppSelector(state => state.cart.items);
    const dispatch = useAppDispatch();

    const subtotal = cartItems.reduce((acc, item) => {
        return acc + Number(item.price) * item.quantity;
    }, 0);

    const shipping = 0;

    const total = subtotal + shipping;

    return (
        <main className={styles.cart}>
            {cartItems.length > 0 ?
            <table className={styles.cartTable}>
                <thead className={styles.cartTableHeader}>
                    <tr>
                        <th>Product</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Subtotal</th>
                    </tr>
                </thead>
                <tbody className={styles.cartTableBody}>
                    {cartItems.length > 0 && cartItems.map((item) => (
                        <Fragment key={item._id}>
                        <tr className={styles.rowSplitter}></tr>
                        <tr>
                            <td>
                                <div className={styles.product}>
                                <img src={item.imgSrc} alt={item.label} />
                                <p>{item.label}</p>
                                <button className={styles.deleteBtn} onClick={() => dispatch(removeFromCart(item._id))}>
                                    <TiDelete />
                                </button>
                                </div>
                            </td>
                            <td>${item.price}</td>
                            <td>
                                <span className={styles.quantity}>
                                <input type="text" value={item.quantity.toString().padStart(2, '0')} readOnly />
                                <div className={styles.quantityButtons}>
                                    <button onClick={() => dispatch(incrementQuantity(item._id))}><FaAngleUp/></button>
                                    <button onClick={() => dispatch(decrementQuantity(item._id))}><FaAngleDown/></button>
                                </div>
                                </span>
                            </td>
                            <td>${Number(item.price) * item.quantity}</td>
                        </tr>
                        </Fragment>
                    ))}
                </tbody>
            </table>
            :
            <div className={styles.emptyCart}>Your cart is empty</div>}
            <div className={styles.cartSummary}>
                <div className={styles.cartSummaryBtns}>
                    <NavLink to="/">
                        <ButtonWhite name='Return to shop'/>
                    </NavLink>
                    <ButtonWhite name='Clear cart' onClick={() => dispatch(clearCart())}/>
                </div>
                <div className={styles.cartSummaryTotalContainer}>
                    <div className={styles.CouponContainer}>
                            <input type="text" placeholder='Coupon Code'/>
                            <Button name='Apply Coupon' />
                    </div>
                    <div className={styles.cartSummaryTotal}>
                        <span className={styles.cartSummaryTotalTitle}>Cart Total</span>
                        <div className={styles.cartSummaryTotalContext}>
                            <div className={styles.Total}>
                                <span>Subtotal:</span>
                                <span>${subtotal.toFixed(2)}</span>
                            </div>
                            <hr className={styles.splitter}/>
                            <div className={styles.Total}>
                                <span>Shipping:</span>
                                <span>Free</span>
                            </div>
                            <hr className={styles.splitter}/>
                            <div className={styles.Total}>
                                <span>Total:</span>
                                <span>${total.toFixed(2)}</span>
                            </div>
                        </div>
                        <div className={styles.cartSummaryTotalBtn}>
                            <NavLink to="checkOut">
                                <Button name='Process to checkout' />
                            </NavLink>
                        </div>
                    </div>
                </div>  
            </div>
        </main>
    );
}
export default Cart;