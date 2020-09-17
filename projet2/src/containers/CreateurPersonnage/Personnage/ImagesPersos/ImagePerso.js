import React from 'react'
import ImagePerso1 from '../../../../assets/images/persos/player1.png'
import ImagePerso2 from '../../../../assets/images/persos/player2.png'
import ImagePerso3 from '../../../../assets/images/persos/player3.png'
import css from './ImagePerso.module.css'

const imagePerso = (props) => {
    let linkImg = ""
    if(props.image === 1) {
        linkImg = ImagePerso1
    }else if(props.image === 2) {
        linkImg = ImagePerso2
    }else if(props.image === 3) {
        linkImg = ImagePerso3
    }

    let flecheGauche = `${css.triGauche} bg-warning`
    let flecheDroite = `${css.triDroite} bg-warning`

    return (
        <>
            <div className="col-2 d-flex align-items-center">
                <div className={flecheGauche} onClick={props.flecheGauche}></div>
            </div>
            <div className="col-8 d-flex justify-content-center">
                <img src={linkImg} alt="personnage" />
            </div>
            <div className="col-2 d-flex align-items-center">
                <div className={flecheDroite} onClick={props.flecheDroite}></div>
            </div>
        </>
    )
}

export default imagePerso