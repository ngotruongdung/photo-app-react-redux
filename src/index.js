import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import store from "app/store";

import "bootstrap/dist/css/bootstrap.min.css";
import { Provider } from "react-redux";

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,

  document.getElementById("root")
);
