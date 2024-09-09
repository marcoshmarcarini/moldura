import Image from "next/image"
import styles from './Figurinhas.module.css'
export default function Figurinhas() {
    const figurinhas = [
        '/img/ferraco/figurinhas/01.png',
        '/img/ferraco/figurinhas/10.png',
        '/img/ferraco/figurinhas/12.png',
        '/img/ferraco/figurinhas/14.png',
        '/img/ferraco/figurinhas/18.png',
        '/img/ferraco/figurinhas/08.png',
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
                        quality={100}
                        className={styles.figurinha_img}
                    />
                </div>
            ))}
        </div>
    )
}