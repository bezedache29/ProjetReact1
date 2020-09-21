import React from 'react';
import ListePays from './containers/ListePays/ListePays'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import NavBar from './components/NavBar/NavBar'
import NavBar2 from './components/NavBar/NavBar2'
import UnPays from './containers/UnPays/UnPays'
import Erreur from './components/Erreurs/Erreurs'
import Erreur404 from './components/Erreurs/Erreur404/Erreur404'
import './App.css'

function App() {
  return (
    <BrowserRouter basename="/js/react/projet3">

      <Route path="/" exact component={NavBar} />
      <Route path="/pays" component={NavBar} />
      <Route path="/admin" component={NavBar2} />
        
      {/* Si on ne met pas exact cela veut dire que toutes pages après /xxx seront concerné au component */}
      {/* Si on met exact seulement la page avec le path sera concerné */}
        
      <Switch>
        <Route path="/" exact render={() => <h1>Page d'Acceuil</h1>} />
        <Route path="/pays" exact component={ListePays}/>
        <Route path="/admin" exact render={() => <h1>Page d'Administration</h1>}/>
        <Route path="/pays/:id" render={(props) => <UnPays nomPays={props.match.params.id}/>}/>
        <Route render={(props) => <Erreur><Erreur404 /></Erreur>} />
      </Switch>

    </BrowserRouter>
  );
}

export default App;
