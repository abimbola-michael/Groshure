import NavLayout from "./navlayout"
import Footer from "./footer"
import { useContext } from "react"
import  { MenuContext } from "./context"
import MenuNav from "./menunav"
import StoreModal from "./storemodal"
import ShopperModal from "./shoppermodal"
import InvestorModal from "./investormodal"



export default function Layout ({  children  }) {
    
    const menucontext = useContext(MenuContext)

    const { open,isStoreOpen, isShopper,  isInvestor } =  menucontext

    return(
        <>
            { open && <MenuNav />  }
            { isStoreOpen && <StoreModal />  }
            { isShopper && <ShopperModal />  }
            { isInvestor && <InvestorModal />  }
            <NavLayout />
                <main>
                    { children }
                </main>
            <Footer />
        </>
    )

}
