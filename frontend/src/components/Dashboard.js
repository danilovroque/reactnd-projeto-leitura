import React, { Component } from 'react'
import { connect } from 'react-redux'
import PostDetail from './Posts/PostDetail'

class Dashboard extends Component {
    componentDidMount() {
    }

    render() {
        const { postIds } = this.props
        return (
            <div>
                {
                    postIds.map((id) => (
                        <PostDetail id={id} key={id} />
                    ))
                }
            </div>
            
        )
    }
}

function mapStateToProps({ posts }) {
    return {
        postIds: posts.map((p) => p.id)
            
    }
}

export default connect(mapStateToProps)(Dashboard)