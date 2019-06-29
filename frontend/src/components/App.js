import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux'
import { Container } from 'semantic-ui-react'
import { handleReceiveCategories } from '../actions/categories'
import { handleReceivePosts } from '../actions/posts'
import MenuNav from './MenuNav'
import PostDetail from './Posts/PostDetail'
import { isEmpty } from '../utils/helpers'

class App extends Component {
  componentDidMount () {
    this.props.dispatch(handleReceiveCategories())
    this.props.dispatch(handleReceivePosts())
  }

  render() {
    console.log('props: ', this.props)
    return (
      <div>
        <Fragment>
          {
            this.props.loading === true
            ? null
            : <MenuNav />
          }
          <Container>
            {
              this.props.loadingPosts === true
              ? null
              : <PostDetail id="8xf0y6ziyjabvozdd253nd" />
            }
          </Container>
        </Fragment>
      </div>
    );
  }  
}



function mapStateToProps({ categories, posts }){
  return {
    loading: isEmpty(categories),  
    loadingPosts: isEmpty(posts)
  }
}

export default connect(mapStateToProps)(App)