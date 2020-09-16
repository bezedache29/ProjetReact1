import React, { Component, Fragment } from 'react'
import Alert from '../../components/Alerts/Alert'
import FormulaireAjout from './FormulaireAjout/FormulaireAjout'
import FormulaireModifier from './FormulaireModifier/FormulaireModifier'
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
        ],

        lastIdLivre : 4,
        modifier: true,
        idLivreAModifier: 0,
        alertMessage: null
    }

    handleModifer = (id, titre, auteur, nbPages) => {
        // On recupère le livre a modifier grace a son id
        const numCaseTabLivre = this.state.livres.findIndex(element => {
            return element.id === id
        }) 

        // On cré un nouveau livre
        const newLivre = {
            id: id,
            titre: titre,
            auteur: auteur,
            nbPages: parseInt(nbPages)
        }

        // On copie la liste des livres
        const newListe = [...this.state.livres]

        // On change la le livre dans la liste des livres
        newListe[numCaseTabLivre] = newLivre

        // On met a jour
        this.setState({
            livres: newListe,
            idLivreAModifier: 0,
            alertMessage: {
                message: "Modification avec succès",
                colorAlert: "alert-success"
            }
        })
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
        this.state.livres.splice(numCaseTabLivre, 1)

        // // On copie l'ancien tablau pour y mettre les nouvelles infos (ici la suppression d'un livre)
        // const newTab = this.state.livres.slice()
        // newTab[numCaseTabLivre] = newLivre

        // On met a jour le tableau des livres
        this.setState({
            Livres: newLivre,
            alertMessage: {
                message: "Suppression avec succès",
                colorAlert: "alert-warning"
            }
        })
    }

    handleAjoutLivre = (titre, auteur, nbPages) => {
        // On Cré un nouveau livre
        const newLivre = {
            id: this.state.lastIdLivre + 1,
            titre: titre,
            auteur: auteur,
            nbPages: parseInt(nbPages)
        }

        // On copie le tableau de livres
        const newTab = [...this.state.livres]

        // On insere le nouveau livre dans la liste des livres
        newTab.push(newLivre)

        // On met a jour la liste des livres et le last Id
        this.setState((oldState, props) => {
            return {
                livres: newTab,
                lastIdLivre: oldState.lastIdLivre + 1,
                alertMessage: {
                    message: "Ajout avec succès",
                    colorAlert: "alert-success"
                }
            }
        })

        // On ferme le formulaire une fois le nouveau livre ajouté
        this.props.fermerAjoutLivre()
    }

    render() {
        return (
            <Fragment>
                {(this.state.alertMessage !== null) ? <Alert colorAlert={this.state.alertMessage.colorAlert} >{this.state.alertMessage.message}</Alert> : null}
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
                            // Ce test est pour savoir s'il y a un livre a modifier
                            if(livre.id !== this.state.idLivreAModifier) {
                                return (
                                    <tr key = {livre.id}>
                                        <Livre titre = {livre.titre} auteur = {livre.auteur} nbPages = {livre.nbPages} suppr = {() => this.handleSupprimer(livre.id)} modif={() => {this.setState({idLivreAModifier: livre.id})}} />
                                    </tr>
                                )
                            }else {
                                return (
                                    <tr key={livre.id}>
                                        <FormulaireModifier id={livre.id} titre = {livre.titre} auteur = {livre.auteur} nbPages = {livre.nbPages} modifValidation={this.handleModifer} />
                                    </tr>
                                )
                            }
                        })}
                    </tbody>
                </table>
                {(this.props.ajout === true) ? null : <FormulaireAjout validation={this.handleAjoutLivre}/>}
            </Fragment>
        )
    }
}

export default Livres