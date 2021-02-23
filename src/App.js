
// import { fireEvent } from '@testing-library/react';
import React, {useEffect, useState } from 'react';
import './App.css';

function App() {
 
  const products = [
    {name: "Macbook Pro 2020", price:"$ 1999", color:"Gray"},
    {name: "Iphone12", price:"$ 999", color:"Black"},
    {name: "Smart Watch", price:"$ 199", color:"Red"},
    {name: "Smart Shoe", price:"$ 99", color:"Blue"},
  ];
  return (
    <div className="App">
      <header className="App-header">

        <h1>First React App</h1>
        <Increment></Increment>
        <Users></Users>
        {products.map(item => <Product product={item}></Product>)}

      </header>
    </div>
  );
}

function Increment(){
  const [counter,setCounter] = useState(0)
  return (
    <div style={{marginBottom:"15px"}}>
      <h2>Counter:{counter}</h2>
      <button onClick={() =>setCounter(counter - 1)} type="button">Decrease</button>
      <button onClick={() =>setCounter(counter + 1)} type="button">Increase</button>
    </div>
  )
}
function Users(){
  const [users,setUsers] = useState([])

  useEffect(()=> {
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(res => res.json())
    .then(user => setUsers(user))
  },[])

  return (
    <div>
      <h2>Dynamic Users :</h2>
      <ul>
        {users.map(user=> <li>{user.name}</li>)}
      </ul>
    </div>
  )
}

function Product(props){
  const {name,price,color} = props.product;
  return (
    <div style={{backgroundColor:"tomato",padding:"15px",width:"350px",marginBottom:"10px"}}>
      <h2>{name}</h2>
      <h4>{price}</h4>
      <p>{color}</p>
      <button type="button">Buy Now</button>
    </div>
  )
}


export default App;
