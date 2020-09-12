import React from 'react'

function personne(props) {
    return (
        <>
            <h1>{props.nom}</h1>
            <div>Age : {props.age}</div>
            <div>Sexe : {props.sexe}</div>
        </>
    )
}

export default personne