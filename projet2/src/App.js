import React, { Component } from 'react';
import CreateurPersonnage from './containers/CreateurPersonnage/CreateurPersonnage'
import ListePersonnage from './containers/ListePersonnages/ListePersonnages'
import {BrowserRouter} from 'react-router-dom'

class App extends Component {
  state = {
    refresh: false
  }

  handleRefresh = () => {
    this.setState((oldState) => {
      return {
        refresh: !oldState.refresh
      }
    })
  }

  render() {
    return (
      <>
        <BrowserRouter basename="/js/react/projet2">
          <CreateurPersonnage refresh={this.handleRefresh} />
          <ListePersonnage refresh={this.state.refresh}/>
        </BrowserRouter>
      </>
    );
  }
}

export default App;
