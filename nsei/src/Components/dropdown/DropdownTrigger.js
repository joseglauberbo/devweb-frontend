import React from 'react'
import { Dropdown, Icon } from 'semantic-ui-react'

const trigger = (
  <span>
    <Icon name='user' /> Hello, Glauber
  </span>
)

const options = [
  {
    key: 'user',
    text: (
      <span>
        Signed in as <strong>Glauber Braz</strong> profile
      </span>
    ),
    disabled: true,
  },
  { key: 'profile', text: 'Your Profile' },
  { key: 'help', text: 'Help' },
  { key: 'settings', text: 'Settings' },
  { key: 'sign-out', text: 'Sign Out' },
]

const DropdownTrigger = () => <Dropdown trigger={trigger} options={options} position='right'/>

export default DropdownTrigger