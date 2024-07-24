import Image from "next/image"
import two from "../public/two.png"
import Button from "./button"
import MediaQuery from "react-responsive"
import MobileButton from "./mobilebutton"
import { motion } from "framer-motion"
import { MenuContext } from "./context" 
import { useContext  } from "react"
import store from "../public/store.png"
import investor from "../public/investor.png"
import shopper from "../public/shopper.png"




const element = {
    visible : { opacity: 1, y: 0 },
    hidden: { opacity: 0, y:100 },
}

export default function Support() {

   
    const menucontext = useContext(MenuContext)

    const { isStoreOpen, setStore, isShopper, setShopper, isInvestor, setInvestor } =  menucontext

   


    return(
        <motion.div
        variants={element}
        initial='hidden'
        whileInView='visible'
         className='xl:min-h-1/3 2xl:min-h-[40vh] 3xl:min-h-[40vh] 4xl:min-h-[85vh]'>
            <div className=' w-75 mx-auto py-20  mb-7'>
            <div className='flex justify-center relative h-[100px]  text-center'>
                    <div className='inline-block absolute z-10'>
                        <div>
                            <h3 className='font-[Righteous] text-40 4xl:text-74 2xl:text-46 3xl:text-[54px]'>Support</h3>
                        </div>
                    </div>
                    <div className='absolute w-120 h-120  xs:right-0  md:right-[25%] xl:right-[35%] 2xl:right-[37%] -top-10 -z-0 4xl:right-[40%] 4xl:w-[200px] 4xl:h-[200px]' >
                        <Image src={two} alt='two' layout="fill" className='opacity-30' quality={85}/>
                    </div>
            </div>
            <div className='mt-12 mt:mt-20'>
            <div className='mt-[53px] xl:mt-[30px] md:grid-cols-3 md:gap-10 4xl:mt-[290px] grid xl:grid-cols-3 gap-20 xl:gap-10 grid-cols-1 md:text-left text-center 3xl:mt-[110px]'>
                    <motion.div
                        initial={{ opacity: 0, y: 70 }}
                        whileInView={{ opacity: 1, y: 0, transition:{
                            delay: 0.8
                        } }}
                        className=' font-[circularstd] md:flex flex-col'>
                            <div className='flex md:justify-start justify-center'>
                                <div className="p-[15px] rounded-[100%] shadow-bfs">
                                    <div className=' flex  md:mx-0  4xl:p-[20px]'>
                                        <div className='relative w-[65px] h-[65px] block 4xl:w-[155px] 4xl:h-[155px]'>
                                            <Image src={store} alt='store' layout="fill" quality={100} objectFit="contain" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='py-6 4xl:py-12'>
                                <h4 className='font-medium text-18 leading-5 mb-2 4xl:text-46 4xl:mb-10 2xl:text-[24px] 3xl:text-27'>Are you a Local Grocery Store?</h4>
                                <p className='text-sm text-[#718096] 4xl:text-42 2xl:text-[18px] 3xl:text-22 xl:pr-12'>If you are a local grocery store and would like to partner with us, please click on the button below and fill out the information</p>
                            </div>
                            <MediaQuery maxWidth={2000}>
                                <div >
                                    <Button backgroundColor="#FD4C5C" color="#fff" borderRadius="50px" paddingBottom="12px" paddingTop="12px"  paddingRight="55px" paddingLeft="55px" fontSize="14px" setStore={setStore} isStoreOpen={isStoreOpen} name="store" width="50%">
                                    Apply
                                    </Button>
                                </div>
                            </MediaQuery>
                            <MediaQuery minWidth={2000}>
                                <div>
                                <Button backgroundColor="#FD4C5C" color="white" borderRadius="50px" paddingBottom="15px" paddingTop="15px"  paddingRight="75px" paddingLeft="75px" width='50%' fontSize="46px" setStore={setStore} isStoreOpen={isStoreOpen} name="store">
                                    Apply
                                </Button>
                                </div>
                            </MediaQuery>
                            <MediaQuery maxWidth={540}>
                                <div className='mt-4'>
                                    <MobileButton backgroundColor="#FD4C5C" color="white" paddingTop={'10px'} paddingBottom={'10px'} width='55%' borderRadius='30px' fontSize={"15px"} setStore={setStore} isStoreOpen={isStoreOpen} name="store">
                                        Apply
                                    </MobileButton>
                                </div>
                            </MediaQuery>
                        </motion.div>
                        <motion.div
                        initial={{ opacity: 0, y: 70 }}
                        whileInView={{ opacity: 1, y: 0, transition:{
                            delay: 0.6
                        } }}
                        className=' font-[circularstd] md:flex flex-col'>
                            <div className='flex md:justify-start justify-center'>
                                <div className=' flex  p-[10px] rounded-full  justify-center shadow-bfs xl:mr-4 mx-auto md:mx-0  4xl:p-[20px]'>
                                    <div className=' w-[70px] h-[70px] relative 4xl:w-[155px] 4xl:h-[155px]'>
                                        <Image src={shopper} alt='shopper'  layout="fill" quality={85} />
                                    </div>
                                </div>
                            </div>
                            <div className='py-6 4xl:py-12'>
                                <h4 className='font-medium text-18 leading-5 mb-2 4xl:text-46 4xl:mb-10 2xl:text-[24px] 3xl:text-27' >Do you want to be a shopper?</h4>
                                <p className='text-sm text-[#718096] 4xl:text-42 2xl:text-18 3xl:text-22 xl:pr-12'>If you'd like to join our team and work with us by becoming a shopper, please click on the button below and fill out the information.</p>
                            </div>
                            <MediaQuery maxWidth={2000}>
                                <div >
                                    <Button backgroundColor="#FD4C5C" color="#fff" borderRadius="50px" paddingBottom="12px" paddingTop="12px"  paddingRight="55px" paddingLeft="55px"  fontSize="14px" isShopper={isShopper} setShopper={setShopper} name="shopper" width="50%">
                                    Apply
                                    </Button>
                                </div>
                            </MediaQuery>
                            <MediaQuery minWidth={2000}>
                                <div>
                                <Button backgroundColor="#FD4C5C" color="white" borderRadius="50px" paddingBottom="15px" paddingTop="15px"  paddingRight="75px" paddingLeft="75px" width='50%' fontSize="46px" isShopper={isShopper} setShopper={setShopper} name="shopper">
                                    Apply
                                </Button>
                                </div>
                            </MediaQuery>
                            <MediaQuery maxWidth={540}>
                                <div className='mt-4'>
                                    <MobileButton backgroundColor="#FD4C5C" color="white" paddingTop={'10px'} paddingBottom={'10px'} width='55%' borderRadius='30px' fontSize={"15px"} isShopper={isShopper} setShopper={setShopper} name="shopper">
                                        Apply
                                    </MobileButton >
                                </div>
                            </MediaQuery>
                        </motion.div>
                        <motion.div
                        initial={{ opacity: 0, y: 70 }}
                        whileInView={{ opacity: 1, y: 0, transition:{
                            delay: 0.8
                        } }}
                        className=' font-[circularstd] md:flex flex-col'>
                            <div className='flex md:justify-start justify-center'>
                                <div className=' flex  p-[10px] rounded-full  justify-center shadow-bfs xl:mr-4 mx-auto md:mx-0  4xl:p-[20px]'>
                                    <div className=' w-[70px] h-[70px] relative 4xl:w-[155px] 4xl:h-[155px]'>
                                        <Image src={investor} alt='investor' layout="fill" quality={85} />
                                    </div>
                                </div>
                            </div>
                            <div className='py-6 4xl:py-12'>
                                <h4 className='font-medium text-18 leading-5 mb-2 4xl:text-46 4xl:mb-10 2xl:text-[24px] 3xl:text-27'>Investors</h4>
                                <p className='text-sm text-[#718096] 4xl:text-42 2xl:text-18 3xl:text-22'>If you're an investor and looking to know more about us or interested in investing in us, please click on the button below and fill out the information</p>
                            </div>
                            <MediaQuery maxWidth={2000}>
                                <div >
                                    <Button backgroundColor="#FD4C5C" color="#fff" borderRadius="50px" paddingBottom="12px" paddingTop="12px"  paddingRight="55px" paddingLeft="55px"  fontSize="14px" isInvestor={isInvestor} setInvestor={setInvestor} name="investor" width="50%">
                                    Apply
                                    </Button>
                                </div>
                            </MediaQuery>
                            <MediaQuery minWidth={2000}>
                                <div>
                                <Button backgroundColor="#FD4C5C" color="white" borderRadius="50px" paddingBottom="15px" paddingTop="15px"  paddingRight="75px" paddingLeft="75px" width='50%' fontSize="46px" isInvestor={isInvestor} setInvestor={setInvestor} name="investor">
                                    Apply
                                </Button>
                                </div>
                            </MediaQuery>
                            <MediaQuery maxWidth={540}>
                                <div className='mt-4'>
                                    <MobileButton backgroundColor="#FD4C5C" color="white" paddingTop={'10px'} paddingBottom={'10px'} width='55%' borderRadius='30px' fontSize={"15px"} isInvestor={isInvestor} setInvestor={setInvestor} name="investor">
                                        Apply
                                    </MobileButton>
                                </div>
                            </MediaQuery>
                        </motion.div>
                </div>
            </div>
            </div>
            
        </motion.div>
    )

}