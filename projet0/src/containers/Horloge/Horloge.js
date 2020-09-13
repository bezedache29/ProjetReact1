import React, { Component } from 'react'
import classes from "./Horloge.module.css"

// Horloge va utiliser des states et aura besoins d'utiliser des fonctions a l'interieur
// On va donc creer une class Horloge
class Horloge extends Component {
    // Ancienne verison
    // constructor(props) {
    //     super(props)
    //     this.state = {
    //         date: new Date()
    //     }
    // }

    // Nouvelle version
    state = {
        date: new Date(),
        compteur: 1
    }

    // Se lance en deuxième si pas de constructor
    componentDidMount() {
        this.timerID = setInterval(() =>
            // On utilise oldState lorsqu'on eut modifier une ancienne valeur sans la remplacer par un nouvelle
            // Cela evite d'utiliser this.state.X qui n'est pas conseillé par React 
            this.setState((oldState, props) => {
                return {
                    date: new Date(),
                    compteur: oldState.compteur + 1
                }
            }), 1000
        )
    }

    componentWillUnmount() {
        clearInterval(this.timerID)
    }

    // Se lance en premier si pas de constructor
    render() {
        return (
            <>
                <h2 className={classes.monTitre}>Horloge : {this.state.date.toLocaleTimeString()}</h2>
                <p>Compteur : {this.state.compteur}</p>
            </>
        )
    }
}

export default Horloge