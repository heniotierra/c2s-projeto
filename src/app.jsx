import React from 'react';
import { render } from 'react-dom';
import { createHashHistory, useBasename } from 'history';
import { Router } from 'react-router';
import "./common/styles/app.less";
import NProgress from 'nprogress';

NProgress.configure({ showSpinner: false });

const history = useBasename(createHashHistory)({
   queryKey: false
})

const rootRoute = {
  path: '/',
  component: require('./components/layouts/Base'),
  indexRoute: {component: require('./components/layouts/Dashboard')},
  childRoutes: [ 
    {
      component: require('./components/layouts/Dashboard'),
      indexRoute: {component: require('./components/pages/dashboard/BemVindo')},
      childRoutes: [
        require('./components/pages/dashboard/BemVindo'),
        require('./components/pages/dashboard/Sobre')
      ]
    },
    {
      path: '/login',
      component: require('./components/pages/Login'),
      childRoutes: [
      ]
    }
  ]
}

render(
  <Router history={history} routes={rootRoute} />,
  document.getElementById('app')
)
