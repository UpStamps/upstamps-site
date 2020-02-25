import React from "react";
//Router
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
//Containers
import Privacy from "../Global/Privacy";
import Terms from "../Global/Terms";

function Home() {
  return <h2>Home</h2>;
}

function App() {
  return (
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
  );
}

export default App;
