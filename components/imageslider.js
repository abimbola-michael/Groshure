import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { wrap } from "popmotion";
import Image from "next/image"
import facebook from "../public/facebook.png"
import twitter from "../public/twitter.png"




const variants = {
    enter: (direction) => {
      return {
        x: direction > 0 ? 50 : -50,
        opacity: 0
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

    const swipeConfidenceThreshold = 500;
    const swipePower = (offset=number, velocity= number) => {
    return Math.abs(offset) * velocity;
    };



export default function ImageSlider({imageSlider}){

    const [[page, direction], setPage] = useState([0, 0]);
    const imageIndex = wrap(0, imageSlider.length, page);


    const paginate = (newDirection= number) => {
      setPage([page + newDirection, newDirection]);
    };

    return (
      <div className='md:min-h-[480px] overflow-hidden'>
        <div className='relative min-h-[940px] md:min-h-[400px] 2xl:min-h-[600px] 4xl:min-h-[1200px] 4xl:mt-20'>
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
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={1}
              onDragEnd={(e, { offset, velocity }) => {
                const swipe = swipePower(offset.x, velocity.x);

                if (swipe < -swipeConfidenceThreshold) {
                  paginate(1);
                } else if (swipe > swipeConfidenceThreshold) {
                  paginate(-1);
                }
              }}
            className='w-100p h-[100%] absolute'>
              <div className='flex pt-6 md:flex-row flex-col md:mt-[50px] justify-evenly '>
                        <motion.div
                        initial={{ opacity: 0, x: 100 }}
                        whileInView={{ opacity: 1, x : 0 , transition: {
                            delay: 0.3
                        }}}
                        className='order-1 sm:order-1 md:order-2  md:text-left text-center md:mt-0 mt-10 font-[circularstd] md:w-[60%]  lg:pl-28 lg:pr-10 4xl:pl-64 '>
                           <div className='flex'>
                              <div className="xl:leading-[35px] 3xl:leading-[45px] 4xl:leading-[95px]">
                                <h4 className='text-24 text-[#141414] font-bold 4xl:text-60 2xl:text-30 3xl:text-32'>{imageSlider[imageIndex].feedback}</h4>
                                <small className='text-18 text-[#141414] mt-3 mb-4 inline-block 2xl:my-6 4xl:text-46 4xl:my-9 2xl:text-24 3xl:text-25'>{imageSlider[imageIndex].title}</small>
                                <p className='text-[20px] text-[#616161] 4xl:text-[54px] 2xl:text-25 3xl:text-27'>{imageSlider[imageIndex].para}</p>
                              </div>
                           </div>
                           <div className='flex py-7 md:py-7 4xl:mt-20 justify-center md:justify-start'>
                             <div className='relative w-[20px] h-[20px] mr-7 2xl:w-[25px] 2xl:h-[25px] 4xl:w-[60px] 4xl:h-[60px]'>
                               <Image src={facebook} layout='fill' alt="facebook" quality={90} />
                             </div>
                             <div className='relative w-[20px] h-[20px] 2xl:w-[25px] 2xl:h-[25px] 4xl:w-[60px] 4xl:h-[60px]'>
                               <Image src={twitter} layout='fill' alt="twitter" quality={90} />
                             </div>
                           </div>
                        </motion.div>
                        <motion.div
                        initial={{ opacity: 0, x: -100 }}
                        whileInView={{ opacity: 1, x : 0 , transition: {
                            delay: 0.3
                        }}}
                        className='sm:order-1 md:order-1 flex justify-center items-center md:mt-0 mt-5'>
                            <div className='relative border-white border-[10px] md:border-x-[20px] md:w-[260px] md:h-[240px] w-[250px] h-[250px] z-10 rounded-full 4xl:w-[670px] 4xl:h-[670px] 4xl:border-x-[45px] md:mb-20 2xl:w-[300px] 2xl:h-[300px] 3xl:w-[320px] 3xl:[320px]'>
                                <Image src={ imageSlider[imageIndex].images[1] }  alt="image" layout="fill"  quality={90} objectFit="contain"  />
                            </div>
                        </motion.div>
                        <div className='userpix mt-10 xs:mt-0 md:mt-0 order-3 flex md:flex-col justify-evenly md:py-5 md:pb-20  md:order-3'>
                              <motion.div 
                               initial={{ opacity: 0, y: -100 }}
                               whileInView={{ opacity: 1, y : 0 , transition: {
                                   delay: 0.3
                               }}}
                              className='relative w-[80px] h-[80px] border-[3px] border-[#FD4C5C] rounded-full cursor-pointer 2xl:w-[90px] 2xl:h-[90px] 3xl:w-[100px] 3xl:h-[100px] 4xl:w-[210px] 4xl:h-[210px]' onClick={() => paginate(1)}>
                                <Image  src={imageSlider[imageIndex].images[1]} alt='cofounder' layout='fill' quality={90} objectFit="cover"  />
                              </motion.div>
                              <motion.div 
                              initial={{ opacity: 0, y: 100 }}
                              whileInView={{ opacity: 1, y : 0 , transition: {
                                  delay: 0.3
                              }}}
                              className='relative w-[80px] h-[80px] rounded-full cursor-pointer 3xl:w-[100px] 3xl:h-[100px] 4xl:w-[210px] 4xl:h-[210px]' onClick={() => paginate(-1)}>
                                <Image  src={imageSlider[imageIndex].images[0]} alt='cofounder' layout='fill' quality={90}  objectFit="cover" />
                              </motion.div>
                            </div>
                    </div>
            </motion.div>
          </AnimatePresence>
        </div>        
      </div>
    )
}


