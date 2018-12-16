import React from 'react'
import { Button, Form, Grid, Header, Message, Segment } from 'semantic-ui-react'
import { NavLink } from "react-router-dom";
import ButtonSignUp from "../botoes/botoesSignUp";


const Login = () => (
  <div className='login-form'>
    <style>{`
      body > div,
      body > div > div,
      body > div > div > div.login-form {
        height: 100%;
      }
    `}</style>
    <Grid textAlign='center' style={{ height: '100%' }} verticalAlign='middle'>
      <Grid.Column style={{ maxWidth: 450 }}>
        <Header as='h2' color='black' textAlign='center'>
          Log-in to your account
        </Header>
        <Form size='large'>
          <Segment stacked>
            <Form.Input fluid icon='user' iconPosition='left' placeholder='E-mail address' />
            <Form.Input
              fluid
              icon='lock'
              iconPosition='left'
              placeholder='Password'
              type='password'
            />
            <Button color='black' fluid size='large' as={NavLink} to='/page'>
              Login
            </Button>
          </Segment>
        </Form>
        <Message>
          Novo por aqui?
          <ButtonSignUp>
          /</ButtonSignUp>
        </Message>
      </Grid.Column>
    </Grid>
  </div>
)

export default Login