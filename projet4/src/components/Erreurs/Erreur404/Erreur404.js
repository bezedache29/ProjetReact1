import React from 'react'
import imgErreur404 from '../../../assets/images/error404.png'

const erreur404 = (props) => {
    console.log(props)
    return (
        <>
            
            <div className="d-flex justify-content-center">
                <img src={imgErreur404} alt="Erreur 404" width="70%" />
            </div>
            <div className="d-flex flex-column align-items-center">
                <h2 className="text-center">La page demandé n'existe pas !</h2>
                <a href={props.match.url} className="btn btn-danger mb-2">Retour Accueil</a>
            </div>
        </>
    )
}

export default erreur404