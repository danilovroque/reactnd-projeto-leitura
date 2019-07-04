import React, { Component, Fragment } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import { Container } from 'semantic-ui-react'
import { handleReceiveCategories } from '../actions/categories'
import MenuNav from './MenuNav'
import { isEmpty } from '../utils/helpers'
import Dashboard from './Dashboard'
import SinglePost from './Posts/SinglePost'

class App extends Component {
  componentDidMount () {
    this.props.dispatch(handleReceiveCategories())
  }

  render() {
    return (
      <Router>
          {
            this.props.loading === true
            ?  <h1>LOADING</h1> 
            : (
              <Fragment>
                <MenuNav />
              
                <Container>
                  {/* Dashboard com todos os posts */}
                  <Route path='/' exact component={Dashboard} />
                  {/* Dashboard com os posts por categoria */}
                  <Route path='/:category' exact component={Dashboard} />
                  {/* Página com o post detalhado */}
                  <Route path='/:category/:postId' component={SinglePost} />
                </Container>
              </Fragment>
            )}
      </Router>
    );
  }  
}



function mapStateToProps({ categories }) {
  return {
    loading: isEmpty(categories)
  }
}

export default connect(mapStateToProps)(App)