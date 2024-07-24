import arrowup from "../public/arrowup.svg"
import arrowdown from "../public/arrowdown.svg"
import Image from "next/image"



export default function Accordion({ q, active, onToggle   }) {


    return(
            <>
                <div style={{ cursor: "pointer" }} className='flex justify-between items-center py-2' onClick={onToggle}>
                    <p className='font-black text-base 4xl:text-46 2xl:text-[20px] 3xl:text-24'>{q.question}</p>
                    <span className='md:w-[15px] md:h-[15px] text-center relative ml-2  4xl:w-[30px] 4xl:h-[30px] inline-block  w-[20px] h-[20px]'>
                        {active ? <Image  src={arrowup} layout="fill" alt='arrowup' /> : <Image  src={arrowdown}  layout="fill" alt='arrowdown' />} 
                    </span>
                </div>
                <p className={`replywrapper ${active ? "open" : "" } font-[circularstd]`}>{q.reply}</p>
            </>
    )

}
