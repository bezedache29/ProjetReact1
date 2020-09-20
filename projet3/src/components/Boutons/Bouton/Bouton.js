import React from 'react'

const bouton = (props) => {
    let monCss = `btn ${props.btnColor}`
    return (
        <>
            <button 
                className={monCss} 
                onClick={props.clic}
                style={props.isRegion ? {opacity: 1} : {opacity: 0.7}}
            >{props.children}</button>
        </>
    )
}

export default bouton