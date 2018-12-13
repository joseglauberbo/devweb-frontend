import React, { Component } from 'react';
import './App.css';
import NavBar from '../Components/navbar/NavBar';
import CardsLivros from '../Components/cardsLivros/CardsLivros';
import CardsLivrosPage from '../Components/cardsLivros/CardsLivrosPage';
import BookInfo from '../Components/bookInfo/BookInfo';
import Login from '../Components/login/Login';
import { Route, HashRouter } from "react-router-dom";


let listaLivros = [
  {
    "image": 'https://images-na.ssl-images-amazon.com/images/I/91h3FyuOJZL.jpg',
    "header": 'A menina que roubava livros',
    "description": 'Drama',
  },
  {
    "image": 'https://images-na.ssl-images-amazon.com/images/I/71e0bxVb%2B%2BL.jpg',
    "header": 'O diário de Anne Frank',
    "description": 'História',
  },
  {
    "image": 'https://images-na.ssl-images-amazon.com/images/I/91W0FK7NL3L.jpg',
    "header": 'O menino do pijama listrado',
    "description": 'História',
  },
  {
    "image": 'https://images-na.ssl-images-amazon.com/images/I/91bJFtVezBL.jpg',
    "header": 'O Pequeno Príncipe',
    "description": 'Romance',
  },
  {
    "image": 'https://images-na.ssl-images-amazon.com/images/I/91GCLiRIq-L.jpg',
    "header": 'Água para elefantes',
    "description": 'Romance',
  },
]

class App extends Component {

  constructor(props) {
    super();
    this.state = {
      livros: [...listaLivros],
      loggedIn: true
    };
    this.handleChange = this.handleChange.bind(this);
  };

  handleChange = event => {
    const input = event.target.value.toLowerCase();
    this.setState(currentState => {
      return { livros: listaLivros.filter(livro => livro.header.toLowerCase().includes(input)) }
    });
  }


  render() {
    return (
      <HashRouter>
    
        {/* ISSO N ESTÁ MUDANDO O NAVBAR E EU N SEI O PQ, MEU DEUS
          {this.state.loggedIn ?
          <div>
            <NavBar handleChange={this.handleChange}> </NavBar>
            <Route exact path="/page" component={(props) => <CardsLivrosPage {...props} livros={this.state.livros} />} />
            <Route exact path="/book" component={(props) => <BookInfo {...props} livros={this.state.livros} />} />
          </div> :
          <div>
            <NavBarHome handleChange={this.handleChange}> </NavBarHome>
            <botoesNavBarHome onClick={this.toggle} />{' '}
            <Route exact path="/" component={(props) => <CardsLivros {...props} livros={this.state.livros} />} />
          </div>} */}
          <div>
          <NavBar handleChange={this.handleChange}> </NavBar>
          <Route exact path="/" component={(props) => <Login {...props} livros={this.state.livros} />} />
          <Route exact path="/user" component={(props) => <CardsLivros {...props} livros={this.state.livros} />} />
          <Route exact path="/page" component={(props) => <CardsLivrosPage {...props} livros={this.state.livros} />} />
          <Route exact path="/book" component={(props) => <BookInfo {...props} livros={this.state.livros} />} />
          </div>
      </HashRouter>
    );
  }

  toggle() {
    this.setState({
      loggedIn: !this.state.loggedIn
    })
  }
}


export default App;
