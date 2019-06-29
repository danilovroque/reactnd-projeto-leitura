import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
    Modal, Form, TextArea, Message, Button
} from 'semantic-ui-react'
import { handleUpdateComment } from '../../actions/comments'

class CommentEditModal extends Component {

    constructor (props) {
        super(props)

        const { comment } = this.props

        this.state = {
            author: comment.author,
            body: comment.body,
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
        const { comment } = this.props
        this.setState({
            author: comment.author,
            body: comment.body,
            success: false
        })
    }

    handleFormSubmit = (e) => {
        e.preventDefault()

        const { dispatch } = this.props
        const { body } = this.state
        let { comment } = this.props

        comment.body = body

        dispatch(handleUpdateComment(comment))
        this.setState({ success: true })
    }

    isSubmitEnabled = () => {
        const { body, success } = this.state
        return body.trim() === '' || success === true
    }

    render() {
        const { author, body, success } = this.state

        return (
            <Modal trigger={(
                <Button className='buttonAction' size='mini' basic>
                    editar
                </Button>
            )} onClose={this.handleFormClose}>
                <Modal.Header>
                    Editar post
                </Modal.Header>
                <Modal.Content>
                    <Form success={success}>
                        <Form.Input 
                            name='body'
                            value={body}
                            label={author}
                            placeholder='Texto do comentário'
                            control={TextArea}
                            required
                            onChange={this.handleFormChange}
                        />

                        <Message success content='Comentário atualizado' />
                    </Form>
                    <Modal.Actions>
                        <Button
                            primary
                            onClick={this.handleFormSubmit}
                            disabled={this.isSubmitEnabled()}
                        >
                            Enviar
                        </Button>
                    </Modal.Actions>
                </Modal.Content>
            </Modal>
        )
    }
}

export default connect()(CommentEditModal)