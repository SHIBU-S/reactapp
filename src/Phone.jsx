function Phone(props){

    const linestyle = {
        color : "white",
        backgroundColor : "black",
        
    }

    return(
        <div className="">
            {/* Inline css Styling */}
                <h1 style={{color:"red",backgroundColor:"greenyellow"}}>This is IPhone!! </h1>
            {/* Internal css Styling using objects */}
                <div style={linestyle}>
                    <h2>It's model is : {props.phonelist.model}</h2>
                    <h2>It's price is : {props.phonelist.price}</h2>
                    <h2>Hello</h2>
                </div>
        </div>
    );
}

export default Phone;