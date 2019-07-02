import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import {
    Modal, Header, Button, Icon, Message
} from 'semantic-ui-react'
import { handleDeletePost } from '../../actions/posts'

class PostDeleteModal extends Component {
    state = {
        modalOpen: false,
        message: false
    }

    handleDelete = (e) => {
        e.preventDefault()

        const { dispatch, post, history } = this.props

        this.setState({ message: true })

        setTimeout(() => {
            this.setState({
                modalOpen: false,
                message: false
            })

            dispatch(handleDeletePost(post.id))
            history.push('/')
        }, 2000)
    }

    render () {
        const { message } = this.state
        return (
            <Modal trigger={(
                    <Button className='buttonAction' size='mini' basic onClick={() => { this.setState({ modalOpen: true }) }}>
                        apagar
                    </Button>
                )} basic size='small'
                open={this.state.modalOpen}
            >
                <Header icon='delete' content='Deletar' />
                <Modal.Content>
                    <p>
                        Deseja apagar o post selecionado?
                    </p>
                </Modal.Content>
                <Modal.Actions>
                    <Button  basic color='red' inverted onClick={() => { this.setState({ modalOpen: false }) }}>
                        <Icon name='remove' />
                        Não
                    </Button>
                    <Button color='green' onClick={this.handleDelete} inverted>
                        <Icon name='checkmark' />
                        Sim
                    </Button>

                    {
                        message === true 
                        && <Message negative content='Post deletado' /> 
                    }
                </Modal.Actions>
            </Modal>
        )
    }
}

export default withRouter(connect()(PostDeleteModal))