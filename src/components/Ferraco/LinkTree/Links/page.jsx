'use client'
import styles from './Links.module.css'
import Link from "next/link"
import Image from "next/image"


export default function Links() {
    const cards = [
        {
            url: 'https://www.facebook.com/theodorico.ferraco',
            texto: 'Acesse meu Facebook',
            icon: 'https://img.icons8.com/ios-filled/50/ffffff/facebook--v1.png'
        },
        {
            url: 'https://www.instagram.com/dep.ferraco/',
            texto: 'Acesse meu Instagram',
            icon: 'https://img.icons8.com/ios-filled/50/ffffff/instagram-new--v1.png'
        },
        {
            url: '/ferraco/moldura',
            texto: 'Crie sua moldura personalizada',
            icon: 'https://img.icons8.com/ios-filled/50/ffffff/portrait.png'
        },
        {
            url: '/ferraco/downloads/figurinhas.rar',
            texto: 'Baixe nossas Figurinhas',
            icon: 'https://img.icons8.com/ios-filled/50/ffffff/download.png'
        }
    ]


    return (
        <div className={styles.links_content}>
            {cards.map((card, index) => {
                return (
                    <div key={index} className={styles.links_cards}>
                        <Link href={card.url} target='_blank'>
                        <Image
                        src={card.icon}
                        width={30}
                        height={30}
                        />
                            <p className="text-wrap">{card.texto}</p>
                        </Link>
                    </div>
                )
            })}
        </div>
    )
}