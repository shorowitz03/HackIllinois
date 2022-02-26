import React from "react";
//import loginImg from "../../signup.svg";



export class Register extends React.Component{
    constructor(props){
        super(props)
        this.state={nameIn:""};
        this.state={emailIn:""};
        this.state={passwordIn:""};
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    async handleSubmit(){
        const databody = {
            "username": this.state.nameIn,
            "email": this.state.emailIn,
            "password": this.state.passwordIn,
        }
        console.log(databody)
        return fetch('/api/user/make', {
            method: 'POST',
            body: JSON.stringify(databody),
            headers: {
                'Accept': 'application/json',
                'Content-Type':'application/json'
            },
        })
        .then(res => res.json())
        .then(data => console.log(databody)); 
    }
    
    render(){
        return (
        <form onSubmit={this.handleSubmit}>
            <div className="base-container" ref={this.props.containerRef}>
            <div className="header">Register</div>
            <div className="content">

                <div className="form">
                    <div className="form-group">
                        <label htmlFor="username">Username</label>
                        <input type="text" name="username" defaultValue={this.state.nameIn} placeholder="username"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" defaultValue={this.state.emailIn} placeholder="email"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" defaultValue={this.state.passwordIn} placeholder="password"/>
                    </div>
                </div>
            </div>
            <div className="footer">
                <button type="submit" onSubmit={this.handleSubmit} href="/" className="btn">
                    Register
                </button>
            </div>
        </div>
        </form>
        );
    }
}
export default Register;