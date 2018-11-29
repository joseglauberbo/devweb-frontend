import React, { Component } from 'react'
import { Menu, Segment } from 'semantic-ui-react'
import BotoesNavBarHome from "../botoes/botoesNavBarHome"

class NavBarHome extends Component {

  render() {

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