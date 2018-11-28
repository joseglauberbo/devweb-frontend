import React from 'react'
import { Input } from 'semantic-ui-react'

const InputLoading = ({handleChange}) => 
    <Input loading icon='user' placeholder='Procure um livro...'  onChange={handleChange}/>
export default InputLoading