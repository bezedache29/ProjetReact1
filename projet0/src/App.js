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

    // Cette syntaxe ne s'ecrit pas comme ca sur React, mais comme dans la fonction suivante
    //  disBonjour() {
    //      alert("coucou")
    //  }

    anniversaireHandler = () => {
        // On copie le tableau des personnes pour pouvoir le modifier afin de pouvoir l'update derriere
        
        // Première version
        // const newPersonnes = this.state.personnes.slice()
        // // On incrémente les ages des personnes
        // for(let i = 0; i < newPersonnes.length; i++) {
        //     newPersonnes[i].age++
        // }

        // Deuxième version
        const newPersonnes = this.state.personnes.map(personne => {
            return {
                nom : personne.nom,
                age : personne.age + 1,
                sexe : personne.sexe
            }
        })
        

        // On modifie le state et lance le rafraichissement du composant
        this.setState({personnes:newPersonnes})
    }

    annifHandler = (numPersonne) => {
        // On recupère la personne du tableau
        // On cré une copie de la personne pour pouvoir la modifier en utilisant spread (ES7)
        const newPersonne = {...this.state.personnes[numPersonne]}
        newPersonne.age++

        // On copie le tableau de personnes pour pouvoir modifier l'age de la personne dans le tableau
        const newTab = this.state.personnes.slice()
        newTab[numPersonne] = newPersonne

        // On met a jour
        this.setState({personnes: newTab})
    }


    render() {
        // Deux possibilité pour return du jsx

        // Si Fragment est utilisé, ne pas oublié de l'induqer dans l'import entre {}
        return (
            <Fragment>
                <button onClick={this.anniversaireHandler}>Anniversaire</button>
                <Horloge />
                {/*bind sert a passer des informations en parametres. ici on envoie l'index du tableau*/}
                <Personne nom = {this.state.personnes[0].nom} age = {this.state.personnes[0].age} sexe = {this.state.personnes[0].sexe} clic = {this.annifHandler.bind(this,0)}/>
                {/* La deuxième possibilité pour envoyer des infos, est d'utiliser les fonctions fleché comme ci dessous*/}
                <Personne nom = {this.state.personnes[1].nom} age = {this.state.personnes[1].age} sexe = {this.state.personnes[1].sexe} clic = {() => this.annifHandler(1)}/>
                {/* Une autre method (spread) pour envoyer toutes les infos d'un coup provenant du tableau personnes */}
                <Personne {...this.state.personnes[2]} clic = {() => this.annifHandler(2)}/>
            </Fragment>
        )
        
    }
 }

export default App