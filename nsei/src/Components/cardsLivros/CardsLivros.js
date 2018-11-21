import _ from 'lodash'
import React, { Component, Fragment } from 'react'
import { Button, Card, Divider, Image, Placeholder, Container, Header } from 'semantic-ui-react'

const cards = [
  {
    avatar: '/images/avatar/large/helen.jpg',
    header: 'Livros Lidos',
    description: 'Seus livros que já foram lidos',
  },
  {
    avatar: '/images/avatar/large/matthew.png',
    header: 'Livros Não lidos',
    description: 'Os livros que você têm, mas ainda não leu',
  },
  {
    avatar: '/images/avatar/large/molly.png',
    header: 'Livros desejados',
    description: 'Os livros que você deseja comprar',
  },
]

class CardLivros extends Component {
  state = { loading: false }

  handleLoadingClick = () => {
    this.setState({ loading: true })

    setTimeout(() => {
      this.setState({ loading: false })
    }, 3000)
  }

  render() {
    const { loading } = this.state

    return (
      <Container>
      <Fragment>

        <Card.Group doubling itemsPerRow={3} stackable>
          {_.map(cards, card => (
            <Button >
            <Card key={card.header}>
              {loading ? (
                <Placeholder>
                  <Placeholder.Image square />
                </Placeholder>
              ) : (
                <Image src={card.avatar} />
              )}

              <Card.Content>
                {loading ? (
                  <Placeholder>
                    <Placeholder.Header>
                      <Placeholder.Line length='very short' />
                      <Placeholder.Line length='medium' />
                    </Placeholder.Header>
                    <Placeholder.Paragraph>
                      <Placeholder.Line length='short' />
                    </Placeholder.Paragraph>
                  </Placeholder>
                ) : (
                  <Fragment>
                    <Card.Header>{card.header}</Card.Header>
                    <Card.Meta>{card.date}</Card.Meta>
                    <Card.Description>{card.description}</Card.Description>
                  </Fragment>
                )}
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