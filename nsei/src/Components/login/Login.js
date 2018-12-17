import React, { Component } from 'react'
import { Button, Form, Grid, Header, Message, Segment, Confirm } from 'semantic-ui-react'
import { NavLink } from "react-router-dom";
import axios from 'axios'
import { withRouter } from 'react-router';


class Login extends Component {

  constructor(props) {
    super(props)
    this.state = {
      email: "",
      password: "",
      erro: false
    }
  }

  salvarToken(response) {
    var res = response.data;
    localStorage.setItem('userID', res.usuarioId);
    localStorage.setItem("token", res.token);
    console.log(res.usuarioId)
    console.log(res.token)
  }

  emailChange = event => {
    this.setState({ email: event.target.value });
  }
  passwordChance = event => {
    this.setState({ password: event.target.value });
  }
  loginConfirmado = () => {
    window.location.reload();
    this.props.history.push('/')
  }

  loginNegado = (erro) => this.setState({ erro: true, mensagemErro: "E-mail ou senha incorretos." })
  
  voltar = () => this.setState({ erro: false })

  handleSubmit = event => {
    event.preventDefault();
    const user = {
      "email": this.state.email,
      "password": this.state.password,
    };
   
    axios.post("http://localhost:3001/authentication", user).then(result => {
      this.salvarToken(result)
      this.loginConfirmado()
    }, error => {
      this.loginNegado(error)
    })
  }

  render() {
    return (
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
          <div>
            <Form onSubmit={this.handleSubmit} size="large">
              <Segment stacked>
              <Header as='h2' color='black' textAlign='center'>
                Entre com sua conta
              </Header>
              <Form.Input required fluid icon='user' iconPosition='left' placeholder='Digite seu email' onChange={this.emailChange} />
              <Form.Input required fluid icon='lock' iconPosition='left' placeholder='Password' type='password' onChange={this.passwordChange}/>
              <Button type="submit" color='black' fluid size='large'> Login </Button>
              </Segment>
            </Form>
            <Confirm
            open={this.state.erro}
            header='Erro no login'
            content={this.state.mensagemErro}
            confirmButton="Corrigir"
            onConfirm={this.voltar} />
        </div>
            <Message>
              Novo por aqui?
            <Button color='black' fluid size='large' as={NavLink} to='/cadastro'>
                Cadastre-se
            </Button>
            </Message>
          </Grid.Column>
        </Grid>
      </div>
    )
  }
}

const LoginComRouter = withRouter(Login);
export default LoginComRouter; 
