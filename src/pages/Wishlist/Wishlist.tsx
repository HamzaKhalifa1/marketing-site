import React from 'react';
import styles from './Wishlist.module.css';
import ButtonWhite from "../../common/ButtonWhite";
import JustForYouProduct from "../../components/Wishlist/JustForYouProduct";
import { useAppSelector, useAppDispatch} from '../../hooks/reduxHooks';
import { moveAllWishlistToCart } from '../../store/wishlistSlice';
import Product from '../../components/Home/Product/Product';
import { toast } from 'react-toastify';

function Wishlist() {

    const wishlistItems = useAppSelector(state => state.wishlist.items);
    
    const dispatch = useAppDispatch();

    const handleMoveToCart = async () => {
        if (wishlistItems.length === 0) {
            toast.error('Your wishlist is empty!', {
                position: 'top-center',
                autoClose: 2000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: false,
            });
        return;
        }

        await dispatch(moveAllWishlistToCart());
        toast.success('All items moved to cart successfully!', {
            position: 'top-center',
            autoClose: 2000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: false,
        });
    };
    
    
    return (
        <>
            <section className={styles.displayFlex}>
                <div className={styles.wishListName}>
                    Wishlist ({wishlistItems.length})
                </div>
                <ButtonWhite name='Move to Cart' onClick={handleMoveToCart}/>
            </section>

            <section className={styles.WishlistProductsContainer}>
                {wishlistItems.length > 0 ? (
                    wishlistItems.map(item => (
                        <Product
                            key={item._id}
                            imgSrc={item.imgSrc}
                            label={item.label}
                            price={item.price}
                            rateNumber={item.rateNumber || 0}
                            discount={item.discount}
                            showAddToCartAlways = {true}
                            showDeleteButton = {true}
                            showAddToWishlist = {false}
                        />
                    ))
                ) : (
                    <p>Your wishlist is empty. Go explore our products!</p>
                )}
            </section>
            {/*
            <section className={styles.displayFlex}>
                <header className={styles.header}>
                    <div className={styles.headerIcon}></div>
                    <span className={styles.headerName}>Just For You</span>
                </header>
                <ButtonWhite name='See All' />
            </section>
            <section className={styles.WishlistProductsContainer}>
                <JustForYouProduct imgSrc='https://s3-alpha-sig.figma.com/img/ee9a/3800/1e9f94261b28e16ea21bacb4144473e8?Expires=1745193600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=a5DBDPNY4UPjec-A2JOT93RuPZRilw4-Vd83Uad6PxW8H7UJKB2Zd0rTFvWLm-fo~ExNTGMao15EateCCkxbhNYWGKNhaGtBLegSywq2vqRW~jJ-TT8V3RpjBHpOWng2oRf4bPovViEAkTDif8OyVDJVJdPj9qNREU-n~DndBzkM4gEUCwVUaYTmcfTXj7Qu8EIxXQkGRpn0vcafchpw4tZ1i~n4cUzWgoT-VT~OUIVS7B00lHrlCEjb4Oymb359ac52Y6NAShETWJjyD8Bh1ZDr~WmtOd~yCh-J6V66Cfwjkw4vfZ4HbgTU-mBuIQofNQPepH~v0Bee5D0aOAurug__' label='The north coat' price='360' discount='28' rateNumber={65} />
                <JustForYouProduct imgSrc='https://s3-alpha-sig.figma.com/img/4f3c/a1d1/2722dbdf98f25179d3c0b785988c513d?Expires=1745193600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=X5ephuG3t7BWm4xcUg1i1gG9KWu4DI5TDNHi1gedYU3sWxEfNEx9I4iqcrFb0Z4Z9ir2AGW44igDcArcaG1M3MffnJa4FUELkakW5m0L2N~Pi-VjOWRfKz0Dlvp0TUcn41lQDEw4uQfqhhPyRqWPs1WFONjnl37oRkLSGR5iqLjRm1z6~fhbg4FZTS79Xuv0TjmyLIoIGvPmt8yaMOI1kXXpELSdU0iYfq5MsMi2ZV~IdD8M33s4NdSlNPyZdA8bNyZJYMvKZdq0cxuyB60pGvGvvAEqcoa6UI89uH5D-5sKIAgIWfNUXstBwPdDSiS2RT74v8pjvEYcK53E3qMjcQ__' label='Gucci duffle bag' price='1160' discount='17' rateNumber={65} />
                <JustForYouProduct imgSrc='https://s3-alpha-sig.figma.com/img/6739/d39d/c218c97b645d616c8188a4f2e6aaf84b?Expires=1745193600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=IEwMgRio04yh1BG8kpbtZFoySFYAsxgBE0LjGsyZm9FFgF9VLPygPMZYQnimh8G29yJDmVIkL19UPygEOjKCOtUeW64k2We-d04VA6Evz9FipHJX5hWNPIgiY4MOUTAbeSvu40baPM5EGm1e0kECopT4XkLlGsbiii7IfDcgaMtq8pUQuKXsnRrjXeV8Izol-URiCgVz1WQFcbGnqiR55jtLUkOtR46yRT6Tg1jU5vV3WSa551HleVLV4Az4V2ACm8LxGPNV4XessOxc6PxL-SK-R8I3iHuAuQkEl5eK5TMJYMVq9zjyzyiyuizAo3PZy2AVscFWGO3vWM6gbnB1xA__' label='RGB liquid CPU Cooler' price='170' discount='5' rateNumber={65} />
                <JustForYouProduct imgSrc='https://s3-alpha-sig.figma.com/img/e86f/6e87/2757d20a14861e2e0ebd4e9889693f59?Expires=1745193600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=Q5NhqyWQ0tC3Bs5GX5iqFX4VR2eWblhClPS21ZtPJ-V1gHWp9wArZ7orwgL3jBnzQhY0fPf1cnVWejETAOaaJeIY~CQIylX~LdEpAEB2fJ1KKIZ-7stnUqJxQwSWiQ5DWfD9gLZIOY-yWEep1BwfBmxc8mSqrFYzjhZ4Pdr8sNDOclUcVlOj78ffAaj-dm~00kwW00YckmvBYDz5wvWkeaysERsiejtBA7n9un3TtnaoQdAOJuNhFyJ3OnCEcqKg3iwnsIb~19G2tgC84bPLMEv6DjygO5~OHcvyOHg0d0kNyBsC6~J-FtETM0M1NTexgsj4yer8y8hM9AX4A-soNg__' label='Small BookSelf' price='360' discount='' rateNumber={65} />
                <JustForYouProduct imgSrc='https://s3-alpha-sig.figma.com/img/e86f/6e87/2757d20a14861e2e0ebd4e9889693f59?Expires=1745193600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=Q5NhqyWQ0tC3Bs5GX5iqFX4VR2eWblhClPS21ZtPJ-V1gHWp9wArZ7orwgL3jBnzQhY0fPf1cnVWejETAOaaJeIY~CQIylX~LdEpAEB2fJ1KKIZ-7stnUqJxQwSWiQ5DWfD9gLZIOY-yWEep1BwfBmxc8mSqrFYzjhZ4Pdr8sNDOclUcVlOj78ffAaj-dm~00kwW00YckmvBYDz5wvWkeaysERsiejtBA7n9un3TtnaoQdAOJuNhFyJ3OnCEcqKg3iwnsIb~19G2tgC84bPLMEv6DjygO5~OHcvyOHg0d0kNyBsC6~J-FtETM0M1NTexgsj4yer8y8hM9AX4A-soNg__' label='Small BookSelf' price='360' discount='' rateNumber={65} />
            </section >
            */}
        </>

    );
}

export default Wishlist;