import React, { Fragment } from 'react'
import Personne from './components/Personne/Personne'
import Horloge from './containers/Horloge/Horloge'
import "./App.css"

 class App extends React.Component {
     state = {
         personnes : [
             {nom: "Tophe", age: 37, sexe: true},
             {nom: "Ripley", age: 20, sexe: false},
             {nom: "Bezedache", age: 25, sexe: true}
         ]
     }
    render() {
        // Deux possibilité pour return du jsx

        // Si Fragment est utilisé, ne pas oublié de l'induqer dans l'import entre {}
        return (
            <Fragment>
                <Horloge />
                <Personne nom = {this.state.personnes[0].nom} age = {this.state.personnes[0].age} sexe = {this.state.personnes[0].sexe}/>
                <Personne nom = {this.state.personnes[1].nom} age = {this.state.personnes[1].age} sexe = {this.state.personnes[1].sexe}/>
                {/* Une autre method (spread) pour envoyer toutes les infos d'un coup provenant du tableau personnes */}
                <Personne {...this.state.personnes[2]}/>
            </Fragment>
        )
        
    }
 }

export default App