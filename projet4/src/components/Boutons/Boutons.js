import React from 'react'
import Bouton from './Bouton/Bouton'

const boutons = (props) => {
    return (
        <>
            <Bouton btnColor='btn-info' clic={() => props.etablissement('mairie')}>Mairies</Bouton>
            <Bouton btnColor='btn-info' clic={() => props.etablissement('commisseriat')}>Commisseriats de police</Bouton>
            <Bouton btnColor='btn-info' clic={() => props.etablissement('pole')}>Poles emploi</Bouton>
            <Bouton btnColor='btn-info' clic={() => props.etablissement('Prefecture')}>Préfectures</Bouton>
        </>
    )
}

export default boutons