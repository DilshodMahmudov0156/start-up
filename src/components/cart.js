import React, {useEffect, useState} from 'react';
import {Link} from "react-router-dom";
import NavBar from "./navBar";

function Cart({cart, changeQuantity, deleteProduct}) {

    const [totalSum, setTotalsum] = useState();


    useEffect(() => { /**JAMI SUMMANI HISOBLASH UCUN */
    let total = 0;
        for(var i = 0; i < cart.length; i++) {
            total+= cart[i].price*cart[i].quantity;
        }
        setTotalsum(total);
    }, [cart]);



    return (
        <div className="cart-app">
            <div className="container mt-5">
                <div className="row justify-content-center">
                    <Link to="/" className="text-light text-center">
                        Asosiy
                        <i className="bi bi-house-fill"></i>
                    </Link>
                    <h3 className="text-center text-light mt-5">Sizning savatingiz!</h3>
                    <h4 className="text-center text-success">sizdan {totalSum} 000 so'm</h4>
                    <div className="col-xl-8 col-md-10 col-sm-10">
                        <table className="table table-striped table-dark table-hover mt-5">
                            <tbody>
                            <p className="text-danger text-center display-4">
                                {
                                    cart.length < 1? "hali hech narsa qo'shmadingiz! ;-)":""
                                }
                            </p>
                            {
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
                                                <button className="btn btn-warning" onClick={() => {changeQuantity(item, "-")}}>-</button>
                                                <span className="mx-3">{item.quantity}</span>
                                                <button className="btn btn-warning" onClick={() => {changeQuantity(item, "+")}}>+</button>
                                            </div>
                                        </td>
                                        <td>
                                            <button className="btn btn-danger my-4" onClick={() => {deleteProduct(item)}}>
                                                <i className="bi bi-x"></i>
                                            </button>
                                        </td>
                                    </tr>
                                ))

                            }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Cart;