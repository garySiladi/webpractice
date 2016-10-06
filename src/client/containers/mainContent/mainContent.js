import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Nav, NavItem, Navbar } from 'react-bootstrap';
import MainProjects from '../../components/mainProjects.js';
require ("./mainContent.css");

class MainContent extends React.Component {

  constructor(props) {
    super(props);
  }

  checkSubPage(){
    return(
      <div>
        {this.props.selectedNavTab}
      </div>
    );
  }

  render(){

    return(
      <div>
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
