import React from "react";
import ReactDOM from "react-dom";
//Router
import { HashRouter as Router, Route, Switch } from "react-router-dom";
//Utils
import ScrollToTop from "./components/ScrollToTop";
import * as serviceWorker from "./serviceWorker";
//Containers
import Terms from "./containers/Global/Terms";
import Privacy from "./containers/Global/Privacy";
import App from "./containers/App";
//Styles
import GlobalStyle from "./styles/GlobalStyle";
//Utils
import { isDevMode } from "./services/constants";
import { disableReactDevTools } from "./services/utils";
import { UpStampsProvider } from "upstamps-react";

if (!isDevMode) {
  //Removes React DevTools in Production
  disableReactDevTools();
}

const Main = () => {
  return (
    <UpStampsProvider
      clientId="5d3843d9-fd51-4f95-a49d-81e3833935c7"
      projectKey="interesting-tan"
      envKey="energetic-coffee"
    >
      <GlobalStyle background="#e8e4e6" />
      <Router>
        <ScrollToTop />
        <Switch>
          <Route exact path="/legal/terms" component={Terms} />
          <Route exact path="/legal/privacy" component={Privacy} />
          <App />
        </Switch>
      </Router>
    </UpStampsProvider>
  );
};

ReactDOM.render(<Main />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
