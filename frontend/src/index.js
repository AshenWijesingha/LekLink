import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import WebApp from "./WebApp";
import { ContextProvider } from "./context/Context";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";



ReactDOM.render(
  <React.StrictMode>
    <ContextProvider>
      <Router>
        <Switch>
          <Route path="/app"><App /></Route>
          <Route path="/"><WebApp /></Route>
        </Switch>
      </Router>
    </ContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
