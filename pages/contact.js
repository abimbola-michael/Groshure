import Link from "next/link"
import Image from "next/image"
import linepath from "../public/linepath.svg"
import linepath1x from "../public/linepath1x.svg"
import location from "../public/location.svg"
import message from "../public/message.svg"
import phone from "../public/phone.svg"
import MediaQuery from "react-responsive"
import { motion } from "framer-motion"
import Head from "next/head"
import ACcontainer from "../components/accontainer"
import ACmainContainer from "../components/accmaincontainer"
import { useState} from "react"
import MessageAlert from "../components/messagealert"




const element = {
    hidden: { opacity: 0, y : 100 },
    visible: { opacity: 1, y: 0,  transition:{
        delay: 0.3
    } }
}

const elText = {
    hidden: { opacity: 0, y: 100 },
    visible : i => ({
        opacity: 1, transition:{
            delay: i * 0.2
        }, y: 0
    })
}



export default function Contact(){

    const [name, setName ]=useState("")
    const [email, setEmail ]=useState("")
    const [messages, setMessages ]=useState("")
    const [ msg , setMsg ] = useState("")
    const [color, setColor] = useState("")


    async function handleSubmit (e) {
      e.preventDefault()
      
     

      const res = await fetch("/api/contactus",{
          method:"POST",
          body:JSON.stringify({name:name, email:email,messages: messages}),
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
        },2000)
       

      setName("")
      setEmail("")
      setMessages("")

  }


    return(
        <div className='w-85  mt-7 mx-auto overflow-x-clip'>
            <Head>
			<link rel="icon" href="https://res.cloudinary.com/dimejiscloud/image/upload/v1651289225/two_xvbm6g.ico"  /> 
          <meta name="" content="" />
          <meta
            name="apple-mobile-web-app-status-bar-style"
            content=""
          />
          <title>groshure 🚀 </title>
          <meta
            name="description"
            content=""
          />
          <meta property="og:type" content="website" />
          <meta
            property="og:title"
            content=""
          />
          <meta property="" content="" />
          <meta property="" content="" />
          <meta
            property="og:description"
            content=""
          />
          <meta
            name="twitter:title"
            content=""
          />
          <meta
            name="twitter:description"
            content=""
          />
          <meta name="twitter:image" content="" />
          <meta name="twitter:card" content="" />
          <meta name="twitter:url" content="" />
        </Head>
            <ACcontainer >
            <motion.div
                initial="hidden"
                animate='visible'
                variants={element} 
                className='md:text-60 text-36 4xl:text-[170px] font-[Righteous] text-center  2xl:text-74 3xl:text-[82px]'>Contact <span className='text-groshure-red'>Us</span></motion.div>
                <motion.div
                 initial="hidden"
                 animate='visible'
                variants={element} 
                className='text-center mx-auto text-sm font-[circularstd] 4xl:text-[52px] 2xl:text-20 3xl:text-24 mt-2'>
                    <Link href='/'>
                        <a >Home</a>
                    </Link>
                    <span> &gt; </span>
                    <Link href='/contact'>
                        <a className='text-groshure-red underline'>Contact Us</a>
                    </Link>
                </motion.div>
            </ACcontainer>
            <ACmainContainer>
                <MessageAlert msg={msg} color={color} />
            <div className='overflow-x-auto 2xl:overflow-x-clip  md:w-50 min-h-[614px] flex items-center flex-col w-100p font-[circularstd]'>
                    <div className='h-387 w-387 relative 4xl:w-[1000px] 4xl:h-[1200px]  3xl:w-[70%] 3xl:h-[60vh] 2xl:w-[70%] 2xl:h-[60vh]'>
                        <MediaQuery maxWidth={540}>
                            <div className=' relative w-100p h-100p  md:w-[80%]  xl:w-100p xl:h-100p '>
                                <Image src={linepath1x} alt="linepath1x" layout="fill" quality={90} />
                            </div>
                        </MediaQuery>
                        <MediaQuery minWidth={541}>
                            <div className='relative w-100p h-100p md:w-[80%]  xl:w-100p xl:h-100p 3xl:w-100p 3xl:100p 2xl:w-100p 2xl:100p' >
                                <Image src={linepath} alt="linepath" layout="fill" quality={90} />
                            </div>
                        </MediaQuery>
                        <span className='flex flex-col items-center absolute md:left-8 lg:-left-8 md:top-3 left-20 top-1'>
                            <motion.span
                             initial={{ opacity: 0, scale:0 }}
                             whileInView={{ opacity: 1, scale : 1 , transition: {
                                 delay: 0.5
                             }}}
                            className='p-2 flex top-4 bg-white w-[72px] h-[72px] rounded-full items-center justify-center  shadow-bfs 4xl:w-[200px] 4xl:h-[200px] 3xl:w-[100px] 3xl:h-[100px] 2xl:w-[80px] 2xl:h-[80px]'>
                                <span className='relative  inline-block  w-[27px] h-[27px] 4xl:w-[67px] 4xl:h-[67px] 3xl:w-[40px] 3xl:h-[40px] 2xl:w-[40px] 2xl:h-[40px]'>
                                    <Image src={phone} alt="phone" layout="fill" quality={90}/>
                                </span>
                            </motion.span>
                            <motion.div
                            initial="hidden"
                            whileInView="visible"
                            custom={1}
                            variants={elText}
                            className='text-center mt-4 '>
                                <h4 className='text-24 text-[#1B1C20] 4xl:text-[56px] 3xl:text-36 2xl:text-[30px]'>Phone</h4>
                                <p className='text-sm text-[#797B89] 4xl:text-42 3xl:text-27 2xl:text-24'>(+1) 382 482 5791</p>
                            </motion.div>
                        </span>
                        <motion.span
                         initial={{ opacity: 0, scale:0 }}
                         whileInView={{ opacity: 1, scale : 1 , transition: {
                             delay: 0.9
                         }}}
                        className=' flex flex-col items-center absolute xl:-right-[60px] top-[38%] right-6'>
                            <span className='p-2 flex bg-white w-[72px] h-[72px] rounded-full items-center justify-center shadow-bfs 4xl:w-[200px] 4xl:h-[200px] 3xl:w-[100px] 3xl:h-[100px] 2xl:w-[80px] 2xl:h-[80px]'>
                                <span className='relative  inline-block  w-[27px] h-[27px] 4xl:w-[67px] 4xl:h-[67px] 3xl:w-[40px] 3xl:h-[40px] 2xl:w-[40px] 2xl:h-[40px]'>
                                    <Image src={message} alt="message" layout="fill" quality={90}/>
                                </span>
                            </span>
                            <motion.div
                            initial="hidden"
                            whileInView="visible"
                            custom={2}
                            variants={elText}
                            className='text-center mt-4'>
                                <h4 className='text-24 text-[#1B1C20] 4xl:text-[56px] 3xl:text-36 2xl:text-[30px]'>Email</h4>
                                <p className='text-sm text-[#797B89] 4xl:text-42 3xl:text-27 2xl:text-24'>help@groshure.com.au</p>
                            </motion.div>
                        </motion.span>
                        <motion.span
                         initial={{ opacity: 0, scale:0 }}
                         whileInView={{ opacity: 1, scale : 1 , transition: {
                             delay: 0.2
                         }}}
                        className='flex flex-col items-center absolute md:-bottom-[120px] md:left-[15%] -bottom-[100px] left-[25%] '>
                            <span className='p-2 flex bg-white w-[72px] h-[72px] rounded-full items-center justify-center  shadow-bfs 4xl:w-[200px] 4xl:h-[200px] 3xl:w-[100px] 3xl:h-[100px] 2xl:w-[80px] 2xl:h-[80px]'>
                                <span className='relative  inline-block  w-[27px] h-[27px] 4xl:w-[67px] 4xl:h-[67px] 3xl:w-[40px] 3xl:h-[40px] 2xl:w-[40px] 2xl:h-[40px]'>
                                    <Image src={location} alt="location" layout="fill" quality={90}/>
                                </span>
                            </span>
                            <motion.div
                            initial="hidden"
                            whileInView="visible"
                            custom={3}
                            variants={elText}
                            className='text-center mt-4'>
                                <h4 className='text-24 text-[#1B1C20] 4xl:text-[56px] 3xl:text-36 2xl:text-[30px]'>Location</h4>
                                <p className='text-sm text-[#797B89] 4xl:text-42 3xl:text-27 2xl:text-24'>Melbourne, Australia</p>
                            </motion.div>
                        </motion.span>
                    </div>
                </div>
                <div className='md:w-50 w-100p min-h-[614px] flex justify-center' >
                    <div className='md:w-[428px] w-100p h-[580px]  relative bg-[#D8D8D8] rounded-[20px] 4xl:w-[1200px] 4xl:h-[1600px] 3xl:h-[80vh] 3xl:w-[600px] 2xl:h-[95vh] 2xl:w-[500px]'>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d805196.5087661069!2d144.49269512510114!3d-37.97015414769851!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad646b5d2ba4df7%3A0x4045675218ccd90!2sMelbourne%20VIC%2C%20Australia!5e0!3m2!1sen!2sng!4v1648890616134!5m2!1sen!2sng" width="600" height="450" style={{ border: 0 }}  allowfullscreen="" loading="lazy" className='absolute w-100p h-100p rounded-[20px]' referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                </div>
            </ACmainContainer>
            <div className='md:h-[323px] min-h-[323px] md:min-h-0 flex justify-between md:mb-20 md:mt-[150px] md:flex-row flex-col 4xl:min-h-[1000px]  4xl:mt-[500px]  3xl:min-h-[530px] 2xl:min-h-[500px]'>
                <div className='md:w-50 flex md:justify-end  md:order-1 lg:order-1 order-2  4xl:justify-end '>
                    <motion.div 
                    initial={ { opacity: 0, x: -100 } }
                    whileInView={{ opacity : 1, x: 0}}
                    viewport={{ once: true }}
                     className='w-[448px] font-[circularstd] 4xl:w-[1300px]  3xl:w-[75%] 2xl:w-[75%]'>
                        <form method="POST" className='relative rounded-[25px] block min-h-[523px] shadow-bfs p-8 bg-white md:translate-y-0 translate-y-[90px] z-10 4xl:min-h-[1000px]  4xl:p-20 4xl:rounded-[55px] 3xl:min-h-[750px] 2xl:min-h-[350px] 3xl:p-10 2xl:p-11 xs:p-5'  onSubmit={handleSubmit}>
                        <fieldset className='border-2 border-[#E8E9ED] px-4 py-1 text-sm text-[#212B08] rounded-[12px] 4xl:text-46 3xl:text-22 4xl:py-4 4xl:rounded-[35px] 4xl:mb-10 3xl:py-3 3xl:mb-8 2xl:py-2 2xl:mb-8 2xl:text-18'>
                                <legend>Name</legend>
                                <input type='text' placeholder='Enter name' className=' p-0 inline-block w-100p text-base border-none outline-none  4xl:text-46 3xl:text-22 2xl:text-18' value={name} onChange={(e) => setName(e.target.value) }/>
                            </fieldset>
                            <fieldset className='border-2 border-[#E8E9ED] px-4 py-1 text-sm text-[#212B08] rounded-[12px] my-4 4xl:text-46 4xl:py-4 4xl:rounded-[35px] 4xl:mb-10 3xl:text-22 3xl:py-3 3xl:mb-8  2xl:py-2 2xl:mb-8 2xl:text-18'>
                                <legend>Email</legend>
                                <input type='text' placeholder='Enter email' className=' p-0 inline-block w-100p text-base border-none outline-none  4xl:text-46 3xl:text-22 2xl:text-18'  value={email} onChange={(e) => setEmail(e.target.value) } />
                            </fieldset>
                            <fieldset className='border-2 border-[#E8E9ED] px-4 py-1 text-sm text-[#212B08] rounded-[12px] mb-12 4xl:text-46 4xl:py-4 4xl:mb-[140px] 4xl:rounded-[35px] 3xl:text-22 3xl:py-3 3xl:mb-12 2xl:py-3 2xl:mb-12 2xl:text-18'>
                                <legend>Message</legend>
                                <textarea placeholder="Write your message" className=' w-100p h-[159px] 4xl:text-46 4xl:h-[350px] outline-none 3xl:text-22 2xl:text-18' value={messages} onChange={(e) => setMessages(e.target.value) }>

                                </textarea>
                            </fieldset>
                            <button className='py-2 text-base md:py-2 2xl:py-4 2xl:text-18 4xl:py-10 4xl:text-46 4xl:rounded-[35px] w-100p block bg-groshure-red text-white rounded-[12px] 3xl:text-22'>submit</button>
                        </form>
                    </motion.div>
                </div>
                <motion.div
                initial={ { opacity: 0, x: 100 } }
                whileInView={{ opacity : 1, x: 0}}
                className='md:w-50 md:px-20  flex flex-col md:justify-end  md:text-right text-center md:order-2 order-1 4xl:p-[200px]'>
                    <h1 className=' text-[#1B1C20] font-[Righteous] md:text-40 text-36 4xl:text-[100px] 3xl:text-[64px]  2xl:text-[50px]'>Get In Touch</h1>
                    <p className='text-[#797B89] text-base mt-2 font-[circularstd] 4xl:text-46 3xl:text-24 3xl:pl-20 2xl:text-20 2xl:pl-20 '>Contact us if you have any questions about our company or products. We will try to provide an answer within few days. </p>
                </motion.div>
            </div>
        </div>
    )

}
