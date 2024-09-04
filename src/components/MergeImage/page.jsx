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
    const [moldura, setMoldura] = useState('/img/perfil_peter10.png')
    const [imagemMesclada, setImagemMesclada] = useState(null)
    const ref1 = useRef(null)
    const ref2 = useRef(null)
    const [estilos, setEstilos] = useState('none')

    const [personalizacao1, setPersonalizacao1]= useState([])
    const [personalizacao2, setPersonalizacao2]= useState([])


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
                    <h2>Escolha a moldura</h2>
                    <p>Clique na imagem e selecione a moldura desejada</p>
                    <div className={`flex gap-5 items-center justify-center`}>
                        <Image
                            src="/img/perfil_peter10.png"
                            width={150}
                            height={150}
                            alt=""
                            onClick={() => {
                                setMoldura('/img/perfil_peter10.png')
                                setPersonalizacao1({
                                    border: '1px solid var(--branco)',
                                    transition: 'border 0.3s ease-in-out',
                                    cursor: 'pointer',
                                })
                                setPersonalizacao2({
                                    border: 'none',
                                    transition: 'border 0.3s ease-in-out',
                                })
                            }}
                            style={personalizacao1}
                        />
                        <Image
                            src="/img/perfil_hashtag.png"
                            width={150}
                            height={150}
                            alt=""
                            onClick={() => {
                                setMoldura('/img/perfil_hashtag.png')
                                setPersonalizacao2({
                                    border: '1px solid var(--branco)',
                                    transition: 'border 0.3s ease-in-out',
                                    cursor: 'pointer',
                                })
                                setPersonalizacao1({
                                    border: 'none',
                                    transition: 'border 0.3s ease-in-out',
                                })
                            }}
                            style={personalizacao2}
                        />
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

                    {handleMoldura()}
                </div>
                <button onClick={handleSave} className={styles.btnMoldura}>
                    Criar Moldura
                </button>
                {imagemMesclada && (
                    <div className={styles.downloadArea}>
                        <Image
                            src={imagemMesclada}
                            alt="Imagem Mesclada"
                            width={200}
                            height={200}
                            className={styles.imagemMesclada}
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