import React from 'react';
import {render} from 'react-dom';
import Header from '../header/header.jsx';
require('./app.css');
require('../../css/index.css')

class App extends React.Component {
  render () {
    return(
      <div><Header>DummySite</Header></div>
    )
  }
}

render(<App/>,document.getElementById('app'));
