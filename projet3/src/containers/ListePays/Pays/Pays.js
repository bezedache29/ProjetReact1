import React, { Component, Fragment } from 'react'
import css from './Pays.module.css'
import {NavLink} from 'react-router-dom'

class Pays extends Component {
    
    render() {

        let imageCss = `p-2 ${css.flag}`
        let content = ""

        if(this.props.pagePays) {
            content = <p className="m-0 mb-1">Monnaie : {this.props.infosPays.currencies[0].name}</p>
        }else {
            content = 
            //     <NavLink to={`/pays/${this.props.infosPays.translations.fr}`}>Voir détail</NavLink>
            //     Cette solution permet d'avoir une url dynamique au lieu de l'avoir en dur comme l'exemple du dessus
                <NavLink to={this.props.match.url + "/" + this.props.infosPays.name}>Voir détails</NavLink>
        }

        return (
            <Fragment>
                <div className="row no-gutters border m-1">
                    <div className="col-6">
                        <img className={imageCss} src={this.props.infosPays.flag} alt='drapeau' />
                    </div>
                    <div className="col-6">
                        <h3>Nom : {this.props.infosPays.translations.fr}</h3>
                        <p className="m-0 mt-1">Capitale : {this.props.infosPays.capital}</p>
                        <p className="m-0 mt-1">Region: {this.props.infosPays.region}</p>
                        {content}
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default Pays