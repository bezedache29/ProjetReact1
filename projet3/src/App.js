import React from 'react';
import ListePays from './containers/ListePays/ListePays'
import {BrowserRouter, Route} from 'react-router-dom'
import NavBar from './components/NavBar/NavBar'
import NavBar2 from './components/NavBar/NavBar2'
import UnPays from './containers/UnPays/UnPays'

function App() {
  return (
    <BrowserRouter>
      <Route path="/admin" component={NavBar2} />
      <Route path="/pays" component={NavBar} />
      {/* Si on ne met pas exact cela veut dire que toutes pages après /xxx seront concerné au component */}
      {/* Si on met exact seulement la page avec le path sera concerné */}
      <Route path="/" exact component={NavBar} />
      <Route path="/" exact render={() => <h1>Page d'Acceuil</h1>} />
      <Route path="/pays" exact component={ListePays}/>
      <Route path="/admin" exact render={() => <h1>Page d'Administration</h1>}/>
      <Route path="/pays/:id" render={(props) => <UnPays nomPays={props.match.params.id}/>}/>
    </BrowserRouter>
  );
}

export default App;
