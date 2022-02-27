import React from "react";

class home extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    let access_token;
    fetch("/api/auth/login")
      .then((res) => res.json())
      .then((data) => {
        access_token = data.access_token;
      });
    fetch("https://api.spotify.com/v1/tracks/2KrxsD86ARO5beq7Q0Drfqa", {
      // !this prob isnt even user data
      method: GET,
      Authorization: `Bearer ${access_token}`,
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  }
  render() {
    return (
      <div>
        Home Page
        <p className="home">
          Welcome to Music Matcher! Here you can connect with others based on
          mutual musical interests! To get started simply register, login, and
          begin matching.
        </p>
      </div>
    );
  }
}
export default home;
