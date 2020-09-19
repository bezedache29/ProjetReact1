import React, { Component, Fragment } from 'react'
import Titre from '../../components/Titres/Titre'
import Boutons from '../../components/Boutons/Boutons'
import Pays from './Pays/Pays'
import axios from 'axios'

class ListePays extends Component {
    state = {
        pays: null,
        loading: false
    }

    loadData = () => {
        this.setState({loading: true})
        // On recupere la liste de spersos en bdd
        axios.get("https://restcountries.eu/rest/v2/all")
            .then(reponse => {
                const tabsPays = Object.values(reponse.data)
                this.setState({
                    pays: tabsPays,
                    loading: false
                })
            }).catch(error => {
                console.log(error)
                this.setState({loading: false})
            })
    }

    componentDidMount = () => {
        this.loadData()
    }

    render() {
        return (
            <Fragment>
                <section className="container">
                    <Titre>Liste des pays du monde</Titre>
                    <div>
                        <Boutons />
                    </div>
                    <div className="row no-gutters">
                    {(this.state.loading) && <div>Chargement des pays...</div>}
                    {(!this.state.loading) && this.state.pays &&
                        this.state.pays.map((unPays, index) => {
                            console.log(unPays)
                            return (
                                <div key={index} className="col-12 col-md-6">
                                    <Pays infosPays={unPays} />
                                </div>
                            )
                        })}
                    </div>
                    
                    <div>
                        Pagination
                    </div>
                </section>
            </Fragment>
        )
    }
}

export default ListePays