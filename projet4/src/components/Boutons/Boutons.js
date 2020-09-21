import React from 'react'
import Bouton from './Bouton/Bouton'

const boutons = (props) => {
    console.log(props.etsSelectionner)
    return (
        <>
            <Bouton btnColor='btn-info' isEts={(props.etsSelectionner === 'mairie')} clic={() => props.etablissement('mairie')}>Mairies</Bouton>
            <Bouton btnColor='btn-info' isEts={(props.etsSelectionner === 'commissariat_police')} clic={() => props.etablissement('commisseriat')}>Commisseriats de police</Bouton>
            <Bouton btnColor='btn-info' isEts={(props.etsSelectionner === 'pole_emploi')} clic={() => props.etablissement('pole')}>Poles emploi</Bouton>
            <Bouton btnColor='btn-info' isEts={(props.etsSelectionner === 'prefecture')} clic={() => props.etablissement('Prefecture')}>Préfectures</Bouton>
        </>
    )
}

export default boutons