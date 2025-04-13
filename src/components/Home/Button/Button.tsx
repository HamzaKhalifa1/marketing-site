import styles from './Button.module.css'
import React from 'react'

interface ButtonProps {
  name: string;
  className?: string;
  [key: string]: any;
}

export default function Button({ name, className }: ButtonProps) {
  return (
  <button className={`${styles.Btn} ${className && styles[className] ? styles[className] : ''}`.trim()}>{name}</button>
  );
}
