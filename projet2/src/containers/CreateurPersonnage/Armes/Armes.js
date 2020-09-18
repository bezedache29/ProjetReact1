import React, { Component, Fragment } from 'react'
import Arme from './Arme/Arme'
import ImageEpee from '../../../assets/images/armes/epee.png'
import ImageFleau from '../../../assets/images/armes/fleau.png'
import ImageArc from '../../../assets/images/armes/arc.png'
import ImageHache from '../../../assets/images/armes/hache.png'

class Armes extends Component {
    render() {
        return (
            <Fragment>
            <div className="row no-gutters my-4">
                    {this.props.listeArmes.map((arme, index) => {
                        let imageArme
                        if(arme === "epee") {
                            imageArme = ImageEpee
                        }else if(arme === "fleau") {
                            imageArme = ImageFleau
                        }else if(arme === "arc") {
                            imageArme = ImageArc
                        }else if(arme === "hache") {
                            imageArme = ImageHache
                        }
                        return <Arme key={index} isArmePerso={(this.props.armeActuelle === arme) ? true : false} linkImg={imageArme} armeActuelle={this.props.armeActuelle} monArme={() => this.props.monArme(index)}>{arme}</Arme>
                    })}
            </div>
            </Fragment>
        )
    }
}

export default Armes