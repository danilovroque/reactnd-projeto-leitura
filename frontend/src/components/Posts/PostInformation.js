import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
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
                    <Link to={`${post.category}/${post.id}`} style={{color: 'black'}}>{title}</Link>
                </Header>

                <span className='postDetail'>
                    {'Postado por '}
                    <span className='author'>{author}</span>
                    {' em '}
                    <span>{category}</span>
                    {' - '}
                    <span>{formatDate(timestamp)}</span>
                    {' - '}
                    <span>{post.commentCount} {' comentário(s)'}</span>
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

                    <PostDeleteModal post={post} />            
                </span>
            </Grid.Column>
        )
    }
}

export default connect()(PostInformation)