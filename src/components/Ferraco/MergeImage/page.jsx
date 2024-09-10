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
    const [moldura, setMoldura] = useState('/img/ferraco/moldura/moldura_ferraco01.png')
    const [imagemMesclada, setImagemMesclada] = useState(null)
    const ref1 = useRef(null)
    const ref2 = useRef(null)
    const [estilos, setEstilos] = useState('none')

    const [personalizacao1, setPersonalizacao1] = useState([])
    const [personalizacao2, setPersonalizacao2] = useState([])

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
            }
        }
        reader.readAsDataURL(foto)
    }


    const handleMoldura = () => {
        if (imagem) {
            return (
                <div className={`flex flex-col gap-5 items-center justify-center text-center`}>
                    
                    <p className={styles.switchMoldura}>
                       3) Escolha a moldura desejada clicando na imagem abaixo.</p>
                    <div className={`flex gap-5 items-center justify-center`}>
                        <Image
                            src="/img/ferraco/moldura/moldura_ferraco01.png"
                            width={100}
                            height={100}
                            alt=""
                            onClick={() => {
                                setMoldura('/img/ferraco/moldura/moldura_ferraco01.png')
                                setPersonalizacao1({
                                    border: '2px solid var(--branco)',
                                    transition: 'border 0.3s ease-in-out',
                                    cursor: 'pointer',
                                })
                                setPersonalizacao2({
                                    border: 'none',
                                    transition: 'border 0.3s ease-in-out',
                                })
                            }}
                            style={personalizacao1}
                            className={styles.imgMoldura}
                        />
                        {/* <Image
                            src="/img/perfil_hashtag.png"
                            width={100}
                            height={100}
                            alt=""
                            onClick={() => {
                                setMoldura('/img/perfil_hashtag.png')
                                setPersonalizacao2({
                                    border: '2px solid var(--branco)',
                                    transition: 'border 0.3s ease-in-out',
                                    cursor: 'pointer',
                                })
                                setPersonalizacao1({
                                    border: 'none',
                                    transition: 'border 0.3s ease-in-out',
                                })
                            }}
                            style={personalizacao2}
                            className={styles.imgMoldura}
                        /> */}
                    </div>
                </div>
            )
        }
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
    }


    return (
        <div className={`${poppins.className}`}>
            <div className={styles.molduraContent}>
                <p className={styles.molduraTxt}>
                   1) Anexe uma imagem abaixo e crie sua moldura personalizada.
                </p>
                <div className={styles.inputContent}>
                    <label
                        htmlFor="inputUp"
                        className={styles.inputUpLabel}
                    >
                        2) Clique aqui para anexar sua imagem
                    </label>
                    <input
                        type="file"
                        onChange={uploadImage}
                        className={styles.inputUp}
                        id="inputUp"
                    />
                    <div className={styles.imagemUpContent}>
                        <img
                            src={imagem}
                            alt=""
                            className={styles.imagemUpfront}
                            style={{ display: estilos }}
                        />
                        {imagemMesclada && (
                            <div className={styles.imagemMescladaContent}>
                                <img width="50" height="50" src="https://img.icons8.com/ios-filled/50/ffffff/arrow.png" alt="arrow" />
                                <Image
                                    src={imagemMesclada}
                                    alt="Imagem Mesclada"
                                    width={100}
                                    height={100}
                                    className={styles.imagemMesclada}
                                />
                            </div>
                        )}
                    </div>
                    {handleMoldura()}
                    <button onClick={handleSave} className={styles.btnMoldura}>
                        4) Criar Moldura
                    </button>
                    {imagemMesclada && (
                        <div className={styles.downloadArea}>
                            <a
                                href={imagemMesclada}
                                download="imagem_mesclada.png"
                                className={styles.btnDownload}
                            >
                                5) Baixar Moldura
                            </a>
                        </div>
                    )}


                </div>


            </div>
        </div>
    )

}