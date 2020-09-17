import React, { Component, Fragment } from 'react'
import Bouton from '../../components/Boutons/Bouton'
import Titre from '../../components/Titres/TitreH1'
import Personnage from './Personnage/Personnage'

class CreateurPersonnage extends Component {
    state = {
        personnage: {
            image: 1,
            force: 0,
            agilite: 0,
            intelligence: 0
        },
        ptsRestants : 7
    }

    handleGauche = () => {
        this.setState((oldState, props) => {
            const newPerso = {...oldState.personnage}
            if(oldState.personnage.image <= 1) {
                newPerso.image = 3
            }else {
                newPerso.image--
            }
            return {personnage:newPerso}
        })
    }

    handleDroite = () => {
        this.setState((oldState, props) => {
            const newPerso = {...oldState.personnage}
            if(oldState.personnage.image >= 3) {
                newPerso.image = 1
            }else {
                newPerso.image++
            }
            return {personnage:newPerso}
        })
    }

    handlePlusForce = () => {
        this.setState((oldState, props) => {
            let pts = oldState.ptsRestants
            const newPerso = {...oldState.personnage}
            if(oldState.personnage.force >= 5) {
                newPerso.force = 5
            }else {
                newPerso.force++
                if(newPerso.force !== 6) {
                    pts--
                }
            }
            return {
                personnage:newPerso,
                ptsRestants:pts
            }
        })
    }

    handleMoinsForce = () => {
        this.setState((oldState, props) => {
            let pts = oldState.ptsRestants
            const newPerso = {...oldState.personnage}
            if(oldState.personnage.force <= 1) {
                newPerso.force = 0
            }else {
                newPerso.force--
                pts++
            }
            return {
                personnage: newPerso,
                ptsRestants:pts
            }
        })
    }

    render() {
        return (
            <Fragment>
            <section className="container">
                <Titre>Créateur de personnage</Titre>
                {/* <Personnage image={this.state.personnage.image} force={this.state.personnage.force} agilite={this.state.personnage.agilite} intelligence={this.state.personnage.intelligence} /> */}
                <Personnage {...this.state.personnage} flecheGauche={this.handleGauche} flecheDroite={this.handleDroite} ptsRestants={this.state.ptsRestants} plusForce={this.handlePlusForce} moinsForce={this.handleMoinsForce} />
                <div>Armes</div>
                <div className="row no-gutters">
                    <Bouton colorBtn="btn-danger col-6" clic={() => {console.log("Réinitialiser")}}>Réinitialiser</Bouton>
                    <Bouton colorBtn="btn-success col-6" clic={() => {console.log("Créer")}}>Créer</Bouton>
                </div>
            </section>
            </Fragment>
        )
    }
}

export default CreateurPersonnage