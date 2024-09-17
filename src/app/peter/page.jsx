import Image from "next/image"
import Logo from "@/components/Peter/LinkTree/Logo/page"
import Header from "@/components/Peter/Header/page"
import Links from "@/components/Peter/LinkTree/Links/page"
import Figurinhas from "@/components/Peter/Figurinhas/page"


export default function peter() {
    return (
        <div className={`py-5 px-3 flex flex-col gap-5 h-screen`}>
            <Image
                src={`/img/10.png`}
                width={3000}
                height={3000}
                alt='Peter 10'
                className={`absolute z-[-1] w-[50%] flex justify-center items-center opacity-30`}
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