import React from 'react'
import css from './Arme.module.css'

const arme = (props) => {
    let monCss = `col-3 d-flex flex-column align-items-center ${css.selectionArme}`
    
    return (
        <>
            <div 
            className={monCss} 
            onClick={props.monArme}
            style={{
                    opacity: (props.isArmePerso === true || props.armeActuelle === null) ? "1" : "0.5",
                    border: (props.isArmePerso === true && props.armeActuelle !== null) ? "2px solid orange" : "2px solid white"
                }}
            >
                <img src={props.linkImg} alt="Arme" />
                <h4>{props.children}</h4>
            </div>
        </>
    )
}

export default arme