import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
    Modal, Form, Select, TextArea, Message, Button
} from 'semantic-ui-react'
import { handleAddPost } from '../../actions/posts'


class NewPost extends Component {

    state = {
        author: '',
        title: '',
        category: '',
        body: '',
        success: false
    }

    handleFormChange = (e, { name, value }) => {
        e.preventDefault()
        this.setState((prevState) => ({
            ...prevState,
            [name]: value
        }))
    }

    handleFormSubmit = (e) => {
        e.preventDefault()

        const { dispatch } = this.props
        const { author, title, category, body } = this.state
        
        let post = {
            author,
            title,
            category,
            body
        }

        dispatch(handleAddPost(post))
        this.setState({ success: true })

    }

    handleFormClose = () => {
        this.setState({
            author: '',
            title: '',
            category: '',
            body: '',
            success: false            
        })
    }

    isSubmitEnabled = () => {
        const { title, category, body, success } = this.state
        return title.trim() === '' || category.trim() === '' || body.trim() === '' || success === true
    }

    render () {
        const {
            author, title, category, body, success
        } = this.state
        const { categories, trigger } = this.props
        return (
            <Modal trigger={trigger} onClose={this.handleFormClose}>
                <Modal.Header>
                    Novo post
                </Modal.Header>
                <Modal.Content>
                    <Form success={success}>
                        <Form.Group>
                            <Form.Input
                                name='title'
                                value={title}
                                label='Titulo'
                                placeholder='Titulo do post'
                                width={15}
                                required
                                onChange={this.handleFormChange}
                            />
                            <Form.Input 
                                name='author'
                                value={author}
                                label='Autor'
                                placeholder='Seu nome'
                                width={3}
                                onChange={this.handleFormChange}
                            />
                            <Form.Input 
                                name='category'
                                value={category}
                                label='Categoria'
                                control={Select}
                                options={categories.map((c) => ({
                                        key: c.path,
                                        value: c.path,
                                        text: c.name
                                    })
                                )}
                                width={4}
                                required
                                onChange={this.handleFormChange}
                            />
                        </Form.Group>
                        <Form.Input 
                            name='body'
                            value={body}
                            label='Post'
                            placeholder='Texto da postagem'
                            control={TextArea}
                            required
                            onChange={this.handleFormChange}
                        />

                        <Message success content='Post incluido' />
                    </Form>
                </Modal.Content>
                <Modal.Actions>
                    <Button 
                        primary 
                        onClick={this.handleFormSubmit}
                        disabled={this.isSubmitEnabled()}
                    >
                        Enviar
                    </Button>
                </Modal.Actions>
            </Modal>
        )
    }
}

function mapStateToProps ({ categories }, { trigger }) {
    return {
        categories,
        trigger
    }
}

export default connect(mapStateToProps)(NewPost)