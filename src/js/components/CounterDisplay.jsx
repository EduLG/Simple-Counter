import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-solid-svg-icons";





const CounterDisplay = ({ counter }) => {

      const digit1 = Math.floor(counter / 1);
      const digit2 = Math.floor(counter / 10);
      const digit3 = Math.floor(counter / 100);
      const digit4 = Math.floor(counter / 1000);
      const digit5 = Math.floor(counter / 10000);
      const digit6 = Math.floor(counter / 100000); 

      return (
            <div className="counter-container">
                  <div><FontAwesomeIcon icon={faClock} /></div>
                  <div>{digit6 % 10}</div>
                  <div>{digit5 % 10}</div>
                  <div>{digit4 % 10}</div>
                  <div>{digit3 % 10}</div>
                  <div>{digit2 % 10}</div>
                  <div>{digit1 % 10}</div>
            </div>
      );
};

export default CounterDisplay;