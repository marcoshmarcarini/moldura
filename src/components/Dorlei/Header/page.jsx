import Image from 'next/image'
import styles from './Header.module.css'

export default function Header() {
    const text = `Eleição 2024 Dorlei Fontao da Cruz - 56.473.420/0001-40`
    return (
        <div className={styles.cabecalho}>
            <Image
                src={`/img/dorlei/logo-dorlei.png`}
                width={150}
                height={50}
                alt='Peter Costa Logo'
                className={styles.logo}
            />
            <p className={styles.texto}>
                {text.toUpperCase()}
            </p>
        </div>
    )
}