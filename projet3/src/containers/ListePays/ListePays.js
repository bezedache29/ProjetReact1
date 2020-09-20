import React, { Component, Fragment } from 'react'
import Titre from '../../components/Titres/Titre'
import Boutons from '../../components/Boutons/Boutons'
import Pays from './Pays/Pays'
import axios from 'axios'
import Pagination from './Pagination/Pagination'

class ListePays extends Component {
    state = {
        pays: null,
        loading: false,
        regionSelectionner: "",
        nbPays: null,
        numPageActuelle: 1,
        nbPages: null
    }

    loadData = () => {
        this.setState({loading: true})
        // On recupere la liste de spersos en bdd
        axios.get("https://restcountries.eu/rest/v2/all")
            .then(reponse => {
                const tabsPays = Object.values(reponse.data)
                let nbPays = tabsPays.length
                let nbPages = nbPays / 10
                this.setState({
                    pays: tabsPays,
                    loading: false,
                    regionSelectionner: "Tous",
                    nbPays: nbPays,
                    nbPages: nbPages
                })
            }).catch(error => {
                console.log(error)
                this.setState({loading: false})
            })
    }

    componentDidMount = () => {
        this.loadData()
    }

    handleAffichePaysRegion = (region) => {
        this.setState({loading: true})
        // On recupere la liste de spersos en bdd
        axios.get(`https://restcountries.eu/rest/v2/region/${region}`)
            .then(reponse => {
                const tabsRegion = Object.values(reponse.data)
                let nbPays = tabsRegion.length
                this.setState({
                    pays: tabsRegion,
                    loading: false,
                    regionSelectionner: region,
                    nbPays: nbPays,
                    numPageActuelle: 1
                })
            }).catch(error => {
                console.log(error)
                this.setState({loading: false})
            })
    }

    HandleAfficheAllPays = () => {
        this.setState({loading: true})
        // On recupere la liste de spersos en bdd
        axios.get("https://restcountries.eu/rest/v2/all")
            .then(reponse => {
                const tabsPays = Object.values(reponse.data)
                let nbPays = tabsPays.length
                this.setState({
                    pays: tabsPays,
                    loading: false,
                    regionSelectionner: "Tous",
                    nbPays: nbPays
                })
            }).catch(error => {
                console.log(error)
                this.setState({loading: false})
            })
    }

    handleNumPageActuelle = (numero) => {
        this.setState({numPageActuelle: numero})
    }

    render() {
        let listePays = ""
        const debut = (this.state.numPageActuelle - 1) * 10 // 0*10 = 0 / 1*10 = 10
        const fin = (this.state.numPageActuelle * 10)
        if(this.state.pays) {
            let listeReduite = this.state.pays.slice(debut, fin)
            listePays = listeReduite.map((unPays, index) => {
                {/* console.log(unPays) */}
                return (
                    <div key={index} className="col-12 col-md-6">
                        <Pays infosPays={unPays} />
                    </div>
                )
            })
        }
        return (
            <Fragment>
                <section className="container">
                    <Titre>Liste des pays du monde</Titre>
                    <div className="d-flex align-items-center">
                        <Boutons region={this.handleAffichePaysRegion} regionSelectionner={this.state.regionSelectionner} allPays={this.HandleAfficheAllPays}/>
                        <p className='m-0 ml-3'>Nombre de pays : <span className="badge badge-success">{this.state.nbPays}</span></p>
                    </div>
                    <div className="row no-gutters">
                    {(this.state.loading) && <div>Chargement des pays...</div>}
                    {(!this.state.loading) && this.state.pays &&
                        listePays
                    }
                    </div>
                    <div className="row no-gutters">
                        <Pagination numPage={this.handleNumPageActuelle} numPageActuelle={this.state.numPageActuelle} listePays={this.state.pays} />
                    </div>
                </section>
            </Fragment>
        )
    }
}

export default ListePays