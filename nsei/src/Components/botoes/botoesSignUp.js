import React from 'react'
import { Button } from 'semantic-ui-react'
import { NavLink } from "react-router-dom";

const ButtonSignUp = () => (
  <div>
    <Button color='green' as={NavLink} to='/cadastro'> Cadastre-se </Button>
  </div>
)

export default ButtonSignUp