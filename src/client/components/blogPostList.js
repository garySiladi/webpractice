import React from 'react';
import { ListGroup, ListGroupItem } from 'react-bootstrap';
import { Link } from 'react-router';

class BlogPostList extends React.Component {

  renderBlogs(){
    let bloglist = [];
    this.props.data.map(function (blog,i) {
              if (i<5)
                bloglist.push(
                  <ListGroupItem key={i}>
                    <Link to={`/blogs/${blog.id}`}>{blog.title}{blog.date}</Link>
                  </ListGroupItem>
                );
            });
    return bloglist;
  }

  render(){
    return(
      <div>
        <ListGroup>
          {this.renderBlogs()}
        </ListGroup>
      </div>
    );
  }
}

export default BlogPostList;
