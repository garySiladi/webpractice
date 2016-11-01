import React from 'react';
import {fetchBlogPage} from '../actions/actions.js';
import {Grid, Row, Col, Image} from 'react-bootstrap';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import HtmlToReact from 'html-to-react';
var htmlToReactParser = new HtmlToReact.Parser(React);

class Blog extends React.Component {

  componentDidMount(){
    this.props.fetchBlogPage(this.props.params.blogId);
  }

  formatDate(data){
    var date = new Date(data);
    var day = date.getDate();
    var monthIndex = date.getMonth();
    var year = date.getFullYear();
    return (year + "." + monthIndex + "." + day);
  }

  renderArticle(){
    const blog = this.props.selectedBlogPage;
    if (blog)
    return(
      <div>
        <div className="articleCover">
          <Image src={blog.image}/>
          <div className="dateDiv">{this.formatDate(blog.date)}</div>
        </div>
        <div className="articleMain">
          <div className="articleHeader">
            {blog.title}
          </div>
          <div className="articleContent">
            {htmlToReactParser.parse(blog.content)}
          </div>
        </div>
      </div>
    );
  }

  render(){
    return(
      <Grid>
        <Row>
          <Col md={12} className="blogArticle">
            {this.renderArticle()}
          </Col>
        </Row>
      </Grid>
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
