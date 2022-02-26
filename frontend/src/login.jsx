import React from "react";

export class Login extends React.Component{
    constructor(props){
        super(props)
        this.state = { nameIn: "" };
        this.state = { passwordIn: "" };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    async handleSubmit() {
        const databody = {
          username: this.state.nameIn,
          password: this.state.passwordIn,
        };
        await fetch("/api/user/match", {
          method: "POST",
          body: JSON.stringify(databody),
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        })
      }

    render(){
        return (
        <form onSubmit={this.handleSubmit}>
        <div className="base-container">
            <div className="header">Login</div>
            <div className="content">        
                <div className="form">
                    <div className="form-group">
                        <label htmlFor="username">Username</label>
                        <input type="text" onChange={(event) => (this.state.nameIn = event.target.value)} name="username" placeholder="username"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input type="text" onChange={(event) => (this.state.passwordIn = event.target.value)} name="password" placeholder="password"/>
                    </div>
                </div>
            </div>       
            <div className="footer">
                <button type="submit" href="/register" className="btn">
                    Login
                </button>
            </div>
        </div>
        </form>
        );
    }
}
export default Login;