import React from 'react';
import Header from '../header/header.js';
import { Router, Route, IndexRoute, browserHistory, hashHistory, applyRouterMiddleware } from "react-router";
import MainLayout from '../../containers/mainLayout.js';
import MainAbout from '../../containers/mainAbout.js';
import MainBlogposts from '../../containers/mainBlogposts.js';
import MainProjects from '../../containers/mainProjects.js';
import Blog from '../blog.js';
require('./app.css');

const App = () => (
  <Router
    history={browserHistory}
    >
    <Route component={MainLayout}>
      <Route path="/" component={MainAbout}></Route>
      <Route path="portfolio" component={MainProjects}></Route>
      <Route path="blogposts" component={MainBlogposts}></Route>
      <Route path="blogs/:blogId" component={Blog}></Route>
    </Route>
  </Router>
);

export default App;
