import React from 'react';
import { BrowserRouter as Router, Route, browserHistory } from 'react-router-dom';
import Search from '.././containers/Search';
import Favorites from '.././components/Favorites';

const Routes = () => (
  <Router history={browserHistory}>
    <div>
      <Route exact path="/" component={Search} />
      <Route path="/favorites" component={Favorites} />
    </div>
  </Router>
);

export default Routes;
