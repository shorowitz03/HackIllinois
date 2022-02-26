import React from "react";


class Match extends React.Component{
    constructor(props){
        super(props)

        this.getAPIData = this.getAPIData.bind(this);
        this.state = {data: []};
    }

    async getAPIData() {
        const url = "https://pokeapi.co/api/v2/pokemon?limit=30&offset=0"; // URL of the API
        const response = await fetch(url); // Get the data API
        const responseJSON = await response.json(); // Turn the data into a JSON object

        // This should also seem familiar
        this.setState(
            {
                data: responseJSON // Add data received to data object
            }
        );
    }

    // Only use if data is received
    componentDidMount() {
        this.getAPIData();
    }

    render(){
        return(
            <div className = "main">
                This is a match
            </div>
        );
    }
}
export default Match;