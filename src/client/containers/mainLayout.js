import React from 'react';
import Header from '../components/header/header.js';

class MainLayout extends React.Component {
  render(){
    return(
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
}

export default MainLayout;
