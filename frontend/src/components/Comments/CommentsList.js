import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
    Comment, Header, Form, Button, TextArea, Message
} from 'semantic-ui-react'
import { handleGetComments, handleVoteComment, handleAddComment } from '../../actions/comments'
import Commentary from './Commentary'
import { isEmpty } from '../../utils/helpers'

class CommentsList extends Component {

    state = {
        author: '',
        body: '',
        success: false
    }

    componentDidMount() {
        const { dispatch, id } = this.props

        dispatch(handleGetComments(id))
    }

    handleVoteComment = (option, commentId) => {
        this.props.dispatch(handleVoteComment(commentId, option))
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

        const { dispatch, id } = this.props
        const { author, body } = this.state

        dispatch(handleAddComment({
            author,
            body,
            parentId: id
        }))

        this.setState({ success: true })

        setTimeout(() => {
            this.setState({
                author: '',
                body: '',
                success: false
            })
        }, 3000)
    }

    isSubmitEnabled = () => {
        const { author, body, success } = this.state
        return author.trim() === '' || body.trim() === '' || success === true
    }

    render () {
        const { comments } = this.props
        const { author, body, success } = this.state
        console.log('comments props: ', this.props)
        return (
            <Comment.Group>
                <Header as='h5' style={{paddingLeft: '2.5em'}}>
                    Comentários
                </Header>

                <Form success={success} style={{paddingLeft: '2.5em'}}>
                    <Form.Input 
                        name='body'
                        value={body}
                        placeholder='Entre com um comentário'
                        control={TextArea}
                        rows={3}
                        onChange={this.handleFormChange}
                    />
                    <Form.Group>
                        <Form.Input 
                            name='author'
                            value={author}
                            placeholder='Seu nome'
                            width={4}
                            onChange={this.handleFormChange}
                        />
                        <Button
                            primary
                            onClick={this.handleFormSubmit}
                            disabled={this.isSubmitEnabled()}
                        >
                            Enviar
                        </Button>
                    </Form.Group>
                    <Message success content='Comentário incluido' />
                </Form>

                {
                    this.props.loading === true 
                    ? null
                    : comments.map((c) => (
                        <Commentary key={c.id} comment={c} handleVote={this.handleVoteComment} />
                    ))
                }

            </Comment.Group>
        )
    }
}

function mapStateToProps({ comments }, { id }) {
    if (!isEmpty(comments)){
        comments = comments.filter((c) => c.deleted === false && c.parentDeleted === false)
        comments = comments.sort((a, b) => (b.voteScore - a.voteScore))
    }
    return {
        comments,
        id,
        loading: isEmpty(comments)
    }
}

export default connect(mapStateToProps)(CommentsList)