import React from 'react';
import Bouton from './components/Boutons/Bouton'
import Titre from './components/Titres/TitreH1'

function App() {
  return (
    <>
      <section className="container">
        <Titre>Créateur de personnage</Titre>
        <div>Personnages</div>
        <div>Armes</div>
        <Bouton colorBtn="btn-warning mr-1">Réinitialiser</Bouton>
        <Bouton colorBtn="btn-primary ml-1">Créer</Bouton>
      </section>
    </>
  );
}

export default App;
