import React, { Component } from 'react'
import { Grid } from 'semantic-ui-react'
import { handleVotePost } from '../../actions/posts'
import PostVote from './PostVote'
import PostInformation from './PostInformation'

class Post extends Component {

    handleVote = (option, post) => {
        this.props.dispatch(handleVotePost(post.id, option))
    }

    render () {
        const { post, showBody } = this.props

        return (
            <Grid columns='2' padded style={{paddingTop: '.5em', paddingBottom: '.1em' }}>
                <Grid.Row>
                    <PostVote post={post} handleVote={this.handleVote} />
                    <PostInformation post={post} showBody={showBody} />                            
                </Grid.Row>
            </Grid>
        )
    }
}

export default Post