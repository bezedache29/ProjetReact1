import React, { Component, Fragment } from 'react'
import ImagePerso from '../Personnage/ImagesPersos/ImagePerso'
import CaracPerso from '../Personnage/CaracPerso/CaracPerso'

class Personnage extends Component {
    render() {
        return (
            <Fragment>
                <div className="row no-gutters">
                    <div className="col-6 row no-gutters">
                        <ImagePerso image={this.props.image} flecheGauche={this.props.flecheGauche} flecheDroite={this.props.flecheDroite} />
                    </div>
                    <div className="col-6">
                        <CaracPerso 
                            force={this.props.force} 
                            agilite={this.props.agilite} 
                            intelligence={this.props.intelligence} 
                            ptsRestants={this.props.ptsRestants}
                            plus={this.props.plus}
                            moins={this.props.moins}
                        />
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default Personnage