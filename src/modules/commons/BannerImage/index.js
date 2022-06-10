import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import useStyles from '@core_modules/commons/BannerImage/style';

const BannerImage = ( { href, title, src, label } ) => {
    const styles = useStyles();
    return (
        <div className={styles.container}>
            <div className={styles.images}>
                <Image src={src} layout='fill' alt={title}/>
            </div>
            <div className={styles.content}>
                <h2 className={styles.title}>{title}</h2>
                <Link href= { href }>
                    <a className={styles.link}>
                        <span className={styles.button}> { label }</span>
                    </a>
                </Link>        
            </div>
        </div>
    );
}

export default BannerImage;