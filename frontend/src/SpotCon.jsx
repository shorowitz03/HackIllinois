import React from "react";

export class SpotCon extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
        <div>
          <a href="http://localhost:5000/api/auth/login" target="blank" className="spot-link"> 
            Connect Spotify Account
          </a>

          <p className="spot-descrip">
            Clicking the link above will redirect you to allow the website permission's
            to access your Spotify Account. Using this will allow the website to match you with musically
            similar individuals. Simply login, allow access then get matching!
          </p>
        </div>
    );
  }
}
export default SpotCon;
