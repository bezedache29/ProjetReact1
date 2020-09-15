import React, { Component, Fragment } from 'react'
import css from './FormulaireAjout.module.css'
import Bouton from '../../../components/Boutons/Bouton'
import Livres from '../Livres'

class FormulaireAjout extends Component {
    state = {
        titreSaisi : "",
        auteurSaisi : "",
        nbPagesSaisi : ""
    }

    handleValidationForm = (event) => {
        // On empeche le rafraichissement de la page lors du clic sur valider
        event.preventDefault()
        // console.log(`${this.state.titreSaisi} - ${this.state.auteurSaisi} - ${this.state.nbPagesSaisi}`)
        Livres.handleAjoutLivre(this.state.titreSaisi, this.state.auteurSaisi, this.state.nbPagesSaisi)
    }

    render() {
        const monCss = `p2 mt-2 text-primary text-center rounded ${css.policeTitre}`
        return (
            <Fragment>
                <h2 className={monCss}>Affichage du formulaire d'ajout</h2>
                <form className="mb-2">
                    <div className="form-group">
                        <label htmlFor="titreLivre">Titre du livre</label>
                        {/* onChange permet de savoir si une valeur d'un input a changé. Si c'est le cas, on fait apel a une fonction qui va changer la state en inscrivant la nouvelle valeur */}
                        <input type="text" className="form-control" id="titreLivre" onChange={(event) => this.setState({titreSaisi:event.target.value})} value={this.state.titreSaisi} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="auteur">Auteur</label>
                        <input type="text" className="form-control" id="auteur" onChange={(event) => this.setState({auteurSaisi: event.target.value})} value={this.state.auteurSaisi} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="nbPages">Nombre de pages</label>
                        <input type="number" className="form-control" id="nbPages" onChange={(event) => this.setState({nbPagesSaisi:event.target.value})} value={this.state.nbPagesSaisi} />
                    </div>
                    <Bouton btn="btn-primary" clic={this.handleValidationForm} >Ajouter</Bouton>
                </form>
            </Fragment>
        )
    }
}

export default FormulaireAjout