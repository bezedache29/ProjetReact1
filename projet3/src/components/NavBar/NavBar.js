import React from 'react'
import {NavLink} from 'react-router-dom'

const navbar = (props) => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <a className="navbar-brand" href="#">React</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <NavLink className="nav-link" exact to="/">Accueil</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" exact to="/pays">Liste des pays</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" exact to="/admin">Admin</NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default navbar