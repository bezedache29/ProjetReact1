import React, { Component, Fragment } from 'react'
import Bouton from '../../../components/Boutons/Bouton'

class FomulaireModifier extends Component {
    state = {
        titreSaisi: "",
        auteurSaisi: "",
        nbPagesSaisi: ""
    }

    componentDidMount() {
        // On met a jour nos states au demarrage pour qu'il apparaissent dans les values des inputs 
        this.setState({
            titreSaisi: this.props.titre,
            auteurSaisi: this.props.auteur,
            nbPagesSaisi: this.props.nbPages
        })
    }

    handleValidation = () => {
        // Pas besoins de event.preventDefault() car les input ne sont pas dans des balises form
        this.props.modifValidation(this.props.id, this.state.titreSaisi, this.state.auteurSaisi, this.state.nbPagesSaisi)
    }

    render() {
        return (
            <Fragment>
                <td><input type="text" className="form-control" id="titreLivre" value={this.state.titreSaisi} onChange={(event) => this.setState({titreSaisi:event.target.value})} /></td>
                <td><input type="text" className="form-control" id="auteurLivre" value={this.state.auteurSaisi} onChange={(event) => this.setState({auteurSaisi:event.target.value})} /></td>
                <td><input type="text" className="form-control" id="nbPagesLivre" value={this.state.nbPagesSaisi} onChange={(event) => this.setState({nbPagesSaisi:event.target.value})} /></td>
                <td><Bouton btn = "btn-primary" clic = {this.handleValidation} >Valider</Bouton></td>
            </Fragment>
        )
    }
}

export default FomulaireModifier