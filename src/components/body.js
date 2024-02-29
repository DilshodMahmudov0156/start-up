import React from 'react';
import Section from "./section";
import Header from "../parts/header";
import NavBar from "./navBar";

function Body({data, addToCart}) {
    return (
        <div>
            <NavBar/>
            <br/><br/><br/><br/><br/>
            <Header/>
            <Section data={data} addToCart={addToCart}/>
        </div>
    );
}

export default Body;