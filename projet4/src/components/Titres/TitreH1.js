import React from 'react'
import css from './TitreH1.module.css'

const titreH1 = (props) => {
    let monCss = `border border-dark p-2 bg-primary text-white rounded ${css.policeTitre}`
    return (
        <>
            <h1 className={monCss}>{props.children}</h1>
        </>
    )
}

export default titreH1