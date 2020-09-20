import React from 'react'
import Bouton from '../Boutons/Bouton/Bouton'

const Boutons = (props) => {
    return (
        <>
            <Bouton btnColor='btn-info' isRegion={(props.regionSelectionner === "Tous")} clic={props.allPays}>Tous</Bouton>
            <Bouton btnColor='btn-info' isRegion={(props.regionSelectionner === "Europe")} clic={() => props.region('Europe')}>Europe</Bouton>
            <Bouton btnColor='btn-info' isRegion={(props.regionSelectionner === "Africa")} clic={() => props.region('Africa')}>Afrique</Bouton>
            <Bouton btnColor='btn-info' isRegion={(props.regionSelectionner === "Asia")} clic={() => props.region('Asia')}>Asie</Bouton>
            <Bouton btnColor='btn-info' isRegion={(props.regionSelectionner === "Americas")} clic={() => props.region('Americas')}>Amérique</Bouton>
            <Bouton btnColor='btn-info' isRegion={(props.regionSelectionner === "Oceania")} clic={() => props.region('Oceania')}>Océanie</Bouton>
        </>
    )
}

export default Boutons