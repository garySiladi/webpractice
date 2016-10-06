import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Nav, NavItem, Navbar } from 'react-bootstrap';
import { selectTab } from '../../actions/actionsHeader.js';

class TabHolder extends React.Component {

  createTabs() {
    return this.props.tabs.map((tabName, i) => (
        <NavItem
          key={tabName}
          eventKey={tabName}
          href="#"
          onClick={() => this.props.selectTab(tabName)}
        >
          <span>{tabName}</span>
        </NavItem>
      )
    );
  }

  render() {
    return (
      <Nav pullRight activeKey={this.props.selectedNavTab}>
        {this.createTabs()}
      </Nav>
    );
  }
}

function mapStateToProps(state) {
  return {
    selectedNavTab: state.selectedNavTab,
  };
}

function matchDispatchToProps(dispatch){
    return bindActionCreators({
      selectTab: selectTab,
    }, dispatch);
}

TabHolder.propTypes = {
  tabs: React.PropTypes.arrayOf(React.PropTypes.string).isRequired
};
export default connect (mapStateToProps, matchDispatchToProps) (TabHolder);
