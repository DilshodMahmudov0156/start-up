import React from 'react';

function Cart({cart}) {


    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <h3 className="text-center text-muted">Sizning savatingiz!</h3>
                <div className="col-xl-8 col-md-10 col-sm-10">
                    <table className="table table table-hover mt-5">
                        <tbody>
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
                                            <button className="btn btn-warning">-</button>
                                            <span className="mx-3">{item.quantity}</span>
                                            <button className="btn btn-warning">+</button>
                                        </div>

                                    </td>
                                    <td>
                                        <button className="btn btn-danger my-4">x</button>
                                    </td>
                                </tr>
                            ))
                        }
                        <h4></h4>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default Cart;