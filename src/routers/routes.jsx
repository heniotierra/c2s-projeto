import React from "react";
import { Router, Route, DefaultRoute, RouteHandler, Redirect } from "react-router";

import BaseLayout from "../components/layouts/Base";
import DashboardLayout from "../components/layouts/Dashboard";

import DashboardOverviewPage from "../components/pages/dashboard/BemVindo";
import DashboardReportsPage from "../components/pages/dashboard/Sobre";
import LoginPage from "../components/pages/Login";
import { History } from 'history';

var Routes = React.createClass({

  statics: {
    getRoutes: function() {

      return (
          <Route name="base" path="/" handler={BaseLayout}>
            <Route name="dashboard" path="/dashboard" handler={DashboardLayout}>
              <Route name="dashboard.bemvindo" path="/bemvindo" handler={DashboardBemVindoPage} />
              <Route name="dashboard.sobre" path="/sobre" handler={DashboardSobrePage} />
              <DefaultRoute name="dashboard.default" handler={DashboardBemVindoPage} />
            </Route>
            <Route name="login" path="/login" handler={LoginPage} />
            <DefaultRoute name="default" handler={DashboardBemVindoLayout} />
            <Redirect from="/" to="dashboard.bemvindo" />
          </Route>
      );
    }
  },
  render: function() {
  
  }
  
});

export default Routes;