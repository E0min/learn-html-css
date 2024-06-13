import { useState } from 'react';

const Bulb = () => {
    const [light,setLight] = useState("OFF ");
  
    console.log(light);
  
    return (
      <div>
        {light === "ON" ? (
          <h1 style={{backgroundColor : "orange"}}>켜짐</h1>
          )
          :
          (
          <h1 style={{backgroundColor : "grey"}}>꺼짐</h1>
          )}
          <button onClick={() => {
          setLight(light === "ON" ? "OFF" : "ON");
        }}>
          {light}
        </button>
      </div>
    );
  };

  export default Bulb