import Button from "./button"
import MessageAlert from "./messagealert"
import { useState } from "react"
import MobileButton from "./mobilebutton"


export default function WaitList({ width, boxShadow }) {

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

  
    return(
        <div style={{
            boxShadow: boxShadow,
            width:width
        }} className={`flex justify-between 3xl:rounded-[70px]  p-1 min-h-[50px]`}>
            <MessageAlert msg={msg} color={color} /> 
              <div className='block md:flex grow'>
               <form onSubmit={handleSubmit} >
                  <input style={{ border: "none" , outline: "none"}} className='waitlistform
                    py-3 px-3 xs:w-100p 3xl:pl-12 rounded-full w-[60%]' type='text' placeholder="Enter email address"  value={ waitlist } onChange={(e) => joinWaitlist(e.target.value)} />
                  <Button>Join waitlist</Button>
                  <MobileButton width="70%" paddingBottom="13px" paddingTop="13px"  backgroundColor="#FD4C5C" color='white' borderRadius="25px" fontSize={"14px"} marginTop="27px" >Join waitlist</MobileButton>
               </form>
              </div>
        </div>
    )

}
