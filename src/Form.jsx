function form()
{
    return(
        <form>
            <label htmlFor="text">Enter Name</label>            <input type="text" className="name" placeholder="name"/> 
            <label htmlFor="password">Enter password :</label>  <input type="password" className="pwd" placeholder="password"/> 
            <label htmlFor="number">Enter age : </label>           <input type="number" className="num" placeholder="age" /> <br />
                <button type="button" className="button" onClick={clickme}>Submit</button> 
        </form>
    )
}
function clickme(){
    return(
        alert("Registered Successfully")
    )
}


export default form;
