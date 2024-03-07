import React from 'react';

function CafeElement({id, url, name} ) {
    return (
        <div className="foods-one" key={id}>
            <img src={url} alt=""/>
            <h2>{name}</h2>
        </div>
    );
}

export default CafeElement;