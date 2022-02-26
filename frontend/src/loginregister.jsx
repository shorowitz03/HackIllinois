import React from "react";
import { useState, useEffect } from "react";
import "./login.scss";
import Login from "./login";
import Register from "./register";

class loginregister extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        isLogginActive: true,
      }
    }

    changeState() {
      const { isLogginActive } = this.state;
      if (isLogginActive) {
        this.rightSide.classList.remove("right");
        this.rightSide.classList.add("left");
      } else {
        this.rightSide.classList.remove("left");
        this.rightSide.classList.add("right");
      }
      this.setState(prevState => ({ isLogginActive: !prevState.isLogginActive }));
    }


  render() {

    const RightSide = props => {
        return <div className="right-side" ref={props.containerRef} onClick={props.onClick}>
          <div className="inner-container">
            <div className="text">{props.current}</div>
          </div>
        </div>
    }
    const { isLogginActive } = this.state;
    const current = isLogginActive ? "Register" : "Login";
    const currentActive = isLogginActive ? "login" : "register";
    return (
      <div className="loginstuff">
        <div className="login">
          <div className="container">
            {isLogginActive && (<Login containerRef={(ref) => (this.current = ref)} /> )}
            {!isLogginActive && (<Register containerRef={(ref) => (this.current = ref)} />)}
          </div>
          <RightSide current={current} containerRef={ref => this.rightSide = ref} onClick={this.changeState.bind(this)}/>
        </div>
      </div>
    );
  }


}
  export default loginregister