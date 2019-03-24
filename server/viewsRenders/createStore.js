import { createStore, applyMiddleware } from "redux"
import reduxThunk from "redux-thunk"
import axios from "axios"

import rootReducer from '../../src/data/reducers';

export default req => {
  const axiosInstance = axios.create({
    baseURL: "http://localhost:63835",
    headers: { cookie: req.get("cookie") || "" }
  });

  const initialState = {
    data: {
      authenticated: false,
      publicData: null,
      privateData: null
    },
  }

  const store = createStore(
    rootReducer,
    initialState,
    applyMiddleware(reduxThunk.withExtraArgument(axiosInstance))
  );

  return store
}
