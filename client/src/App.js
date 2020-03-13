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
          
          <Route exact path="/auth/login" component={Auth} />
          <Route exact path="/welltops" component={Welltops} />
          <Route exact path="/welltopsinc" component={Welltops} />
          <Route exact path="/welltops/wid/:wid" component={Detail} />
          <Route exact path="/welltopsinc/wid/:wid" component={Detail} />
          <Route exact path="/" component={Welltops} /> 
          <Route component={NoMatch} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
