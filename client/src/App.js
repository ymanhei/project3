import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Welltops from "./pages/Welltops";
import Detail from "./pages/Detail";
import Auth from "./pages/Auth";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";
import PrivateRoute from './components/PrivateRoute';
import PublicRoute from './components/PublicRoute';

function App() {
  return (
    <Router>
      <div>
        <Nav/>
        <Switch>
          <PublicRoute  exact path="/" component={Auth} />
          <PrivateRoute exact path="/welltops" component={Welltops} />
          <PrivateRoute exact path="/welltopsinc" component={Welltops} />
          <PrivateRoute exact path="/welltops/wid/:wid" component={Detail} />
          <PrivateRoute exact path="/welltopsinc/wid/:wid" component={Detail} /> 
          <PrivateRoute exact path="/welltops/:id" component={Detail} />
          <PrivateRoute exact path="/welltopsinc/:id" component={Detail} />
          <PrivateRoute component={NoMatch} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
