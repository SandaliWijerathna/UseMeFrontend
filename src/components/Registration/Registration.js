import React,{Component} from 'react';
import {Button} from 'react-bootstrap';
import history from '../history';
import './Registration.css';
class Registration extends Component{

  render(){
    return(
      <div>
         <center> <h2 className="select">Select who you are</h2>
    
   
       
                
                          <h5 className="cust">I am a Customer</h5><Button variant="danger" onClick={() => history.push('/Cust')}>Want to buy</Button>
                           <h5 className="del">I am a Delivery Person</h5> <Button variant="danger" onClick={() => history.push('/Delper')}>want to deliver</Button>
                          <h5 className="shop">I am a Shop</h5>  <Button variant="danger" onClick={() => history.push('/Shop')}>want to sell</Button> 
          </center>
      </div>
      
    );
  }

}
export default Registration;