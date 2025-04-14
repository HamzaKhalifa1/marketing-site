import React from 'react'
import styles from './FeaturedSection.module.css'
import Header from '../Header/Header'
import SubHeader from '../SubHeader/SubHeader'
import { NavLink } from 'react-router-dom'

export default function FeaturedSection() {
  return (
    <section className={styles.container}>
        <Header name='Featured' />
        <SubHeader name='New Arrival' arrows={false} timer={false} />
        <div className={styles.featuredSection}>
            <NavLink to={"/"} className={styles.feature1}>
                <img src="https://s3-alpha-sig.figma.com/img/1c36/0f79/0c1817d3afa266b3c9f8c81ff0ed4428?Expires=1745798400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=NYtjPHdKjsvXDaYFA5TdFzyP3MRFL5CGnIswJklwx2x05o0P9m2oy-TPMu3SFTf16~bChIVBEsBh3iT-0jvpEbStY6VOa8T1cRGfpXT~A4K6Cj2Mrn~sqDJF9JAF5zvIi9N7GEqC4E~aXT~PBqzQEXOR4GEDSFkbKaMaJplskvoarIxhjkbScnmUjkKrXk0-4fH-Y6xx4B98qON6u7swMmzNPasYBBg1HIQ3yPawDyEkFxD5xO~~38qgLLmXMaMZOj6NCtlnH1lcc7UbvRYqCv3V2SAmDliWdvhfHENEbb2kxw0~sfybHaV-0SfpokcnEP6AH0mGmeofw-7UZUR8GA__" alt="feature1" />
                <span className={styles.featureContext}>
                    <span className={styles.featureContextTitle}>PlayStation 5</span>
                    <span className={styles.featureContextDesc}>Black and White version of the PS5 coming out on sale.</span>
                    <span className={styles.featureContextLink}>Shop Now</span>
                </span>
            </NavLink>
            <NavLink to={"/"} className={styles.feature2}>
                <img src="https://s3-alpha-sig.figma.com/img/455c/8d64/08463f7e8f57dd3048a2444dbfa0cb90?Expires=1745798400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=bMJPS7VbK8~8AYdw0q3X4H9VaMCHSy8W37fHj1~LuR0~iOnebAt~qQLg~Hp3ht~HqxtPFImxn6YIVxaZstj09gChWZFexWqYzNB471C~wQhz75EkjOZy8oXvl0ds8VVxDJ4Wxrx9tP~qImxmXRwQjIaT1DG8lpTp6zU43mTVgFHE504m0K3jdR0eTKZ1kq8KAI0SNam9t3Ynh9nPgbenFw-hHxhfu8Gjrnbpdy6q6yxnlVLjsbKCka~lTIT7cyKiazdQVK0JRyGZ3gM8MAXEsZaM7NN39~oCe3z1FtJXBn~xc9B-dNIb~mHPOKzL7OOFlBwuUO9Eft9vrV76owJB0A__" alt="feature2" />
                <span className={styles.featureContext}>
                    <span className={styles.featureContextTitle}>Women's Collections</span>
                    <span className={styles.featureContextDesc}>Featured woman collections that give you another vibe.</span>
                    <span className={styles.featureContextLink}>Shop Now</span>
                </span>
            </NavLink>
            <NavLink to={"/"} className={styles.feature3}>
                <img src="https://s3-alpha-sig.figma.com/img/e565/9d57/2977438364a41d7e8c9d1e9a794d43ed?Expires=1745798400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=fjeY97zDUzcs8rcHDlB7EOjRfCmT9p188AQp6T2cfpotpZBL-ndK0opAqwPiN5I6tLpSgBWMzyyO35BR5cJGW97gr0UzIg9Bip6o1jZWwiHlycVdjVbGTbqJo0aP0q5AfQxmqhyHJEZF2ubiBP2IEOJXtZN7WHGswk2yq3UvOnyM2a7w~g9FqmrpxoD-c5mbEvVR7lSWUKzlhZn0gxsVBdXw91ug4EYIAzl08GhBdY9sCGNhuF7aAWy8ZOgIKRS8Ck8rNPkGZ4urVdRVwXCcpNixiV5bp5QGW9wZyh7USsz7RqmnmpgNpqsmZLpqxmQ1ww0SgezmupD8Y7jkY65tmA__" alt="feature3" />
                <span className={styles.featureContext}>
                    <span className={styles.featureContextTitle}>Speakers</span>
                    <span className={styles.featureContextDesc}>Amazon wireless speakers.</span>
                    <span className={styles.featureContextLink}>Shop Now</span>
                </span>
            </NavLink>
            <NavLink to={"/"} className={styles.feature4}>
                <img src="https://s3-alpha-sig.figma.com/img/1531/5cd1/5102562cf220504d288fa568eaa816dd?Expires=1745798400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=G28aXSN-C04ul-RAUWx4jrcbxChwfIEUUlu4VeXUjDGlkJF~jmFRzu7c5G34ITD~MMcoExgwDjrOcTvXoZPcih7VsOIBEANsM0aZz0DDkUsqHtJoe-Yp0HpmXO-bFQ3Iu0UkjtICZdGGKnoXlPz-fafJIhdJV8dh2-o9CYsfOjlAeANDg5rEhFVSLQ~zkBFd5JekvImRFKaFL7Z1UXTQvPdPkXaMF1efwtzqc1JfnF6J4hrcY3gGy5HOnvg7Rn5q70St64S0sDL7ssXOduZsN74GnNP2kwFr18lVzdSC7aVnRiuAMg9z1BqtP~lueuLWzbRSXRZQnL~xbovbhkwQTQ__" alt="feature4" />
                <span className={styles.featureContext}>
                    <span className={styles.featureContextTitle}>Perfume</span>
                    <span className={styles.featureContextDesc}>GUCCI INTENSE OUD EDP.</span>
                    <span className={styles.featureContextLink}>Shop Now</span>
                </span>
            </NavLink>
        </div>
    </section>
  )
}
