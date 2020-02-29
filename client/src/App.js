import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Welltops from "./pages/Welltops";
import Detail from "./pages/Detail";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path="/" component={Welltops} />
          <Route exact path="/welltops" component={Welltops} />
          <Route exact path="/welltops/:id" component={Detail} />
          <Route component={NoMatch} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
