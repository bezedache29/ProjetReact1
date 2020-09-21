import React, { Component, Fragment } from 'react'
import TitreH1 from './components/Titres/TitreH1'
import Bouton from './components/Boutons/Bouton'
import Livres from './containers/Livres/Livres'
import {BrowserRouter} from 'react-router-dom'

class App extends Component {
    state = {
        ajout : true
    }

    handleAjout() {

        if(this.state.ajout === true) {
            this.setState({ajout: false})
        }else if(this.state.ajout === false){
            this.setState({ajout: true})
        }

        console.log(this.state.ajout)
    }

    render() {
        return (
            <Fragment>
                <BrowserRouter basename="/js/react/projet1">
                    <div className="container">
                        <TitreH1>Page listant les livres</TitreH1>
                        <Livres ajout={this.state.ajout} fermerAjoutLivre={() => {this.setState({ajout: true})}} />
                        <Bouton btn = "btn-success" clic = {() => this.handleAjout()} width = "w-100">{(this.state.ajout) ? "Ajouter" : "Fermer Ajout"}</Bouton>
                    </div>
                </BrowserRouter>
            </Fragment>
        )
    }
}

export default App