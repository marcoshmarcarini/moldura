import Image from 'next/image'
import styles from './Logo.module.css'
export default function Logo() {

    return (
        <div className={styles.logo_content}>
            <Image
                src={`/img/peter_perfil.png`}
                width={200}
                height={200}
                alt='Peter Costa'
                className={styles.logo_img}
            />
        </div>
    )
}