import React from 'react';
import Header from './header/header.js';

var MainLayout = React.createClass({
  render: function() {
    return (
      <div>
        <header>
          <Header/>
        </header>
        <main>
          {this.props.children}
        </main>
      </div>
    );
  }
});

export default MainLayout;
