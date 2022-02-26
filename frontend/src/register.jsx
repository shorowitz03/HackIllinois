import React from "react";
//import loginImg from "../../signup.svg";

export class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = { nameIn: "" };
    this.state = { emailIn: "" };
    this.state = { passwordIn: "" };
    this.state = { spotifyAcct: "" };
    this.state = { topGnr: "" };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  async handleSubmit() {
    const databody = {
      username: this.state.nameIn,
      email: this.state.emailIn,
      password: this.state.passwordIn,
      spotifyAcct: this.state.spotifyAcct,
      topGnr: this.state.topGnr,
    };
    await fetch("/api/user/make", {
      method: "POST",
      body: JSON.stringify(databody),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="base-container" ref={this.props.containerRef}>
          <div className="header">Register</div>
          <div className="content">
            <div className="form">
              <div className="form-group">
                <label htmlFor="username">Username</label>
                <input
                  type="text"
                  name="username"
                  onChange={(event) => (this.state.nameIn = event.target.value)}
                  placeholder="Username"
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  name="email"
                  onChange={(event) =>
                    (this.state.emailIn = event.target.value)
                  }
                  placeholder="Email"
                />
              </div>
              <div className="form-group">
                <label htmlFor="spotifyAcct">Spotify Account</label>
                <input
                  type="text"
                  name="spotifyAcct"
                  onChange={(event) => (this.state.spotifyAcct = event.target.value)}
                  placeholder="Spotify Account"
                />
              </div>
              <div className="form-group">
                <label htmlFor="topGnr">Top Genre</label>
                <input
                  type="text"
                  name="topGnr"
                  onChange={(event) => (this.state.topGnr = event.target.value)}
                  placeholder="Top Genre"
                />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  name="password"
                  onChange={(event) =>
                    (this.state.passwordIn = event.target.value)
                  }
                  placeholder="Password"
                />
              </div>
            </div>
          </div>
          <div className="footer">
            <button type="submit" href="/login" className="btn">
              Register
            </button>
          </div>
        </div>
      </form>
    );
  }
}
export default Register;
