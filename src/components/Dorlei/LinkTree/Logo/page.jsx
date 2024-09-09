import Image from 'next/image'
import styles from './Logo.module.css'
export default function Logo() {

    return (
        <div className={styles.logo_content}>
            <Image
                src={`/img/dorlei/foto-dorlei.png`}
                width={200}
                height={200}
                alt='Dorlei'
                className={styles.logo_img}
            />
        </div>
    )
}