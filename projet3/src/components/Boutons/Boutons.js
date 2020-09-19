import React from 'react'
import Bouton from '../Boutons/Bouton/Bouton'

const Boutons = (props) => {
    return (
        <>
            <Bouton btnColor='btn-info' isRegion={(props.regionSelectionner === "Tous")} region={props.allPays}>Tous</Bouton>
            <Bouton btnColor='btn-info' isRegion={(props.regionSelectionner === "Europe")} region={() => props.region('Europe')}>Europe</Bouton>
            <Bouton btnColor='btn-info' isRegion={(props.regionSelectionner === "Africa")} region={() => props.region('Africa')}>Afrique</Bouton>
            <Bouton btnColor='btn-info' isRegion={(props.regionSelectionner === "Asia")} region={() => props.region('Asia')}>Asie</Bouton>
            <Bouton btnColor='btn-info' isRegion={(props.regionSelectionner === "Americas")} region={() => props.region('Americas')}>Amérique</Bouton>
            <Bouton btnColor='btn-info' isRegion={(props.regionSelectionner === "Oceania")} region={() => props.region('Oceania')}>Océanie</Bouton>
        </>
    )
}

export default Boutons