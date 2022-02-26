import React from "react";
import MatchTemp from "./MatchTemp";


class Match extends React.Component{
    constructor(props){
        super(props)

        this.getAPIData = this.getAPIData.bind(this);
        this.state = {Frame: []};
    }

    

    async getAPIData() {
        const url = "https://pokeapi.co/api/v2/pokemon?limit=30&offset=0"; // URL of the API
        const response = await fetch(url); // Get the data API
        const responseJSON = await response.json(); // Turn the data into a JSON object

        const Users = responseJSON;

        const UsersResponse = Users.map((item) => <MatchTemp key={item.id} Fname={item.Fname} Lname={item.Lname} Gnr={item.Gnr} Spot={item.spot}/>)

        // This should also seem familiar
        this.setState(
            {
                Frame: UsersResponse,
            }
        );
        console.log(UsersResponse);
    }

    // Only use if data is received
    componentDidMount() {
        this.getAPIData();
    }


    render(){
        return(
            <div>
                You matched with:
                <a className="card-layout">
                {this.state.Frame}
                </a>
            </div>
        );
    }
}
export default Match;