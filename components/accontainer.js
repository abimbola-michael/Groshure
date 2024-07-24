import about from "../public/about.png"
import Image from "next/image"

export default function ACcontainer({ children }){

    return(
            <div className='min-h-[327px] relative rounded-[25px] z-10 4xl:min-h-[1050px] 4xl:mt-28 2xl:min-h-[427px] 3xl:min-h-[490px]'>
                <Image src={about} alt="accontainer -z-0" layout="fill" priority className='rounded-[25px]'/>
                <div className='absolute w-100p min-h-[100%]  py-12 4xl:py-[10rem] 2xl:py-[4rem] 3xl:py-[5rem] flex flex-col justify-evenly'>
                    { children }
                </div>
            </div>
    )

}

