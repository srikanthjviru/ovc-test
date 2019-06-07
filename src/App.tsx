import React, { Component } from 'react';
import { Provider } from 'react-redux';

import store from './reducer';
import './App.css';

import Demo from './pages/demo';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Demo />
      </Provider>
    )
  }
}

export default App;
