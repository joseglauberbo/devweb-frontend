import React, { Component } from 'react'
import { Menu, Segment, Input, Icon } from 'semantic-ui-react'
import MeusLivrosLidos from '../meusLivrosLidos/MeusLivrosLidos'
import InputLoading from '../input/InputLoading'
import DropdownTrigger from '../dropdown/DropdownTrigger'

class NavBar extends Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Segment inverted>
        <Menu inverted pointing secondary>
          <Menu.Item name='Página inicial' 
          active={activeItem === 'Página inicial'} 
          onClick={this.handleItemClick}  />
          <Menu.Item
            name='Livros lidos'
            active={activeItem === 'Livros lidos'}
            onClick={this.handleItemClick}
            />
          <Menu.Item
            name='Livros não lidos'
            active={activeItem === 'Livros não lidos'}
            onClick={this.handleItemClick}
          />
           <Menu.Item
            name='Livros desejados'
            active={activeItem === 'Livros não lidos'}
            onClick={this.handleItemClick}
          />
         <InputLoading>
         </InputLoading>
          <DropdownTrigger>
          </DropdownTrigger>
        </Menu>
      </Segment>
    )
  }
}

export default NavBar;