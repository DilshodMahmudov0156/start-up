import './App.css';
import Body from "./parts/body";
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
            if(cart.length = 0){
                setCart(null);
                localStorage.clear();
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

    const changeQuantity = (item, sign) => {
        const productList = [...cart];
        const index = productList.indexOf(item);
        if (sign === "+"){
            productList[index].quantity++;
        }else if(sign === "-" && productList[index].quantity > 1){
                productList[index].quantity--;
                if (productList[index].quantity === 0) {
                    productList[index].quantity = 1;
                }

        }
        localStorage.setItem("cart", JSON.stringify(productList));
        setCart(productList);
    }

    const deleteProduct = (item) => {
        const productList = [...cart];
        const index = productList.indexOf(item);

        productList.splice(index, 1);

        localStorage.setItem("cart", JSON.stringify(productList));
        setCart(productList);
    }


    const dater = (item) => {

    }

  return (
      <div className="app">
          <Router>
              <Routes>
                  <Route path="/" element={<Body cartLength={cart.length}/>}/>
                  <Route path="/cart" element={<Cart cart={cart} changeQuantity={changeQuantity} deleteProduct={deleteProduct}/>}/>
              </Routes>
          </Router>
      </div>
  );
}

export default App;