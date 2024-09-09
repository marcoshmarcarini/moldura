import Image from "next/image"
import styles from './Figurinhas.module.css'
export default function Figurinhas() {
    const figurinhas = [
        '/img/peter/figurinhas/01.png',
        '/img/peter/figurinhas/02.png',
        '/img/peter/figurinhas/03.png',
        '/img/peter/figurinhas/10.png',
        '/img/peter/figurinhas/11.png',
        '/img/peter/figurinhas/13.png',
    ]
    return (
        <div className={styles.figurinha_content}>
            {figurinhas.map((figurinha, index) => (
                <div key={index} className={styles.figurinhas}>
                    <Image
                        src={figurinha}
                        width={Math.random() * (400 - 250) + 250}
                        height={Math.random() * (400 - 250) + 250}
                        alt='figurinha'
                        quality={50}
                        className={styles.figurinha_img}
                    />
                </div>
            ))}
        </div>
    )
}