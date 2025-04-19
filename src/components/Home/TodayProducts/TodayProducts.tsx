import styles from './TodayProducts.module.css'
import Header from '../Header/Header';
import SubHeader from '../SubHeader/SubHeader';
import Product from '../Product/Product';
import { useScroll } from '../../../context/ScrollContext';
import Button from '../Button/Button';
import React from 'react'

export default function TodayProducts() {
  const { flashSalesRef, scrollLeft, scrollRight } = useScroll();  
  return (
    <main className={styles.container}>
        <Header name="Today's" />
        <SubHeader name='Flash Sales' timer={true} onScrollLeft={() => scrollLeft('flash')} onScrollRight={() => scrollRight('flash')} arrows={true}/>
        <div className={styles.productsContainer} ref={flashSalesRef}>
            <Product imgSrc='https://s3-alpha-sig.figma.com/img/5d5c/2e52/50752d55f8b60f2aa2923183dadbc135?Expires=1745193600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=t5DfTIpCxyoA8RSxUY3F-a7CQiZhTFINCKe21zGkDbeDnbEsOK1Gr3Lqc1cpzI1g1ih~NyZqrt9RugV8nY~II0tNpmNI1cAfVEbb8bWjAFVpQCbCyFCqSuMMokM2p0znu3ffy9r7By0yQOKAJAB2umbjWSZlvrs7gvds1a2H7vFFi1bdvYe7C6ZTQRdbbLWW5DFslgnrCg1kr6ULvsAfX5W2s-CMeqvvUy2A7wOSJMbyvCScLAGBQTMhMauR~zlYN1UKU~LsQBd7U5wUTURT2FDk8B6cyOP9562yAxSWZPhw~TsFHao9cb2OhmRNhcfR0OmOvfa4~x4b3fCoR2TTdg__' discount='40' label='HAVIT HV-G92 Gamepad' price='160' rateNumber={88}  isNew={false}  showAddToWishlist={true} showDeleteButton={false} showPreview={true} showAddToCartAlways={false} colors={[]}/>
            <Product imgSrc='https://s3-alpha-sig.figma.com/img/e59d/9f34/8cc24eeff489863523b63971c3ff8e4a?Expires=1745193600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=L5xb5SH6-n-TcJgRPVp9tDjcPqO9epmbScv1TkdrO7frqXGPjTEiCS1gLb8F9ryY6J0bqQ49XU8Ow1eI4XiLYUosB6~wRy4EhhShUcf2Pyfn090mqoHpaT3nPh-IRx6XdTxrj8PVPE2rToWwLAKwfrF0U01X320yfO44rxty4FDrB~l414Dgashu0VJM2Cdi6kDpCey9fVEk~bs85Kh0oRJph9r3UB9ABCPpR895BwTrB5tzvCCceGfqQ5NZzU4p2cvK1HgkEdGs3NSmxNm58Ncaj0jwwePbizjsbqz4PGZBu~vQpJm8G-Vf-nJ0mT20Sv-PI2zavq0vs7XGn6kHwQ__' discount='35' label='AK-900 Wired Keyboard' price='1160' rateNumber={75} isNew={false}  showAddToWishlist={true} showDeleteButton={false} showPreview={true} showAddToCartAlways={false} colors={[]}/>
            <Product imgSrc='https://s3-alpha-sig.figma.com/img/5e63/4682/db5174aff99bb9337d2dc9598a0b44e4?Expires=1745193600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=Y9NFIu1r4ueR2evUXyBVSeQ3NutXgN6L6YkzlQs2bc795w3kD8lVgp4d3LvXaM-OB1had86QiwiODCGhFD-k57KUX8~XXvNubD2pjRGv1GNfE~vRXeyADHOs5X8nsFO~wGUBqUW1h8tEGswQDf2f8pqQmrU62bSSB9TRwzT6fW8EhOZP0NBq4dtL9rPR4p-ax89inM1bcwV8Guu3Tf1uL6RtGuJ8sbNy3m7TSr1MxnNC~N9ptuHFOdztVi3AMWf5RogATF-UZLbS-88OTayLVysTRK8LyPMO1oZ3VNIDSzza2Py3rdEETjlUrhBk35eSEaaAB8apakbVBXTy6CvImg__' discount='30' label='IPS LCD Gaming Monitor' price='400' rateNumber={99} isNew={false}  showAddToWishlist={true} showDeleteButton={false} showPreview={true} showAddToCartAlways={false} colors={[]}/>
            <Product imgSrc='https://s3-alpha-sig.figma.com/img/288d/a330/273c46e1c3dc0a8915c4b031d0345347?Expires=1745193600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=gpZyxfzv3BD7yw4GahgtqjP3IJ2RiMFOWyabi9wUyqUk7p0Sy6scCxSOz6g8pJt6OBAobfo4NbSXJY1fkS8daDN36cxevLlCDcRw9wlgWrpBdZVOOWlMAJrMaTmMmVaSHhpf5gSAjSLzfdXr8K9T40tp0K4grOK2oX-tX3xaiPvZdCeDV3qmCr81mxQoWHkBJdspGHFx-nTweRlF4Tv9gIC01wNbq404Qfu6Vcxo-tRidPti6poWliShAdve81RLOsQicZ97wvtMPq8LVxdbAMTjZCMzV2hxdXErZEvijREmPruXHzOWGUp8DE75SoGnx4dC54H05RzlrXRaziEVQA__' discount='25' label='S-Series Comfort Chair ' price='400' rateNumber={99} isNew={false}  showAddToWishlist={true} showDeleteButton={false} showPreview={true} showAddToCartAlways={false} colors={[]}/>
            <Product imgSrc='https://s3-alpha-sig.figma.com/img/288d/a330/273c46e1c3dc0a8915c4b031d0345347?Expires=1745193600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=gpZyxfzv3BD7yw4GahgtqjP3IJ2RiMFOWyabi9wUyqUk7p0Sy6scCxSOz6g8pJt6OBAobfo4NbSXJY1fkS8daDN36cxevLlCDcRw9wlgWrpBdZVOOWlMAJrMaTmMmVaSHhpf5gSAjSLzfdXr8K9T40tp0K4grOK2oX-tX3xaiPvZdCeDV3qmCr81mxQoWHkBJdspGHFx-nTweRlF4Tv9gIC01wNbq404Qfu6Vcxo-tRidPti6poWliShAdve81RLOsQicZ97wvtMPq8LVxdbAMTjZCMzV2hxdXErZEvijREmPruXHzOWGUp8DE75SoGnx4dC54H05RzlrXRaziEVQA__' discount='25' label='S-Series Comfort Chair ' price='400' rateNumber={99} isNew={false}  showAddToWishlist={true} showDeleteButton={false} showPreview={true} showAddToCartAlways={false} colors={[]}/>
        </div>
        <div className={styles.viewProducts}>
            <Button name='View All Products' />
        </div>
    </main>
  )
}
