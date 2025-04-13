import styles from './SubHeader.module.css';
import { FaArrowLeft } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa6";
import Button from '../Button/Button';
import React from 'react'

interface SubHeaderProps {
    name: string;
    timer?: boolean;
    arrows?: boolean;
    btn?: string;
    onScrollLeft?: () => void;
    onScrollRight?: () => void;
  }

export default function SubHeader({ name, timer, arrows, btn, onScrollLeft, onScrollRight }: SubHeaderProps) {
  return (
    <div className={styles.SubHeaderContainer}>
            <div className={styles.SubHeaderContent}>
                <div className={styles.SubHeaderTitle}>{name}</div>
                {timer &&
                <div className={styles.SubHeaderTimer}>
                    <span className={styles.SubHeaderTimerDate}>
                        <span className={styles.SubHeaderTimerDateText}>Days</span>
                        <span className={styles.SubHeaderTimerDateNumber}>03</span>
                    </span>
                    <span className={styles.SubHeaderTimerDateSplitter}>:</span>
                    <span className={styles.SubHeaderTimerDate}>
                        <span className={styles.SubHeaderTimerDateText}>Hours</span>
                        <span className={styles.SubHeaderTimerDateNumber}>23</span>
                    </span>
                    <span className={styles.SubHeaderTimerDateSplitter}>:</span>
                    <span className={styles.SubHeaderTimerDate}>
                        <span className={styles.SubHeaderTimerDateText}>Minutes</span>
                        <span className={styles.SubHeaderTimerDateNumber}>19</span>
                    </span>
                    <span className={styles.SubHeaderTimerDateSplitter}>:</span>
                    <span className={styles.SubHeaderTimerDate}>
                        <span className={styles.SubHeaderTimerDateText}>Seconds</span>
                        <span className={styles.SubHeaderTimerDateNumber}>56</span>
                    </span>
                </div>
                }
            </div>
            {arrows && <div className={styles.actionBtnsContainer}>
                <button onClick={onScrollLeft} className={styles.actionBtns}><FaArrowLeft className={styles.actionBtnsIcon}/></button>
                <button onClick={onScrollRight} className={styles.actionBtns}><FaArrowRight className={styles.actionBtnsIcon}/></button>
            </div>}
            {btn && <Button name={btn} />}
        </div>
  )
}
