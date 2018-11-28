import React from 'react'
import { Button } from 'semantic-ui-react'

const ButtonExampleConditionalsCustom = () => (
  <Button.Group>
    <Button>sign in</Button>
    <Button.Or text='ou' />
    <Button positive>sign up</Button>
  </Button.Group>
)

export default ButtonExampleConditionalsCustom