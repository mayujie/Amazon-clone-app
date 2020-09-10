import React, { useEffect } from "react";
import "./App.css";
import Header from "./Header";
import Home from "./Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Checkout from "./Checkout";
import Login from "./Login";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";

function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    // will only run once when the app component loads... like if statement in react, listener
    auth.onAuthStateChanged((authUser) => {
      console.log("THE USER IS >>> ", authUser);

      if (authUser) {
        // the user just logged in / the user was logged in
        // if you refresh the page, still log you back in, if you logged in before

        // everytime login in shoot the user into the datalayer, if log out remove the user from datalayer
        // set user to who was logged in
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // the user is logged out, set the user to null
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);

  return (
    // BEM change App to app
    <Router>
      <div className="app">
        {/* {Header} top part of amazon page */}

        <Switch>
          <Route path="/login">
            <Login />
          </Route>

          <Route path="/checkout">
            <Header />
            {/* button to checkout page */}
            <Checkout />
          </Route>

          {/* default route if not match anything */}
          <Route path="/">
            <Header />
            {/* {Home} rest of body */}
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
