import React, { Fragment } from "react";
//Router
import { Switch, Route } from "react-router-dom";
//Components
import { Navigation, Footer } from "../../components";
//Containers
import Privacy from "../Global/Privacy";
import Terms from "../Global/Terms";
import Pricing from "../Pricing";
import Home from "../Home";
import Tour from "../Tour";
import NotFound from "../Global/NotFlound";

function App() {
  return (
    <Fragment>
      <Navigation />
      <Switch>
        <Route exact path="/terms" component={Terms} />
        <Route exact path="/privacy" component={Privacy} />
        <Route exact path="/pricing" component={Pricing} />
        <Route exact path="/tour" component={Tour} />
        <Route exact path="/" component={Home} />
        <Route component={NotFound} />
      </Switch>
      <Footer />
    </Fragment>
  );
}

export default App;
