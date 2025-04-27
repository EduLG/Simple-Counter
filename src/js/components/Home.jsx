import React, { useEffect, useState } from "react";
import CounterDisplay from "./CounterDisplay";


const Home = () => {

    const [counter, setCounter] = useState(0);

    useEffect( () => {
        const interval = setInterval(() => {
            setCounter(prevCounter => prevCounter +1)
        },1000)
        return () => clearInterval(interval);
    }, [] )
    
    return (
        <CounterDisplay counter= {counter}/>
    );

};

export default Home;