import React from 'react';
import styles from "./ButtonWhite.module.css";

interface ButtonWhiteProps {
    name: string;
    onClick?: () => void;
}

function ButtonWhite({ name, onClick }: ButtonWhiteProps) {
    return (
        <button className={styles.button} onClick={onClick}>
            {name}
        </button>
    );
}
export default ButtonWhite;