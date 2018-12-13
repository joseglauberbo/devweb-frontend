
import React, { Component } from 'react'
import { Button, Modal } from 'semantic-ui-react'
import FormLivro from "../formLivro/FormLivro"

class novoLivro extends Component {

  constructor(props){
    super(props);
    this.state = {
      open: false
    }
    this.close = this.close.bind(this);
  }

  show = dimmer => () => this.setState({ dimmer, open: true })
  close = () => this.setState({ open: false })

  render() {
    const { open, dimmer } = this.state

    return (
        <div>
        <Button fluid  color='white' onClick={this.show('blurring')}>Adicionar novo livro</Button>
        <Modal dimmer={dimmer} open={open} onClose={this.close}>
            <Modal.Header>Novo Livro</Modal.Header>
            <Modal.Content>
                <Modal.Description>
                    <FormLivro close={this.close}></FormLivro>
                </Modal.Description>
            </Modal.Content>
        </Modal>
        </div>
    )
  }
}

export default novoLivro;