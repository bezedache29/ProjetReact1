import React from 'react'
import imageErreur404 from '../../../assets/error404.png'

const erreur404 = (props) => {
    return (
        <>
            <div className="d-flex flex-column align-items-center">
                <img src={imageErreur404} alt='Erreur 404' width="80%" />
                <h2>La page demandé n'existe pas</h2>
            </div>
        </>
    )
}

export default erreur404