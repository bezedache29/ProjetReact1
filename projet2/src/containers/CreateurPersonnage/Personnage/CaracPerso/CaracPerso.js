import React from 'react'
import Carac from './Caracs/Carac'

const caracPerso = (props) => {
    return (
        <>
            <p className="ml-2">Points Restants: <span className="badge badge-success">{props.ptsRestants}</span></p>
            <Carac nbPts={props.force} plus={() => props.plus('force')} moins={() => props.moins('force')}>Force</Carac>
            <Carac nbPts={props.agilite} plus={() => props.plus('agilite')} moins={() => props.moins('agilite')}>Agilite</Carac>
            <Carac nbPts={props.intelligence} plus={() => props.plus('intelligence')} moins={() => props.moins('intelligence')}>Intelligence</Carac>
        </>
    )
}

export default caracPerso