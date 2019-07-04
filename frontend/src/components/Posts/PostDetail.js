import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
    Card
} from 'semantic-ui-react'
import Post from './Post'
import CommentsList from '../Comments/CommentsList'
import { handleReceivePost } from '../../actions/posts'
import { isEmpty } from '../../utils/helpers'

class PostDetail extends Component {

    componentDidMount() {
        const { post, postId, dispatch } = this.props
        if (post === null) {
            dispatch(handleReceivePost(postId))
        }
    }

    render () {
        const { post, showBody } = this.props

        if (post === null || post === undefined ) {
            return <p>Post não encontrado.</p>
        }

        return (
            <Card style={{ marginBottom: '2.5em' }} fluid>
                <Post post={post} showBody={showBody} />
                {
                    showBody === true
                    && <CommentsList id={post.id} />
                }
            </Card>
        )
    }
}

function mapStateToProps ({ posts }, { id, showBody }) {
    return {
        post: isEmpty(posts) ? null : posts.find((p) => p.id === id),
        postId: id,
        showBody
    }
}

export default connect(mapStateToProps)(PostDetail)