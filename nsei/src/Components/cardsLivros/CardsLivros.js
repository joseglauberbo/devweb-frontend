import _ from 'lodash'
import React, { Component, Fragment } from 'react'
import { Button, Card, Image, Container, Dimmer, Header, Icon } from 'semantic-ui-react'

const cards = [
  {
    "image": 'https://images-na.ssl-images-amazon.com/images/I/91h3FyuOJZL.jpg',
    "header": 'A menina que roubava livros',
    "description": 'Drama',
  },
  {
    "image": 'https://images-na.ssl-images-amazon.com/images/I/A1F94zuyjHL.jpg',
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

const extra = (
  <Button animated='fade'>
      <Button.Content visible> 
        <Icon name ='search'/> 
      </Button.Content>
      <Button.Content hidden>Veja mais</Button.Content>
  </Button>
)

class CardLivros extends Component {

  render() {

    return (
      <Container>
        <Card.Group doubling itemsPerRow={5}>
          {_.map(cards, card => (
            <Card
              image={card.image}
              header={card.header}
              meta={card.description}
              extra={extra}
            />
          ))}
        </Card.Group>
      </Container>
    )
  }
}

export default CardLivros;