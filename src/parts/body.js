import React from 'react';
import Section from "./section";
import Header from "./header";
import NavBar from "../components/navBar";

function Body({data, addToCart, cartLength}) {
    return (
        <div>
            <NavBar cartLength={cartLength}/>
            <br/><br/><br/><br/><br/>
            <Header/>
            <Section data={data} addToCart={addToCart}/>
        </div>
    );
}

export default Body;