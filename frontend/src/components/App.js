import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux'
import { Container, Button } from 'semantic-ui-react'
import Menu from './Menu'
import { handleReceivePosts } from '../actions/posts'
import { handleReceiveCategories } from '../actions/categories'

class App extends Component {
  componentDidMount () {
    this.props.dispatch(handleReceivePosts())
    this.props.dispatch(handleReceiveCategories())
  }

  render() {
    return (
      <div>
        <Fragment>
          <Menu />
          <Container>
            <Button>
              Teste
            </Button>
          </Container>
        </Fragment>
      </div>
    );
  }  
}

export default connect()(App)