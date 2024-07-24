import Image from "next/image"
import green from "../public/green.png"
import red from "../public/red.png"
import black from "../public/black.png"
import yellow from "../public/yellow.png"
import fpframe from "../public/secpframe.png"
import { motion } from "framer-motion"
import howlogin from "../public/howlogin.png"
import howgroceries from "../public/howgroceries.png"
import howcheckout from "../public/howcheckout.png"
import { useMediaQuery } from 'react-responsive'




const element = { 
    hidden: { opacity: 0, y: 100 },
    visible : { opacity: 1, y: 0 }
}

export default function SS_steps (){

 
    const isLargeScreenSize = useMediaQuery({
        query: '(min-width: 768px)'
      })
    
      if (isLargeScreenSize) return ""
    

    return(
        <div className='grid gap-y-5 ss_step h-100p min-h-1/5 '>
            <motion.div
            initial="hidden"
            whileInView="visible"
            variants={element}
            className='h-[626px] relative overflow-y-hidden bg-[#A3D32A] rounded-[25px]'>
                <div className='relative w-100p h-100p'>
                    <Image src={green} alt='green' layout="fill" quality={90} objectFit="cover"  />
                </div>
                <div className='absolute w-100p h-100p top-0 flex flex-col'>
                    <div className=' grow  px-7 pt-7'>
                        <div className=''>
                            <span className='rounded-full w-40 h-40  bg-white inline-block text-center font-black leading-[40px]'>1</span>
                        </div>
                        <h2 className='text-white font-black leading-[40px] md:text-32 text-24 my-3'>Signup/Login</h2>
                            <p className='text-base text-white leading-[25px] '>Sign up to the platform by entering your credentials or login as an existing user and shop across multiple list of groceries at your fingertips.</p>
                    </div>
                    <div className='grow-[7] shrink-0 flex justify-center'>
                        <div className='relative sm:w-[224px] xs:w-[214px] md:h-[408px]'> 
                            <Image src={howlogin} alt="howlogin" layout="fill" quality={90} />
                        </div>
                    </div>
                </div>
            </motion.div>
            <motion.div
             initial="hidden"
             whileInView="visible"
             variants={element}
             className='h-[626px] relative overflow-y-hidden bg-[#FD4C5C] rounded-[25px]'>
                <div className='relative w-100p h-100p '>
                    <Image src={red} alt='red' layout="fill" quality={90} objectFit="cover" />
                </div>
                <div className='absolute w-100p h-100p top-0 flex flex-col'>
                    <div className=' grow  px-7 pt-7'>
                        <div className=''>
                            <span className='rounded-full w-40 h-40  bg-white inline-block text-center font-black leading-[40px]'>2</span>
                        </div>
                        <h2 className='text-white font-black leading-[40px] md:text-32 text-24 my-3'>Select stores</h2>
                            <p className='text-base text-white leading-[25px] '>Search through our availble stores and browse though multiple grocery items of your choice.</p>
                    </div>
                    <div className='grow-[7] shrink-0 flex justify-center'>
                        <div className='relative sm:w-[224px] xs:w-[214px] md:h-[408px]'>
                            <Image src={fpframe} alt="fpframe" layout="fill" quality={90} />
                        </div>
                    </div>
                </div>
            </motion.div>
            <motion.div
             initial="hidden"
             whileInView="visible"
             variants={element}
            className='h-[626px] relative overflow-y-hidden bg-[#000000] rounded-[25px]'>
                <div className='relative w-100p h-100p '>
                    <Image src={black} alt='black' layout="fill" quality={90} objectFit="cover"   />
                </div>
                <div className='absolute w-100p h-100p top-0 flex flex-col'>
                    <div className=' grow  px-7 pt-7'>
                        <div className=''>
                            <span className='rounded-full w-40 h-40  bg-white inline-block text-center font-black leading-[40px]'>3</span>
                        </div>
                        <h2 className='text-white font-black leading-[40px] md:text-32 text-24 my-3'>Select groceries</h2>
                            <p className='text-base text-white leading-[25px] '>Select groceries available for selected store, you cann add multiple groceris to your cart and easily checkout when ready.</p>
                    </div>
                    <div className='grow-[7] shrink-0 flex justify-center'>
                        <div className='relative xs:w-[214px] sm:w-[224px]  md:h-[408px]'>
                            <Image src={howgroceries} alt="howgroceries" layout="fill" quality={90}   />
                        </div>
                    </div>
                </div>
            </motion.div>
            <motion.div
             initial="hidden"
            whileInView="visible"
            variants={element}
            className='h-[626px] relative overflow-y-hidden bg-[#FFBB00] rounded-[25px]'>
                <div className='relative w-100p h-100p'>
                    <Image src={yellow} alt='yellow' layout="fill" quality={90} objectFit="cover"    />
                </div>
                <div className='absolute w-100p h-100p top-0 flex flex-col'>
                    <div className=' grow  px-7 pt-7'>
                        <div className=''>
                            <span className='rounded-full w-40 h-40  bg-white inline-block text-center font-black leading-[40px]'>4</span>
                        </div>
                        <h2 className='text-white font-black leading-[40px] md:text-32 text-24 my-3'>Checkout</h2>
                            <p className='text-base text-white leading-[25px] '>Add your preferable items to cart, confirm order details and complte your checkout. And wait for your item to be delivered to you by in minutes.</p>
                    </div>
                    <div className='grow-[7] shrink-0 flex justify-center'>
                        <div className='relative sm:w-[224px] xs:w-[214px] md:h-[408px]'>
                            <Image src={howcheckout} alt="howcheckout" layout="fill" quality={90}    />
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    )

}