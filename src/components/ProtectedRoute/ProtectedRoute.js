import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { isLoaded, isEmpty } from 'react-redux-firebase';

import { useLogin } from 'services/auth/login/hook';

export const PrivateRoute = ({ component: Component, ...rest }) => {

  const auth = useSelector(state => state.auth);

  const { ifUid } = useLogin();

  return (
  
    <Route
      {...rest}
      render={props => (isLoaded(auth) && !isEmpty(auth) && ifUid ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{ pathname: '/login', state: { from: props.location } }}
        />
      ))}
    />
  );
};

