import React, { useEffect, useState } from "react";
import CounterDisplay from "./CounterDisplay";


const Home = () => {

    const [counter, setCounter] = useState(0);
    const updateCounter =() => {
        setCounter(counter +1)
    }
    useEffect( () => {
        setTimeout(updateCounter,1000)
      
    }, [counter] )
    
    return (
        <CounterDisplay counter= {counter}/>
    );

};

export default Home;