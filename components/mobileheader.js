import styles from "./stroke.module.css"
import WaitList from "./waitlist"
import { motion } from "framer-motion"
import {mobileHeaderImages} from "./sliderutils.js"
import MobileHeaderSlider from "./mobileheaderslider.js"
import { useMediaQuery } from 'react-responsive'




const style={ 
  backgroundImage: "url('https://res.cloudinary.com/dimejiscloud/image/upload/q_auto:best/v1650921454/herocontainermobile_bgfwj8.png')",
  backgroundRepeat:"no-repeat",
  backgroundPosition:"center",
  backgroundSize:"cover",
  backgroundColor:"#A3D32A",
 }

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
        y: 0,
        transition:{
        delay: i *  0.3,
      } }),
      hidden: { opacity: 0, y: 100 },
  }

  


export default function MobileHeader () {
  

  const isLargeScreenSize = useMediaQuery({
    query: '(min-width: 768px)'
  })

  if (isLargeScreenSize) return ""


    return(
       <div className='md:hidden'>
         <motion.div 
            initial="hidden"
            animate="visible"
            variants={container}
            style={style}
            className='mobileheader overflow-y-hidden' >
           <motion.div 
           custom={1}
           variants={items}
           className='px-4 py-7 min-h-[50%]' >
                <h1 className='font-[Righteous] text-32 text-black leading-[40px]'>Grocery shopping at your <span className={styles.stroke}>fingertips</span></h1>
                <motion.div
                custom={3}
                variants={items}
                className='text-base my-6'>Groshure provides a multi-shopping experience for customers to shop with there different preferred stores on one platform.</motion.div>
                  <motion.div
                  custom={4}
                  variants={items}
                  >
                      <WaitList width="100%" fontSize="14px"  />
                  </motion.div>
            </motion.div>
            <MobileHeaderSlider mobileHeaderImages={mobileHeaderImages} />
        </motion.div>
       </div>
    )

}
