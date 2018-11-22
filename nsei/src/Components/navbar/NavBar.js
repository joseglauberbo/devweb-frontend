import React, { Component } from 'react'
import { Menu, Segment, Input, Icon } from 'semantic-ui-react'

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
          <Menu.Item position='left'>
            <Input icon={{ name: 'search', circular: true, link: true }} placeholder='Search...' />
          </Menu.Item>
          <Menu.Item onClick={this.handleItemClick} position='right'>
            <Icon name ='user'/>
          </Menu.Item>
        </Menu>
      </Segment>
    )
  }
}

export default NavBar;