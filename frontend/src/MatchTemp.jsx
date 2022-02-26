import React from "react";
import { useState, useEffect } from "react";

class MatchTemp extends React.Component{
    constructor(props){
        super(props);

    }
    render(){
        const MatchCard = <div className="card">
          {this.props.Fname} {this.props.Lname}
          <h2>{this.props.Fname}'s Spotify Username: {this.props.Spot}</h2>
          <h3>Genres Listened by {this.props.Fname}: {this.props.Gnr}</h3>
          </div>;
        return (MatchCard);
    }
}

export default MatchTemp;