import './App.css';
import Body from "./components/body";
import asyncData from "./db.json";
import {useContext, useEffect, useState} from "react";
import NavBar from "./components/navBar";
import {Context} from "./context";

function App() {

    const { dispatch, state } = useContext(Context);


    const [ data, setData ] = useState([]);
    useEffect(() => {
        const gettingData = () => {
            setData(asyncData.data);
        }
        return () => {gettingData()}
    }, [])
    const dater = () => {
        console.log(data);
    }

  return (
    <div className="app">
        <NavBar/>
      <Body/>
        {/*<button onClick={() => {dispatch({ type: "ON_LOG", payload: null, })}}>click to get data</button>*/}
        <button onClick={dater}>click to get data</button>
    </div>
  );
}

export default App;
