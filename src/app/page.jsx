'use client'

import Link from "next/link"
import Image from "next/image"

export default function Home() {

  return (
    <div className={`flex flex-col items-center justify-center  p-5 gap-5 h-screen`}>
      <h1 className={`text-3xl font-bold`}>Escolha o seu candidato!</h1>
      <div className={`flex items-center justify-center  p-5 gap-5`}>
        <Link
          href={'/ferraco'}
          className={`flex flex-col items-center justify-center rounded-full`}>
          <Image
            src={`/img/ferraco/ferraco_perfil.png`}
            width={300}
            height={300}
            alt={'Ferraco'}
            className={`rounded-full relative z-50 hover:scale-[1.05] hover:transition-transform peer shadow shadow-slate-300`}
          />
          <p className={`flex relative z-10 opacity-0 translate-y-[-100px] peer-hover:translate-y-[25px] peer-hover:transition-opacity peer-hover:opacity-100`}>
            Ferraço
          </p>
        </Link>
        <Link
          href={'/peter'}
          className={`flex flex-col items-center justify-center rounded-full`}
        >
          <Image
            src={`/img/peter/peter_perfil.png`}
            width={300}
            height={300}
            alt={'Ferraco'}
            className={`rounded-full relative z-50 hover:scale-[1.05] hover:transition-transform peer shadow shadow-slate-300`}
          />
          <p className={`flex relative z-10 opacity-0 translate-y-[-100px] peer-hover:translate-y-[25px] peer-hover:transition-opacity peer-hover:opacity-100 `}>
            Peter Costa
          </p>
        </Link>
        <Link
          href={'/dorlei'}
          className={`flex flex-col items-center justify-center rounded-full`}
        >
          <Image
            src={`/img/dorlei/dorlei_perfil.png`}
            width={300}
            height={300}
            alt={'Ferraco'}
            className={`rounded-full relative z-50 hover:scale-[1.05] hover:transition-transform peer shadow shadow-slate-300`}
          />
          <p className={`flex relative z-10 opacity-0 translate-y-[-100px] peer-hover:translate-y-[25px] peer-hover:transition-opacity  peer-hover:opacity-100`}>
            Dorlei Fontao
          </p>
        </Link>
      </div>

    </div>
  )
}
