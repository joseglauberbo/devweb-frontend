import React from 'react'
import { Grid, Placeholder, Segment, Container } from 'semantic-ui-react'

const PlaceholderExampleGrid = () => (
    <Container>
  <Grid stackable>
    <Grid.Column>
      <Segment raised>
        <Placeholder>
          <Placeholder.Header image>
            <Placeholder.Line />
            <Placeholder.Line />
          </Placeholder.Header>
          <Placeholder.Paragraph>
            <Placeholder.Line length='medium' />
            <Placeholder.Line length='short' />
          </Placeholder.Paragraph>
        </Placeholder>
      </Segment>
    </Grid.Column>
    </Grid>
    </Container>
)
export default PlaceholderExampleGrid;