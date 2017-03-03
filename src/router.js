import React, { Component } from 'react'
import { Router, Route } from 'react-router'
import { Provider } from 'react-redux'
import { history } from './redux/reducers/store'
import store from './redux/reducers/store'

import App from './components/App'

class MainRouter extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router history={history}>
          <Route path="/" component={App} />
        </Router>
      </Provider>
    );
  }
}

export default MainRouter;
