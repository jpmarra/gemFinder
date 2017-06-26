import React from 'react';
import { Router, Route, browserHistory } from 'react-router';
import Main from '.././containers/Main';
import Search from '.././containers/Search';
import Favorites from '.././components/Favorites';
import '../../public/assets/styles/main.scss';

const Routes = () => (
  <Router history={browserHistory}>
    <Route component={Main}>
      <Route exact path="/" component={Search} />
      <Route path="/favorites" component={Favorites} />
    </Route>
  </Router>
);

export default Routes;
