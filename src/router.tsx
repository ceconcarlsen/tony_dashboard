import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// import { getMe } from '~/actions/user';
import PanelNavigationStack from '~/containers/Panel/PanelNavigationStack';
import AuthNavigationStack from '~/pages/Auth/AuthNavigationStack';

interface IRouter {
  isLogged: boolean;
}

const Router = ({ isLogged }: IRouter) => {
  const dispatch = useDispatch();

  useEffect(() => {
    if (isLogged) {
      // dispatch(getMe());
    }
  }, [isLogged]);

  return (
    <BrowserRouter>
      <div>
        <Switch>
          {isLogged ? (
            <Route path="/">
              <PanelNavigationStack />
            </Route>
          ) : (
            <Route path="/">
              <AuthNavigationStack />
            </Route>
          )}
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default Router;
