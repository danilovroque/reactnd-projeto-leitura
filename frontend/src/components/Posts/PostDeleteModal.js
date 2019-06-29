import React, { Component } from 'react'
import {
    Modal, Header, Button, Icon
} from 'semantic-ui-react'

class PostDeleteModal extends Component {
    state = {
        modalOpen: false
    }

    handleDelete = (e) => {
        e.preventDefault()
    }

    render () {
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
                    <Button color='green' inverted>
                        <Icon name='checkmark' />
                        Sim
                    </Button>
                </Modal.Actions>
            </Modal>
        )
    }
}

export default PostDeleteModal