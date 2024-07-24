import { AnimatePresence, motion } from "framer-motion"
import { MenuContext } from "./context" 
import { useContext, useState  } from "react"
import Button from "../components/button"
import MessageAlert from "./messagealert"


export default function ShopperModal(){

  

    const menucontext = useContext(MenuContext)
    const [ storename, setStoreName ] = useState("")
    const [ email, setEmail ] = useState("")
    const [ phoneNumber, setPhoneNumber ] = useState('')
    const [ additionInfo, setAdditionInfo ] = useState("")

    const [ msg , setMsg ] = useState("")
    const [color, setColor] = useState("")


    const { isShopper,setShopper} =  menucontext

    const handleClick = () => {
        checkOverflow()
        setShopper(!isShopper)
    }

    const checkOverflow = () => {
        
        let body = document.getElementsByTagName("body")[0]

        if(!isShopper){
            body.style.overflow = 'hidden'
        }else{
            body.style.overflow = 'auto'
        }

    }

    async function handleSubmit (e) {
        e.preventDefault()
        
       
  
        const res =  await fetch("/api/shopper",{
            method:"POST",
            body:JSON.stringify({
                storename:storename, 
                email:email,
                phoneNumber:phoneNumber, 
                additionInfo:additionInfo}),
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
  
        setStoreName("")
        setEmail("")
        setPhoneNumber("")
        setAdditionInfo("")
  
    }


 

    return(
        <div className='overlay fixed top-0 bottom-0 right-0 left-0  w-100p bg-[rgba(0,0,0,0.2)] z-50 pt-5 overflow-y-auto'>
                <MessageAlert msg={msg} color={color} />
                <AnimatePresence>
                <motion.div 
                        initial={{ opacity: 0, y:10 }}
                        animate={{ opacity: 1,y : 0 }}
                        exit={{ opacity: 0, y:10 }}
                        className='bg-white w-[95%] md:w-[50%]  xl:w-[35%] rounded-[25px] my-3 relative mx-auto'>
                            <div className='flex px-5 py-3 items-center justify-between'>
                                <div></div>
                                <h3 className='xl:text-18 4xl:text-[54px] 2xl:text-25 3xl:text-30 font-[circularstd] font-medium'>Apply as a Shopper</h3>
                                <div className='w-[40px] h-[40px] 4xl:w-[110px] 4xl:h-[110px] 3xl:w-[60px] 3xl:h-[60px] rounded-full flex justify-center items-center flex-col bg-[#F6F6F6]' onClick={handleClick}>
                                    <div className='border-[1px] border-black w-[14px] rotate-45 4xl:w-[44px] 3xl:w-[25px]'></div>
                                    <div className='border-[1px] border-black w-[14px] -rotate-45 -translate-y-[2px] 4xl:w-[44px] 4xl:-translate-y-[6px] 3xl:w-[25px]'></div>
                                </div>
                            </div>
                            <div className='pt-4 pb-10 px-7 4xl:px-20'>
                                <form method="POST" onSubmit={handleSubmit}>
                                    <fieldset className='border-2 border-[#E8E9ED] px-4 py-1 text-sm 4xl:px-10 text-[#212B08] rounded-[12px] my-4 4xl:text-42 3xl:text-24 2xl:text-[19px] 4xl:py-5 4xl:rounded-[35px] 4xl:mb-10 '>
                                    <legend>Store Name</legend>
                                    <input type='text' placeholder='Enter name' className=' p-0 inline-block w-100p text-base border-none outline-none  4xl:text-42 3xl:text-24' value={storename} onChange={(e) => setStoreName(e.target.value)} required />
                                    </fieldset>
                                    <fieldset className='border-2 border-[#E8E9ED] px-4 py-1 text-sm 4xl:px-10 text-[#212B08] rounded-[12px] my-4 4xl:text-42 3xl:text-24 2xl:text-[19px] 4xl:py-5 4xl:rounded-[35px] 4xl:mb-10 '>
                                        <legend>Email</legend>
                                        <input type='text' placeholder='Enter email' className=' p-0 inline-block w-100p text-base border-none outline-none   4xl:text-42 3xl:text-24' value={email} onChange={(e)  => setEmail(e.target.value)} required />
                                    </fieldset>
                                    <fieldset className='border-2 border-[#E8E9ED] px-4 py-1 text-sm 4xl:px-10 text-[#212B08] rounded-[12px] my-4 4xl:text-42 3xl:text-24 2xl:text-[19px] 4xl:py-5 4xl:rounded-[35px] 4xl:mb-10 '>
                                        <legend>Phone number</legend>
                                        <input type='text' placeholder='Enter phone number' className=' p-0 inline-block w-100p text-base border-none outline-none  4xl:text-42 3xl:text-24' value={phoneNumber} onChange={(e)  => setPhoneNumber(e.target.value)} required />
                                    </fieldset>
                                    <fieldset className='border-2 border-[#E8E9ED] px-4 py-1 text-sm 4xl:px-10 text-[#212B08] rounded-[12px] my-4 4xl:text-42 3xl:text-24 2xl:text-[19px] 4xl:py-5 4xl:rounded-[35px] 4xl:mb-20 2xl:mb-12 mb-10'>
                                            <legend>Addtional info</legend>
                                            <input type='text'  className=' p-0 inline-block w-100p text-base border-none outline-none  4xl:text-42 3xl:text-24' value={additionInfo} onChange={(e)  => setAdditionInfo(e.target.value)} required/>
                                    </fieldset>
                                    <button className='py-2 text-base xl:py-2 2xl:py-4 2xl:text-[19px] 4xl:py-10 4xl:text-42 4xl:rounded-[35px] w-100p block bg-groshure-red text-white rounded-[12px] 3xl:text-24 xl:text-sm 4xl:my-10' >Submit</button>
                            </form>
                            </div>
                    </motion.div>
                </AnimatePresence>
            </div>
    )

}