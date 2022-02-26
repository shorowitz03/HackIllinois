import React from "react";
//import loginImg from "../../signup.svg";

export class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = { nameIn: "" };
    this.state = { emailIn: "" };
    this.state = { passwordIn: "" };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit() {
    const databody = {
      username: this.state.nameIn,
      email: this.state.emailIn,
      password: this.state.passwordIn,
    };
    fetch("/api/user/make", {
      method: "POST",
      body: JSON.stringify(databody),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });
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
                  placeholder="username"
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
                  placeholder="email"
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
                  placeholder="password"
                />
              </div>
            </div>
          </div>
          <div className="footer">
            <button
              type="submit"
              href="/"
              className="btn"
            >
              Register
            </button>
          </div>
        </div>
      </form>
    );
  }
}
export default Register;
