import React from 'react';
import { Grid, Row, Col, Image } from 'react-bootstrap';
import { Link } from 'react-router';

class BlogPostList extends React.Component {

  renderBlogs(){
    let bloglist = [];
    this.props.data.map(function (blog,i) {
              if (blog.id){
                const style = {
                  backgroundImage: 'url(' + blog.image + ')',
                  backgroundPosition: 'center'
                }
                bloglist.push(
                  <Row key={i} className="blogTeaser">
                    <Link to={`/blogs/${blog.id}`}>
                      <Col>
                        <div className="blogImage" style={style}></div>
                        <div className="blogHeader">{blog.title}</div>
                      </Col>
                    </Link>
                  </Row>
                );
              }
            });
    return bloglist;
  }

  render(){
    return(
      <Grid>
        {this.renderBlogs()}
      </Grid>
    );
  }
}

export default BlogPostList;
