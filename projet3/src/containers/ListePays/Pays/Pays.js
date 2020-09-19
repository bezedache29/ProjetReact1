import React, { Component, Fragment } from 'react'
import css from './Pays.module.css'

class Pays extends Component {
    
    render() {

        let imageCss = `p-2 ${css.flag}`

        return (
            <Fragment>
            <div className="row no-gutters border m-1">
                <div className="col-6">
                    <img className={imageCss} src={this.props.infosPays.flag} alt='drapeau' />
                </div>
                <div className="col-6">
                    <h3>Nom : {this.props.infosPays.translations.fr}</h3>
                    <p className="m-0 mt-1">Capitale : {this.props.infosPays.capital}</p>
                    <p className="m-0 mb-1">Region: {this.props.infosPays.region}</p>
                </div>
            </div>
            </Fragment>
        )
    }
}

export default Pays