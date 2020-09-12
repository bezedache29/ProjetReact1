import React, { Fragment } from 'react'
import Personne from './Personne'

 class App extends React.Component {
    render() {
        // Deux possibilité pour return du jsx

        // Si Fragment est utilisé, ne pas oublié de l'induqer dans l'import entre {}
        return (
            <Fragment>
                <Personne nom = "Tophe" age = "37" sexe = "Homme"/>
                <Personne nom = "Ripley" age = "30" sexe = "Femme"/>
                <Personne nom = "Bezedache" age = "25" sexe = "Homme"/>
            </Fragment>
        )
        
    }
 }

export default App