import React, { Fragment } from "react";
//Router
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
//Styles
import GlobalStyle from "../../styles/GlobalStyle";
//Containers
import Privacy from "../Global/Privacy";
import Terms from "../Global/Terms";

function Home() {
  return <h2>Home</h2>;
}

function App() {
  return (
    <Fragment>
      <GlobalStyle background="#e8e4e6" />
      <Router>
        <Switch>
          <Route path="/terms">
            <Terms />
          </Route>
          <Route path="/privacy">
            <Privacy />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </Fragment>
  );
}

export default App;
