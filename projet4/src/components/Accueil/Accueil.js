import React from 'react'
import TitreH1 from '../Titres/TitreH1'
import imageFinistere from '../../assets/images/meneham.jpg'

const accueil = (props) => {
    return (
        <>
            <div className="container">
                <div>Navbar</div>
                <section>
                    <TitreH1>Bienvenue sur le site du Finistère !</TitreH1>
                    <div>Le site vous aidant à trouver les établissements public du Finistère</div>
                    <div className="mb-4">
                        <img src={imageFinistere} alt="Maison du garde Meneham" width="100%" />
                    </div>
                </section>
            </div>
        </>
    )
}

export default accueil