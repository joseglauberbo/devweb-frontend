import React, { Component } from 'react'
import { Button, Form } from 'semantic-ui-react'
import { NavLink } from "react-router-dom";
import axios from 'axios'

class FormLivro extends Component {

    state = {
        nome: "",
        descricao: "",
        imagem: "",
        genero: ""
    }

    nomeChange = event => {
        this.setState({ nome: event.target.value });
    }
    descricaoChange = event => {
        this.setState({ descricao: event.target.value });
    }
    generoChange = event => {
        this.setState({ imagem: event.target.value });
    }
    imagemChange = event => {
        this.setState({ usuario: event.target.value });
    }

    handleSubmit = event => {

        event.preventDefault();

        const livro = {
            "nome": this.state.nome,
            "descricao": this.state.descricao,
            "genero": this.state.genero,
            "imagem": this.state.imagem
        };
        
        axios.post("http://localhost:3001/livros/", livro);
        this.props.close();
        window.location.reload();
    }

    render() {
        return (
            <Form onSubmit={this.handleSubmit}>
                <Form.Group widths='equal'>
                    <Form.Input required fluid label='Nome do Livro' placeholder='Digite o nome...' onChange={this.nomeChange} />
                </Form.Group>
                <Form.Field>
                    <label>Descrição</label>
                    <input required placeholder="Descrição do jogo" name="descricao" onChange={this.descricaoChange}/>
                </Form.Field>
                <Form.Field>
                    <label>Gênero do livro</label>
                    <input required placeholder="Coloque o gênero aqui" name="genero" onChange={this.generoChange} />
                </Form.Field>
                <Form.Field>
                    <label>Imagem do livro</label>
                    <input required placeholder="Coloque o link aqui" name="imagem" onChange={this.imagemChange} />
                </Form.Field>
                <div class="form-anuncio-button center">
                <Button.Group>
                        <Button type="submit" positive>Adicionar lIVRO</Button>
                        <Button.Or text='ou' />
                        <Button negative content='Cancelar' onClick={this.props.close}></Button>
                    </Button.Group>
                </div>
            </Form>
        );
    }

}
export default FormLivro;