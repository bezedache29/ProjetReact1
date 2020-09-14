import React, { Component, Fragment } from 'react'
// import Bouton from '../../components/Boutons/Bouton'
import Livre from './Livre/Livre'

class Livres extends Component {
    state = {
        livres : [
            {
                id : 1,
                titre : "L'algorithmique selon H2prog",
                auteur : "Matthieu GASTON",
                nbPages : 200
            },
            {
                id : 2,
                titre : "La France du 19ème",
                auteur : "Albert PATRICK",
                nbPages : 500
            },
            {
                id : 3,
                titre : "Le monde des animaux",
                auteur : "Marc MERLIN",
                nbPages : 250
            },
            {
                id : 4,
                titre : "Le virus d'Asie",
                auteur : "Simon STRUEUX",
                nbPages : 120
            },
        ]
    }

    modifier = (nom) => {
        alert(nom)
    }

    handleSupprimer = (id) => {
        // On récupère le numero index du tableau de livres
        const numCaseTabLivre = this.state.livres.findIndex(element => {
            return element.id === id
        })
        // On recupère le livre du tableau
        // On cré une copie du livre pour pouvoir la supprimer en utilisant spread (ES7)
        const newLivre = {...this.state.livres[numCaseTabLivre]}
        // On supprime les infos du livre
        this.state.livres.splice(numCaseTabLivre, 1);

        // // On copie l'ancien tablau pour y mettre les nouvelles infos (ici la suppression d'un livre)
        // const newTab = this.state.livres.slice()
        // newTab[numCaseTabLivre] = newLivre

        // On met a jour le tableau des livres
        this.setState({Livres: newLivre})
    }

    render() {
        return (
            <Fragment>
                <table className="table text-center">
                    <thead>
                        <tr className="table-dark">
                            <th scope="col">Titre</th>
                            <th scope="col">Auteur</th>
                            <th scope="col">Nombre de pages</th>
                            <th scope="col" colSpan="2">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.livres.map((livre) => {
                            return (
                                <tr key = {livre.id}>
                                    <Livre titre = {livre.titre} auteur = {livre.auteur} nbPages = {livre.nbPages} suppr = {() => this.handleSupprimer(livre.id)}/>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </Fragment>
        )
    }
}

export default Livres