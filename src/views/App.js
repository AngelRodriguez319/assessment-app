import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Examples from "seed/examples/components/Examples";
import Docs from "seed/examples/components/Docs";
import css from "resources/css/App.module.css";
import Processes from "components/Processes";

const App = () => (
  <div class={css.module}>
    <BrowserRouter>
      <Switch>
        <Route path="/examples" component={Examples} />
        <Route path="/docs" component={Docs} />
        <Route path="/results" component={Processes} />
        <Redirect to="/examples" />
      </Switch>
    </BrowserRouter>
  </div>
);

App.propTypes = {};

export default App;
