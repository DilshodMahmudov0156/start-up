import './App.css';
import Body from "./components/body";
import asyncData from "./db.json";
import {useEffect, useState} from "react";
import NavBar from "./components/navBar";

function App() {
    const [ data, setData ] = useState([]);
    useEffect(() => {
        const gettingData = () => {
            setData(asyncData.secondData);
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




        {/*<button onClick={dater}>click to get data</button>*/}
    </div>
  );
}

export default App;
