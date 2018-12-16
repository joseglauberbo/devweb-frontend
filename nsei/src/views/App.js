import React, { Component } from 'react';
import './App.css';
import NavBar from '../Components/navbar/NavBar';
import CardsLivros from '../Components/cardsLivros/CardsLivros';
import CardsLivrosPage from '../Components/cardsLivros/CardsLivrosPage';
import BookInfo from '../Components/bookInfo/BookInfo';
import Login from '../Components/login/Login';
import axios from 'axios';
import { Route, HashRouter } from "react-router-dom";


let listaLivros = [
  {
    "nome": "A menina que roubava livros",
    "descricao": "é uma historia de uma bela garota q rouba livros",
    "imagem": "https://images.livrariasaraiva.com.br/imagemnet/imagem.aspx/?pro_id=6393010&qld=90&l=430&a=-1=1004881681",
    "genero": "Drama"
  },
  {
    "nome": "O diário de Anne Frank",
    "descricao": "nunca li",
    "imagem": "https://images-na.ssl-images-amazon.com/images/I/71e0bxVb%2B%2BL.jpg",
    "genero": "historia"
    
  },
  {
    "nome": "O menino do pijama listrado",
    "descricao": "é uma historia mt triste de um menino q morre",
    "imagem": "https://images-na.ssl-images-amazon.com/images/I/91W0FK7NL3L.jpg",
    "genero": "tristeza"
    
  },
  {
    "nome": "O Pequeno Príncipe",
    "descricao": "é lindinho",
    "imagem": "https://images-na.ssl-images-amazon.com/images/I/91bJFtVezBL.jpg",
    "genero": "lindinho"
  
  },
  {
    "nome": "Água para elefantes",
    "descricao": "ai eu amei",
    "imagem": "https://images-na.ssl-images-amazon.com/images/I/91GCLiRIq-L.jpg",
    "genero": "romance"

  },
]

let bdLivros = []

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      livros: [...listaLivros],
    };
    this.handleChange = this.handleChange.bind(this);
  };

  componentDidMount () {
    axios.get('http://localhost:3001/livros')
    .then(res => {
      bdLivros = res.data;
      const livros = listaLivros.concat(bdLivros);
      this.setState({livros})
    });
  };

  handleChange = event => {
    const input = event.target.value.toLowerCase();
    this.setState(currentState => {
      return { livros: listaLivros.filter(livro => livro.nome.toLowerCase().includes(input)) }
    });
  };


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
}


export default App;
