import React, { Component } from 'react'
import { Button, Icon, Label } from 'semantic-ui-react'

class BotaoCards extends Component {

    render() {

        return (
            <div>
                <Button animated='vertical' color='black' >
                    <Button.Content hidden>Veja mais</Button.Content>
                    <Button.Content visible>
                        <Icon name='search plus' />
                    </Button.Content>
                </Button>
            </div>
        )
    }
}

export default BotaoCards