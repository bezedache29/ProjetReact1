import React from 'react'

const bouton = (props) => {
    let monCss = `btn ${props.btnColor}`
    return (
        <>
            <button 
                className={monCss} 
                onClick={props.region}
                style={props.isRegion ? {opacity: 1} : {opacity: 0.7}}
            >{props.children}</button>
        </>
    )
}

export default bouton