import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";

import "/src/assets/scss/material-kit-react.scss";

// pages for this product
import Components from "/src/views/Components/Components.js";
import LandingPage from "/src/views/LandingPage/LandingPage.js";
import ProfilePage from "/src/views/ProfilePage/ProfilePage.js";
import LoginPage from "/src/views/LoginPage/LoginPage.js";

var hist = createBrowserHistory();

ReactDOM.render(
  <Router history={hist}>
    <Switch>
      <Route path="/" component={LandingPage} />
    </Switch>
  </Router>,
  document.getElementById("root")
);

/*
      <Route path="/" component={Components} />
      <Route path="/landing-page" component={LandingPage} />
    <Route path="/profile-page" component={ProfilePage} />
      <Route path="/login-page" component={LoginPage} />
      
  

*/
