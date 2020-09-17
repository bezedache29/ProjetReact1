import React from 'react'
import css from './TitreH1.module.css'

const titreH1 = (props) => {
    let monCss = `${css.titrePolice} bg-primary text-center text-white mt-2 p-2 rounded border border-dark`
    return (
        <>
            <h1 className={monCss}>{props.children}</h1>
        </>
    )
}

export default titreH1