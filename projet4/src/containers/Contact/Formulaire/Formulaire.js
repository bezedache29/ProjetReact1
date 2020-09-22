import React, { Component } from 'react'
import Bouton from '../../../components/Boutons/Bouton/Bouton'
import {withFormik} from 'formik'

class Formulaire extends Component {
    render() {
        return (
            <>
                <form className="my-3">
                    <div className="form-group mb-0">
                        <label htmlFor="nom">Nom <span className="badge badge-pill badge-warning text-dark">min 5 caractères</span></label>
                        <input 
                            type="text" 
                            name="nom" 
                            className="form-control" 
                            id="nom" 
                            placeholder="Votre Nom" 
                            onChange={this.props.handleChange} 
                            value={this.props.values.nom}
                            onBlur={this.props.handleBlur}
                        />
                    </div>
                    {(this.props.errors.nom !== null) && (this.props.touched.nom) ? <div style={{color:"red"}}>{this.props.errors.nom}</div> : null}
                    <div className="form-group mt-2 mb-0">
                        <label htmlFor="email">Email</label>
                        <input 
                            type="email" 
                            name="email" 
                            className="form-control" 
                            id="email" 
                            placeholder="Votre Email" 
                            onChange={this.props.handleChange}
                            value={this.props.values.email}
                            onBlur={this.props.handleBlur}
                        />
                    </div>
                    {(this.props.errors.email !== null) && (this.props.touched.email) ? <div style={{color:"red"}}>{this.props.errors.email}</div> : null}
                    <div className="form-group mt-2">
                        <label htmlFor="message">Message <span className="badge badge-pill badge-warning text-dark">min 100 caractères</span></label>
                        <textarea 
                            className="form-control" 
                            name="message" 
                            id="message" 
                            rows="3" 
                            onChange={this.props.handleChange}
                            value={this.props.values.message}
                            onBlur={this.props.handleBlur}
                        ></textarea>
                    </div>
                    {(this.props.errors.message !== null) && (this.props.touched.message) ? <div className="mb-2" style={{color:"red"}}>{this.props.errors.message}</div> : null}
                    <Bouton btnColor='btn-primary' clic={this.props.handleSubmit}>Envoyer</Bouton>
                </form>
            </>
        )
    }
    
}

export default withFormik({
    mapPropsToValues: () => ({
        nom: "",
        email: "",
        message: ""
    }),
    validate: (values) => {
        const errors = {}
        if(!values.nom) {
            errors.nom = "Le nom doit être renseigné"
        }else if(values.nom && values.nom.length < 5) {
            errors.nom = "Le nom doit avoir plus de 5 caractères"
        }

        if(!values.email) {
            errors.email = "L'adresse email doit être renseigné"
        }else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
            errors.email = "L'adresse email est invalide"
        }

        if(!values.message) {
            errors.message = "Un message doit être renseigné"
        }else if(values.message && values.message.length < 100) {
            errors.message = "Le message doit comporté 100 caractères minimum"
        }
        return errors
    },
    handleSubmit: (values, {props}) => {
        props.validation(values.nom, values.email, values.message)
    }
})(Formulaire)