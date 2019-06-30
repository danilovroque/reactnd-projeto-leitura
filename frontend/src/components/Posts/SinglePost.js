import React from 'react'
import {
    Container
} from 'semantic-ui-react'
import PostDetail from './PostDetail'

const SinglePost = ({ match }) => {
    return (
        <Container>
            <PostDetail id={match.params.postId} />
        </Container>   
    )
}

export default SinglePost