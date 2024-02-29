import './App.css';
import Body from "./components/body";
import asyncData from "./db.json";
import {useContext, useEffect, useState} from "react";
import NavBar from "./components/navBar";
import {Context} from "./context";
import Cart from "./components/cart";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Header from "./parts/header";

function App() {

    const { dispatch, state } = useContext(Context);
    const [ data, setData ] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        const gettingData = () => {
            setData(asyncData.data);
            if(JSON.parse(localStorage.getItem('cart'))){
                setCart(JSON.parse(localStorage.getItem('cart')))
            }
        }
        return () => {gettingData()}
    }, []);

    const addToCart = (item) => {
        const productList = [...cart];
        if(!productList.includes(item)){
            productList.push(item)
        }
        const index = productList.indexOf(item);
        productList[index].quantity++;
        setCart(productList);
        localStorage.setItem("cart", JSON.stringify(productList));
        console.log(index);
    }

    const cangeQuantity = (item, sign) => {
        const productList = [...cart];
        const index = productList.indexOf(item);
        if (sign === "+"){

        }
    }


    const dater = () => {
        console.log(data);
    }

  return (
      <div className="app">
          <Router>
              <Routes>
                  <Route path="/" element={<Body data={data} addToCart={addToCart}/>}/>
                  <Route path="/cart" element={<Cart cart={cart}/>}/>
              </Routes>
          </Router>
      </div>
  );
}

export default App;
