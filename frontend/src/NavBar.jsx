import { Link } from "react-router-dom";
import React from 'react';
import logo from "./matchmakerlogo.gif";

class NavBar extends React.Component {
  constructor(props) {
      super(props)

  }

  render () {
  return (
    <nav className="navbar">
      <h1>Music Matcher</h1>
      <div>
        <Link to="/" className="nav-links">Home</Link>
        <Link to="/matches" className="nav-links">Matches</Link>
        <Link to="/login" className="nav-links">Login</Link>
        <Link to="/aboutus" className="nav-links">About Us</Link>
      </div>
      <img src={logo} alt="logo" className="logo-img"/>
    </nav>
  );
}
}
export default NavBar;