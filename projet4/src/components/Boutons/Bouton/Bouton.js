import React from 'react'

const bouton = (props) => {
    let monCss = `btn ${props.btnColor}`

    return (
        <>
            <button 
                onClick={props.clic} 
                className={monCss} 
                style={props.isEts ? {opacity: 1} : {opacity: 0.7}}
            >{props.children}</button>
        </>
    )
}

export default bouton