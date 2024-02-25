import './App.css';
import Body from "./components/body";
import asyncData from "./db.json";
import {useContext, useEffect, useState} from "react";
import NavBar from "./components/navBar";
import {Context} from "./context";
import Cart from "./components/cart";

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


    const dater = () => {
        console.log(data);
    }

  return (
    <div className="app">
        <NavBar/>
      <Body data={data} addToCart={addToCart}/>
        {/*<button onClick={() => {dispatch({ type: "ON_LOG", payload: null, })}}>click to get data</button>*/}
        <button onClick={dater}>click to get data</button>
        <Cart cart={cart}/>
    </div>
  );
}

export default App;
