import { wrap } from "popmotion";
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react"
import { useMediaQuery } from 'react-responsive'


const variants = {
    enter: (direction) => {
      return {
        x: direction > 0 ? 50 : -50,
        opacity: 0,
      };
    },
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction) => {
      return {
        zIndex: 0,
        x: direction < 0 ? 50 : -50,
        opacity: 0
      };
    }
  };

  const itemImage = {
    visible:(imageIndex) =>  { 
      if(imageIndex === 2){
        return {
          opacity: 1,
          y: 0 , 
          transition: {
            delay: 0.6
          }
        }
      }
      return {
        opacity: 1,
        x: 0 , 
        transition: {
          delay: 0.6
        }
      }
    },
    hidden:(imageIndex) => {
      if (imageIndex === 2){
        return {
          opacity: 0, 
          y: 100 
        }
      }
      return  { opacity: 0, x: 100 }
    }
  }

export default function HeaderSlider({ headerSlider }) {

  const isSmallScreenSize = useMediaQuery({
    query: '(max-width: 540px)'
  })

    const [[page, direction], setPage] = useState([0, 0]);

    const imageIndex = wrap(0, headerSlider.length, page);

    const play = () => {
        paginate(1)
    }

    useEffect(() => {

        let interval = setInterval(play, 6000)

        return() => {
            clearInterval(interval)
        }

    },[imageIndex])

    const paginate = (newDirection= number) => {
        setPage([page + newDirection, newDirection]);
      };

      if (isSmallScreenSize) return ""

    return (
        <motion.div 
        initial={{ opacity: 0, x : 100 }}
        animate={{ opacity: 1, x: 0, transition: {
          delay: 4
        } }}
          className='w-100p h-100p relative'>
            <AnimatePresence initial={false} custom={direction}>
                <motion.div 
                    key={page}
                    custom={direction}
                    variants={variants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{
                        x: { type: "spring", stiffness: 300, damping: 30 },
                        opacity: { duration: 0.2 }
                    }}
                    className='absolute h-100p w-100p'>
                        <motion.div
                          variants={itemImage}
                          custom={imageIndex}
                          animate="visible"
                          initial="hidden"
                          className={`relative h-100p ${imageIndex === 2 ? "w-[87%] xl:ml-20" : " w-100p" }`}
                        >
                            <Image src={headerSlider[imageIndex]} alt={headerSlider[imageIndex]} layout="fill" quality={100} priority  />
                        </motion.div>
                </motion.div> 
            </AnimatePresence>
        </motion.div>
    )

}

