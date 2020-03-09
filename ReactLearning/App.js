import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet'
// import Welcome from './components/Welcome'
// import Hello from './components/Hello'
//import Message from './components/Message'
// import BookServiceForm from './components/BookServiceForm';
// import BookServiceFormOptimized from './components/BookServiceFormOptimized';
// import BookServiceFormOptimized2 from './components/BookServiceFormOptimized2';


// // props are immutable
class App extends Component {
 render(){ 
  return (
    <div className="App">
      <Greet name="Shubhi" quality="Smart"><p>This is child prop </p></Greet>

      <Greet name="Nannu">
        <button> action</button>
        </Greet>
      <Greet name="Guddu"/>
      {/* //<BookServiceForm/> */}
      {/* <BookServiceFormOptimized/> */}
    
      {/* <h1> Welcome to BookDataServices</h1>      
      
       <h4 align="left">Enter the details to order your book:</h4>     

      <BookServiceFormOptimized2/> */}


      </div>
  );
  }
}
export default App
