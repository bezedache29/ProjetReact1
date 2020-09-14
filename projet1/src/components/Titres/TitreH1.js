import React from 'react'
import css from "./TitreH1.module.css"

const titreH1 = (props) => {
    const monCss = `border border-dark p2 mt-2 text-white text-center bg-primary rounded ${css.policeTitre}`
    
    return (
        <>
            <h1 className = {monCss}>{props.children}</h1>
        </>
    )
}

export default titreH1