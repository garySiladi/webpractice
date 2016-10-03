import React from 'react';
import {render} from 'react-dom';
require('./header.css');

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 87
    };
    this.tick = this.tick.bind(this);
  }
  tick(){
    this.setState(
      {count : this.state.count+1}
    );
  }
  render () {
    return(
      <div className="header" onClick={this.tick}>
        {this.props.children} {this.state.count}
      </div>
    )
  }
}

export default Header;
