import React, { Component } from 'react'
import { Menu, Segment, Input, Icon, Tab } from 'semantic-ui-react'
import MeusLivrosLidos from '../meusLivrosLidos/MeusLivrosLidos'

class NavBar extends Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    const panes = [
      { menuItem: 'Livros lidos', render: () => <Tab.Pane className='meusLivrosLidos' attached={true}><MeusLivrosLidos /></Tab.Pane> },
    ];

    return (
      <Segment inverted>
        <Menu inverted pointing secondary>
        rgfffgrrrere
          <Menu.Item name='Página inicial' 
          active={activeItem === 'Página inicial'} 
          onClick={this.handleItemClick}  />
          <Menu.Item
            name='Livros lidos'
            active={activeItem === 'Livros lidos'}
            onClick={this.handleItemClick}
            panes={panes} />
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