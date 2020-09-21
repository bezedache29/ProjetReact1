import React, { Component, Fragment } from 'react'
import Bouton from '../../components/Boutons/Bouton'
import Titre from '../../components/Titres/TitreH1'
import Personnage from './Personnage/Personnage'
import Armes from '../CreateurPersonnage/Armes/Armes'
import axios from 'axios'

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
        armes: null,
        loading: false,
        pseudo: ""
    }

    loadData = () => {
        
    }

    componentDidMount = () => {
        // On initialize le loading
        this.setState({loading: true})
        // On récupère les infos en bdd sur firebase stoke en json, avec axios
        axios.get("https://creapersoreact.firebaseio.com/armes.json")
            .then(reponse => {
                // console.log(reponse)
                // On récupère l'objet des armes stoké en bdd
                // On utilise Object.values pour recupérer les données dans un tableau
                const tabArmes = Object.values(reponse.data)
                this.setState((oldState,props) => {
                    let newArmes = oldState.armes
                    newArmes = tabArmes

                    return {
                        armes: newArmes,
                        loading: false
                    }
                })
                console.log(tabArmes)
            }).catch(error => {
                console.log(error)
                return {
                    loading: false
                }
            })
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
            // console.log(`arme ${index}`)
            const newPerso = {...oldState.personnage}
            let monArme = oldState.armes[index]
            newPerso.arme = monArme
            // console.log(monArme)

            return {
                personnage: newPerso
            }
        })
    }

    handleReset = () => {
        this.setState((oldState, props) => {
            const newPerso = {...oldState.personnage}
            newPerso.image = 1
            newPerso.force = 0
            newPerso.agilite = 0
            newPerso.intelligence = 0
            newPerso.arme = null

            return {
                personnage: newPerso,
                ptsRestants: oldState.ptsRestants = 7
            }
        })
    }

    handleCreationPerso = () => {
        this.setState({loading: true})
        // On verifie que les points ont été distribué et que l'arme a été selectionné
        if(this.state.ptsRestants === 0 && this.state.personnage.arme !== null) {
            const player = {
                perso: {...this.state.personnage},
                pseudo: this.state.pseudo
            }
            // On insere en bdd dans une collection qui si elle n'existe pas elle sera créé
            axios.post("https://creapersoreact.firebaseio.com/persos.json", player)
                .then(reponse => {
                    this.setState({
                        personnage: {
                            image: 1,
                            force: 0,
                            agilite: 0,
                            intelligence: 0,
                            arme: null
                        },
                        ptsRestants : 7,
                        loading: false,
                        pseudo: ""
                    })

                    this.props.refresh()
                    
                }).catch(error => {
                    this.setState({
                        personnage: {
                            image: 1,
                            force: 0,
                            agilite: 0,
                            intelligence: 0,
                            arme: null
                        },
                        ptsRestants : 7,
                        loading: false,
                        pseudo: ""
                    })
                    console.log(error)
                })
        }
    }

    render() {
        return (
            <Fragment>
            <section className="container">
                <Titre>Créateur de personnage</Titre>
                {(this.state.loading === false) ? null : <div>Chargement...</div>}
                {/* <Personnage image={this.state.personnage.image} force={this.state.personnage.force} agilite={this.state.personnage.agilite} intelligence={this.state.personnage.intelligence} /> */}
                <div className="form-group">
                    <label htmlFor="pseudo">Pseudo</label>
                    <input type="text" className="form-control" id="pseudo" name="pseudo" value={this.state.pseudo} onChange={(event) => this.setState({pseudo: event.target.value})} />
                </div>
                <Personnage {...this.state.personnage} 
                    flecheGauche={this.handleGauche} 
                    flecheDroite={this.handleDroite} 
                    ptsRestants={this.state.ptsRestants} 
                    plus={this.handlePlus}
                    moins={this.handleMoins}
                />
                {(this.state.armes !== null) ? <Armes listeArmes={this.state.armes} monArme={this.handleArme} armeActuelle={this.state.personnage.arme} /> : null}
                <div className="row no-gutters">
                    <Bouton colorBtn="btn-danger col-6" clic={this.handleReset}>Réinitialiser</Bouton>
                    <Bouton colorBtn="btn-success col-6" clic={this.handleCreationPerso}>Créer</Bouton>
                </div>
            </section>
            </Fragment>
        )
    }
}

export default CreateurPersonnage