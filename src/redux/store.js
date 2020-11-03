import { createStore, applyMiddleware} from "redux";
import thunk from "redux-thunk";
import reducer from "./reducer";
import React from 'react';
import { Provider } from 'react-redux';

const store = createStore(reducer, applyMiddleware(thunk));

export default ({ element }) => (
    <Provider store={store}>{element}</Provider>
  );