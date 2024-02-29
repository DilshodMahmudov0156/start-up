import React from 'react';
import { Link } from "react-router-dom";

function NavBar({cartLength}) {
    return (


        <nav>
            <h1 id="h1">Dastafka <span>24/7</span></h1>

            <input type="checkbox" id="check" />

                <label htmlFor="check">
                    <i className='bx bx-menu' id="btn"></i>
                    <i className='bx bx-x' id="cancel"></i>
                </label>

                <Link to="/cart"><i id="cart2" className='bx bx-cart'></i></Link>

                <ul>
                    <li><Link to="/">Asosiy</Link>
                        <div className="line"></div>
                    </li>
                    <li>
                        <Link to="/kafelar">Kafelar</Link>
                        <div className="line"></div>
                    </li>
                    <li>
                        <Link to="/cart">Savat</Link>
                        <div className="line"></div>
                    </li>
                    <li>
                        <Link to="/">Aloqa</Link>
                        <div className="line"></div>
                    </li>
                </ul>


                <Link to="/cart" className="cart-link">
                    <i id="cart" className='bx bx-cart'></i>
                    {
                        cartLength? <span className="cart-length text-center">{cartLength}</span>: ""
                    }

                </Link>
                <i id="cart" className='bx bx-search-alt'></i>
        </nav>

    );
}

export default NavBar;