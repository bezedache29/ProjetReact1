import React, { Component } from 'react'
import AgePersonne from './AgePersonne'

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
        return (
            <>
                <h1>{this.props.nom}</h1>
                <AgePersonne age = {this.props.age} />
                <div>Sexe : {this.props.sexe}</div>
            </>
        )
    }
}

export default Personne