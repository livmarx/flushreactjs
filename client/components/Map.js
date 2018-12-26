import React, { Component } from 'react';
import { withGoogleMap, GoogleMap, Marker } from 'react-google-maps';

class Map extends Component {
  constructor() {
    super();
    this.state = {
      map: null,
      markers: [
        { location: { lat: 40.756795, lng: -73.954298 } },
        { location: { lat: 40.696, lng: -73.9933 } },
        { location: { lat: 40.7829, lng: -73.9654 } },
      ],
    };
    this.mapMoved = this.mapMoved.bind(this);
    this.mapLoaded = this.mapLoaded.bind(this);
    this.zoomChanged = this.zoomChanged.bind(this);
  }

  mapMoved() {
    console.log('mapMoved!: ' + this.state.map.getCenter());
  }

  mapLoaded(map) {
    this.setState({ map: map });
  }

  zoomChanged() {
    console.log('zoomChanged!: ' + this.state.map.getZoom());
  }

  render() {
    const markers = this.state.markers || [];

    return (
      <div>
        <GoogleMap
          ref={this.mapLoaded}
          onDragEnd={this.mapMoved}
          onZoomChanged={this.zoomChanged}
          defaultZoom={this.props.zoom}
          defaultCenter={this.props.center}
        >
          {markers.map((marker, i) => {
            marker = {
              position: { lat: marker.location.lat, lng: marker.location.lng },
            };
            return (
              <Marker
                {...marker}
                key={i}
                // onRightClick={() => props.onMaerkerRightClick(index)}
              />
            );
          })}
        </GoogleMap>
      </div>
    );
  }
}

export default withGoogleMap(Map);

// const MyMapComponent = withGoogleMap(props => (
//   <GoogleMap
//     ref={props.onMapLoad}
//     defaultZoom={8}
//     defaultCenter={{ lat: -34.397, lng: 150.644 }}
//     onClick={props.onMapClick}
//   >
//     {props.markers.map((marker, index) => {
//       return <Marker onRightClick={() => props.onMaerkerRightClick(index)} />;
//     })}
//   </GoogleMap>
// ));

//------------------------------------------------
// class Map extends Component {
//   render() {
//     const GoogleMapExample = withGoogleMap(props => (
//       <GoogleMap
//         defaultCenter={{ lat: 40.756795, lng: -73.954298 }}
//         defaultZoom={11}
//       />
//     ));
//     return (
//       <div className="map">
//         <GoogleMapExample
//           containerElement={<div style={{ height: `100vh`, width: '100vw' }} />}
//           mapElement={<div style={{ height: `100%` }} />}
//         />
//       </div>
//     );
//   }
// }
// export default Map;

//------------------------------------------------------------
