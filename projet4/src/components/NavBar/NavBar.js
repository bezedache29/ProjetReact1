import React from 'react'
import {NavLink} from 'react-router-dom'

const NavBar = (props) => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <a className="navbar-brand" href="#">Projet 4</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <NavLink 
                                className="nav-link" 
                                // activeClassName="active activeAccueil" 
                                // activeStyle={{
                                //     textDecoration: "underline"
                                // }}
                                exact 
                                to="/"
                            >Accueil</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/localisation">Localisation</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" exact to="/contact">Contact</NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default NavBar