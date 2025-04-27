import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-solid-svg-icons";


const CounterDisplay = ({ counter }) => {

      const paddedCounter = counter.toString().padStart(6, '0').split('');

      return (
            <div className="counter-container">
                  <div><FontAwesomeIcon icon={faClock} /></div>
                  {paddedCounter.map((digit, index) => (
                        <div key={index}>{digit}</div>
                  ))}
            </div>
      );
};

export default CounterDisplay;