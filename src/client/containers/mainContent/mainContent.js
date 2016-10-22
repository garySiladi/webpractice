import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Nav, NavItem, Navbar } from 'react-bootstrap';
import MainAbout from '../../components/mainAbout.js';
import MainBlogposts from '../../components/mainBlogposts.js';
import MainProjects from '../../components/mainProjects.js';
require ("./mainContent.css");
var ReactCSSTransitionGroup = require('react-addons-css-transition-group');

class MainContent extends React.Component {

  constructor(props) {
    super(props);
  }

  checkSubPage(){
    switch (this.props.selectedNavTab){
      case "About": return <MainAbout key="1"/>;
      case "Portfolio": return <MainProjects key="2"/>;
      case "Blogposts": return <MainBlogposts key="3"/>;
    }
    return(
      <div>
        {this.props.selectedNavTab}
      </div>
    );
  }

  render(){

    return(
      <div className="container-fluid mainContainer">
        <ReactCSSTransitionGroup
          transitionName="mainContentAnimation"
          transitionEnterTimeout={500}
          transitionLeaveTimeout={500}>
          {this.checkSubPage()}
        </ReactCSSTransitionGroup>

      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    selectedNavTab: state.selectedNavTab,
  };
}

export default connect (mapStateToProps) (MainContent);
