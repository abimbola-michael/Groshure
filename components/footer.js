
import logo from "../public/logo.png"
import Image from "next/image"
import { useRouter } from "next/router"
import MediaQuery from "react-responsive"
import { motion } from "framer-motion"
import MobileButton from "./mobilebutton"
import { useState } from "react"
import MessageAlert from "./messagealert"

const element ={
    hidden: { opacity: 0 ,y: 100 },
    visible:{ opacity: 1, y : 0 }
}


export default function Footer() {

    const router = useRouter() 
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


    return(
        <div className='min-h-[40vh]  font-[circularstd] relative z-0 4xl:min-h-1/3'>
            <MessageAlert msg={msg} color={color} />
            <div className={router.asPath.slice(1,router.asPath.length) === "contact" ? "text-center md:p-[200px] p-[200px]  pt-[200px]  md:pb-[100px] bg-[#FFFAEB] md:px-0 px-[40px] 4xl:pt-[650px] 4xl:pb-[250px]" : "text-center md:p-[80px]  md:px-0 px-6 py-20 3xl:py-24  4xl:py-[250px] bg-[#FFFAEB]" }>
                <motion.div 
                    initial={{ y: 100 }}
                    whileInView={{ y: 0 }}
                    className='md:text-40 text-36 font-black  4xl:text-[110px] 2xl:text-[54px] 3xl:text-60'>Get <span className='text-groshure-red'>notified</span> when we launch 🚀</motion.div>
                <motion.div
                    initial={{ y: 100 }}
                    whileInView={{ y: 0 }}
                    className='text-18 md:w-[500px] mx-auto mt-3 mb-8 text-[#797B89] 4xl:text-46 4xl:w-[1500px] 2xl:text-22 4xl:my-12 2xl:my-8 3xl:text-25 3xl:w-[700px] 3xl:py-1 2xl:w-[630px] 4xl:py-3'>We're launching very soon! If you want to get informed about our launch date or wanting to get the latest information about our milestones, enter you email below to join the waitlist.</motion.div>
                    <motion.div 
                    initial={{ x: -100 }}
                    whileInView={{ x: 0 }}
                    className='mx-auto inline-block w-[100%] xl:w-[42%] 2xl:w-[40%] 3xl:w-[35%]'>
                     <form  onSubmit={handleSubmit}>
                        <div className='md:flex waitist_div border-[6px] wait_btn_div border-white w-100p sm:w-100p md:w-[50%] flex rounded-[50px] text-18 bg-white 2xl:text-24 3xl:text-[27px] 4xl:text-[50px] text-16 mx-auto xl:w-[90%] 4xl:rounded-[100px]'>
                                <div className='md:w-[50%] lg:w-[55%]'>
                                    <input name="waitlist" type="email" placeholder="Enter email address" className='wait_input inline-block  md:py-2 lg:py-1 pl-7 py-1 rounded-l-[50px] 4xl:rounded-l-[100px] w-[100%] 3xl:py-3 xl:py-2 4xl:py-7' value={waitlist} onChange={(e) => joinWaitlist(e.target.value)} required />
                                </div>
                                <button className='hidden md:inline-block md:w-[50%] lg:w-[45%]  bg-groshure-red text-white rounded-[50px] w_btn 4xl:rounded-[100px]'>Join waitlist</button>
                        </div>
                        <MediaQuery maxWidth={767}>
                            <div className='mt-5'>
                                <MobileButton backgroundColor="#FD4C5C" color="white" paddingTop={'10px'} paddingBottom={'10px'} width='60%' borderRadius='30px' fontSize={"18px"}>
                                    Join waitlist
                                </MobileButton>
                            </div>
                        </MediaQuery>
                     </form>
                </motion.div>
            </div>
            <div className='md:py-6 py-10 md:px-0 px-10 bg-white 4xl:py-20 3xl:pb-20 3xl:pt-10'>
                <motion.div
                    variants={element}
                    initial="hidden"
                    whileInView="visible"
                    className='w-90 mx-auto flex justify-between md:flex-row flex-col'>
                    <div className='flex items-center md:flex-row flex-col'>
                        <div className='md:w-[130px] md:h-[45px] lg:w-[110px] lg:h-[45px] xl:w-[90px] xl:h-[40px] 4xl:w-[300px] 4xl:h-[120px] relative w-[100px] h-[40px] 4xl:mb-0 md:mb-0 mb-[20px] 2xl:w-[120px] 2xl:h-[60px] 3xl:w-[150px] 3xl:h-[70px]'>
                            <Image className='absolute' src={logo}  alt="logo" layout="fill" quality={90} objectFit='contain' />
                        </div>
                        <p className='text-[#616161] text-sm md:ml-3 md:text-left text-center 4xl:text-42 2xl:text-18 3xl:text-22'>© Copyright 2018 Pixsellz - Instant Groceries shopping to your doorstep.</p>
                    </div>
                    <div className=' flex md:text-left text-center md:py-0 py-5' >
                        <ul className='flex items-center text-base  justify-between w-350 4xl:w-[1000px]  text-groshure-red md:flex-row flex-col 4xl:text-42 2xl:text-18 3xl:text-22 3xl:w-[600px]'>
                            <li className='my-4 md:my-0'><a href='#'>First link</a></li>
                            <li className='my-4 md:my-0'><a href='#'>Second Link</a></li>
                            <li className='my-4 md:my-0'><a href='#'>Third link</a></li>
                            <li className='my-4 md:my-0'><a href='#'>Fourth link</a></li>
                        </ul>
                    </div>
                </motion.div>
            </div>
        </div>
    )

}
