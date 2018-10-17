import React, { Component, Fragment } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Header from './components/Header';
import LandingPage from './containers/LandingPage/LandingPage';
import WeeklyDosePage from './containers/WeeklyDosePage/WeeklyDosePage';

class Routes extends Component {
  render() {
    return (
      <BrowserRouter>
      <Fragment>
        {/* <Header /> */}
        <Switch>
          <Route path='/' exact component={LandingPage} />
          <Route path='/your-weekly-dose' exact component={WeeklyDosePage} />
        </Switch>
      </Fragment>
        
      </BrowserRouter>
    )
  }
}

export default Routes;