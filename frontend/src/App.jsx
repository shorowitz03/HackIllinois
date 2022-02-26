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
<<<<<<< HEAD
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
=======
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
          </Switch>
        </header>
      </div>
>>>>>>> 1f0239c5008761db18c6a450642bf685d7eaeed3
    </Router>
  );
}

export default App;
