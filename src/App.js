import React from "react";
import "./App.css";
import Header from "./Header";
import Home from "./Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Checkout from "./Checkout";

function App() {
  return (
    // BEM change App to app
    <Router>
      <div className="app">
        {/* {Header} top part of amazon page */}
        <Header />
        <Switch>
          <Route path="/checkout">
            {/* {Home} rest of body */}
            <Checkout />
          </Route>

          {/* default route if not match anything */}
          <Route path="/">
            {/* {Home} rest of body */}
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
