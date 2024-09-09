import Image from 'next/image'
import styles from './Header.module.css'

export default function Header() {
    const text = `PETER NOGUEIRA DA COSTA - 56.671.145/0001-79`
    return (
        <div className={styles.cabecalho}>
            <Image
                src={`/img/peter/Peter_10.png`}
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