import React from 'react';
import Accueil from './components/Accueil/Accueil'
import {BrowserRouter, Route} from 'react-router-dom'
import NavBar from './components/NavBar/NavBar'
import ListeEtablissements from './containers/ListeEtablissements/ListeEtablissements'

function App() {
  return (
    <>
      <BrowserRouter>
        <Route path="/" component={NavBar} />
        <Route path="/" exact render={(props) => <Accueil />} />
        <Route path="/localisation" render={(props) => <ListeEtablissements />} />
        
      </BrowserRouter>
    </>
  );
}

export default App;
