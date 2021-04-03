import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app.jsx";
import { compose, createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import {reducer} from './store/reducer';
import thunk from 'redux-thunk'


export const store = createStore(reducer,
  // compose(
  //   applyMiddleware(thunk),
  //   window.__REDUX_DEVTOOLS_EXTENSION__  ?  window.__REDUX_DEVTOOLS_EXTENSION__() : f => f,
  // )
  compose(applyMiddleware(thunk))
)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector(`#root`)
);
