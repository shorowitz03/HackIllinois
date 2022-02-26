import { useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from "./NavBar";
import ContactUs from "./contactus";
import Matches from "./Match";

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
>>>>>>> df5318c13a983a1e36bc9d2131bfcf872af7eb4e
    </Router>
  );
}

export default App;
