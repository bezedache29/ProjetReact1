import React from 'react'

const titreH2 = (props) => {
    let monCss = `text-success ${props.addCss}`
    return (
        <>
            <h2 className={monCss}>{props.children}</h2>
        </>
    )
}

export default titreH2