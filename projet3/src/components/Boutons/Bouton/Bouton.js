import React from 'react'

const bouton = (props) => {
    let monCss = `btn ${props.btnColor}`
    return (
        <>
            <button className={monCss}>{props.children}</button>
        </>
    )
}

export default bouton