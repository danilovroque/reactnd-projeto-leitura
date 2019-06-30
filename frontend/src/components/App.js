import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux'
import { Container } from 'semantic-ui-react'
import { handleReceiveCategories } from '../actions/categories'
import { handleReceivePosts } from '../actions/posts'
import MenuNav from './MenuNav'
import { isEmpty } from '../utils/helpers'
import Dashboard from './Dashboard';

class App extends Component {
  componentDidMount () {
    this.props.dispatch(handleReceiveCategories())
    this.props.dispatch(handleReceivePosts())
  }

  render() {
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
              : <Dashboard />
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