import React, { Component, Fragment } from 'react'

class Bouton extends Component {
    render() {
        let monCss = `btn ${this.props.btn} ${this.props.width}`
        return (
            <Fragment>
                <button className = {monCss} onClick = {this.props.clic}>{this.props.children}</button>
            </Fragment>
        )
    }
}

export default Bouton