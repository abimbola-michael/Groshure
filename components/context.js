import {useState, createContext} from "react"

export const MenuContext = createContext()

export default function ContextWrapper({ children }){

    const [ open, isOpen ] = useState(false) 
    const [ isStoreOpen, setStore ] = useState(false)
    const [ isShopper, setShopper ] = useState(false)
    const [ isInvestor, setInvestor ] = useState(false)
    

    return(
        <MenuContext.Provider value={{open, isOpen, isStoreOpen, isShopper, isInvestor, setStore, setShopper, setInvestor}}>
            {children}
        </MenuContext.Provider>
    ) 
}