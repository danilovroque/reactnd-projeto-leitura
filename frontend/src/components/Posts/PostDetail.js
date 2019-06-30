import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
    Card
} from 'semantic-ui-react'
import Post from './Post'
import CommentsList from '../Comments/CommentsList'

class PostDetail extends Component {
    render () {
        const { post, showBody } = this.props

        if (post === null || post === undefined ) {
            return <p>Esse post não existe.</p>
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
    const post = posts.filter((p) => p.id === id)[0]
    return {
        post,
        showBody
    }
}

export default connect(mapStateToProps)(PostDetail)