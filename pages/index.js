import Image from "next/image"
import { motion } from "framer-motion"
import Head from "next/head"
import Features from "../components/features"
import Steps from "../components/steps"
import Frequently from "../components/frequently"
import Support from "../components/support"
import ComingSoon from "../components/commingsoon"
import styles from "../components/stroke.module.css"
import MobileHeader from "../components/mobileheader"
import bask from "../public/bask.png"
import bike from "../public/bike.png"
import item from "../public/item.png"
import HeaderSlider from "../components/headerslider"
import { headerSlider } from "../components/sliderutils"
import DesktopWaitList from "../components/d_waitlist"


let style={ 
  backgroundImage: "url('https://res.cloudinary.com/dimejiscloud/image/upload/q_auto:best/v1650921466/herocontainerdesktop_t23rry.png')",
  backgroundRepeat:"no-repeat",
  backgroundPosition:"center",
  backgroundSize:"cover",
  backgroundColor:"#A3D32A",
 }

export default function Home() {

  const container = {
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.3,
      },
    },
    hidden: {
      opacity: 0,
      transition: {
        when: "afterChildren",
      },
    },
  }

  const items = {
      visible: i => ({ 
        opacity: 1, 
        x: 0,
        transition:{
        delay: i *  0.3,
      } }),
      hidden: { opacity: 0, x: -100 },
  }


  return (
    <div className='home_container' >
      <Head>
      <link rel="icon" href="https://res.cloudinary.com/dimejiscloud/image/upload/v1651289225/two_xvbm6g.ico"  />  
          <meta name="" content="" />
          <title>groshure 🚀</title>
          <meta
            name="description"
            content="Groshure provides a multi-shopping experience for customers to grocery shop with there different preferred stores on one platform."
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
          <MobileHeader />
      <header  className='hidden md:flex md:min-h-[30vh] xl:flex min-h-[30vh] mx-auto w-85  items-center xl:min-h-[50vh] xl:mt-0 mt-5 4xl:min-h-[50vh] 4xl:mt-[120px]' >
      <motion.div 
            initial="hidden"
            animate="visible"
            variants={container}
            style={style}
            className='header min-h-[350px] md:min-h-[400px] 2xl:min-h-[550px] 3xl:min-h-[650px] xl:min-h-[480px] w-[100%] relative overflow-hidden rounded-[25px] 4xl:rounded-[50px] mt-10 3xl:mt-20 4xl:min-h-[70vh] flex'
            >
             <div className='z-10 md:flex  xl:relative md:w-[55%] lg:w-[50%] xl:w-[60%] 4xl:w-[55%] 4xl:pl-28 py-20 4xl:py-40 3xl:pl-12 pl-7 4xl:flex flex-col justify-evenly md:py-10 xl:py-10  xl:flex 3xl:py-20'>
              <motion.div
              custom={1}
              variants={items}
              className='font-[Righteous] text-36 md:text-46 xl:text-[60px] text-black leading-[70px] 4xl:text-[190px] xl:leading-[72px] 2xl:text-74 2xl:leading-[90px] 4xl:leading-[190px] 3xl:text-[84px] 3xl:leading-[100px] md:leading-[50px]'>Grocery shopping at your <span  className={styles.stroke}>fingertips</span></motion.div>
              <motion.div 
                       custom={2}
                          variants={items} className='md:text-sm 3xl:my-12 my-6 xl:w-[90%]  font-[circularstd] 4xl:w-[80%] 4xl:text-[50px] 4xl:py-10 xl:text-[20px] 2xl:text-24 3xl:text-[27px] md:my-5'>Groshure provides a multi-shopping experience for customers to shop with there different preferred stores on one platform.
              </motion.div>
              <motion.div  custom={3} variants={items}>
                <DesktopWaitList />
               </motion.div>
            </div>
            <div className='w-[50%] md:w-[45%] lg:w-[50%] xl:w-[50%] 4xl:w-[45%]  relative  hidden md:block'>
            <HeaderSlider headerSlider={headerSlider} />
            </div>
        </motion.div>
      </header>
      <section className="mx-auto md:grid-cols-3 md:gap-2 w-85 py-16 grid xl:grid-cols-3 gap-20 xl:gap-2  grid-cols-1 4xl:mt-12">
        <motion.div initial={{ opacity: 0, y: 100}}
                whileInView={{ opacity: 1, y: 0 , duration: {
                  delay: 0.7
                }}}
                viewport={{ once: true }}
                className='flex items-center flex-col  xl:flex-row '>
                <div className='mb-4 xl:mb-0'>
                  <div className=' flex p-[10px] rounded-full  justify-center shadow-bfs xl:mr-4 mx-auto xl:mx-0 4xl:p-[14px]'>
                      <div className='w-[40px] h-[40px] relative 4xl:w-[120px] 4xl:h-[120px]'>
                        <Image src={bask} alt='bask'  priority layout="fill" quality={100} />
                      </div>
                    </div>
                </div>
             <div className="xl:pr-6 text-center xl:text-left font-[circularstd]">
                <h4 className='font-medium text-18 leading-5 xl:leading-5 mb-2 4xl:text-46 4xl:mb-10 2xl:text-24 2xl:leading-10 3xl:text-[27px]' >Easy multi-shopping Experience</h4>
                <p className='text-sm text-[#718096] px-8 xl:px-0 4xl:text-42 4xl:pr-12 2xl:text-18 3xl:text-[24px]'>We provide a platform where you can shop from your favourite local stores and get them delivered to you.</p>
             </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 100}}
                whileInView={{ opacity: 1, y: 0 , duration: {
                  delay: 0.7
                }}}
                viewport={{ once: true }}
                className='flex items-center flex-col xl:flex-row '>
                <div className='mb-4 xl:mb-0 '>
                  <div className=' flex  p-[10px] rounded-full  justify-center shadow-bfs xl:mr-4 mx-auto xl:mx-0 4xl:p-[14px]'>
                      <div className=' w-[40px] h-[40px] relative 4xl:w-[120px] 4xl:h-[120px]'>
                        <Image src={bike} alt='bike'  priority layout="fill"/>
                      </div>
                    </div>
                </div>
             <div className="xl:pr-6 text-center xl:text-left   font-[circularstd]">
                <h4 className='font-medium text-18 leading-5 xl:leading-5 mb-2 4xl:text-46 4xl:mb-10 2xl:text-24 2xl:leading-10 3xl:text-[27px]' >Reasonable delivery time</h4>
                <p className='text-sm text-[#718096] px-8 xl:px-0 4xl:text-42 4xl:pr-12 2xl:text-18 3xl:text-[24px]'>Our delivery is on time and well within the specified time frame you want your orders delivered to you.</p>
             </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 100}}
               whileInView={{ opacity: 1, y: 0 , duration: {
                delay: 0.7
              }}}
                viewport={{ once: true }}
                className='flex items-center flex-col xl:flex-row '>
                <div className='mb-4 xl:mb-0 '>
                  <div className=' flex  p-[10px] rounded-full  justify-center shadow-bfs xl:mr-4 mx-auto xl:mx-0 4xl:p-[14px]'>
                      <div className='w-[40px] h-[40px] relative 4xl:w-[120px] 4xl:h-[120px]'>
                        <Image src={item} alt='item' priority layout="fill"/>
                      </div>
                    </div>
                </div>
             <div className="xl:pr-6 text-center xl:text-left   font-[circularstd]">
                <h4 className='font-medium text-18 leading-5 xl:leading-5 mb-2 4xl:text-46 4xl:mb-10 2xl:text-24 2xl:leading-10 3xl:text-[27px]' >Well Curated items</h4>
                <p className='text-sm text-[#718096] px-8 xl:px-0 4xl:text-42 4xl:pr-12 2xl:text-18 3xl:text-[24px]'>You definitely don't have to worry about not finding a particular item in one store because we have multiple stores and options for you.</p>
             </div>
          </motion.div>
        </section>
        <main>
          <Features />
          <Steps />
          <Support />
          <ComingSoon />
          <Frequently />
        </main>
    </div>
  )
}


