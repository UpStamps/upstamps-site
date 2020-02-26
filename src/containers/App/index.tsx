import React, { Fragment } from "react";
//Router
import { HashRouter as Router, Switch, Route } from "react-router-dom";
//Styles
import GlobalStyle from "../../styles/GlobalStyle";
//Containers
import Privacy from "../Global/Privacy";
import Terms from "../Global/Terms";

function Home() {
  return (
    <Fragment>
      <iframe
        title="UpStamps on Ship by ProductHunt"
        src="https://www.producthunt.com/upcoming/upstamps"
        style={{
          display: "block",
          background: "#000",
          border: "none",
          height: "100vh",
          width: "100vw"
        }}
        height="100%"
        width="100%"
      />
    </Fragment>
  );
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
