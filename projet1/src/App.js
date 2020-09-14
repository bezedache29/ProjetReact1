import React, { Component, Fragment } from 'react'
import TitreH1 from './components/Titres/TitreH1'

class App extends Component {
    render() {
        return (
            <Fragment>
                <div className="container">
                    <TitreH1>Page listant les livres</TitreH1>
                    <div>Livres</div>
                    <button>Ajouter</button>
                </div>
            </Fragment>
        )
    }
}

export default App