import { useState } from "react"
import MessageAlert from "./messagealert"




export default function DesktopWaitList () {


    const [waitlist, joinWaitlist ]=useState("")
    const [ msg , setMsg ] = useState("")
    const [color, setColor] = useState("")

    

    const  handleSubmit = async e => {

      e.preventDefault()

      let res = await fetch("/api/waitlist", { 
        method: "POST",
        body: JSON.stringify({waitlist: waitlist }), 
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
       },1000)

      joinWaitlist("")
  }

    return (
       <>
       <MessageAlert msg={msg} color={color} /> 
         <form method="POST" onSubmit={handleSubmit}>
                  <div className='waitist_div border-[6px] border-white w-[85%] flex rounded-[50px] bg-white md:text-sm 2xl:text-24 xl:text-[20px] 3xl:text-[27px] 4xl:text-[50px] text-16 4xl:rounded-[100px]'>
                    <div className='md:w-[50%] lg:w-[55%]'>
                      <input name="email address" type="text" placeholder="Enter email address" className='wait_input inline-block  md:py-2 lg:py-2 xl:pl-7 md:pl-2 rounded-l-[50px] 4xl:rounded-l-[100px] w-[100%] 4xl:py-7' value={ waitlist } onChange={(e) => joinWaitlist(e.target.value)} required />
                    </div>
                    <button className='inline-block md:w-[50%] lg:w-[45%]  bg-groshure-red text-white rounded-[50px] 4xl:rounded-[100px]'>Join waitlist</button>
                  </div>
          </form> 
       </>
    )

}