import React, {Fragment} from "react";
import {Switch, Route, BrowserRouter} from "react-router-dom";
import MainPage from "../main-page/main-page";
import { GlobalStyle } from '../../styles.js';

const App = (props) => {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <MainPage />
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  );
};

export default App;
