import React, { Component, Fragment } from 'react'
import Bouton from '../../../components/Boutons/Bouton'

class FomulaireModifier extends Component {
    render() {
        return (
            <Fragment>
                <input type="text" className="form-control" id="titreLivre"  />
                <input type="text" className="form-control" id="titreLivre"  />
                <input type="text" className="form-control" id="titreLivre"  />
                <Bouton btn = "btn-primary" >Valider</Bouton>
            </Fragment>
        )
    }
}

export default FomulaireModifier