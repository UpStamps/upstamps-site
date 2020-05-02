import React, { Fragment } from "react";
//Router
import { Switch, Route } from "react-router-dom";
//Styles
import GlobalStyle from "../../styles/GlobalStyle";
//Components
import { Navigation, Footer } from "../../components";
//Containers
import Privacy from "../Global/Privacy";
import Terms from "../Global/Terms";
import Pricing from "../Pricing";
import Home from "../Home";
import NotFound from "../Global/NotFlound";

function App() {
  return (
    <Fragment>
      <GlobalStyle background="#e8e4e6" />
      <Navigation />
      <Switch>
        <Route exact path="/terms" component={Terms} />
        <Route exact path="/privacy" component={Privacy} />
        <Route exact path="/pricing" component={Pricing} />
        <Route exact path="/" component={Home} />
        <Route component={NotFound} />
      </Switch>
      <Footer />
    </Fragment>
  );
}

export default App;
