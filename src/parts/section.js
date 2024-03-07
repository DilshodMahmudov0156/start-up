import React from 'react';

function Section({data, addToCart}) {
    return (
        <div className="container mt-5">
            <div className="row justify-content-between">
                {data.map((item) => (
                    <div className="foods-one">
                        <img src={item.url} alt=""/>
                            <h2>King Burger kafe</h2>
                    </div>
                ))}
            </div>

        </div>
    );
}

export default Section;