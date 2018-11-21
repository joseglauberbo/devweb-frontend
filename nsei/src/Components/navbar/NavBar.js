import React, { Component } from 'react'
import { Menu, Segment, Icon, Input, Button } from 'semantic-ui-react'

class NavBar extends Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Segment inverted>
        <Menu inverted pointing secondary>
          <Menu.Item name='home' 
          active={activeItem === 'home'} 
          onClick={this.handleItemClick}  />
          <Menu.Item
            name='messages'
            active={activeItem === 'messages'}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name='friends'
            active={activeItem === 'friends'}
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