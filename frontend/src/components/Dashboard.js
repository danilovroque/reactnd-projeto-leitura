import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import PostDetail from './Posts/PostDetail'
import { isEmpty, orderPosts } from '../utils/helpers'
import { handleReceivePosts } from '../actions/posts'

class Dashboard extends Component {

    componentDidMount() {
        this.mountComponent()
    }

    componentDidUpdate(prevProps) {
        const { location: { pathname } } = this.props

        if (prevProps.location.pathname !== pathname) {
            this.mountComponent()
        }
    }

    mountComponent = () => {
        const { dispatch, category } = this.props

        dispatch(handleReceivePosts(category))
    }

    render() {
        const { posts, loading, category, orderBy } = this.props
        let orderedPosts = []
        if (loading === false) {
            orderedPosts = orderPosts(posts, category, orderBy)
        }
        return (
            <div>
                {
                    loading === true
                    ? null
                    : orderedPosts.map((post) => (
                        <PostDetail key={post.id} id={post.id} />
                    ))
                }
            </div>
            
        )
    }
}

function mapStateToProps({ posts, preferences = {} }, props) {
    const { category } = props.match.params
    if (preferences.orderBy === undefined || preferences.orderBy === '') {
        preferences.orderBy = 'score'
    }
    return {
        ...props,
        category,
        posts,
        orderBy: preferences.orderBy,
        loading: isEmpty(posts)       
    }
}

export default withRouter(connect(mapStateToProps)(Dashboard))