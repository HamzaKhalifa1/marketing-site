import React from 'react';
import styles from "./ButtonWhite.module.css";

function ButtonWhite({name}: {name: string}) {
    return (
        <button className={styles.button}>
            {name}
        </button>
    );
}
export default ButtonWhite;