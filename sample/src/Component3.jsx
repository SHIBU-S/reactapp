import { useContext } from "react";
import { UserContext } from "./Component1";

function Component3() 
{
    const {user,age,color} = useContext(UserContext);
  
    return (
      <>
        <h1>Component 2</h1>
        <h2 style={color}>Hello {user} {age} again!!!</h2>
      </>
    );
}

export default Component3;