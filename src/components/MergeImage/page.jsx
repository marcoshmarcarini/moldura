'use client'
import { useRef, useState } from 'react'
import Image from 'next/image'
import mergeImages from 'merge-images'
import styles from './MergeImage.module.css'
import { Poppins } from 'next/font/google'


const poppins = Poppins({
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
    subsets: ['latin'],
    display: 'swap',
})

export default function MergeImage() {

    const [imagem, setImagem] = useState('')
    const [moldura, setMoldura] = useState('/img/moldura.png')
    const [imagemMesclada, setImagemMesclada] = useState(null)
    const ref1 = useRef(null)
    const ref2 = useRef(null)
    const [estilos, setEstilos] = useState('none')



    const uploadImage = (uploadEvent) => {
        const foto = uploadEvent.target.files[0]
        const reader = new FileReader()

        reader.onload = (event) => {
            const img = document.createElement('img')
            img.src = event.target.result

            img.onload = () => {
                const canvas = document.createElement('canvas')
                const ctx = canvas.getContext('2d')

                canvas.width = 1080
                canvas.height = 1080

                const aspectRatio = img.width / img.height
                let drawWidth, drawHeight, offsetX, offsetY

                if (aspectRatio > 1) {
                    drawWidth = canvas.width
                    drawHeight = canvas.width / aspectRatio
                    offsetX = 0
                    offsetY = (canvas.height - drawHeight) / 2
                } else {
                    drawWidth = canvas.height * aspectRatio
                    drawHeight = canvas.height
                    offsetX = (canvas.width - drawWidth) / 2
                    offsetY = 0
                }

                ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight)

                const resizedImageUrl = canvas.toDataURL('image/jpeg')
                setImagem(resizedImageUrl)
                setEstilos('flex')
            };
        };

        reader.readAsDataURL(foto)
    }

    /**
     * Merge the images and save the result to the state
     */
    const handleSave = () => {
        mergeImages([
            {
                src: imagem,
                x: 0,
                y: 0
            }, {
                src: moldura,
                x: 0,
                y: 0
            }
        ]).then(b64 => setImagemMesclada(b64))

        console.log(imagemMesclada)
    }


    return (
        <div className={`${poppins.className}`}>
            <div className={styles.molduraContent}>
                <p className={styles.molduraTxt}>
                    Insira sua uma foto e crie sua própria moldura personalizada
                </p>
                <div className={styles.inputContent}>
                    <label
                        htmlFor="inputUp"
                        className={styles.inputUpLabel}
                    >
                        Clique aqui para anexar sua imagem
                    </label>
                    <input
                        type="file"
                        onChange={uploadImage}
                        className={styles.inputUp}
                        id="inputUp"
                    />
                    <img
                        src={imagem}
                        alt=""
                        className={styles.imagemUpfront}
                        style={{ display: estilos }}
                    />
                </div>
                <button onClick={handleSave} className={styles.btnMoldura}>
                    Criar Moldura
                </button>
                {imagemMesclada && (
                    <div className={styles.downloadArea}>
                        <Image
                            src={imagemMesclada}
                            alt="Imagem Mesclada"
                            width={300}
                            height={300}
                        />
                        <a
                            href={imagemMesclada}
                            download="imagem_mesclada.png"
                            className={styles.btnDownload}
                        >
                            Download
                        </a>
                    </div>
                )}
            </div>
        </div>
    )

}