import Header from '../Header/Header'
import MonProduct from '../Product/MonProduct'
import SubHeader from '../SubHeader/SubHeader'
import styles from './MonthProducts.module.css'
import React from 'react'

export default function MonthProducts() {
  return (
    <main className={styles.container}>
        <Header name="This Month" />
        <SubHeader name='Best Selling Products' timer={false} arrows={false} btn='View All'/>
        <div className={styles.MonthProductsContainer}>
            <MonProduct imgSrc='https://s3-alpha-sig.figma.com/img/ee9a/3800/1e9f94261b28e16ea21bacb4144473e8?Expires=1745193600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=a5DBDPNY4UPjec-A2JOT93RuPZRilw4-Vd83Uad6PxW8H7UJKB2Zd0rTFvWLm-fo~ExNTGMao15EateCCkxbhNYWGKNhaGtBLegSywq2vqRW~jJ-TT8V3RpjBHpOWng2oRf4bPovViEAkTDif8OyVDJVJdPj9qNREU-n~DndBzkM4gEUCwVUaYTmcfTXj7Qu8EIxXQkGRpn0vcafchpw4tZ1i~n4cUzWgoT-VT~OUIVS7B00lHrlCEjb4Oymb359ac52Y6NAShETWJjyD8Bh1ZDr~WmtOd~yCh-J6V66Cfwjkw4vfZ4HbgTU-mBuIQofNQPepH~v0Bee5D0aOAurug__' label='The north coat' price='360' discount='28' rateNumber={65} /> 
            <MonProduct imgSrc='https://s3-alpha-sig.figma.com/img/4f3c/a1d1/2722dbdf98f25179d3c0b785988c513d?Expires=1745193600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=X5ephuG3t7BWm4xcUg1i1gG9KWu4DI5TDNHi1gedYU3sWxEfNEx9I4iqcrFb0Z4Z9ir2AGW44igDcArcaG1M3MffnJa4FUELkakW5m0L2N~Pi-VjOWRfKz0Dlvp0TUcn41lQDEw4uQfqhhPyRqWPs1WFONjnl37oRkLSGR5iqLjRm1z6~fhbg4FZTS79Xuv0TjmyLIoIGvPmt8yaMOI1kXXpELSdU0iYfq5MsMi2ZV~IdD8M33s4NdSlNPyZdA8bNyZJYMvKZdq0cxuyB60pGvGvvAEqcoa6UI89uH5D-5sKIAgIWfNUXstBwPdDSiS2RT74v8pjvEYcK53E3qMjcQ__' label='Gucci duffle bag' price='1160' discount='17' rateNumber={65} /> 
            <MonProduct imgSrc='https://s3-alpha-sig.figma.com/img/6739/d39d/c218c97b645d616c8188a4f2e6aaf84b?Expires=1745193600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=IEwMgRio04yh1BG8kpbtZFoySFYAsxgBE0LjGsyZm9FFgF9VLPygPMZYQnimh8G29yJDmVIkL19UPygEOjKCOtUeW64k2We-d04VA6Evz9FipHJX5hWNPIgiY4MOUTAbeSvu40baPM5EGm1e0kECopT4XkLlGsbiii7IfDcgaMtq8pUQuKXsnRrjXeV8Izol-URiCgVz1WQFcbGnqiR55jtLUkOtR46yRT6Tg1jU5vV3WSa551HleVLV4Az4V2ACm8LxGPNV4XessOxc6PxL-SK-R8I3iHuAuQkEl5eK5TMJYMVq9zjyzyiyuizAo3PZy2AVscFWGO3vWM6gbnB1xA__' label='RGB liquid CPU Cooler' price='170' discount='5' rateNumber={65} /> 
            <MonProduct imgSrc='https://s3-alpha-sig.figma.com/img/e86f/6e87/2757d20a14861e2e0ebd4e9889693f59?Expires=1745193600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=Q5NhqyWQ0tC3Bs5GX5iqFX4VR2eWblhClPS21ZtPJ-V1gHWp9wArZ7orwgL3jBnzQhY0fPf1cnVWejETAOaaJeIY~CQIylX~LdEpAEB2fJ1KKIZ-7stnUqJxQwSWiQ5DWfD9gLZIOY-yWEep1BwfBmxc8mSqrFYzjhZ4Pdr8sNDOclUcVlOj78ffAaj-dm~00kwW00YckmvBYDz5wvWkeaysERsiejtBA7n9un3TtnaoQdAOJuNhFyJ3OnCEcqKg3iwnsIb~19G2tgC84bPLMEv6DjygO5~OHcvyOHg0d0kNyBsC6~J-FtETM0M1NTexgsj4yer8y8hM9AX4A-soNg__' label='Small BookSelf' price='360' discount='' rateNumber={65} /> 
            <MonProduct imgSrc='https://s3-alpha-sig.figma.com/img/e86f/6e87/2757d20a14861e2e0ebd4e9889693f59?Expires=1745193600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=Q5NhqyWQ0tC3Bs5GX5iqFX4VR2eWblhClPS21ZtPJ-V1gHWp9wArZ7orwgL3jBnzQhY0fPf1cnVWejETAOaaJeIY~CQIylX~LdEpAEB2fJ1KKIZ-7stnUqJxQwSWiQ5DWfD9gLZIOY-yWEep1BwfBmxc8mSqrFYzjhZ4Pdr8sNDOclUcVlOj78ffAaj-dm~00kwW00YckmvBYDz5wvWkeaysERsiejtBA7n9un3TtnaoQdAOJuNhFyJ3OnCEcqKg3iwnsIb~19G2tgC84bPLMEv6DjygO5~OHcvyOHg0d0kNyBsC6~J-FtETM0M1NTexgsj4yer8y8hM9AX4A-soNg__' label='Small BookSelf' price='360' discount='' rateNumber={65} /> 
        </div>
    </main>
  )
}
