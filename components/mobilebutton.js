

export default function MobileButton({ color, borderRadius,paddingLeft ,paddingRight,paddingTop, paddingBottom, children,backgroundColor, fontSize, position, height, flexGrow, display, width , marginTop, marginBottom, fontWeight, isStoreOpen, setStore, isShopper, setShopper, isInvestor, setInvestor ,name}){

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
        style={{
            borderRadius: borderRadius, 
            color : color,
            paddingLeft : paddingLeft, 
            paddingRight : paddingRight, 
            paddingBottom : paddingBottom, 
            paddingTop : paddingTop, 
            backgroundColor: backgroundColor,
            outline: "none",
            border:"none",
            cursor: "pointer",
            fontSize: fontSize, 
            position: position,
            height:height,
            flexGrow: flexGrow,
            display: display,
            width: width,
            marginTop: marginTop,
            marginBottom: marginBottom,
            fontWeight: fontWeight,
        }}>
            { children }
        </button>
    )

}