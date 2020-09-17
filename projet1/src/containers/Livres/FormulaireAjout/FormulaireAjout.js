import React, { Component, Fragment } from 'react'
import css from './FormulaireAjout.module.css'
import Bouton from '../../../components/Boutons/Bouton'
import {withFormik} from 'formik'

class FormulaireAjout extends Component {
    // state = {
    //     titreSaisi : "",
    //     auteurSaisi : "",
    //     nbPagesSaisi : ""
    // }

    // handleValidationForm = (event) => {
    //     // On empeche le rafraichissement de la page lors du clic sur valider
    //     event.preventDefault()
    //     // console.log(`${this.state.titreSaisi} - ${this.state.auteurSaisi} - ${this.state.nbPagesSaisi}`)
    //     // On utilise la fonction passé en props sur Livres.js
    //     this.props.validation(this.state.titreSaisi, this.state.auteurSaisi, this.state.nbPagesSaisi)

    //     // On réinitalise le formulaire après l'ajout du livre
    //     this.setState(() => {
    //         return {
    //             titreSaisi: "",
    //             auteurSaisi : "",
    //             nbPagesSaisi : ""
    //         }
    //     })
    // }

    render() {
        const monCss = `p2 mt-2 text-primary text-center rounded ${css.policeTitre}`
        return (
            <Fragment>
                <h2 className={monCss}>Affichage du formulaire d'ajout</h2>
                <form className="mb-2">
                    <div className="form-group">
                        <label htmlFor="titreLivre">Titre du livre</label>
                        {/* onChange permet de savoir si une valeur d'un input a changé. Si c'est le cas, on fait apel a une fonction qui va changer la state en inscrivant la nouvelle valeur */}
                        <input 
                            type="text" 
                            name="titre" 
                            className="form-control" 
                            id="titreLivre" 
                            onChange={this.props.handleChange} 
                            value={this.props.values.titre}
                            onBlur={this.props.handleBlur}
                        />
                        {(this.props.errors.titre !== null && (this.props.touched.titre)) ? <span style={{color:"red"}}>{this.props.errors.titre}</span> : null}
                    </div>
                    <div className="form-group">
                        <label htmlFor="auteur">Auteur</label>
                        <input 
                            type="text" 
                            name="auteur" 
                            className="form-control" 
                            id="auteur" 
                            onChange={this.props.handleChange} 
                            value={this.props.values.auteur}
                            onBlur={this.props.handleBlur}
                        />
                        {(this.props.errors.auteur !== null) && (this.props.touched.auteur) ? <span style={{color:"red"}}>{this.props.errors.auteur}</span> : null}
                    </div>
                    <div className="form-group">
                        <label htmlFor="nbPages">Nombre de pages</label>
                        <input 
                            type="number" 
                            name="nbPages" 
                            className="form-control" 
                            id="nbPages" 
                            onChange={this.props.handleChange} 
                            value={this.props.values.nbPages}
                            onBlur={this.props.handleBlur}
                        />
                        {(this.props.errors.nbPages !== null) && (this.props.touched.nbPages) ? <span style={{color:"red"}}>{this.props.errors.nbPages}</span> : null}
                    </div>
                    <Bouton btn="btn-warning mr-1" clic={this.props.handleReset} >Reset</Bouton>
                    <Bouton btn="btn-primary ml-1" clic={this.props.handleSubmit} >Ajouter</Bouton>
                </form>
            </Fragment>
        )
    }
}

// On rensigne a Formik un objet qui contiendra 3 propriétés pour utilisé le systeme de validation de formulaire
// withFormik s'execute avant le FormulaireAjout
// withFormik n'est pas de type class, donc pas de "this" a l'interieur
export default withFormik({
    mapPropsToValues: () => ({
        // Permet de supprimer tout ce qu'on a fait au niveau des states
        // Ce qui est présent dans le name des inputs fait référence au nom ci-dessous
        titre: "",
        auteur: "",
        "nbPages": ""
    }),
    validate: (values) => {
        // Permet de lancer les options de validation
        // Va recuperer des values des input

        // On verifie que le titre existe qu'il possède au moins 3 caractères et max 18 caractères
        const errors = {}
        if(!values.titre) {
            errors.titre = "Le titre doit être renseigné"
        }else if(values.titre && values.titre.length < 3) {
            errors.titre = "Le titre doit avoir plus de 3 caractères"
        }else if(values.titre && values.titre.length > 18) {
            errors.titre = "Le titre ne doit pas dépasser 18 caractères"
        }
        // Si le champ auteur n'est pas rempli
        if(!values.auteur) {
            errors.auteur = "L'auteur doit être renseigné";
        }
        // Si le champ nbPages contient 2 chiffres min et 3 chiffres max
        if(!values.nbPages) {
            errors.nbPages = "Le nombre de pages doit être renseigné"
        }else if(values.nbPages < 10) {
            errors.nbPages = "Le nombre de pages doit faire 10 pages minimum"
        }else if(values.nbPages > 999) {
            errors.nbPages = "Le nombre de pages doit faire 999 pages maximum"
        }
        return errors
    },
    handleSubmit: (values, {props}) => {
        // Permet de lancer les actions à la soumission du formulaire
        // Lié au bouton
        props.validation(values.titre, values.auteur, values.nbPages)
    }
})(FormulaireAjout)