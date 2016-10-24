import React from 'react';
import Header from '../header/header.js';
import { Router, Route, IndexRoute, browserHistory, hashHistory, applyRouterMiddleware } from "react-router";
import MainLayout from '../mainLayout.js';
import MainAbout from '../mainAbout.js';
import MainBlogposts from '../mainBlogposts.js';
import MainProjects from '../mainProjects.js';
require('./app.css');

const App = () => (
  <Router
    history={hashHistory}
    >
    <Route component={MainLayout}>
      <Route path="/" component={MainAbout}></Route>
      <Route path="portfolio" component={MainProjects}></Route>
      <Route path="blogposts" component={MainBlogposts}></Route>
    </Route>
  </Router>
);

export default App;
