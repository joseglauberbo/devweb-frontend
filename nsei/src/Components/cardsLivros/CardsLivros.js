import _ from 'lodash'
import React, { Component, Fragment } from 'react'
import { Button, Card, Image, Container } from 'semantic-ui-react'

const cards = [
  {
    "image": 'http://www.melhoramigo.dog/wp-content/uploads/2016/01/cachorros-com-seus-livros-20.jpg',
    "header": 'Livros Lidos',
    "description": 'Seus livros que já foram lidos',
  },
  {
    "image": 'http://cdn.wp.clicrbs.com.br/espacopet/files/2014/11/cachorro-lendo.jpg',
    "header": 'Livros Não lidos',
    "description": 'Os livros que você têm, mas ainda não leu',
  },
  {
    "image": 'http://noticias.r7.com/blogs/patas-ao-alto/files/2014/06/cachorro-leitura-patas-ao-alto.jpg',
    "header": 'Livros desejados',
    "description": 'Os livros que você deseja comprar',
  },
]

class CardLivros extends Component {

  render() {

    return (
      <Container>
      <Fragment>
        <Card.Group doubling itemsPerRow={3} stackable>
          {_.map(cards, card => (
            <Button>
            <Card key={card.header}>
                <Image src={card.image} />
              <Card.Content>
                  <Fragment>
                    <Card.Header>{card.header}</Card.Header>
                    <Card.Meta>{card.date}</Card.Meta>
                    <Card.Description>{card.description}</Card.Description>
                  </Fragment>
              </Card.Content>
            </Card>
            </Button>
          ))}
        </Card.Group>
      </Fragment>
      </Container>
    )
  }
}

export default CardLivros;