import Image from "next/image"
import Logo from "@/components/Dorlei/LinkTree/Logo/page"
import Header from "@/components/Dorlei/Header/page"
import Links from "@/components/Dorlei/LinkTree/Links/page"
import Figurinhas from "@/components/Dorlei/Figurinhas/page"



export default function dorlei() {
    return (
        <div className={`py-5 px-3 flex flex-col gap-5 h-screen `}>
            <Image
                src={`/img/ferraco/11.png`}
                width={3000}
                height={3000}
                alt='Dorlei 40'
                className={`absolute z-[-1] w-[100%] flex justify-center items-center opacity-30 sm:w-[50%] xs:w-[50%]`}
            />
            <Header />
            <div className={`flex flex-wrap flex-col justify-center items-center gap-5 py-[50px] absolute top-0 bottom-0 left-0 right-0 z-[9999] lg:flex-row md:flex-row sm:flex-row xs:flex-row md:items-center xs:items-center`}>
                <Logo />
                <Links />
            </div>
            <Figurinhas className={`flex justify-center items-center overflow-hidden`} />
        </div>
    )
}