import _ from 'lodash'
import React, { Component } from 'react'
import { Card, Container } from 'semantic-ui-react'

class CardLivrosHome extends Component {

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
            />
          ))}
        </Card.Group>
      </Container>
      </div>
    )
  }
}

export default CardLivrosHome;