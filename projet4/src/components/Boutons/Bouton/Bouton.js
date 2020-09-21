import React from 'react'

const bouton = (props) => {
    let monCss = `btn ${props.btnColor}`

    return (
        <>
            <button onClick={props.clic} className={monCss}>{props.children}</button>
        </>
    )
}

export default bouton