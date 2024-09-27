import React,{useState} from "react";

function Hooksconcept(){
    const [cinema,setupdatecinema] = useState(
        {
            year : 2024,
            movie : "The GOAT",      
        }
    );
    const mystyle = {
        color : "white",
        backgroundColor : "black",
        padding : "10px"
    }

    const update2023 =  () =>{
        setupdatecinema(
        {
            year : 2023,
            movie : "Varisu & Leo",
        })
    }


    const [content,setcontent] = useState(
        {
            contentline : "Hello,,Its a PURPLE Color",
        }
    );
    const [mystyle2,setchangemystyle] = useState(
        {
            padding : "20px",
            backgroundColor : "purple",
        }
    ) 
    const changemystyle1 = () => {
        setcontent(
            {
                contentline : "Hello,,Its a BLACK Color",
            }
        );
        setchangemystyle(
            {
                padding : "20px",
                backgroundColor : "black",
            }
        )
    }
    const changemystyle2 = () => {
        setcontent(
            {
                contentline : "Hello,,Its a GREEN Color",
            }
        );
        setchangemystyle(
            {
                padding : "20px",
                backgroundColor : "green"
            }
        )
    }
    const changemystyle3 = () => {
        setcontent(
            {
                contentline : "Hello,,Its a RED Color",
            }
        );
        setchangemystyle(
            {
                padding : "20px",
                backgroundColor : "red"
            }
        )
    }
    

    return(
        <>
            <h1>HOOKS Concept</h1>
            <p style={mystyle}>Thalapathy Vijay's {cinema.year} film is {cinema.movie}. </p>
                <button type="button" onClick={update2023}>2023 film</button>
                <button type="button" onClick={() =>  setupdatecinema(
                    {
                        year : 2022,
                        movie : "Beast",
                    })}>    2022 film   
                </button>

            <div style={mystyle2}>
                <p style={{color:"white"}}> Details : {content.contentline} </p>
            </div>
                <button type="button" onClick={changemystyle1} style={{backgroundColor:"black",padding:"10px",color:"white"}}>Black</button>
                <button type="button" onClick={changemystyle2} style={{backgroundColor:"green",padding:"10px",color:"white"}}>Green</button>
                <button type="button" onClick={changemystyle3} style={{backgroundColor:"red",padding:"10px",color:"white"}}>Red</button> <br />
        </>
    )
}

export default Hooksconcept;


