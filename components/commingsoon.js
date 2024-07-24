import Image from "next/image"
import two from "../public/two.png"
import shopphone from "../public/shopphone.png"
import MediaQuery from "react-responsive"
import MobileButton from "./mobilebutton"
import { motion } from "framer-motion"
import styles from "./stroke.module.css"
import { useState } from "react"
import MessageAlert from "./messagealert"


export default function ComingSoon(){

    const [waitlist, joinWaitlist ]=useState("")
    const [ msg , setMsg ] = useState("")
    const [color, setColor] = useState("")

    

    const  handleSubmit = async e => {

      e.preventDefault()

      let res = await fetch("/api/waitlist", { 
        method: "POST",
        body: JSON.stringify({waitlist: waitlist }), 
        headers: {
          "Content-Type": "application/json",
        }
       })


       const { error } = await res.json()

       

       if(error) {
          setColor("red")
          setMsg(error )
       }else {
         setColor("green")
         setMsg("succesfull")
       }

       setTimeout(() => {
          setMsg("")
          setColor("")
       },1000)

      joinWaitlist("")
  }


    const right={
        visible: i => ({ opacity: 1,y: 0,transition:{delay: i *  0.2,} }),
        hidden: { opacity: 0, y: 100 },
    }

    const left= {
        visible: i => ({ opacity: 1, x: 0,transition:{delay: i *  0.2,} }),
        hidden: { opacity: 0, x: -100 },
    }
    

    return(
        <div className='min-h-1/5 md:min-h-1/3  xl:min-h-1/3 md:flex items-center flex-row md:my-0 mt-[100px] md:mt-0 md:mb-0  mb-[150px] 2xl:min-h-[120vh] 4xl:min-h-[70vh] '>
            <MessageAlert msg={msg}  color={color} />
            <div className='mx-auto min-h-1/4 md:min-h-1/3 xl:min-h-1/3  md:flex 4xl:min-h-1/3 w-[100%] 4xl:w-[80%] md:w-[90%] items-center '>
                <motion.div 
                    variants={left}
                    custom={1}
                    initial="hidden"
                    whileInView="visible"
                    className='sm_shopphone md:w-[60%] xl:w-[60%] 3xl:w-[60%] md:h-[65vh] lg:w-[60%]  lg:h-[130vh] xl:h-[905px] h-[75vh] relative  4xl:h-[130vh] 4xl:w-[70%] 2xl:h-[125vh] 3xl:h-[120vh] mb-[110px] md:mb-0 4xl:mb-0 '>
                    <Image src={shopphone} alt='shopphone' layout='fill' quality={100} />
                </motion.div>
                <motion.div 
                   variants={right}
                   custom={3}
                   initial="hidden"
                   whileInView="visible"
                   className='md:w-[45%] xl:w-[50%] lg:w-[40%] flex justify-center flex-col md:pr-6  text-center md:text-left'>
                    <div className='md:w-[100%] xl:w-[480px]  md:px-0 lg:pr-8 4xl:px-0 4xl:w-[80%] 3xl:w-85 2xl:w-85 px-5'>
                        <div className='relative md:w-[300px]  h-[50px] flex items-center text-center'>
                            <small className='absolute text-groshure-red font-medium xl:text-20 leading-3 text-center md:text-left w-[100%] block md:inline 4xl:text-46 2xl:text-[24px] 3xl:text-26'>Coming soon</small>
                            <div className='w-120 h-120 absolute -z-0 md:right-[40%] right-[30%] -top-10 4xl:w-[200px] 4xl:h-[200px]'>
                                <Image src={two} alt="two" layer="fill" className='opacity-30' />
                            </div>
                        </div>
                        <div>
                            <h4 className='font-[Righteous] xl:text-42 text-32 4xl:text-[120px] 4xl:my-10 2xl:text-46 3xl:text-60 xl:leading-10 2xl:leading-12 3xl:leading-[70px] 4xl:leading-[130px]'>Grocery shopping at your <span className={styles.shopstroke}>fingertips</span></h4>
                            <p className='text-20 md:text-base xl:text-20 my-4  font-[circularstd] 4xl:text-46 4xl:mb-10 2xl:text-[24px] 3xl:text-32 text-[#60635A] xl:py-1 4xl:py-5'>We're launching very soon! If you want to get informed about our launch date or wanting to get the latest information about our milestones, enter you email below to join the waitlist</p>
                        </div>
                        <form method="POST" onSubmit={handleSubmit}>
                            <div className='md:flex waitist_div border-[6px] wait_btn_div border-white w-100p sm:w-100p md:w-[90%] flex rounded-[50px] bg-white 2xl:text-24 3xl:text-[27px] text-16 md:text-base 4xl:text-46 4xl:rounded-[100px]'>
                            <div className='md:w-[50%] lg:w-[55%] xl:w-[65%]'>
                                <input type="text" placeholder="Enter email address" className='wait_input inline-block  md:py-2 lg:py-2 pl-7 py-1 rounded-l-[50px] 3xl:rounded-l-[100px] 4xl:rounded-l-[150px] w-[100%] 4xl:py-8 3xl:py-3' value={waitlist} onChange={(e) => joinWaitlist(e.target.value)}  />
                            </div>
                            <button className='hidden md:inline-block md:w-[50%] lg:w-[45%]  bg-groshure-red text-white rounded-[50px] 4xl:rounded-[150px]'>Join waitlist</button>
                            </div>
                            <MediaQuery maxWidth={540}>
                                <div className='mt-5'>
                                    <MobileButton backgroundColor="#FD4C5C" color="white" paddingTop={'10px'} paddingBottom={'10px'} width='70%' borderRadius='30px' fontSize={"18px"}>
                                        Join waitlist
                                    </MobileButton>
                                </div>
                            </MediaQuery>
                        </form> 
                        
                    </div>
                </motion.div>
            </div>
        </div>
    )

}
