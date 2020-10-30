import React,{Component} from 'react';
import './LogIn.css';
import { FormGroup } from 'reactstrap';
import { Label } from 'reactstrap';
import { Input } from 'reactstrap';
import FacebookLogin from 'react-facebook-login';
import GoogleLogin from 'react-google-login';
import { Button } from 'reactstrap';
import { Form } from 'react-bootstrap';
import { Card} from 'react-bootstrap';

 class LogIn extends Component{

  state = {
    credentials: {email: '', password: ''}
  }

  login = event => {
  //  console.log(this.state.credentials);

  fetch('http://127.0.0.1:8000/Login/', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(this.state.credentials)
    })

    .then( data => data.json())
    .then(
      data => {
        this.props.userLogin(data.token);
      }
    )
    .catch( error => console.error(error))
  }
     
  inputChanged = event => {
    const cred = this.state.credentials;
    cred[event.target.name] = event.target.value;
    this.setState({credentials: cred});
  }
  
/* constructor(props) {         //validate
    super(props)

    this.state = {
        email: '',
        password: '',
   
    }
  }

  handleUserEmailConfirmChange = (event) => {
     this.setState({
        email: event.taget.value
     })
  }

  handleUserPasswordChange = (event) => {
    this.setState({
        password: event.target.value
    })
  }

  handleSubmit = () => {
    alert(`${this.state.email} ${this.state.password}`)
 } 
 */
    render(){

      const responseFacebook = (response) => {
        console.log(response);
       }
 
       const responseGoogle = (response) => {
         console.log(response);
       } 

        return(
           
            <Card className="cardo">         
            <div className="Login">
            <Form className="LoginForm">
        
            <h1>         
              <span className="header"><center> SignIn </center></span>
            </h1>
  
            <FormGroup>
            <Label for="exampleName"> Email</Label>
            <Input 
               type="email" 
               name="email" 
               value={this.state.credentials.email}
               onChange={this.inputChanged} 
               size="15" 
               placeholder="Enter Name" />
            </FormGroup>

            <FormGroup>
            <Label for="examplePassword"> Password</Label>
            <Input 
              type="Password" 
              name="password" 
              value={this.state.credentials.password}
              onChange={this.inputChanged} 
              size="15" 
              placeholder="Enter Password" />
            </FormGroup>
    
            <center><Button onClick={this.login} color="danger">Log In</Button></center>
      
            <div className="text-center">
              or continue with your social account
            </div>
    
            <br />

            <div className="App">   
            <center>
            <GoogleLogin
               clientId="AIzaSyARR0JsTQjZW-hEjfBu7k843OesMdkeCEE" //CLIENTID NOT CREATED YET
               buttonText="LOGIN WITH GOOGLE"
               onSuccess={responseGoogle}
               onFailure={responseGoogle}
            />

            <br />
            <br />
        
           <FacebookLogin
              appId="338028007491469" //APP ID NOT CREATED YET
              fields="name,email,picture"
              callback={responseFacebook}
           />
         
           </center>
           </div> 
    
           <div className="text-center">
              <a href="/Reg">Sign up</a>
              <span> | </span>
              <a href="/Forgot-Password">Forgot Password</a>   
          </div>

          <br/> 

          </Form>
          </div>
          </Card>
         
        );
    }
}

export default LogIn;