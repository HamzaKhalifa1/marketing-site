import React from 'react';
import styles from "./Cart.module.css";
import { useState } from 'react';
import { FaAngleUp, FaAngleDown } from "react-icons/fa";
import { TiDelete } from "react-icons/ti";
import ButtonWhite from '../../common/ButtonWhite/ButtonWhite.tsx';
import Button from '../../components/Home/Button/Button';
import { NavLink } from 'react-router-dom';

function Cart () {
    const [value, setValue] = useState(1);

    const increment = () => setValue(prev => prev + 1);
    const decrement = () => setValue(prev => (prev > 1 ? prev - 1 : 1));

    return (
        <main className={styles.cart}>
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
                    <tr className={styles.rowSplitter}></tr>
                    <tr>
                        <td>
                            <div className={styles.product}>
                                <img src="https://s3-alpha-sig.figma.com/img/5e63/4682/db5174aff99bb9337d2dc9598a0b44e4?Expires=1745798400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=lUMuONlzw6IAVZgYbwKMIXGWBc7fejt8reaOIrkFE2REwONctSWalgTuT71yT~WGxpK7-J-fuQcIbGhWWCaqJ15PQwBF-SPXMIySN1~1lZdUpdAheymjQtb2B3Rkbkw6OQnKsgeWNQMZSU8xHkvKc9wjq-~9XIPHyFVwfwB~2HVx5RRBd4q3UmlA1-QBG5-CLx2PMykuehdwybVrqXqutM~fHU6Lxfst16Hpfn~b-smRUuytrq0pRcJ7l40hUokwqpF5ZWNXGIt8agWvjetOsomcLWgYTGSCI5Hd2jkblZjotttBSLO8EuDkqk1NbUGUwAlkjD3S~efGsbQf9nh3Dg__" alt="Product Image" />
                                <p>LCD Monitor</p>
                                <button className={styles.deleteBtn}><TiDelete/></button>
                            </div>
                        </td>
                        <td>$650</td>
                        <td>
                            <span className={styles.quantity}>
                                <input
                                    type="text"
                                    value={value.toString().padStart(2, '0')}
                                    readOnly
                                />
                                <div className={styles.quantityButtons}>
                                    <button onClick={increment}><FaAngleUp/></button>
                                    <button onClick={decrement}><FaAngleDown/></button>
                                </div>
                            </span>
                        </td>
                        <td>$650</td>
                    </tr>
                    <tr className={styles.rowSplitter}></tr>
                    <tr>
                        <td>
                            <div className={styles.product}>
                                <img src="https://s3-alpha-sig.figma.com/img/5d5c/2e52/50752d55f8b60f2aa2923183dadbc135?Expires=1745798400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=JXQCBpf7UwaIMHXj~ZN5~oiX6h5mdDgt8G4Ly2TImlmX2uliRVWWK08X08VgfP9p3cQPwRyhLdsQzmCVaSMBszp6SPStiJZIxAhxLH-cuo25eAc1tSQ3HHVtYSuxYJ~zFsWFIDnmnwUUxKQGVTaVhfOLMogQnq~t5nOU8aBkZ7yA8c93VuFAp-Ra~WWxC-kFb~Lq8p2KBJUIHkBl4B5KX4MYRT8bks2fs67IYurAcnjHyWgNIRP7BAkL1LoWQgZcmnC6utC2B1iRksRE6ryQb1neMnbYUu521~d1XZy5dASl4nlU-~fUj8aDWIXaq9PIFYZP5Av~FFjjyHC9fykZrg__" alt="Product Image" />
                                <p>H1 Gamepad</p>
                                <button className={styles.deleteBtn}><TiDelete/></button>
                            </div>
                        </td>
                        <td>$650</td>
                        <td>
                            <span className={styles.quantity}>
                                <input
                                    type="text"
                                    value={value.toString().padStart(2, '0')}
                                    readOnly
                                />
                                <div className={styles.quantityButtons}>
                                    <button onClick={increment}><FaAngleUp/></button>
                                    <button onClick={decrement}><FaAngleDown/></button>
                                </div>
                            </span>
                        </td>
                        <td>$650</td>
                    </tr>
                </tbody>
            </table>
            <div className={styles.cartSummary}>
                <div className={styles.cartSummaryBtns}>
                    <NavLink to="/">
                        <ButtonWhite name='Return to shop' />
                    </NavLink>
                    <ButtonWhite name='Clear cart' />
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
                                <span>$1750</span>
                            </div>
                            <hr className={styles.splitter}/>
                            <div className={styles.Total}>
                                <span>Shipping:</span>
                                <span>Free</span>
                            </div>
                            <hr className={styles.splitter}/>
                            <div className={styles.Total}>
                                <span>Total:</span>
                                <span>$1750</span>
                            </div>
                        </div>
                        <div className={styles.cartSummaryTotalBtn}>
                            <NavLink to="CheckOut">
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