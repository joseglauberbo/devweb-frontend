import React, { Component } from 'react'
import { Menu, Segment, Input, Icon } from 'semantic-ui-react'
import MeusLivrosLidos from '../meusLivrosLidos/MeusLivrosLidos'
import InputLoading from '../input/InputLoading'
import DropdownTrigger from '../dropdown/DropdownTrigger'
import { NavLink } from "react-router-dom";
import BotoesNavBarHome from "../botoes/botoesNavBarHome"

class NavBarHome extends Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Segment inverted>
        <Menu inverted pointing secondary>
        <Menu.Item position ="right">
          <BotoesNavBarHome>
          </BotoesNavBarHome>
          </Menu.Item>
        </Menu>
      </Segment>
    )
  }
}

export default NavBarHome;