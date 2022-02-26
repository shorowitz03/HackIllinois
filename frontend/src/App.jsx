import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from "./NavBar";
import ContactUs from "./contactus";

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

        </Switch>

      </header>
    </div>
    </Router>
  )
}

export default App
