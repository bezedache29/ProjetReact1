import React, { Component, Fragment } from 'react'
import DetailPersonnage from './DetailPersonnage/DetailPersonnage'
import axios from 'axios'

class ListePersonnages extends Component {
    state = {
        personnages: null,
        loading: false
    }

    loadData = () => {
        this.setState({loading: true})
        // On recupere la liste de spersos en bdd
        axios.get("https://creapersoreact.firebaseio.com/persos.json")
            .then(reponse => {
                console.log(reponse)
                const tabPersos = Object.values(reponse.data)
                this.setState((oldState,props) => {
                    let newPersos = oldState.personnages
                    newPersos = tabPersos

                    return {
                        personnages: newPersos,
                        loading: false
                    }
                })
                console.log(this.state.personnages)
            }).catch(error => {
                this.setState({loading: false})
            })
    }

    componentDidMount = () => {
        this.loadData()
    }

    componentDidUpdate = (oldProps, oldState) => {
        if(oldProps.refresh !== this.props.refresh) {
            this.loadData()
        }
            
    }

    render() {
        return (
            <Fragment>
            <section className="container">
                {(this.state.loading) && <div>Chargement des personnages ...</div>}
                {/* On verifie que loading est a false et que le state personnages n'est pas null */}
                {(!this.state.loading) && this.state.personnages &&
                    <div className="row no-gutters">
                        {this.state.personnages.map((perso, index) => {
                            return (
                                <div key={index} className="col-6 p-1">
                                    <DetailPersonnage infosPerso={perso}/>
                                </div>
                            )
                        })}
                    </div>
                }
                
            </section>
            </Fragment>
        )
    }
}

export default ListePersonnages