import React from 'react';
import barg2 from "../imgs/barg2.png";
import button from "../imgs/button.png";
import gamburger from "../imgs/hamburger.png";
import barg4 from "../imgs/barg4.png";


function Header({}) {
    return (
        <header>

            <img id="barg-2" src={barg2} alt=""/>

            <div className="menu">
                <div className="menu-one">
                    <h2>Jizzax shahar bo'ylab <span>yetkazib berish</span> hizmati</h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum nemo quis dolores? Quaerat saepe
                        sunt, odit, velit error eveniet accusantium tempore excepturi cum sed quisquam necessitatibus,
                        deleniti inventore quod est.
                    </p>
                    <button>Buyurtma berish</button>
                    <img id="qol" src={button} alt=""/>

                </div>
                <div className="menu-two">
                    <img src={gamburger} alt=""/>
                </div>
            </div>
            <div className="barg6">
                <img id="barg6" src={barg4} alt=""/>
            </div>

        </header>
    );
}

export default Header;