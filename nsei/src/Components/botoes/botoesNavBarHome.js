import React from 'react'
import { Button } from 'semantic-ui-react'
import { NavLink } from "react-router-dom";

const botoesNavBarHome = () => (
  <Button.Group>
    <Button as={NavLink} to="/page">sign in</Button>
    <Button.Or text='ou' />
    <Button positive>sign up</Button>
  </Button.Group>
)

export default botoesNavBarHome