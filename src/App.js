import React from 'react'; 
import { Switch,  Route, BrowserRouter } from 'react-router-dom';

import { PrivateRoute } from 'components/ProtectedRoute/ProtectedRoute';
import { Todo } from './pages/TodoPage/TodoPage';
import { Register } from './pages/RegisterPage/RegisterPage';
import { Login } from './pages/LoginPage/LoginPage';
import { VerifyEmailPage } from './pages/verifyEmailPage/verifyEmailPage';
import { RecoverPassPage } from './pages/RecoverPassPage/RecoverPassPage';
import { RouteGuard } from 'components/RouteGuard/RouteGuard';

export const App = () => (

  <>
  <BrowserRouter>
  <RouteGuard>
    <Switch>
      
      <PrivateRoute
        exact path="/task"
        component={Todo}
      />
      <PrivateRoute
        exact path="/verifyemail"
        component={VerifyEmailPage}
      />
      <Route
        path="/login"
        component={Login}
      />
      <Route
        path="/recover"
        component={RecoverPassPage}
      />
      <Route
       path="/register"
        component={Register}
      />
      
    </Switch>
    </RouteGuard>
  </BrowserRouter>
</>

);

