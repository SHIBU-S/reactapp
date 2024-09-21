import React from 'react';

class Car extends React.Component 
{
  constructor(props) 
  {
    super(props);
    this.state = 
    {
      brand: "Ford",
      model: "Mustang",
      color: "red",
      year: 1964,
      speed: 200,
      price: "60,00,000"
    };
  }
  
  changecolor = () =>{
    this.setState({brand: "Audi",
      model: "Mustang",
      color: "Black",
      year: 1998,
      speed: 300});
  }
  changeprice = () =>{
    this.setState({price: "95,66,000"})
  }
  delete = () =>{
    this.setState({price:""})
  }

  render() 
  {
    return (
      <div>
        <h1>My {this.state.brand}</h1>
        <p style={{color:"red"}}>
          It is a {this.state.color} {this.state.model} from {this.state.year}
        </p>
        <div>
            Its speed is {this.state.speed}.
        </div>
        <div>
            <button onClick={this.changecolor}>Change Content</button>
            <button><a href="https://www.w3schools.com/" target='blank' rel="noopener noreferrer">Visit W3schools</a></button>
        </div>

        <div>
          <p>The Car Price is {this.state.price}.</p>
          <button onClick={this.changeprice}>Change price</button>
          <button onClick={this.delete}>Delete price</button>
        </div>
      </div>

    );
  }
}



export default Car;


