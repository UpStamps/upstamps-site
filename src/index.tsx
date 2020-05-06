import React, { Fragment } from "react";
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
import LogRocket from "logrocket";
import { isDevMode } from "./services/constants";
import { disableReactDevTools } from "./services/utils";

if (!isDevMode) {
  LogRocket.init(`${process.env.REACT_APP_LOGROCKET_ID}`, {
    release: "1.0.0"
  });
  //Removes React DevTools in Production
  disableReactDevTools();
}

const Main = () => {
  return (
    <Fragment>
      <GlobalStyle background="#e8e4e6" />
      <Router>
        <ScrollToTop />
        <Switch>
          <Route exact path="/legal/terms" component={Terms} />
          <Route exact path="/legal/privacy" component={Privacy} />
          <App />
        </Switch>
      </Router>
    </Fragment>
  );
};

ReactDOM.render(<Main />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
