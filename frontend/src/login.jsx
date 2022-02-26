import React from "react";
//import loginImg from "../../signup.svg";



export class login extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return <div ckassName="base-container">
            <div className="header">Login</div>
            <div className="content">
                <div className="image">
                    <img src={loginImg} />                    
                </div>
                <div className="form">
                    
                </div>
            </div>       
        </div>
           
        
    }
}
export default login;