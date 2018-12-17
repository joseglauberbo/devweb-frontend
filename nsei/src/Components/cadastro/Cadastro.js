import React, { Component } from 'react'
import { Button, Form, Grid, Header, Confirm, Segment } from 'semantic-ui-react'
import { NavLink } from "react-router-dom";
import axios from 'axios'
import { withRouter } from 'react-router';


class Cadastro extends Component {

  constructor(props) {
    super(props)
    this.state = {
      username: "",
      email: "",
      password: "",
      realizado: false,
      erro: false,
      mensagemErro: "",
    }
  }

  usernameChange = event => {
    this.setState({ username: event.target.value });
  }
  emailChange = event => {
    this.setState({ email: event.target.value });
  }
  passwordChange = event => {
    this.setState({ password: event.target.value });
  }

  cadastroConfirmado = () => this.setState({ realizado: true })

  cadastroNegado = (erro) => this.setState({ erro: true, mensagemErro: "Sistema já possui usuário." })

  voltar = () => this.setState({ erro: false })

  irParaLogin = () => {
    this.resetar()
    this.props.history.push('/page')
  }

  resetar = () => {
    this.setState({
      username: "",
      email: "",
      password: "",
      realizado: false,
      erro: false,
      mensagemErro: "",
    })
  }

  handleSubmit = event => {
    event.preventDefault();
    const user = {
      "username": this.state.username,
      "email": this.state.email,
      "password": this.state.password,
    };

    axios.post("http://localhost:3001/user/", user).then(result => {
      this.cadastroConfirmado()
    }, error => {
      this.cadastroNegado(error)
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
                    Create your account
                  </Header>
                  <Form.Input required fluid icon='user' iconPosition='left' placeholder='Digite seu nome de usuário' onChange={this.nomeChange}/>
                  <Form.Input required fluid icon='user' iconPosition='left' placeholder='Digite seu email' onChange={this.emailChange} />
                  <Form.Input required fluid icon='lock' iconPosition='left' placeholder='Digite sua senha' type='password' onChange={this.senhaChange}/>
                    <Button type="submit" color="black" >Cadastrar</Button>
                    </Segment>
                </Form>

                <Confirm
                    open={this.state.realizado}
                    header='Cadastro realizado'
                    content='Você já pode realizar seu login.'
                    confirmButton="Certo, logar agora"
                    onConfirm={this.irParaLogin}  />
                <Confirm
                    open={this.state.erro}
                    header='Erro no cadastro'
                    content={this.state.mensagemErro}
                    confirmButton="Corrigir"
                    onConfirm={this.voltar} />
            </div>
          </Grid.Column>
        </Grid>
      </div>
    )
  }
}

const CadastroComRouter = withRouter(Cadastro);

export default CadastroComRouter