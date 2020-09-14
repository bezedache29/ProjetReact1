import React, { Component, Fragment } from 'react'
import css from './FormulaireAjout.module.css'

class FormulaireAjout extends Component {
    render() {
        const monCss = `p2 mt-2 text-primary text-center rounded ${css.policeTitre}`
        return (
            <Fragment>
                <h2 className={monCss}>Affichage du formulaire d'ajout</h2>
            </Fragment>
        )
    }
}

export default FormulaireAjout