import React, { Component } from 'react';
import './App.css';
import NavBar from '../Components/navbar/NavBar';
import CardsLivros from '../Components/cardsLivros/CardsLivros';


class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <CardsLivros />
      </div>
    );
  }
}

export default App;
