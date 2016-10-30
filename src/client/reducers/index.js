import {combineReducers} from 'redux';
import blogPageReducer from './reducer-blogs.js';
import selectedBlogPageReducer from './reducer-selected-blog.js';

const allReducers = combineReducers({
  blogPages: blogPageReducer,
  selectedBlogPage: selectedBlogPageReducer
});

export default allReducers;
