// On récupère les modules React
import React from 'react'

// On récupère les modules React-Dom pour manipuler le DOM avec React
import ReactDOM from 'react-dom'

// On recupère le fichier App.js
import App from "./App"

// On place un contenue dans la balise #root du fichier index.html du dossier public
// ReactDOM.render(<h1 className="test">Coucou</h1>, document.querySelector('#root'))
ReactDOM.render(<App />, document.querySelector('#root'))