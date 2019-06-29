import React, { Component } from 'react'
import { formatDate } from '../../utils/helpers'
import {
    Grid, Header, Button
} from 'semantic-ui-react'
import PostEditModal from './PostEditModal'
import PostDeleteModal from './PostDeleteModal'

class PostInformation extends Component {

    render () {
        const { post, showBody } = this.props

        const {
            title, author, category, timestamp, body
        } = post
        return (
            <Grid.Column>
                <Header as='h3' id='title' style={{paddingTop: '5%', marginBottom: '0'}}>
                    {title}
                </Header>

                <span className='postDetail'>
                    {'Postado por '}
                    <span className='author'>{author}</span>
                    {' em '}
                    <span>{category}</span>
                    {' - '}
                    <span>{formatDate(timestamp)}</span>
                </span>

                {
                    showBody &&
                    <div className='postBody'>
                        {body}
                    </div>  
                }

                <span className='postActionsContainer'>
                    <PostEditModal 
                        post={post}
                        trigger={(
                            <Button className='buttonAction' size='mini' basic>
                                editar
                            </Button>
                        )}
                    />

                    <PostDeleteModal />            
                </span>
            </Grid.Column>
        )
    }
}

export default PostInformation