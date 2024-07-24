import { wrap } from "popmotion";
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react"



const variants = {
    enter: (direction) => {
      return {
        y: direction > 0 ? 50 : -50,
        opacity: 0,
      };
    },
    center: {
      zIndex: 1,
      y: 0,
      opacity: 1
    },
    exit: (direction) => {
      return {
        zIndex: 0,
        y: direction < 0 ? 50 : -50,
        opacity: 0
      };
    }
  };

  const itemImage = {
    visible:{
        opacity: 1,
        y: 0 , 
        transition: {
        delay: 0.6
        }
    },
    hidden: {
        opacity: 0, 
        y: 100 
      }
  }

export  default  function  MobileHeaderSlider ({mobileHeaderImages}){

    const [[page, direction], setPage] = useState([0, 0]);

    const imageIndex = wrap(0, mobileHeaderImages.length, page);

    const play = () => {
        paginate(1)
    }

    useEffect(() => {

        let interval = setInterval(play, 7000)

        return() => {
            clearInterval(interval)
        }

    }, [imageIndex])

    const paginate = (newDirection=number) => {
        setPage([page + newDirection, newDirection]);
      };

    

    return (
        <div className='relative grow w-100p h-[400px]'>
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
                    initial={{ opacity: 0, y: 200  }}
                    animate={{ opacity: 1, y:0,transition: {
                      delay: 1
                    } }}
                    className="flex justify-center items-center relative w-100p h-100p translate-y-3"
                    >
                        <Image src={mobileHeaderImages[imageIndex]} alt={mobileHeaderImages[imageIndex]} quality={100} layout="fill" priority   />
                    </motion.div>
            </motion.div> 
        </AnimatePresence>
        </div>
    )
  
  }