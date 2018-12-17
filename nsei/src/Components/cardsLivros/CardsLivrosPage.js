import _ from 'lodash'
import React, { Component, Fragment } from 'react'
import { Card, Container, Image } from 'semantic-ui-react'
import BotaoCards from "../botoes/BotaoCards"
import Book from "../book/novoLivro"

  
class CardLivrosPage extends Component {

  render() {

    return (
     <div> 
      <Container>
        <Card.Group doubling itemsPerRow={5}>
          {_.map(this.props.livros, livro => (
            <Card>
              <Image src={livro.imagem} fluid/>
              <Card.Content>
                <Fragment>
                  <Card.Header>{livro.nome}</Card.Header>
                  <Card.Meta>{livro.genero}</Card.Meta>
                </Fragment>
              </Card.Content>
              <Card.Content extra>
                <BotaoCards livro={livro}></BotaoCards>
              </Card.Content> 
            </Card>
          ))}
        </Card.Group>
        <br>
        </br>
        <Book>
        </Book>
      </Container>
      </div>
    )
  }
}

export default CardLivrosPage;