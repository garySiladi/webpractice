import {BLOG_GET_BLOGPAGES} from '../actions/actions.js';

export default function (state = null, action) {
  switch (action.type) {
    case BLOG_GET_BLOGPAGES:
      return action.payload;
    default:
      return state;
  }
}
