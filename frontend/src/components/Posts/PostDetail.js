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
            <Card fluid>
                <Post post={post} showBody={showBody} />

                <CommentsList />
            </Card>
        )
    }
}

function mapStateToProps ({ posts }, { id }) {
    const post = posts.filter((p) => p.id === id)[0]
    return {
        post,
        showBody: true
    }
}

export default connect(mapStateToProps)(PostDetail)