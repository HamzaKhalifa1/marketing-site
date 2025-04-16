import React from 'react';
import Button from "../../components/Home/Button/Button.tsx";
import {NavLink} from "react-router-dom";
import styles from "./Cart.module.css";
function Cart () {
    return (
        <div>
            <NavLink to="CheckOut" className={styles.header_instance}>
                <Button name={"Procees to checout"}/>
            </NavLink>
        </div>
    );
}
export default Cart;