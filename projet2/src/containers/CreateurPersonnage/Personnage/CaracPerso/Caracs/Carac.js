import React from 'react'
import css from './Carac.module.css'

const carac = (props) => {
    let carre = []
    for(let i = 0; i < props.nbPts; i++) {
        carre.push(<span key={i} className={css.chevronDroite}></span>)
    }
    return (
        <>
            <div className="row no-gutters align-items-center">
                <span className={css.moins} onClick={props.moins}></span>
                <div className="d-flex justify-content-center align-items-center col-6">
                    <p className="m-0 ml-1 mr-2">{props.children}: </p>{carre}
                </div>
                <span className={css.plus} onClick={props.plus}></span>
            </div>
        </>
    )
}

export default carac