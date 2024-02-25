import React from 'react';

function Cart({cart}) {


    return (
        <div className="container mt-5">
            <div className="row">
                <h3>cart</h3>
                <table className="table table-striped table-hover">
                    <tbody>
                    {
                        cart.map((item, index) => (
                            <tr key={item.id}>
                                <td>{index + 1}</td>
                                <td>
                                    <img src={item.url} alt="" className="w-50"/>
                                </td>
                                <td>{item.quantity}</td>
                                <td>{item.title}</td>
                                <td>
                                    <button className="btn btn-danger">x</button>
                                </td>
                            </tr>
                        ))
                    }
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Cart;