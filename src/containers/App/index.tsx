import React, { Fragment } from "react";
//Router
import { HashRouter as Router, Switch, Route } from "react-router-dom";
//Styles
import GlobalStyle from "../../styles/GlobalStyle";
//Components
import { Navigation, Footer } from "../../components";
//Containers
import Privacy from "../Global/Privacy";
import Terms from "../Global/Terms";
import Pricing from "../Pricing";
import Home from "../Home";

function App() {
  return (
    <Fragment>
      <GlobalStyle background="#e8e4e6" />
      <Navigation />

      <Router>
        <Switch>
          <Route path="/terms">
            <Terms />
          </Route>
          <Route path="/privacy">
            <Privacy />
          </Route>

          <Route path="/pricing">
            <Pricing />
          </Route>

          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
      <Footer />
    </Fragment>
  );
}

export default App;
