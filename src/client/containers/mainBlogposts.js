import React from 'react';
import {connect} from 'react-redux';
import {Button} from 'react-bootstrap';
import BlogPostList from '../components/blogPostList.js';
import {bindActionCreators} from 'redux';
import {fetchBlogPostsPage} from '../actions/actions.js';

class MainBlogposts extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      selectedBlogPage: null,
      pageNumber: 1
    };
  }

  componentDidMount(){
    this.props.fetchBlogPostsPage(this.state.pageNumber);
  }

  checkNext(){
    const checkNext = this.props.blogPages;
    if (checkNext){
      return checkNext[5];
    }
    return false;
  }

  checkPrev(){
    if (this.state.pageNumber && this.state.pageNumber > 1) return true;
    return false;
  }

  changeToPrev(){
    this.state.pageNumber--;
    this.props.fetchBlogPostsPage(this.state.pageNumber);
  }

  changeToNext(){
    this.state.pageNumber++;
    this.props.fetchBlogPostsPage(this.state.pageNumber);
  }

  render(){
    return(
      <div>
        {this.props.blogPages ? <BlogPostList data={this.props.blogPages}/> : ''}
        {this.checkPrev() ? <Button onClick={(event)=>this.changeToPrev(event)}>Prev</Button> : ''}
        {this.checkNext() ? <Button onClick={(event)=>this.changeToNext(event)}>Next</Button> : ''}
      </div>
    );
  }
}

function mapStateToProps(state) {
    return{
        blogPages: state.blogPages,
        pageNumber: state.pageNumber
    };
}

function matchDispatchToProps(dispatch){
    return bindActionCreators({
      fetchBlogPostsPage: fetchBlogPostsPage
    }, dispatch)
}

export default connect(mapStateToProps,matchDispatchToProps)(MainBlogposts);
