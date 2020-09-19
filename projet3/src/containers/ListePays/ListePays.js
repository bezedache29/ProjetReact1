import React, { Component, Fragment } from 'react'
import Titre from '../../components/Titres/Titre'
import Boutons from '../../components/Boutons/Boutons'
import Pays from './Pays/Pays'

class ListePays extends Component {
    render() {
        return (
            <Fragment>
                <section className="container">
                    <Titre>Liste des pays du monde</Titre>
                    <div>
                        <Boutons />
                    </div>
                    <div>
                        <Pays />
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