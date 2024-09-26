import React,{useEffect,useState} from "react";

function Effect()
{
    const [count,setcount] = useState(0);
    const [calc,setcalc] = useState(1);

    useEffect(
        ()=>{
                setcalc(()=>calc*10);
            }
    );

    return(
        <>
            <h2>useEffect(Hooks)</h2>
            <h3>Counting Values using UseEffect</h3>
                <button onClick={()=> setcount(count+1)}>+</button>
            <p>Count list : {count}  Calculation list : {calc}</p>
        </>
    )
}


export default Effect;
