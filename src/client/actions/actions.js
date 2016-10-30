export const BLOG_GET_BLOGPAGES = 'BLOG_GET_BLOGPAGES';
export const BLOG_GET_BLOG = 'BLOG_GET_BLOG';
require('es6-promise').polyfill();
require('isomorphic-fetch');

export const getBlogpostsPage = (blogs) => {
  return {
    type: BLOG_GET_BLOGPAGES,
    payload: blogs
  }
}

export const getBlogPage = (blog) => {
  return {
    type: BLOG_GET_BLOG,
    payload: blog
  }
}

export const fetchBlogPostsPage = (blogPage) => {
  return function(dispatch) {
    fetch(`//localhost:5000/blogs/page/${blogPage}`)
      .then(function(response) {
        if (response.status >= 400) {
          throw new Error("Error");
        }
        return response.json();
      })
      .then(function(blogs) {
        // console.log(blogs);
        dispatch(getBlogpostsPage(blogs));
      });
  }
}

export const fetchBlogPage = (blogId) => {
  return function(dispatch) {
    fetch(`//localhost:5000/blogs/blog/${blogId}`)
      .then(function(response) {
        if (response.status >= 400) {
          throw new Error("Error");
        }
        return response.json();
      })
      .then(function(blog) {
        // console.log(blogs);
        dispatch(getBlogPage(blog));
      });
  }
}
