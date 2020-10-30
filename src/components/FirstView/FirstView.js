
import React, { Component } from "react";
import { GoogleApiWrapper, Map, InfoWindow, Marker } from "google-maps-react";
import './FirstView.css';
import{Card} from 'react-bootstrap';
import{FormGroup,Form} from 'react-bootstrap';
import{Input} from 'reactstrap';



export class FirstView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showingInfoWindow: false,
      activeMarker: {},
      selectedPlace: {},
      markers: [
        {
          title: "The marker`s title will appear as a tooltip.",
          name: "SOMA",
          position: { lat: 6.9271, lng: 79.8612 }
        }
      ],
      sunrise: "",
      sunset: "",
      timeAbroad: "",
      dayNight: "",
      center: { lat: 6.9271, lng: 79.8612 },
      check: 1
    };
    this.onClick = this.onClick.bind(this);
  }

  onClick(t, map, coord) {
    if (this.state.check == 1) {
      this.getNewLocation();
    } else {
      const { latLng } = coord;
      const lat = latLng.lat();
      const lng = latLng.lng();

      // get new location time
      var apiKey2 = "SC4L9GNRWSOC";
      var url2 = `http://api.timezonedb.com/v2.1/get-time-zone?key=${apiKey2}&format=json&by=position&lat=${lat}&lng=${lng}`;
      fetch(url2)
        .then(res => res.json())
        .then(timezone => {
          let locSelectedTime = new Date(timezone.formatted)
            .toLocaleTimeString()
            .replace(/([\d]+:[\d]{2})(:[\d]{2})(.*)/, "$1$3");
          this.setState({ timeAbroad: locSelectedTime });
        });

      if (this.state.showingInfoWindow) {
        this.setState({
          showingInfoWindow: false,
          activeMarker: null
        });
      }

      // get new location certain data
      const url = `https://api.sunrise-sunset.org/json?lat=${lat}&lng=${lng}`;
      fetch(url)
        .then(res => res.json())
        .then(text => {
          let dayNight;
          if (
            this.state.timeAbroad >= text.results.sunrise &&
            this.state.timeAbroad < text.results.sunset
          ) {
            dayNight = "Day";
          } else {
            dayNight = "Night";
          }

          this.setState(previousState => {
            return {
              center: { lat, lng },
              markers: [
                {
                  name: dayNight,
                  position: { lat, lng }
                }
              ],
              sunrise: text.results.sunrise,
              sunset: text.results.sunset,
              dayNight: dayNight
            };
          });
        });
    }
  }

  getNewLocation = () => {
    navigator.geolocation.getCurrentPosition(position => {
      const { latitude, longitude } = position.coords;

      this.setState({
        check: 2,
        center: { lat: latitude, lng: longitude },
        markers: [
          {
            position: { lat: latitude, lng: longitude }
          }
        ]
      });
    });
  };

  onMarkerClick = (props, marker, e) => {
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });
  };

  onMapClicked = props => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      });
    }
  };

  render() {
    console.log(this.state);
      // var myStyle={
      //   fontSize : 70,
      //   color : '#FF0000'
      // }
    return (
      
      <div>
        {/* <h1 style={myStyle}>
            <Badge variant="danger" >Use Me Delivery</Badge> 
           Use me Delivery
        </h1>  */}
        <card className='fv'>
    
        <img src="/images/logo.png"  className="logo" alt="logo"/>
        
         <Form className='in'> <FormGroup>
        
        <Input type="password" name="password" id="examplePassword" placeholder="Enter your location"/>
      </FormGroup></Form>  
        <Map
          google={this.props.google}
          style={{ width: "40%",
          position: 'absolute',
          left: "490px",
          top:"220px",
          height: "40%",
          width: "30%"
        
        }}
          className={"map"}
          zoom={14}
          onClick={this.onClick}
          initialCenter={{
            lat: 40.854885,
            lng: -88.081807
          }}
          center={this.state.center}
        >
          {this.state.markers.map((marker, index) => (
            <Marker
              key={index}
              title={marker.title}
              name={marker.name}
              position={marker.position}
              onClick={this.onMarkerClick}
            />
          ))}

          <InfoWindow
            marker={this.state.activeMarker}
            visible={this.state.showingInfoWindow}
          >
            <div>
              <h1>{this.state.selectedPlace.name}</h1>
            </div>
          </InfoWindow>
        </Map>
        </card>
        <Card className="picsFview">
         <Card className="Fview">
              <center> <h1 className="fviewheadder">"We make 
                 you 
                 proffisional"</h1>
                 <h4 className="h1">Use Me Delivery</h4>
                 
                <center>< h3 className="Fviewheadder2"> 
                    Facilitate efficient delivery of goods. </h3>
                    < h3 className="Fviewheadder2"> 
                     Effective registration method for the shops. </h3>
                     < h3 className="Fviewheadder2"> 
                     Ability to select products from a store the customers prefers </h3>
                     < h3 className="Fviewheadder2">  Efficient access for the system. </h3>
                     < h3 className="Fviewheadder2">  The accuracy of which customers receive the goods they have ordered </h3>
                     </center>
                   <h5 className ="Fviewheadder3">
                        We provide services to whole world through digital era

                   </h5> </center>
                   </Card>   
                   
                  
                  <img src="/images/img1.jpg" className="IMAGES1" alt="delivery1"/>
                  <img src="/images/img2.jpg" className="IMAGES2" alt="delivery2"/>
                  <img src="/images/img3.jpg" className="IMAGES3" alt="delivery3"/>
                  <img src="/images/img4.jpg"  className="IMAGES4" alt="delivery4"/>
                  <img src="/images/img5.jpg"  className="IMAGES5" alt="delivery5"/>
                  <img src="/images/img6.jpg"  className="IMAGES6" alt="delivery6"/>
                
                     
                   
                  
                </Card>  

                <card className='final'>

                     <h1 className ='use'>Use</h1> 
                    <h1 className='me'> Me</h1>

                 <h5 className='a'>About Use Me </h5>
                 <h5 className='b'>  Read out blog</h5>
                 <h5 className='c'>   Add your shops</h5>
                 <h5 className='c1'>   Create a business account</h5>
                 <h5 className='d'>  Sign up to delivery</h5>

                 <h5 className='e'> Get Help </h5>
                 <h5 className='f'>  Read FAQs</h5>
                 <h5 className='g'> View all cities</h5>
                 <h5 className='h'> View all countries</h5>
                 <h5 className='i'> Restuarants near me</h5>
                 <h5 className='j'>  English</h5>

                 <img src="/images/ios.jpg"  className="ios" alt="ios"/>
                 <img src="/images/android.png"  className="and" alt="android"/>
                  <hr className='line'></hr>

                  <img src="/images/fb.jpg"  className="fb" alt="fb"/> 
                  <img src="/images/twitter.png"  className="twitter" alt="twitter"/> 
                  <img src="/images/insta.png"  className="insta" alt="insta"/>

                  <h6 className='p'>  Privacy Policy</h6>
                  <h6 className='q'>  Terms</h6>
                  <h6 className='r'>  pricing</h6>
                  <h6 className='s'>  C_Rigths:2020 Team Fix It</h6>

                  </card>
        
                  </div>

      
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "Enter your API Key"
})(FirstView);
