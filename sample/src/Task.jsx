import React,{useState} from "react";

function Task()
{
    const [inputname,setinputvalue] = useState("");
    const [inputemail,setinputemail] = useState("");
    const [inputphno,setinputphno] = useState("");

    const [result,setresult] = useState("");
    const [color,setcolor] = useState({borderColor : ""});
    const [resultcolor,setresultcolor] = useState({color : ""});

    const [emailresult,setemailresult] = useState("");
    const [emailcolor,setemailcolor] = useState({borderColor : ""});
    const [emailresultcolor,setemailresultcolor] = useState({color : ""});

    const [phnoresult,setphnoresult] = useState("");
    const [phnocolor,setphnocolor] = useState({borderColor : ""});
    const [phnoresultcolor,setphnoresultcolor] = useState({color : ""});


    const change = (event) =>{
        setinputvalue(event.target.value);
    }
    const emailid = (event) =>{
        setinputemail(event.target.value);
    }
    const phno = (event) =>{
        setinputphno(event.target.value);
    }
  

    function handleSubmit()
    {
        let namepattern = /^([a-zA-Z]{2,30})$/;
        if(inputname===""){
            setresult("Please enter a name");
            setcolor({borderColor : "red"});
            setresultcolor({color : "red"});
        }
        else if(!namepattern.test(inputname)){
            setresult("Invalid name");
            setcolor({borderColor : "red"});
            setresultcolor({color : "red"});
        }
        else{
            setresult(`Your Name is : ${inputname}`);
            setcolor({borderColor : "blue"})
            setresultcolor({color : "blue"});
        }


        let emailpattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        if(inputemail===""){
            setemailresult("Please enter a email");
            setemailcolor({borderColor : "red"});
            setemailresultcolor({color : "red"});
        }
        else if(!emailpattern.test(inputemail)){
            setemailresult("Invalid email");
            setemailcolor({borderColor : "red"});
            setemailresultcolor({color : "red"});
        }
        else{
            setemailresult(`Your E-Mail is : ${inputemail}`);
            setemailcolor({borderColor : "blue"});
            setemailresultcolor({color : "blue"});
        }


        let phnopattern = /^\d{10}$/;
        if(inputphno===""){
            setphnoresult("Please enter a phone number");
            setphnocolor({borderColor : "red"});
            setphnoresultcolor({color : "red"});
        }
        else if(!phnopattern.test(inputphno)){
            setphnoresult("Invalid Phone number");
            setphnocolor({borderColor : "red"});
            setphnoresultcolor({color : "red"});
        }
        else{
            setphnoresult(`Your Phone Number is : ${inputphno}`);
            setphnocolor({borderColor : "blue"});
            setphnoresultcolor({color : "blue"});
        }
    }


    return(
        <>
        <h3 style={{backgroundColor : "skyblue" , padding : "5px"}}>REACTJS Hooks(UseState) FORM VALIDATION</h3>
            Enter a name :
                <input type="text" style={color} onChange={change}></input>         <br />
                    <p style={resultcolor}>  {result} </p>
            Enter a email :
                <input type="email" style={emailcolor} onChange={emailid}></input>        <br />
                    <p style={emailresultcolor}>  {emailresult} </p>
            Enter a phone no :
                <input type="number" style={phnocolor} onChange={phno}></input>       <br />
                    <p style={phnoresultcolor}>   {phnoresult}  </p>

            <input type="submit" onClick={handleSubmit}></input>
        </>
    )
}

export default Task;

