import React from 'react';
import Section from "./section";
import Header from "./header";
import NavBar from "../components/navBar";
import Footer from "./footer";

function Body({data, cartLength}) {
    return (
        <div>
            <NavBar cartLength={cartLength}/>
            <br/><br/><br/><br/><br/>
            <Header/>
            <Section data={data}/>
            <Footer/>
        </div>
    );
}

export default Body;