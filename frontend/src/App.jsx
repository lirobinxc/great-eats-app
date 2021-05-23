import React, { useEffect } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { initRestaurants } from './redux/reducers/restaurantsReducer';

import { ThemeProvider } from 'styled-components';
import globalTheme from './theme/globalTheme';

import HomePage from './routes/HomePage';
import RestaurantDetailsPage from './routes/RestaurantDetailsPage';
import UpdatePage from './routes/UpdatePage';
import { GlobalStyles } from './theme/GlobalStyles';

const App = () => {
  const dispatch = useDispatch();
  const currentTheme = useSelector((state) => state.ui.theme);

  // Initialize store from the API
  useEffect(() => {
    dispatch(initRestaurants());
  }, [dispatch]);

  return (
    <>
      <ThemeProvider
        theme={currentTheme === 'light' ? globalTheme.light : globalTheme.dark}
      >
        <GlobalStyles />
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route
              exact
              path="/restaurants/:id"
              component={RestaurantDetailsPage}
            />
            <Route
              exact
              path="/restaurants/:id/update"
              component={UpdatePage}
            />
          </Switch>
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
};

export default App;
