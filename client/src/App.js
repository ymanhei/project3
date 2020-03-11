import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Welltops from "./pages/Welltops";
import Detail from "./pages/Detail";
import Auth from "./pages/Auth";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path="/" component={Auth} />
          <Route exact path="/welltops" component={Welltops} />
          <Route exact path="/welltopsinc" component={Welltops} />
          <Route exact path="/welltops/:id" component={Detail} />
          <Route exact path="/welltopsinc/:id" component={Detail} />
          <Route exact path="/welltops/wid/:wid" component={Detail} />
          <Route exact path="/welltopsinc/wid/:wid" component={Detail} />

          <Route component={NoMatch} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
