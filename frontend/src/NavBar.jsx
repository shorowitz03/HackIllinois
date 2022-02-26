import { Link } from "react-router-dom";
import React from 'react';

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
        <Link to="/contactus" className="nav-links">Contact Us</Link>
      </div>
    </nav>
  );
}
}
export default NavBar;