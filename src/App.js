import React, { Component } from 'react';
import './App.css';
import Routes from './components/Routes';
import Navigation from './components/Navbar/Navbar';



 class App extends Component {


  render() {
    
    return (
      <div>
       <Navigation />
      <Routes />
    </div>  
  
    );

  }
}

export default  App;



