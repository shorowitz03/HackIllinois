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
        <Link to="/" style={{
          color: "white",
          backgroundColor: "#199e5b",
          borderRadius: "10px",
        }}>Home</Link>
        <Link to="/contactus" style={{
          color: "white",
          backgroundColor: "#199e5b",
          borderRadius: "10px",
        }}>Contact Us</Link>
      </div>
    </nav>
  );
}
}
export default NavBar;