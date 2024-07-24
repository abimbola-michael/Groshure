
import Link from "next/link"
import { motion } from "framer-motion"
import Head from "next/head"
import ACmainContainer from "../components/accmaincontainer"
import ACcontainer from "../components/accontainer"
import { imageSlider } from "../components/sliderutils"
import ImageSlider from "../components/imageslider"
import styles from "../components/stroke.module.css"



const element = {
    hidden: { opacity: 0, y : 100 },
    visible: { opacity: 1, y: 0,  transition:{
        delay: 0.3
    } }
}


export default function About () {

    return(
        <div className='w-85  mt-7 mx-auto overflow-hidden '>
            <Head>
			<link rel="icon" href="https://res.cloudinary.com/dimejiscloud/image/upload/v1651289225/two_xvbm6g.ico"  /> 
          <meta name="" content="" />
          <meta
            name="apple-mobile-web-app-status-bar-style"
            content=""
          />
          <title>groshure 🚀</title>
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
                    animate="visible"
                    variants={element}
                    className='md:text-60 text-36 4xl:text-[180px] font-[Righteous] text-center 2xl:text-74 3xl:text-[82px]'>About <span className='text-groshure-red'>Us</span></motion.div>
                    <motion.div 
                    initial="hidden"
                    animate="visible"
                    viewport={{ once: true }}
                    variants={element}
                    className='text-center mx-auto text-sm  font-[circularstd] 4xl:text-[52px] 2xl:text-20 3xl:text-24 mt-2'>
                        <Link href='/'>
                            <a >Home</a>
                        </Link>
                        <span> &gt; </span>
                        <Link href='/about'>
                            <a className='text-groshure-red underline'>About us</a>
                        </Link>
                    </motion.div>
              </ACcontainer>
                <ACmainContainer >
                  <motion.div 
                  initial={{ opacity: 0, x: -100 }}
                  whileInView={{ opacity: 1, x : 0 , transition: {
                      delay: 0.5
                  }}}
                  className='flex justify-center w-100p md:flex md:justify-start md:text-48 text-36 font-[Righteous] md:w-[40%] xl:pl-10 overflow-y-hidden 4xl:text-[140px] 4xl:pl-[150px]  self-stretch items-center pb-[50px] md:pb-0 '>
                    <p className='w-[200px] md:w-250 md:text-left text-center 4xl:w-[700px] 2xl:text-74 2xl:w-[300px] 3xl:text-[82px] 3xl:w-[400px] 4xl:text-[160px]'>Who are <span className={styles.shopstroke}>We?</span></p>
                  </motion.div>
                  <motion.div
                  initial={{ opacity: 0, x: 100 }}
                  whileInView={{ opacity: 1, x : 0 , transition: {
                      delay: 0.1
                  }}} 
                  className='text-24 md:text-base md:text-left text-center 4xl:text-[54px]  2xl:text-27 3xl:text-32 4xl-text md:w-[60%] md:px-12 md:py-12 md:border-t-0 md:border-l-4 border-t-4 border-groshure-red xl:py-3 font-[circularstd] 4xl:border-l-8 md:min-h-[320px] text-[#616161] xl:text-24 self-stretch pt-[50px]' >
                    We are a C2M grocery delivery and food technology company. We provide our customers access to many of their favourite local grocery stores on our platform and also give an all round service from ordering grocery items all the way to post-delivery of the items. We do this by creating an in-app feature called “Virtual Pantry”. This feature allows our customers to be able to manage their grocery items and even many more amazing things.
                  </motion.div>
                </ACmainContainer>  
            <div className='w-100p lg:min-h-[60vh]  mb-10 oveflow-hidden xl:min-h-1/3'>
                <motion.h1 
                initial="hidden"
                whileInView="visible"
                variants={element}
                className='text-center font-[Righteous] md:text-48  text-36 4xl:text-[160px] 2xl:text-74 3xl:text-82'>Meet the <span className={styles.shopstroke}>Team</span></motion.h1>
                <ImageSlider imageSlider={imageSlider} />
            </div>
        </div>
    )

}
