import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
    Comment, Header
} from 'semantic-ui-react'
import { handleGetComments } from '../../actions/comments'
import Commentary from './Commentary'
import { isEmpty } from '../../utils/helpers'

class CommentsList extends Component {

    componentDidMount() {
        const { dispatch, id } = this.props

        dispatch(handleGetComments(id))
    }

    render () {
        const { comments } = this.props
        console.log('comments props: ', this.props)
        return (
            <Comment.Group>
                <Header as='h5' style={{paddingLeft: '2.5em'}}>
                    Comentários
                </Header>

                {
                    this.props.loading === true 
                    ? null
                    : comments.map((c) => (
                        <Commentary key={c.id} comment={c} />
                    ))
                }

            </Comment.Group>
        )
    }
}

function mapStateToProps({ comments }, { id }) {
    if (!isEmpty(comments)){
        comments = comments.filter((c) => c.deleted === false && c.parentDeleted === false)
    }
    return {
        comments,
        id,
        loading: isEmpty(comments)
    }
}

export default connect(mapStateToProps)(CommentsList)