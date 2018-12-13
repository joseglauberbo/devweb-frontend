import _ from 'lodash'
import React, { Component } from 'react'
import { Card, Container } from 'semantic-ui-react'
import BotaoCards from "../botoes/BotaoCards"
import Book from "../book/novoLivro"

const extra = (
  <BotaoCards>

  </BotaoCards>

)

class CardLivrosPage extends Component {

  render() {

    return (
     <div> 
      <Container>
        <Card.Group doubling itemsPerRow={5}>
          {_.map(this.props.livros, card => (
            <Card
              image={card.image}
              header={card.header}
              meta={card.description}
              extra={extra}
            />
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