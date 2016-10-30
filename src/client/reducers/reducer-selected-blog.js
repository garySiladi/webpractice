import {BLOG_GET_BLOG} from '../actions/actions.js';

export default function (state = null, action) {
  switch (action.type) {
    case BLOG_GET_BLOG:
      return action.payload;
    default:
      return state;
  }
}
