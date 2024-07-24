


export default function Button ({  children,position, height, display, width , isStoreOpen, setStore, isShopper, setShopper, isInvestor, setInvestor, name }) {


    const handleClick = () => {
        { name === 'store' &&  setStore(!isStoreOpen) }
        { name === 'shopper' && setShopper(!isShopper) }
        { name === 'investor' && setInvestor(!isInvestor) }
        if(name === "store" || name === "shopper" || name === "investor"){
            checkOverflow()
        }
    }

    const checkOverflow = () => {
        let body = document.getElementsByTagName("body")[0]

        if(!isStoreOpen ){
            body.style.overflow = 'hidden'
        }else{
            body.style.overflow = 'auto'
        }

    }

    return(
        <button 
        onClick={handleClick}
        className='hidden md:block  font-[circularstd] btn' style={{
           position: position,
            height:height,
            display: display,
            width: width
        }}>
            { children }
        </button>
    )

}



