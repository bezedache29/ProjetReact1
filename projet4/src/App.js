import React from 'react';
import Accueil from './components/Accueil/Accueil'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import NavBar from './components/NavBar/NavBar'
import ListeEtablissements from './containers/ListeEtablissements/ListeEtablissements'
import Contact from './containers/Contact/Contact'
import Erreurs from './components/Erreurs/Erreurs'
import Erreur404 from './components/Erreurs/Erreur404/Erreur404'
import Footer from './components/Footer/Footer'
import './App.css'

function App() {
  return (
    <>
      <BrowserRouter basename="/js/react/projet4">
        <div className="site">
          <Route path="/" component={NavBar} />
          <Switch>
            <Route path="/" exact render={(props) => <Accueil />} />
            <Route path="/localisation" exact render={(props) => <ListeEtablissements />} />
            <Route path="/contact" exact render={(props) => <Contact />} />
            <Route render={(props) => <Erreurs><Erreur404 {...props} /></Erreurs>} />
          </Switch>
          <div className="minSite"></div>
        </div>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
