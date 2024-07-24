import two from "../public/two.png"
import Image from "next/image"
import yellowblack from "../public/yellowblack.svg"
import redcircle from "../public/redcircle.svg"
import greencircle from "../public/greencircle.svg"
import secpframe from "../public/secpframe.png"
import MediaQuery from "react-responsive"
import { motion } from "framer-motion"
import SS_steps from "./ss_steps"
import howlogin from "../public/howlogin.png"
import howgroceries from "../public/howgroceries.png"
import howcheckout from "../public/howcheckout.png"

 

let desktopGreenImage = {
    backgroundImage: "url('https://res.cloudinary.com/dimejiscloud/image/upload/q_auto:best/v1650921461/Frame_25_ckhso9.png')",
    backgroundColor:"#A3D32A",
}

let  desktopRedImage = {
    backgroundImage : "url('https://res.cloudinary.com/dimejiscloud/image/upload/q_auto:best/v1650921461/Frame_26_p1v5on.png')",
    backgroundColor:"#FD4C5C",
}

let desktopBlackImage = {
    backgroundImage : "url( 'https://res.cloudinary.com/dimejiscloud/image/upload/q_auto:best/v1650921464/Frame_27_c234eq.png')",
    backgroundColor:"#000000",
}

let desktopYellowImage = {
    backgroundImage : "url( 'https://res.cloudinary.com/dimejiscloud/image/upload/q_auto:best/v1650921464/Frame_29_qhk9op.png')",
    backgroundColor:"#FFBB00",
}


const element1 = {
    visible: i => ({ 
        opacity: 1, 
        y: 0,
        transition:{
        delay: i *  0.4,
      } }),
      hidden: { opacity: 0, y: -100 },
}

const element2 = {
    visible: i => ({ 
        opacity: 1, 
        x: 0,
        transition:{
        delay: i *  0.2,
      } }),
      hidden: { opacity: 0, x: -100 },
}

const right={
    visible: i => ({ 
        opacity: 1, 
        x: 0,
        transition:{
        delay: i *  0.2,
      } }),
      hidden: { opacity: 0, x: 100 },
}




export  default function Steps(){

    
    
    return(
        <div className='min-h-1/5'>
             <div className='mx-auto xl:my-auto min-h-1/5 w-85 md:w-[75%] xl:w-[78%] 2xl:w-[75%] 3xl:w-[70%] py-[200px] md:py-[80px] relative 4xl:w-[66%]'>
                <div className='flex justify-center relative h-[200px] xl:h-[100px] md:h-[100px] lg:h-[150px]'>
                        <div className='inline-block text-center absolute z-10'>
                            <div >
                                <small className=' font-medium text-base leading-3  font-[circularstd] 4xl:text-46 2xl:text-[22px] 3xl:text-25' >Steps</small>
                                <p className='font-[Righteous] text-36 2xl:text-42'><span className='text-groshure-green 4xl:text-74 3xl:text-46'>How it</span> <span className='text-groshure-red 4xl:text-74 2xl:text-42 3xl:text-46'>works?</span></p>
                            </div>
                        </div>
                        <div className='absolute w-120 h-120 xs:right-0  md:right-[25%] xl:right-[35%] 2xl:right-[37%] -top-3 -z-0  4xl:w-[200px] 4xl:h-[200px]' >
                            <Image src={two} alt='two' layout="fill" className='opacity-30'/>
                        </div>
                </div>
                <MediaQuery  maxWidth={540}>
                    <SS_steps />
                </MediaQuery>
                <MediaQuery minWidth={541}>
                    <div className='d_hidden_steps hidden md:block xl:block w-[450px] h-[450px]  absolute top-[120px] -left-[100px] 4xl:w-[850px] 4xl:h-[850px] 4xl:-left-[250px] 4xl:top-[10px]'>
                        <Image src={redcircle} alt="redcircle" layout="fill" />
                    </div>
                    <div className='d_hidden_steps hidden md:block xl:block w-[550px] h-[550px]  absolute top-[40%] -right-[100px] 4xl:w-[850px] 4xl:h-[850px] 4xl:-right-[200px]'>
                        <Image src={yellowblack} alt="yellowblack" layout="fill" />
                    </div>
                    <div className='d_hidden_steps hidden md:block xl:block w-[450px] h-[450px]  absolute  -left-[100px] bottom-0 4xl:w-[850px] 4xl:h-[850px] 4xl:-left-[270px] 4xl:-bottom-[100px]'>
                        <Image src={greencircle} alt="greencircle" layout="fill" />
                    </div>
                    <div  className='py-16 px-20 md:px-0 xl:px-20 grid gap-3  font-[circularstd] 4xl:mt-[100px] 4xl:gap-8'>
                    <motion.div 
                    variants={element1}
                    custom={2}
                    initial="hidden"
                    whileInView="visible"
                    style={desktopGreenImage}
                    className='lazy' id="span4">
                            <div className='w-[50%] h-[100%] flex items-center'>
                                    <div className=' py-[90px] min-h-[100%] xl:min-h-[40px] justify-between px-10 4xl:px-[85px] flex flex-col'>
                                        <div>
                                            <span className='rounded-full w-40 h-40  bg-white inline-block text-center font-black leading-[40px] 4xl:w-[80px] 4xl:h-[80px] 4xl:leading-[80px]  4xl:text-42  2xl:text-[30px] 2xl:w-[50px] 2xl:h-[50px] 2xl:leading-[50px] 3xl:text-36 3xl:w-[60px] 3xl:h-[60px] 3xl:leading-[60px]'>1</span>
                                        </div>
                                        <h2 className='text-white font-black leading-[40px] xl:text-32 text-24 4xl:text-74 4xl:py-[15px] 4xl:my-10 xl:my-4 2xl:text-[40px] 2xl:my-7 3xl:text-42 3xl:my-9 md:text-27'>Signup/Login</h2>
                                        <p className='text-base text-white leading-[25px] 4xl:text-42 4xl:leading-[57px] 2xl:text-[22px] 2xl:leading-7 3xl:text-25'>Sign up to the platform by entering your credentials or login as an existing user and shop across multiple list of groceries at your fingertips.</p>
                                    </div>
                            </div>
                            <div className='w-[50%] h-[100%] flex items-end justify-center'>
                                <div className=' w-[230px] h-[95%] relative 4xl:w-[560px] 2xl:w-[300px]'>
                                    <Image src={howlogin} alt="howlogin"  layout="fill" quality={85}  />
                                </div>
                            </div>
                        </motion.div>
                        <div className='col-span-4  flex justify-between'>
                        <motion.div
                        variants={element2}
                        custom={1}
                        initial="hidden"
                        whileInView="visible"
                        style={desktopRedImage}
                        className='lazy overflow-hidden' id="span3">
                            <div className='4xl:h-[40%] flex items-center  xl:h-[40%] grow' >
                                <div className='xl:p-12 md:p-[1.5rem]'>
                                    <span className='rounded-full w-40 h-40  bg-white inline-block text-center font-black leading-[40px] 4xl:w-[80px] 4xl:h-[80px] 4xl:leading-[80px] 4xl:text-42 2xl:text-[30px] 2xl:w-[50px] 2xl:h-[50px] 2xl:leading-[50px] 3xl:text-36 3xl:w-[60px] 3xl:h-[60px] 3xl:leading-[60px]'>2</span>
                                    <h2 className='text-white font-black leading-[40px] text-32 mt-5 4xl:text-74 4xl:py-[15px] 4xl:my-10 2xl:text-[40px] 2xl:my-7 3xl:text-42 3xl:my-9 md:text-27'>Select stores</h2>
                                    <p className='text-base text-white leading-[25px] mt-3 4xl:text-42 2xl:text-[22px] 2xl:leading-7 4xl:leading-[57px] 3xl:text-25'>Search through our availble stores and browse though multiple grocery items of your choice.</p>
                                </div>
                             </div>
                            <div className='h-[55%] w-[100%] flex justify-center  4xl:h-[60%]'>
                                <div className='groceries relative 2xl:block 2xl:h-[100%] w-[220px] 4xl:w-[620px] 4xl:h-[100%] 2xl:w-[300px] oveflow-hidden'>
                                    <MediaQuery minWidth={2000}>
                                            <Image src={secpframe} alt="howgroceries" layout="responsive" quality={85}  />
                                    </MediaQuery>
                                    <MediaQuery maxWidth={2000}>
                                        <Image src={secpframe} alt="howgroceries" layout="responsive"  quality={85} />
                                    </MediaQuery>
                                </div>
                            </div>
                        </motion.div>
                        <motion.div
                        variants={right}
                        custom={1}
                        initial="hidden"
                        whileInView="visible"
                        style={desktopBlackImage}
                        className='lazy overflow-hidden' id="span3">
                            <div className='4xl:h-[40%] flex items-center  xl:h-[40%] grow' >
                                <div className='xl:p-12 md:p-[1.5rem]'>
                                    <span className='rounded-full w-40 h-40  bg-white inline-block text-center font-black leading-[40px] 4xl:w-[80px] 4xl:h-[80px] 4xl:leading-[80px] 4xl:text-42 2xl:text-[30px] 2xl:w-[50px] 2xl:h-[50px] 2xl:leading-[50px] 3xl:text-36 3xl:w-[60px] 3xl:h-[60px] 3xl:leading-[60px]'>3</span>
                                    <h2 className='text-white font-black leading-[40px] text-32 mt-5 4xl:text-74 4xl:py-[15px] 4xl:my-10 2xl:text-[40px] 2xl:my-7 3xl:text-42 3xl:my-9 md:text-27'>Select groceries</h2>
                                    <p className='text-base text-white leading-[25px] mt-3 4xl:text-42 2xl:text-[22px] 2xl:leading-7 4xl:leading-[57px] 3xl:text-25'>Select groceries available for selected store, you can add multiple groceries to your cart and easily checkout when ready.</p>
                                </div>
                             </div>
                            <div className='h-[55%] w-[100%] flex justify-center  4xl:h-[60%]'>
                                <div className='groceries relative 2xl:block 2xl:h-[100%] w-[220px] 4xl:w-[620px] 4xl:h-[100%] 2xl:w-[300px] oveflow-hidden'>
                                    <MediaQuery minWidth={2000}>
                                            <Image src={howgroceries} alt="howgroceries" layout="responsive"  quality={85} />
                                    </MediaQuery>
                                    <MediaQuery maxWidth={2000}>
                                        <Image src={howgroceries} alt="howgroceries" layout="responsive" quality={85} />
                                    </MediaQuery>
                                </div>
                            </div>
                        </motion.div>
                        </div>
                        <motion.div
                        variants={element1}
                        custom={2}
                        initial="hidden"
                        whileInView="visible"
                        style={desktopYellowImage}
                        className='lazy' id="span5">
                             <div className='w-[50%] h-[100%] flex items-center'>
                                    <div className=' py-[90px] min-h-[100%] xl:min-h-[40px]  justify-between px-10 4xl:px-[85px] flex flex-col'>
                                        <div >
                                            <span  className='rounded-full w-40 h-40  bg-white inline-block text-center font-black leading-[40px] 4xl:w-[80px] 4xl:h-[80px] 4xl:leading-[80px]  4xl:text-42  2xl:text-[30px] 2xl:w-[50px] 2xl:h-[50px] 2xl:leading-[50px] 3xl:w-[60px] 3xl:h-[60px] 3xl:leading-[60px]'>4</span>
                                        </div>
                                        <h2 className='text-white font-black leading-[40px] xl:text-32 text-24 4xl:text-74 4xl:py-[15px] 4xl:my-10 xl:my-4 2xl:text-[40px] 2xl:my-7 3xl:text-42 3xl:my-9 md:text-27'>Checkout</h2>
                                        <p className='text-base text-white leading-[25px] 4xl:text-42 4xl:leading-[57px] 2xl:text-[22px] 2xl:leading-7 3xl:text-25'>Add your preferable items to cart, confirm order details and complte your checkout. And wait for your item to be delivered to you by in minutes.</p>
                                    </div>
                            </div>
                            <div className='w-[50%] h-[100%] flex items-end justify-center'>
                                <div className=' w-[230px] h-[95%] relative 4xl:w-[560px] 2xl:w-[300px]'>
                                    <Image src={howcheckout} alt="howcheckout"  layout="fill" quality={90}  />
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </MediaQuery>
             </div>
        </div>
        
    )

}
