import React from 'react'
import styles from './OurProduct.module.css'
import Header from '../Header/Header'
import SubHeader from '../SubHeader/SubHeader'
import Product from '../Product/Product'
import Button from '../Button/Button'

export default function OurProduct() {
  return (
    <main className={styles.container}>
        <Header name="Our Products" />
        <SubHeader name='Explore Our Products' timer={false} arrows={false} />
        <div className={styles.OurProductsContainer}>
            <Product 
                imgSrc='https://s3-alpha-sig.figma.com/img/78e7/2711/8c99fe72271cf43f5e3566b39ca7c8f4?Expires=1745798400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=ChyAAGm3WDrHbnvLB8MyL7ih9XUbBx8GNyPhfhFGfdBbBX54Y9CpyjsbwMRnCxOgR5vFaQ~4L-Qk4l9H9YkLTB6NIWqNK5qoYEUNyItAYhF~bs7PS7qCq4domN4hK8hLPXRAxPVnDo7njRudjSy9KXw0hTI~KOa37vTQeHdkYcgYrlUkoO5Ilw93P1oirqrOXarFK5RqhHq2I5gLR0eC2n9JCT9zLRdp-tKo~Xe1IhyLRDKCAPjLrOPJlbW04CTMqzL2OUJknqVzWWCiGa~nSzhQ60Rf6ViOB0s7lq7-nV3hzNXGlWrnKVRmIAPCmmp9ILBUjh1xz0eFV8bKIqstjg__' 
                discount='' 
                label='Breed Dry Dog Food' 
                price='100' 
                rateNumber={35} 
                isNew={false} 
                showAddToWishlist={true} 
                showDeleteButton={false} 
                showPreview={true} 
                showAddToCartAlways={false} 
                colors={[]}
                width='100%' 
            />
            <Product 
                imgSrc='https://s3-alpha-sig.figma.com/img/e608/92a4/f0a3d5d144dce622c7338ec5be12908f?Expires=1745798400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=TlVb-fvwB~q2mM9nYZMZB73au600Z5fsTqPFxTlbI2ln4mMKKz~Ye67N7-5KbMGzY2GgGUsEXa2Fc96c~chG7LkEuxgk0SJY9FmigpxfLAPKszP71MD0yF-RJ8pBR1ICgVtoMqDVOTU0hnbGGXGARiSA9zloJK53f6odg1xsso~6d9gScipmkX7Ve5QyvfGPHipgWEAa~BHRgfqZGMp~XJ5yc-493P2~a~Nl9Jqz32KMktFBdNHjMpT3UxSXNfS3v6PHogJ2YvLu-xiMBMfBwZNudR6Y53ptqwqQh0dNorq0pYQCuPzrLqubusqyRXCslXywITsCuCxyy~dnaBHDFg__' 
                discount='' 
                label='CANON EO2 DSLR Camera' 
                price='360' 
                rateNumber={95} 
                isNew={false} 
                showAddToWishlist={true} 
                showDeleteButton={false} 
                showPreview={true} 
                showAddToCartAlways={false} 
                colors={[]}
                width='100%' 
            />
            <Product 
                imgSrc='https://s3-alpha-sig.figma.com/img/203b/e522/b7b02d10672f6f6147762cf52bfcfc54?Expires=1745798400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=UdkLzQurUmJApWVIvyTrpu~EHhOjvVPD-5GIJaapRWVELGMDubortx~cmyl8IPJEk0faxQro-UPgnFkYtZNRa3izWujtzBLAHMwSTYBtoF5HfZPhWRS8wIP0S4~NsolBkWworfq~W1rTetZpOpVxh8mMKi-DSjmvwoNgLmt-3457IWDKKmZiZnBXXv79Ji-xKecec1ozWUvreSMyhv1wx7pBdsMYQrSFq5SsRcHaaAT46~s3uK891~~g5CdiZIGOxFWkV-WrvGVy0cpGwEsUwY5xDQSF~mQTjBCS-wF7qXr9c1ksPGMYlQwStzsBpxZPxmIUo930szFiGhZB~dfMLA__' 
                discount='' 
                label='ASUS FHD Gaming Laptop' 
                price='700' 
                rateNumber={325} 
                isNew={false} 
                showAddToWishlist={true} 
                showDeleteButton={false} 
                showPreview={true} 
                showAddToCartAlways={false} 
                colors={[]}
                width='100%' 
            />
            <Product 
                imgSrc='https://s3-alpha-sig.figma.com/img/e7bd/d116/62ea1dfc2d615a5bb054e139a764f306?Expires=1745798400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=VBd4qmPcRoJXB8isXNehroXu1HOPEvsxbYdNyvPS9PZITSCeNWBdwoE2SpgWqEuo7LStqqpNKWdvD9XmSxxaUW6KcvRY3eBHAj5t7oNnj~pL2-q96lBNOSfcL~dfKvAnJFh~b-0vFsVV69nL7m~8yE~iGezEl4AeNNmHkteqXhOUUAzcQw0gTGHF1dJypm7tb3VLQOGWRzoam7rw3D9ssoxGoo7PeJv7NS2PkDIbd8ked2GJjoLsZk8j2Ixj7CtddozAoWHewAU3SU5j7UIuE5fna0~0eE3p53EnSROcUWcBx1e0fbP1CoSt73Iio10dpEilheFQgQZ4VLw7p~azpQ__' 
                discount='' 
                label='ASUS FHD Gaming Laptop' 
                price='700' 
                rateNumber={325} 
                isNew={false} 
                showAddToWishlist={true} 
                showDeleteButton={false} 
                showPreview={true} 
                showAddToCartAlways={false} 
                colors={[]}
                width='100%' 
            />
            <Product 
                imgSrc='https://s3-alpha-sig.figma.com/img/5f4e/a9ac/f805319ddf3897fc9daaf58559542260?Expires=1745798400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=eQvlAW4~Ub58simSID9mwSGy-g02T8Sfw7vAE8pykI8UE7rfddWZIevPxnh6~wm16vYbj1ZtZtay7~RnGHW5E9NHz7JQo6IksMKzm2AKOlt-xD-L7cyw58INinF6HVKCQ1fXgBHXa2Ajg12vFIgANnod8CvkE0joBC586kMBGcEfrRdsAJjaD-RFG1gW6YfzulVmXDQapUdH6rBhxfTh-iSLSZHZsRI2DAgAE0zC~jyA8ZWDdI9Yb7iYKOn3SpDcLASe6JZeaPT0u~fFBQjOqfRgE2ieHUP9giDgq7beVO~SfvPIayA0ZVUble1gg54KfMGQLofFGKPUmqPz6P4z4A__' 
                discount='' 
                label='Kids Electric Car' 
                price='960' 
                rateNumber={65} 
                isNew={true} 
                showAddToWishlist={true} 
                showDeleteButton={false} 
                showPreview={true} 
                showAddToCartAlways={false} 
                colors={['red', 'orange']}
                width='100%' 
            />
            <Product 
                imgSrc='https://s3-alpha-sig.figma.com/img/d0b7/bb25/884f6fdfc1357634d7d7b09e05755c2f?Expires=1745798400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=rd1Qj0yYEbrjVZpySl2GJtg3DXfUcsTZjJ6L68Awi7mD24PO2JREYQpLBx-QdX-kkW6GEXo2C9490MqxUGnlbcOioxUNzi277VUJWzXJe1jWho4aC-~P45zHFn2em9mFBVASe--Pf3saen~LnRE8q~~DQuUDAkPRdE0VxRskpvPsuYyZKbVKW~JvLTSR5JbGK8gkm5-eMIXYO60lfssK-VZmsWpGqxXiI6MwDLE5Rlp1aq27U4zyfYM3Vfe5xZ-~aN1RBRMWTZsO9s7s-X4e1kfiMHGfZHZ7V3bmXKOXEG00KzkDge68O2QW4onmKZN0~KsvqMh1iA3dOZLu4q29Hw__' 
                discount='' 
                label='Jr. Zoom Soccer Cleats' 
                price='1160' 
                rateNumber={95} 
                isNew={false} 
                showAddToWishlist={true} 
                showDeleteButton={false} 
                showPreview={true} 
                showAddToCartAlways={false} 
                colors={['yellow', 'red']}
                width='100%' 
            />
            <Product 
                imgSrc='https://s3-alpha-sig.figma.com/img/288e/0133/65fe639fccc1fe4168fca740ef1f85e7?Expires=1745798400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=GjTHvOW6OfJVQVI09k5bLMYC6SDl8M3LToTqvJmWxG~NjmgB4nubRELf4OKpnafHcq3gQet6ioZJ0mYr9fpQrX0SHmn5ZwCwjEVVskUEM9-upkWvj~9jy5NFelB7ACvCjK3aoZVcmaRvtarq7YM~9Qy3ChDWcpO~1tywFN1q-yc9zquaFbk~dqDny1md2f1nd82rE4j-uHnj9~CixOOsXKh3IpXq3TwFZJfEnhNutJFa0nURqwAUlancKfkbr4pnmzIkjo88kqpLfwLZH~tG6WrQ4q8ekgv1bNsumm56WErW8hjENCpntSXHuVbGoTCqUItXggS7dl0XSN3Olo10nA__' 
                discount='' 
                label='GP11 Shooter USB Gamepad' 
                price='650' 
                rateNumber={55} 
                isNew={true} 
                showAddToWishlist={true} 
                showDeleteButton={false} 
                showPreview={true} 
                showAddToCartAlways={false} 
                colors={['black', 'orange', 'red']}
                width='100%' 
            />
            <Product 
                imgSrc='https://s3-alpha-sig.figma.com/img/04a1/915f/d6cedd7c8b1073685c5f1be1b50e1ac6?Expires=1745798400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=aE3izh9Of3yS0x-dUxwvaytH9kzsYZNNo8gT2VJS3O8XgWqKDtW14oZV6umAs-NRZmXHZw1qk16Md8dVptU9cZ3~uzaESImOjQ4xy8Ldha9GPpNoaJo1FwMqBURkZEjTQ2VM5yWTwTB3ezO8JgCWggDZ6psJK~Q8tD-SQsTRAzlQP5G7wJNwDQ0hPqNZJrUNj-YH685JhKGaI-ZnwQCykFqKokBaaL6FaN1ZUozrxncGZULd7WcP1AsShFmYSBa5bEsBfJEV9U1PA3u6YY80TbvW5GnQGrXO9OD7CrwfnQpdv4WREdRKeSggJZZ8nJPo4QTza0ERHEj80pPJb1llQw__' 
                discount='' 
                label='Quilted Satin Jacket' 
                price='660' 
                rateNumber={55} 
                isNew={false} 
                showAddToWishlist={true} 
                showDeleteButton={false} 
                showPreview={true} 
                showAddToCartAlways={false} 
                colors={['black', 'red']}
                width='100%' 
            />
        </div>
        <div className={styles.viewProducts}>
            <Button name='View All Products' />
        </div>
    </main>
  )
}
