import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
    Modal, Form, Select, TextArea, Message, Button
} from 'semantic-ui-react'
import { handleUpdatePost } from '../../actions/posts'

class PostEditModal extends Component {

    constructor (props) {
        super(props)

        const { post } = this.props

        this.state = {
            title: post.title,
            category: post.category,
            body: post.body,
            success: false
        }
    }

    handleFormChange = (e, { name, value }) => {
        e.preventDefault()
        this.setState((prevState) => ({
            ...prevState,
            [name]: value
        }))
    }

    handleFormClose = () => {
        const { post } = this.props
        this.setState({
            title: post.title,
            category: post.category,
            body: post.body,
            success: false
        })
    }

    handleFormSubmit = (e) => {
        e.preventDefault()

        const { dispatch } = this.props
        const { title, category, body } = this.state
        let { post } = this.props

        post.title = title
        post.category = category
        post.body = body

        dispatch(handleUpdatePost(post))
        this.setState({ success: true })
    }

    isSubmitEnabled = () => {
        const { title, category, body, success } = this.state
        return title.trim() === '' || category.trim() === '' || body.trim() === '' || success === true
    }

    render () {
        const { post, trigger, categories } = this.props
        const {
            title, category, body, success
        } = this.state
        return (
            <Modal trigger={trigger} onClose={this.handleFormClose}>
                <Modal.Header>
                    Editar post
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
                                value={post.author}
                                label='Autor'
                                placeholder='Seu nome'
                                width={3}
                                disabled
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

                        <Message success content='Post atualizado' />
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

function mapStateToProps({ categories }, { trigger, post }) {
    return {
        categories,
        trigger,
        post
    }
}

export default connect(mapStateToProps)(PostEditModal)