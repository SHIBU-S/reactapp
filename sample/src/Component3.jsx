import { useContext } from "react";
import { UserContext } from "./Component1";

function Component3() 
{
    const {user,age,color,bgcolor,setbgcolor,username,setusername,password,setpassword} = useContext(UserContext);
  
    return (
      <>
        <h2>Component 3</h2>
        <h2 style={color}>Hello {user} {age} again!!!</h2>

        <div className="borderoutline" style={bgcolor}>
              <div className="borderinline">
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, eveniet mollitia earum quisquam beatae dolore? Quos sint delectus autem aspernatur!</p>
              </div>
          </div>
          <button onClick={changedark} style={{backgroundColor:"black",color:"white"}}>Dark Color</button>    
          <button onClick={changelight} style={{backgroundColor:"skyblue",color:"black"}}>Light Color</button>

        <div>
            Enter Name : <input type="text" onChange={(name)=>setusername(name.target.value)}/>   <br />
            Enter password : <input type="password" onChange={(password)=>setpassword(password.target.value)}/> <br />
            <p>{`Your Name : ${username} \n Your Password : ${password}`}</p>
        </div>
      </>
    );

    function changedark(){
      setbgcolor({
          backgroundColor : "Black",
          color : "white"
      })
    }

    function changelight(){
      setbgcolor({
          backgroundColor : "skyblue",
          color : "black"
      })
    }

}

export default Component3;