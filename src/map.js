import React from "react";

class Map extends React.Component {
  render() {
    return (
      <img className="map" src={`https://maps.googleapis.com/maps/api/staticmap?center=${this.props.latitude}%2c%20${this.props.longitude}&zoom=13&size=600x300&maptype=roadmap
        &key=AIzaSyDp0Caae9rkHUHwERAFzs6WN4_MuphTimk`} alt="Map of search query" />
    );
  }
}

export default Map;
