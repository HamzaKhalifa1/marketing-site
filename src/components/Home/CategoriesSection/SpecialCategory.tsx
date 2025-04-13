import Button from '../Button/Button';
import styles from './SpecialCategory.module.css';
import img1 from '../../assets/img1.png';

export default function SpecialCategory() {
  return (
    <section className={styles.specialCategory}>
        <div className={styles.specialCategoryContext}>
            <span className={styles.specialCategoryContextName}>Categories</span>
            <span className={styles.specialCategoryContextTitle}>Enhance Your Music Experience</span>
            <div className={styles.specialCategoryContextTime}>
                <div className={styles.specialCategoryContextTimeLeft}>
                    <span>05</span>
                    <span>Days</span>
                </div>
                <div className={styles.specialCategoryContextTimeLeft}>
                    <span>23</span>
                    <span>Hours</span>
                </div>
                <div className={styles.specialCategoryContextTimeLeft}>
                    <span>59</span>
                    <span>Minutes</span>
                </div>
                <div className={styles.specialCategoryContextTimeLeft}>
                    <span>35</span>
                    <span>Seconds</span>
                </div>
            </div>
            <span>
                <Button name='Buy Now!' className='greenBtn'/>
            </span>
        </div>
        <div className={styles.specialCategoryImage}>
            <img src={img1} alt="Special Category" />
        </div>
    </section>
  )
}
