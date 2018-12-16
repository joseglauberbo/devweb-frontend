import React, { Component } from 'react'
import { Button, Modal } from 'semantic-ui-react'
import BookInfo from "../bookInfo/BookInfo"

class BotaoCards extends Component {

    constructor(props) {
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
                <Button onClick={this.show('blurring')} as='div' labelPosition='left'>
                    <Button color='black' onClick={this.show('blurring')} icon>
                        Veja mais sobre: {this.props.livro.nome}
                    </Button>
                </Button>
                <Modal dimmer={dimmer} open={open} onClose={this.close}>
                    <Modal.Content>
                        <Modal.Description>
                            <BookInfo livro={this.props.livro} close={this.close}></BookInfo>
                        </Modal.Description>
                    </Modal.Content>
                </Modal>
            </div>
        )
    }
}

export default BotaoCards
