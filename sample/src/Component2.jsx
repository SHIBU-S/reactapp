import { useState } from "react";
import { UserContext } from "./Component1";
import Component3 from './Component3';

function Component2() 
{
    const [user, setUser] = useState("I'm Shibu");
    const [age , setage] = useState("");
    const [color,setcolor] = useState({
        color : "yellow",
        backgroundColor : "blue",
        padding : "5px"
      });
  
    return (
      <UserContext.Provider value={{user,age,color}}>
          <h1>Component 1</h1>
          <h2 style={color}>Hello {user}{age}!</h2>
              <button onClick={changingelements}>Change it</button>
          <Component3/>
      </UserContext.Provider>
    );

    function changingelements()
    {
        setUser("My Age is :");
        setage(21);
        setcolor({
          color : "White",
          backgroundColor : "Red",
          padding : "5px"
        });
    }
}

export default Component2;
