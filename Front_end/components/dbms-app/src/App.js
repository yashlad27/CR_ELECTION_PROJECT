import React from "react";
import card from "./card";
import Card from "@material-u/core/Card";

function App() {
    return(
        <div className="App">
            {/* <card 
            title = 'Card View'
            imageURL = 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.vvmpWt0qBu3LeBgZuUfmGAHaFt%26pid%3DApi&f=1&ipt=e932c9d4eaba93c80bba85b15848b93563500655fc76c1d2f1f2724939b6958b&ipo=images'
            body = 'Lorem Ipsum'/> */}

            <card 
            title='card view'
            imageURIL = ""/>

            <Card />
        </div>  
    );
}

export default App; 