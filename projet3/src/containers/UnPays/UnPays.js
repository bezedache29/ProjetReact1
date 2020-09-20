import React, { Component, Fragment } from 'react'
import axios from 'axios'
import Titre from '../../components/Titres/Titre'
import Pays from '../ListePays/Pays/Pays'

class UnPays extends Component {
    state = {
        pays: null,
        loading: false,
    }

    componentDidMount = () => {
        this.setState({loading: true})
        axios.get(`https://restcountries.eu/rest/v2/name/${this.props.nomPays}?fullText=true`)
        .then(reponse => {
            this.setState({
                pays: reponse.data[0],
                loading: false
            })
        }).catch(error => {
            this.setState({loading: false})
            console.log(error)
        })
    }

    render() {
        return (
            <Fragment>
                <div className="container">
                    <Titre>Informations du pays {this.props.nomPays}</Titre>
                    {this.state.loading &&
                        <div>Chargement des infos du pays</div>
                    }
                    {this.state.pays &&
                        <Pays infosPays={this.state.pays} pagePays={true} />
                    }

                </div>
            </Fragment>
        )
    }
}

export default UnPays