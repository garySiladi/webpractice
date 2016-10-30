import React from 'react';
import {fetchBlogPage} from '../actions/actions.js';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

class Blog extends React.Component {

  componentDidMount(){
    this.props.fetchBlogPage(this.props.params.blogId);
  }

  render(){
    return(
      <div>
        {this.props.selectedBlogPage ? this.props.selectedBlogPage.id : ''}
      </div>
    );
  }
}

function mapStateToProps(state) {
    return{
        blogPages: state.blogPages,
        selectedBlogPage: state.selectedBlogPage
    };
}

function matchDispatchToProps(dispatch){
    return bindActionCreators({
      fetchBlogPage: fetchBlogPage
    }, dispatch)
}

export default connect(mapStateToProps,matchDispatchToProps)(Blog);
