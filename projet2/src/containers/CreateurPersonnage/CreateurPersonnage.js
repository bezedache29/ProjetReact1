import React, { Component, Fragment } from 'react'
import Bouton from '../../components/Boutons/Bouton'
import Titre from '../../components/Titres/TitreH1'
import Personnage from './Personnage/Personnage'
import Armes from '../CreateurPersonnage/Armes/Armes'

class CreateurPersonnage extends Component {
    state = {
        personnage: {
            image: 1,
            force: 0,
            agilite: 0,
            intelligence: 0,
            arme: null
        },
        ptsRestants : 7,
        armes: ["epee", "fleau", "arc", "hache"]
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

    handlePlus = (carac) => {
        this.setState((oldState, props) => {
            let pts = oldState.ptsRestants
            const newPerso = {...oldState.personnage}
            
            if(oldState.personnage[carac] >= 5) {
                newPerso[carac] = 5
            }else if(pts !== 0) {
                newPerso[carac]++
                if(newPerso[carac] !== 6) {
                    pts--
                }
            }
                
            
            return {
                personnage:newPerso,
                ptsRestants:pts
            }
        })
    }

    handleMoins = (carac) => {
        this.setState((oldState, props) => {
            let pts = oldState.ptsRestants
            const newPerso = {...oldState.personnage}
            
            if(oldState.personnage[carac] <= 0) {
                newPerso[carac] = 0
            }else if(pts !== 7) {
                newPerso[carac]--
                if(newPerso[carac] !== -1) {
                    pts++
                }
            }

            return {
                personnage: newPerso,
                ptsRestants:pts
            }
        })
    }

    handleArme = (index) => {
        this.setState((oldState, props) => {
            const newPerso = {...oldState.personnage}
            let monArme = oldState.armes[index]
            oldState.personnage.arme = monArme

            return {
                personnage: newPerso
            }
        })
    }

    render() {
        return (
            <Fragment>
            <section className="container">
                <Titre>Créateur de personnage</Titre>
                {/* <Personnage image={this.state.personnage.image} force={this.state.personnage.force} agilite={this.state.personnage.agilite} intelligence={this.state.personnage.intelligence} /> */}
                <Personnage {...this.state.personnage} 
                    flecheGauche={this.handleGauche} 
                    flecheDroite={this.handleDroite} 
                    ptsRestants={this.state.ptsRestants} 
                    plus={this.handlePlus}
                    moins={this.handleMoins}
                />
                <Armes listeArmes={this.state.armes} monArme={this.handleArme} armeActuelle={this.state.personnage.arme} />
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