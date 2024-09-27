import { useState } from "react";
import { UserContext } from "./Component1";
import Component4 from "./Component4";

function Component2() 
{
    const [user, setUser] = useState("I'm Shibu");
    const [age , setage] = useState("");
    const [color,setcolor] = useState({
        color : "yellow",
        backgroundColor : "blue",
        padding : "5px"
      });
    const [bgcolor,setbgcolor] = useState({
        backgroundColor : "greenyellow",
        color : ""
    });
    const [username,setusername] = useState("");
    const [password,setpassword] = useState("");

  
    return (
      <UserContext.Provider value={{user,age,color,bgcolor,setbgcolor ,username,setusername,password,setpassword}}>
        <h1 style={{backgroundColor : "skyblue" , padding : "5px",color:"red"}}>UseContext (Hooks)</h1>
          <h2>Component 2</h2>
          <h2 style={color}>Hello {user}{age}!</h2>
              <button onClick={changingelements}>Change it</button>
          <Component4/>
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
