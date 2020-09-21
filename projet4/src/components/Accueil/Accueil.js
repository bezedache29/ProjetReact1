import React from 'react'
import TitreH1 from '../Titres/TitreH1'
import imageFinistere from '../../assets/images/meneham.jpg'
import css from './Accueil.module.css'

const accueil = (props) => {
    return (
        <>
            <div className="container">
                <section className="mt-1">
                    <TitreH1>Bienvenue sur le site du Finistère !</TitreH1>
                    <div className="my-2">Le site vous aidant à trouver les établissements public du Finistère</div>
                    <div className="my-3">
                        <img className={css.image} src={imageFinistere} alt="Maison du garde Meneham" width="100%" />
                    </div>
                </section>
            </div>
        </>
    )
}

export default accueil