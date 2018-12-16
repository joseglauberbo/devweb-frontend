import _ from 'lodash'
import React, { Component } from 'react'
import { Card, Container } from 'semantic-ui-react'

class CardLivrosHome extends Component {

  render() {

    return (
      <div>
      <Container>
        <Card.Group doubling itemsPerRow={5}>
          {_.map(this.props.livros, livro => (
            <Card
              image={livro.imagem}
              header={livro.nome}
              meta={livro.descricao}
            />
          ))}
        </Card.Group>
      </Container>
      </div>
    )
  }
}

export default CardLivrosHome;