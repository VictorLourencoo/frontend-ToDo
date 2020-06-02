import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from '../views/Home/index';
import Task from '../views/Task/index';

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/task" exact component={Task} />
        <Route path="/task/:id" exact component={Task} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
