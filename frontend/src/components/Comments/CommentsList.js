import React, { Component } from 'react'
import {
    Comment, Header, Button
} from 'semantic-ui-react'

class CommentsList extends Component {
    render () {
        return (
            <Comment.Group>
                <Header as='h5' style={{paddingLeft: '2.5em'}}>
                    Comentários
                </Header>

                <Comment>
                    <Comment.Avatar></Comment.Avatar>
                    <Comment.Content>
                        <Comment.Author as='span'>Danilo V Roque</Comment.Author>
                        <Comment.Metadata>
                            Todat at 5:42
                        </Comment.Metadata>
                        <Comment.Text>
                            Discordo
                        </Comment.Text>
                        <Comment.Actions className='commentsActionsContainer'>
                            <Button className='buttonAction' size='mini' basic>reply</Button>
                        </Comment.Actions>
                    </Comment.Content>
                </Comment>
            </Comment.Group>
        )
    }
}

export default CommentsList