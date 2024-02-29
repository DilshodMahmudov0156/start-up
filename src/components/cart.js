import React from 'react';
import {Link} from "react-router-dom";
import NavBar from "./navBar";

function Cart({cart, changeQuantity, dater}) {


    return (
        <div className="cart-app">
            <div className="container mt-5">
                <div className="row justify-content-center">
                    <h3 className="text-center text-light">Sizning savatingiz!</h3>
                    <div className="col-xl-8 col-md-10 col-sm-10">
                        <table className="table table-striped table-dark table-hover mt-5">
                            <tbody>
                            {
                                cart
                                    ?
                                    cart.map((item, index) => (
                                        <tr key={item.id}>
                                            <td>
                                                <p className="text-center my-4  ">{index + 1}</p>
                                            </td>
                                            <td className="img-parent">
                                                <img src={item.url} alt="" className="img-fluid"/>
                                            </td>
                                            <td>
                                                <h4 className="text-center text-danger my-4">{item.title}</h4>
                                            </td>
                                            <td>
                                                <div className="d-flex align-items-center my-4">
                                                    <button className="btn btn-warning" onClick={() => {dater(item, "+")}}>-</button>
                                                    <span className="mx-3">{item.quantity}</span>
                                                    <button className="btn btn-warning" onClick={() => {changeQuantity(item, "+")}}>+</button>
                                                </div>

                                            </td>
                                            <td>
                                                <button className="btn btn-danger my-4">x</button>
                                            </td>
                                        </tr>
                                    ))
                                    :
                                    <tr>
                                        <td className="text-center text-light">
                                            hechqanday narsa yo'q
                                        </td>
                                    </tr>
                            }
                            </tbody>
                        </table>
                        <button className="btn btn-primary" onClick={dater}>
                            click to get data
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Cart;