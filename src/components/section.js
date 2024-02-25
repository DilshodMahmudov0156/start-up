import React from 'react';

function Section({data, addToCart}) {
    return (
        <div className="container mt-5">
            <div className="row justify-content-between">
                {data.map((item) => (
                    <div className="col-xl-3">
                        <div className="card mt-4 overflow-hidden shadow-sm">
                            <img src={item.url} alt="" className="img-fluid"/>
                            <div className="card-body">
                                <h4>{item.title}</h4>
                                <p>{item.price + " " + "000 so'm"}</p>
                                <button className="btn btn-success w-100" onClick={() => {addToCart(item)}}>
                                    <span>add to cart </span><i className="bi bi-bag-plus"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

        </div>
    );
}

export default Section;