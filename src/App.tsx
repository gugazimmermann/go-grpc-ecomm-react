import React, { ReactElement } from "react";
import { Switch, Route } from "react-router-dom";
import "./App.scss";
import Layout from "./layout";

function App(): ReactElement {
  return (
    <Switch>
      <Route exact path="/">
        <Layout />
      </Route>
    </Switch>
  );
}

export default App;
