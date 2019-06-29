import React from 'react'
import {
    Comment, Button, Icon
} from 'semantic-ui-react'
import { formatDate } from '../../utils/helpers'

function Commentary(props) {
    const { comment } = props
    const {
        author, body, timestamp, voteScore
    } = comment

    if (comment === null || comment === undefined) {
        return <p>Comentário não encontrado</p>
    }

    return (
        <Comment>
            <Comment.Avatar></Comment.Avatar>
            <Comment.Content>
                <Comment.Author as='span'>{author}</Comment.Author>
                <Comment.Metadata>
                    {voteScore} likes - {formatDate(timestamp)}
                </Comment.Metadata>
                <Comment.Text>
                    {body}
                </Comment.Text>
                <Comment.Actions className='commentsActionsContainer'>
                    <Button className='buttonAction' size='mini' basic>
                        <Icon name='thumbs up outline' color='green' />
                    </Button>
                    <Button className='buttonAction' size='mini' basic>
                        <Icon name='thumbs down outline' color='red' />
                    </Button>
                    <Button className='buttonAction' size='mini' basic>
                        editar
                    </Button>
                    <Button className='buttonAction' size='mini' basic>
                        apagar
                    </Button>
                </Comment.Actions>
            </Comment.Content>
        </Comment>
    )
}

export default Commentary