import React, { Component, Fragment } from 'react'
import TitreH1 from '../../components/Titres/TitreH1'
import Bouton from '../../components/Boutons/Bouton/Bouton'
import Formulaire from './Formulaire/Formulaire'

class Contact extends Component {
    state = {
        formulaire: false,
        alert: null
    }

    handleFormulaire = () => {
        if(this.state.formulaire === false){
            this.setState({formulaire: true})
        }else {
            this.setState({formulaire: false})
        }
    }

    handleValidationForm = (nom, email, message) => {
        console.log(`${nom} - ${email}`)
        console.log(message)
        this.setState({
            formulaire: false,
            alert: "Votre message a bien été envoyé"
        })
    }

    render() {
        return (
            <Fragment>
                <div className="container mt-1">
                    <TitreH1>Contactez-nous !</TitreH1>
                    {(this.state.alert) &&
                        <div className="alert alert-success" role="alert">
                            {this.state.alert}
                        </div>
                    }
                    <div>
                        <h2 className="mb-0">Adresse</h2>
                        <p className="m-0">Saint-Louis de Rosay</p>
                        <p className="m-0">44170 ABBARETZ</p>
                        <h2 className="mt-3 mb-0">Téléphone</h2>
                        <p className="m-0">06 68 18 67 62</p>
                        <div className="mt-3">
                            <h2>Vous préférez nous écrire ?</h2>
                            <Bouton btnColor='btn-secondary' clic={this.handleFormulaire}>Formulaire de contact</Bouton>
                        </div>
                        {(this.state.formulaire) && 
                            <Formulaire validation={this.handleValidationForm} />
                        }
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default Contact