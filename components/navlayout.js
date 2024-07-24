import Image from 'next/image'
import Link from 'next/link'
import logo from "../public/logo.png"
import { useRouter } from 'next/router'
import { motion, useAnimation } from "framer-motion"
import { useEffect, useContext } from 'react'
import { MenuContext } from "./context" 
import Button from "./button"
import MediaQuery  from "react-responsive"

const right={
  visible: i => ({ 
      opacity: 1, 
      y: 0,
      transition:{
      delay: i *  2,
    } }),
    hidden: { opacity: 0, y: 100 },
}


const left={
  visible: i => ({ 
      opacity: 1, 
      y: 0,
      transition:{
      delay: i *  1,
    } }),
    hidden: { opacity: 0, y: -100 },
}


export default function NavLayout () {


    const controls = useAnimation()

    const menucontext = useContext(MenuContext)

    const  {open , isOpen} = menucontext

    const router = useRouter()

    useEffect(() => {
        
        controls.start(i => ({
          opacity: 1,
          y:0,
          transition: { delay: i * 0.7 },
        }))
    },[])

    const handleClick = () => {
   
      let body = document.getElementsByTagName("body")[0]

      if(!open ){
        body.style.overflow = 'hidden'
    }else{
        body.style.overflow = 'auto'
    }


      isOpen(!open)
  }


    return(
        <div className="mx-auto w-85 flex justify-between items-center py-5  2xl:mt-4 4xl:mt-10">
            <motion.div 
              key={router.route}
              initial={{ opacity: 0 , x: -500 }}
              animate={{ opacity: 1,x: 0,  transition: {
                delay: 0.6
              } }}
              className='w-[100px] h-[40px]  relative  xl:w-[90px] xl:h-[40px] 2xl:w-[120px] 2xl:h-[60px]  flex items-center 4xl:w-[300px] 4xl:h-[120px] 3xl:w-[150px] 3xl:h-[70px] md:w-[100px] md:h-[40px]'
            >
               <Link href="/">
                <a>
                  <Image src={logo} layout='fill' quality={90} objectFit="contain"  />
                </a>
              </Link>
            </motion.div>
          <div className='hidden xl:block md:block justify-center'>
            <ul className='3xl:ml-10 xl:ml-7 flex justify-between w-64 md:w-[250px]  font-[circularstd] items-center xl:w-[260px] 3xl:w-[350px] 2xl:w-[300px] 4xl:w-[800px]'>
              <motion.li custom={1}  initial={{ opacity: 0, y:10 }} animate={controls} >
              <Link href="/">
                <a className={`link ${router.asPath === "/" ? "active" : "" }`}>Home</a>
              </Link>
              </motion.li >
              <motion.li custom={2} initial={{ opacity: 0, y:10 }} animate={controls}>
                  <a  className={`link ${router.asPath === "/features" ? "active" : "" }`} href="#features" >Features</a>
              </motion.li>
              <motion.li custom={1}  initial={{ opacity: 0, y:10 }}  animate={controls}>
              <Link href="/about">
                <a className={`link ${router.asPath === "/about" ? "active" : "" }`}>About</a>
              </Link>
              </motion.li>
              <motion.li custom={2}  initial={{ opacity: 0, y:10 }}  animate={controls}>
              <Link href="/contact">
                <a className={`link ${router.asPath === "/contact" ? "active" : "" }`} >Contact</a>
              </Link>
              </motion.li>
            </ul>
          </div> 
          <motion.div 
            initial={{ opacity: 0, x: 500 }}
            animate={{ opacity: 1, x: 0, transition: {
              delay: 1
            } }}
          >
          <Button>Join waitlist</Button>
          </motion.div>
          <MediaQuery maxWidth={540} >
            <div className='w-[30px] min-h-[30px]  flex justify-center items-center flex-col' onClick={handleClick}>
              <motion.div
              variants={right}
              custom={1}
              initial="hidden"
              animate="visible"
              className='w-[20px] h-[3px] bg-[#FD4C5C]'></motion.div>
              <motion.div 
              variants={left}
              custom={3}
              initial="hidden"
              animate="visible"
              className='w-[20px] h-[3px] bg-[#FD4C5C] my-[3px]'></motion.div>
              <motion.div 
              variants={right}
              custom={1}
              initial="hidden"
              animate="visible"
              className='w-[20px] h-[3px] bg-[#FD4C5C]'></motion.div>
            </div>
          </MediaQuery>
      </div>
    )
}
