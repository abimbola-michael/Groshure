import Image from "next/image"
import pizza from "../public/pizza.png"
import rectangle from "../public/rectangle.png"
import two from "../public/two.png"
import grobask from "../public/grobask.png"
import grodelivery from "../public/grodelivery.png"
import grotime from "../public/grotime.png"
import { motion } from "framer-motion"
import { useRef } from "react"



const parent = {
    visible: {
        opacity:1,
        y:0,
        transition: {
            when: "beforeChildren",
            staggerChildren: 0.3,
        },
    },
    hidden: {
        opacity: 1,
        y:50,
        transition: {
        when: "afterChildren",
      },
    }
}

const child = {
    visible: i => ({ 
        opacity: 1, 
        y: 0,
        transition:{
        delay: i *  0.2,
      } }),
      hidden: { opacity: 0, y: 50 },
}




export default function Features() {

    const scrollRef = useRef(null)

    
    return(
        <div id='features' className='min-h-[50vh] relative 4xl:min-h-[60vh]' ref={scrollRef}>
            <div className='flex justify-between mt-20 md:mt-0'>
                <div className="md:h-[150px] md:w-[150px] xl:w-[205px] xl:h-[205px] right-0 top-0 4xl:w-[400px] 4xl:h-[400px] 3xl:w-[250px] 3xl:h-[250px]"></div>
                <div className='flex justify-center relative grow' >
                    <motion.div 
                    initial={{ opacity:0, y:100 }}
                    whileInView={{ opacity: 1, y:0}} 
                    className='text-center relative flex flex-col justify-end mb-3'>
                        <small className='font-medium text-base leading-3  font-[circularstd] 4xl:text-42 2xl:text-[22px] 3xl:text-[25px]' >Features</small>
                        <p className='font-[Righteous] text-36 4xl:text-[74px] 2xl:text-42 3xl:text-[46px] my-2'><span className='text-groshure-green'>Why</span> <span className='text-groshure-red'>Groshure?</span></p>
                        <div className='absolute w-120 h-120 md:-right-10 -right-3 4xl:w-[200px] 4xl:h-[200px]' >
                            <Image src={two} alt='two' layout="fill" className='opacity-30' />
                        </div> 
                    </motion.div>
                </div>
                <div className='md:h-[150px] md:w-[150px] xl:w-[205px] xl:h-[205px] right-0 top-0 4xl:w-[450px] 4xl:h-[470px] 3xl:w-[250px] 3xl:h-[250px]'  >
                    <motion.div
                    initial={{ x: 100 }}
                    whileInView={{ x:0 , transition: {
                        delay: 0.5
                    }}}
                    className='relative w-100p h-100p hidden md:block'>
                        <Image src={pizza} alt='pizza' layout="fill" quality={90} priority objectFit="cover"  />
                    </motion.div>
                </div>
            </div>
            <div className='mx-auto  w-85'>
                <motion.div
                variants={parent}
                initial="hidden"
                whileInView="visible"
                className='grid-cols-1 mt-[83px] md:grid-cols-3 xl:mt-[50px] 4xl:mt-[250px] 3xl:mt-[130px] grid grid-rows-3  md:grid-rows-none  xl:grid-cols-3 xl:gap-2 font-[circularstd] xl:w-[90%] mx-auto md:gap-y-0 gap-y-10'>
                        <motion.div
                        custom={1}
                        variants={child}
                        className=' text-center '>
                            <div className='flex justify-center '>
                                <div className=' flex  p-[10px] rounded-full  justify-center shadow-bfs xl:mr-4 mx-auto xl:mx-0 2xl:p-4  4xl:p-[20px]'>
                                    <div className='w-[70px] h-[70px] 2xl:w-[90px] 2xl:h-[90px] relative 4xl:w-[155px] 4xl:h-[155px]'>
                                        <Image src={grobask} alt='grobask'  priority layout="fill" />
                                    </div>
                                </div>
                            </div>
                            <div className='p-7'>
                                <h4 className='font-medium text-18 leading-5 mb-2 4xl:text-46 4xl:my-10 3xl:text-[27px] 2xl:text-24' >Multi-Grocery Shopping</h4>
                                <p className='text-sm xl:text-sm text-[#718096] 4xl:text-42 4xl:px-10 2xl:text-18 3xl:text-[24px]'>Our platform will enable you shop from multiple local grocery stores of your choice</p>
                            </div>
                        </motion.div>
                        <motion.div
                        custom={2}
                        variants={child}
                        className=' text-center '>
                            <div className='flex justify-center '>
                                <div className=' flex  p-[10px] rounded-full  justify-center shadow-bfs xl:mr-4 mx-auto xl:mx-0 2xl:p-4 4xl:p-[20px]'>
                                    <div className=' w-[70px] h-[70px]  2xl:w-[90px] 2xl:h-[90px] relative 4xl:w-[155px] 4xl:h-[155px]'>
                                        <Image src={grotime} alt='grotime'  priority layout="fill" />
                                    </div>
                                </div>
                            </div>
                            <div className='p-7'>
                                <h4 className='font-medium text-18 leading-5 mb-2 4xl:text-46 4xl:my-10 2xl:text-24 3xl:text-[27px]' >Time and Cost Saving</h4>
                                <p className='text-sm text-[#718096] 4xl:text-42 4xl:px-10 2xl:text-18 3xl:text-[24px]'>Your time and how much you spend is of utmost importance to us and we'll always ensure that it is well taken care of through the range of services we provide</p>
                            </div>
                        </motion.div>
                        <motion.div
                        custom={3}
                        variants={child}
                        className=' text-center '>
                            <div className='flex justify-center '>
                                <div className=' flex p-[10px] rounded-full  justify-center shadow-bfs xl:mr-4 mx-auto xl:mx-0 2xl:p-4 4xl:p-[20px]'>
                                    <div className=' w-[70px] h-[70px] 2xl:w-[90px] 2xl:h-[90px] relative 4xl:w-[155px] 4xl:h-[155px]'>
                                        <Image src={grodelivery} alt='grodelivery'  priority layout="fill" />
                                    </div>
                                </div>
                            </div>
                            <div className='p-7'>
                                <h4 className='font-medium text-18 leading-5 mb-2 4xl:text-46 4xl:my-10 2xl:text-24 3xl:text-[27px]' >Same Day & Scheduled Delivery</h4>
                                <p className='text-sm text-[#718096] 4xl:text-42 4xl:px-10 2xl:text-18 3xl:text-[24px]'>We'll provide you with options to determine when you want your shopping and delivery done.</p>
                            </div>
                        </motion.div>
                </motion.div>
            </div>
            <div >
                <div className='hidden md:block md:h-[150px] md:w-[150px] xl:w-[230px] xl:h-[240px] left-0 bottom-0 4xl:w-[550px] 4xl:h-[550px] 3xl:w-[320px] 3xl:h-[320px] '>
                    <motion.div
                    initial={{ x: -100 }}
                    whileInView={{ x:0 , transition: {
                        delay: 0.8
                    }}}

                    className='relative w-100p h-100p z-0'>
                        <Image src={rectangle} alt='rectangle' layout="fill" quality={90} priority objectFit="cover" />
                    </motion.div>
                </div>
            </div>
        </div>
    )

}
