import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
    Modal, Header, Button, Icon, Message
} from 'semantic-ui-react'
import { handleDeleteComment } from '../../actions/comments'

class CommentDeleteModal extends Component {

    state = {
        modalOpen: false,
        message: false
    }

    handleDelete = (e) => {
        const { dispatch, commentId } = this.props
        
        this.setState({ message: true })

        setTimeout(() => {
            this.setState({
                modalOpen: false,
                message: false
            })
            dispatch(handleDeleteComment(commentId)) 
        }, 2000);
    }

    render () {
        const { message } = this.state
        return (
            <Modal 
                trigger={(
                    <Button className='buttonAction' size='mini' onClick={() => this.setState({ modalOpen: true })} basic>
                        apagar
                    </Button>
                )} 
                open={this.state.modalOpen}
                basic
            >
                <Header icon='delete' content='Deletar' />
                <Modal.Content>
                    <p>
                        Deseja apagar o comentário selecionado?
                    </p>
                </Modal.Content>
                <Modal.Actions>
                    <Button basic color='red' onClick={() => { this.setState({ modalOpen: false })}}>
                        <Icon name='remove' />
                        Não
                    </Button>
                    <Button color='green' onClick={this.handleDelete} inverted>
                        <Icon name='checkmark' />
                        Sim
                    </Button>

                    {
                        message === true 
                        && <Message negative content='Comentário deletado' /> 
                    }
                </Modal.Actions>
            </Modal>
        )
    }
}

export default connect()(CommentDeleteModal)