import React, { Component } from 'react'
import AgePersonne from './AgePersonne/AgePersonne'
// Récupérer le fichier CSS
import classes from "./Personne.module.css"

class Personne extends Component {
    // Ancienne methode pour afficher les props (Avant ES7)
    // constructor(props) {
    //     super(props)
    // }
    // render() {
    //     return (
    //         <>
    //             <h1>{this.props.nom}</h1>
    //             <div>Age : {this.props.age}</div>
    //             <div>Sexe : {this.props.sexe}</div>
    //         </>
    //     )
    // }

    // Depuis ES7 (plus la peine de mettre le constructor - this.propos.X suffit)
    render() {
        // Ajout de CSS dynamique dans l'attribut style de l'element html
        const monStyle = {
            backgroundColor: "green",
            color: "white"
        }
        monStyle.fontSize = "18px"

        if(this.props.sexe === true) {
            monStyle.border = "2px solid blue"
        }else {
            monStyle.border = "2px solid red"
        }

        return (
            <>
                <h1 className={classes.monTitre}>{this.props.nom}</h1>
                <AgePersonne age = {this.props.age} />
                <div style={monStyle}>Sexe : {(this.props.sexe === true) ? "Homme" : "Femme"}</div>
                <button onClick={this.props.clic}>Anniversaire</button>
            </>
        )
    }
}

export default Personne