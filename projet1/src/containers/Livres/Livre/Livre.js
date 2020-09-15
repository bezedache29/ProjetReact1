import React from 'react'
import Bouton from '../../../components/Boutons/Bouton'

const livre = (props) => {
    return (
        <>
            <td>{props.titre}</td>
            <td>{props.auteur}</td>
            <td>{props.nbPages}</td>
            <td><Bouton btn = "btn-warning" clic = {props.modif}>Modifier</Bouton></td>
            <td><Bouton btn = "btn-danger" clic = {props.suppr}>Supprimer</Bouton></td>
        </>
    )
}

export default livre

