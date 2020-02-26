import React, { Fragment, useEffect } from "react";
//Router
import { HashRouter as Router, Switch, Route } from "react-router-dom";
//Styles
import GlobalStyle from "../../styles/GlobalStyle";
//Containers
import Privacy from "../Global/Privacy";
import Terms from "../Global/Terms";

function Home() {
  useEffect(() => {
    window.location.href = "https://mailchi.mp/c28013736fe6/upstampscoming";
  }, []);
  return (
    <Fragment>
      <iframe
        id="your-frame-id"
        title="UpStamps Coming Soon"
        src="https://mailchi.mp/c28013736fe6/upstampscoming"
        style={{
          display: "block",
          background: "transparent",
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
