import React from "react";
import {createMemoryHistory} from "history";
import {Route, Router, Switch} from "react-router-dom";

import "assets/scss/material-kit-react.scss?v=1.4.0";
import 'typeface-roboto';
import 'typeface-roboto-slab';
// pages for this product
import Components from "../templates/Components/Components.jsx";
import LandingPage from "../templates/LandingPage/LandingPage.jsx";
import ProfilePage from "../templates/ProfilePage/ProfilePage.jsx";
import LoginPage from "../templates/LoginPage/LoginPage.jsx";

let hist = createMemoryHistory();

export default () => (
  <Router history={hist}>
    <Switch>
      <Route path="/components" component={Components} />
      <Route path="/profile-page" component={ProfilePage} />
      <Route path="/login-page" component={LoginPage} />
      <Route path="/" component={LandingPage} />
    </Switch>
  </Router>
);
