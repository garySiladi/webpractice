import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Nav, NavItem, Navbar } from 'react-bootstrap';
import MainAbout from '../../components/mainAbout.js';
import MainBlogposts from '../../components/mainBlogposts.js';
import MainProjects from '../../components/mainProjects.js';
require ("./mainContent.css");


class MainContent extends React.Component {

  constructor(props) {
    super(props);
  }

  checkSubPage(){
    switch (this.props.selectedNavTab){
      case "About": return <MainAbout/>;
      case "Portfolio": return <MainProjects/>;
      case "Blogposts": return <MainBlogposts/>;
    }
    return(
      <div>
        {this.props.selectedNavTab}
      </div>
    );
  }

  render(){

    return(
      <div className="container">
        {this.checkSubPage()}
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
