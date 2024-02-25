import React from 'react';
import Section from "./section";

function Body({data, addToCart}) {
    return (
        <div>
            <Section data={data} addToCart={addToCart}/>
        </div>
    );
}

export default Body;