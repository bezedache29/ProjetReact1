import React from 'react'
import imgErreur404 from '../../../assets/images/error404.png'

const erreur404 = (props) => {
    return (
        <>
            
            <div className="d-flex justify-content-center">
                <img src={imgErreur404} alt="Erreur 404" width="70%" />
            </div>
            <div>
                <h2 className="text-center">La page demandé n'existe pas !</h2>
            </div>
        </>
    )
}

export default erreur404