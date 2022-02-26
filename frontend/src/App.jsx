import { useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from "./NavBar";
import ContactUs from "./contactus";
import Matches from "./Match";
import Login from "./login";

function App() {
  return (
    <Router>
    <div className="App">
      <NavBar />
      <header className="App-header">
        <Switch>
          <Route exact path="/contactus">
            <ContactUs />
          </Route>

          <Route exact path="/matches">
            <Matches />
          </Route>

          <Route exact path="/login">
            <Login />
          </Route>

        </Switch>

      </header>
    </div>
    </Router>
  );
}

export default App;
