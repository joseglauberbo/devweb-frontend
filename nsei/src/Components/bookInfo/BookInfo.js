import React, { Component } from 'react'
import { Container, Header, Segment, Image, Grid, Divider, Table, Icon } from 'semantic-ui-react'

class BookInfo extends Component {

  constructor(props) {
    super(props);
  }

  render() {
  
    return (
      <Container>
        <Header as='h3' textAlign='center'>
          {this.props.livro.nome}
        </Header>
        <Segment>
          <Grid columns={2} relaxed='very'>
            <Grid.Column>
              <p>
                <Image src={this.props.livro.imagem} />
              </p>
            </Grid.Column>
            <Grid.Column>
              <Divider horizontal>
                <Header as='h4'>
                  <Icon name='tag' />
                  Descrição do que o usuário achou do livro
                </Header>
              </Divider>
              <p>
                {this.props.livro.descricao}
              </p>
            </Grid.Column>
          </Grid>
        </Segment>
      </Container>
    )
  }
}

export default BookInfo;