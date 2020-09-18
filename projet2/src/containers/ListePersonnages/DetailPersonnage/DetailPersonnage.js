import React from 'react'
import ImagePerso1 from '../../../assets/images/persos/player1.png'
import ImagePerso2 from '../../../assets/images/persos/player2.png'
import ImagePerso3 from '../../../assets/images/persos/player3.png'
import ImageEpee from '../../../assets/images/armes/epee.png'
import ImageFleau from '../../../assets/images/armes/fleau.png'
import ImageArc from '../../../assets/images/armes/arc.png'
import ImageHache from '../../../assets/images/armes/hache.png'

const detailPersonnage = (props) => {
    let armePerso = ""
    if(props.infosPerso.perso.arme === "epee") {
        armePerso = ImageEpee
    }else if(props.infosPerso.perso.arme === "fleau") {
        armePerso = ImageFleau
    }else if(props.infosPerso.perso.arme === "arc") {
        armePerso = ImageArc
    }else if(props.infosPerso.perso.arme === "hache") {
        armePerso = ImageHache
    }

    let imagePerso = ""
    if(props.infosPerso.perso.image === 1) {
        imagePerso = ImagePerso1
    }else if(props.infosPerso.perso.image === 2) {
        imagePerso = ImagePerso2
    }else if(props.infosPerso.perso.image === 3) {
        imagePerso = ImagePerso3
    }

    return (
        <>
        <div className="border border-dark rounded row no-gutters">
            <div className="col-6 d-flex flex-column pl-4 mt-4">
                <h4>{props.infosPerso.pseudo}</h4>
                <div>
                    <img src={imagePerso} alt="Perso" />
                </div>
            </div>
            <div className="col-6">
                <div className="d-flex flex-column align-items-center">
                    <div className="d-flex flex-column mb-2">
                        <p className="m-0">Force: {props.infosPerso.perso.force}</p>
                        <p className="m-0">Agilite: {props.infosPerso.perso.agilite}</p>
                        <p className="m-0">Intelligence: {props.infosPerso.perso.intelligence}</p>
                    </div>
                    <div>
                        <img src={armePerso} alt="Arme" />
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default detailPersonnage