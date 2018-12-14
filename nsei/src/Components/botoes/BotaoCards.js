import React, { Component } from 'react'
import { Button, Icon } from 'semantic-ui-react'
import { NavLink } from "react-router-dom";

class BotaoCards extends Component {

    render() {
        return (
            <div class="button-livro center">
            <Button animated='vertical' color='black' fluid  as={NavLink} to='/book' size='large'>
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