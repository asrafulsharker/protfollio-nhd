import React, { Component } from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
 
export class MapContainer extends Component {
  render() {
    return (
      <Map  className="container map"   google={this.props.google} zoom={15}>
 
        <Marker onClick={this.onMarkerClick}
                name={'Dhaka'} />
 
        <InfoWindow onClose={this.onInfoWindowClose}>
            <div>
              {/* <h1>{this.state.selectedPlace.name}</h1> */}
            </div>
        </InfoWindow>
      </Map>
    );
  }
}
 
export default GoogleApiWrapper({
  apiKey: ("AIzaSyCpw9XPQAKQewaXp5yHJmRzi44lLj2yRwk")
})(MapContainer);