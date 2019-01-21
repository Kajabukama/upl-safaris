import React from 'react';
import { Route, Switch } from 'react-router-dom';

import HomePage from './components/pages/Home/Home';
import NotFound from './components/pages/Error/404';

const Routes = () => {
   return (
      <Switch>
         <Route exact path="/" component={ HomePage }/>
         <Route exact path="*" component={ NotFound }/>
      </Switch>
   )
}

export default Routes;