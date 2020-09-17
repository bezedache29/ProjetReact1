import React from 'react'
import Carac from './Caracs/Carac'

const caracPerso = (props) => {
    return (
        <>
            <p className="ml-2">Points Restants: <span className="badge badge-success">{props.ptsRestants}</span></p>
            <Carac nbPts={props.force} plus={props.plusForce} moins={props.moinsForce}>Force</Carac>
            <Carac nbPts={props.agilite} plus={props.plus} moins={props.moins}>Agilite</Carac>
            <Carac nbPts={props.intelligence} plus={props.plus} moins={props.moins}>Intelligence</Carac>
        </>
    )
}

export default caracPerso