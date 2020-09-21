import React, { Component, Fragment } from 'react'
import TitreH1 from '../../components/Titres/TitreH1'
import Boutons from '../../components/Boutons/Boutons'
import axios from 'axios'
import TitreH2 from '../../components/Titres/TitreH2'
import Etablissements from './Etablissements/Etablissements'

class ListeEtablissements extends Component {
    state = {
        etablissements: null,
        nomEtablissementPluriel: "mairies",
        nomEtablissementSingulier: "Mairie",
        loading: false
    }

    componentDidMount = () => {
        this.setState({loading: true})
        axios.get("https://etablissements-publics.api.gouv.fr/v3/departements/29/mairie")
            .then(reponse => {
                this.setState({
                    etablissements: reponse.data.features,
                    loading: false
                })
            }).catch(error => {
                console.log(error)
                this.setState({loading: false})
            })
    }

    handleChangeEtablissement = (ets) => {
        this.setState({loading: true})
        axios.get(`https://etablissements-publics.api.gouv.fr/v3/departements/29/${ets}`)
            .then(reponse => {
                this.setState({
                    etablissements: reponse.data.features,
                    loading: false
                })
            }).catch(error => {
                console.log(error)
                this.setState({loading: false})
            })
    }

    handleEtablissement = (ets) => {
        let etablissement = ""
        if(ets === 'mairie') {
            etablissement = 'mairie'
            const etsCorrect = 'mairies'
            const etsCorrectSingulier = 'Mairie'
            this.setState({
                nomEtablissementPluriel:etsCorrect,
                nomEtablissementSingulier:etsCorrectSingulier
            })
            this.handleChangeEtablissement(etablissement)
        }else if(ets === 'commisseriat') {
            etablissement = 'commissariat_police'
            const etsCorrect = 'commisseriats de police'
            const etsCorrectSingulier = 'Commisseriat de police'
            this.setState({
                nomEtablissementPluriel:etsCorrect,
                nomEtablissementSingulier:etsCorrectSingulier
            })
            this.handleChangeEtablissement(etablissement)
        }else if(ets === 'pole') {
            etablissement = 'pole_emploi'
            const etsCorrect = 'poles emploi'
            const etsCorrectSingulier = 'Pole emploi'
            this.setState({
                nomEtablissementPluriel:etsCorrect,
                nomEtablissementSingulier:etsCorrectSingulier
            })
            this.handleChangeEtablissement(etablissement)
        }else if(ets === 'Prefecture') {
            etablissement = 'prefecture'
            const etsCorrect = 'préfectures'
            const etsCorrectSingulier = 'Préfecture'
            this.setState({
                nomEtablissementPluriel:etsCorrect,
                nomEtablissementSingulier:etsCorrectSingulier
            })
            this.handleChangeEtablissement(etablissement)
        }
        
    }
    
    render() {
        return (
            <Fragment>
            <div className="container mt-2">
                <TitreH1>Rechercher un établissement :</TitreH1>
                <Boutons etablissement={this.handleEtablissement}/>
                <TitreH2 addCss='my-2'>Liste des {this.state.nomEtablissementPluriel} :</TitreH2>
                <div className="row no-gutters mb-4">
                {(this.state.loading) && <div>Chargements des établissements</div>}
                {(!this.state.loading) && this.state.etablissements &&
                    this.state.etablissements.map((etablissement, index) => {
                        return (
                            <div key={index} className="col-12 col-md-6">
                                <Etablissements infosEts={etablissement} etsSingulier={this.state.nomEtablissementSingulier} />
                            </div>
                        )
                    })
                }
                </div>
            </div>
            </Fragment>
        )
    }
}

export default ListeEtablissements