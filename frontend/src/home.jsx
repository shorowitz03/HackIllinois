import React from "react";


class home extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div>
                Home Page
                <p className = "home">Welcome to Music Matcher! Here you can connect with others based on mutual musical interests!
                   To get started simply register, login, and begin matching.
                </p>
            </div>
            
        );
    }
}
export default home;