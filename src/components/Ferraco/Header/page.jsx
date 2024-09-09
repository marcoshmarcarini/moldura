import Image from 'next/image'
import styles from './Header.module.css'

export default function Header() {
    const text = `Eleição 2024 Theodorico de Assis Ferraco Prefeito - 56.507.399/0001-56`
    return (
        <div className={styles.cabecalho}>
            <Image
                src={`/img/ferraco/logo-ferraco.png`}
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