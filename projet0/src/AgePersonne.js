import React from 'react'

// On cré un fonction ES6 pour connaitre l
const agePersonne = (props) => {

    // On creer la dte actuelle
    let dateActuelle = new Date()
    let anneeActuelle = dateActuelle.getFullYear()

    // On soustrait l'année actuelle avec l'age du personnage
    let anneeNaissance = anneeActuelle - props.age

    return <div>Age : {props.age} - ({anneeNaissance})</div>
}

export default agePersonne