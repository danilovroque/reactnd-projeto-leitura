import React, { Component } from 'react'
import { Grid, Icon } from 'semantic-ui-react'
import { VOTE } from '../../actions/posts'


class PostVote extends Component {
    render () {
        const { post, handleVote } = this.props
        return (
            <Grid.Column width='1' textAlign='center' verticalAlign='middle'>
                <Grid.Row>
                    <Icon link size='huge' name='caret up' color='black' onClick={() => handleVote(VOTE.UP, post)} />
                </Grid.Row>
                <Grid.Row style={{ marginLeft: '20px'}}>
                    <span style={{ fontSize: 20, color: 'black'}}>{post.voteScore}</span>
                </Grid.Row>
                <Grid.Row>
                    <Icon link size='huge' name='caret down' color='black' onClick={() => handleVote(VOTE.DOWN, post)} />
                </Grid.Row>
            </Grid.Column>
        )
    }
}

export default PostVote