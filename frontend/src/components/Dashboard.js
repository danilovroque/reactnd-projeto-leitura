import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import PostDetail from './Posts/PostDetail'
import { isEmpty } from '../utils/helpers'
import { handleReceivePosts } from '../actions/posts'

class Dashboard extends Component {

    componentDidMount() {
        this.mountComponent()
    }

    componentDidUpdate(prevProps) {
        const { dispatch, category, location: { pathname } } = this.props

        if (prevProps.location.pathname !== pathname) {
            this.mountComponent()
        }
    }

    mountComponent = () => {
        const { dispatch, category } = this.props

        dispatch(handleReceivePosts(category))
    }

    render() {
        const { posts, loading } = this.props
        return (
            <div>
                {
                    loading === true
                    ? null
                    : posts.map((post) => (
                        <PostDetail id={post.id} key={post.id} />
                    ))
                }
            </div>
            
        )
    }
}

function mapStateToProps({ posts }, props) {
    const { category } = props.match.params
    return {
        ...props,
        category,
        posts,
        loading: isEmpty(posts)       
    }
}

export default withRouter(connect(mapStateToProps)(Dashboard))