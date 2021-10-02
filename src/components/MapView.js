import React, { useState } from 'react';
import GoogleMapReact from 'google-map-react';
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Marker from './Marker';
import createMapOptions from '../helpers/create_map_options';

const MapView = () => {
  const [currentLoc, setCurrentLoc] = useState({ lat: 27.35, lng: 45.01 });
  const handleClick = () => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        console.log(position);
        setCurrentLoc({ lat: position.coords.latitude, lng: position.coords.longitude });
        // console.log(convertToAddress(currentLoc.lat, currentLoc.log));
      },
      (error) => {
        console.error(`Error Code = ${error.code} - ${error.message}`);
      },
    );
  };

  return (
  // Important! Always set the container height explicitly
    <Container className="map-view">
      <Button className="location-btn" onClick={handleClick}>Current Location</Button>
      <GoogleMapReact
        //   bootstrapURLKeys={{ key: /* YOUR KEY HERE */ }}
        defaultCenter={{
          lat: 27.35,
          lng: 45.01,
        }}
        center={currentLoc}
        defaultZoom={8}
        options={createMapOptions}
      >
        <Marker
          position={{lat: currentLoc.lat,
          lng: currentLoc.lng}}
        />
      </GoogleMapReact>
    </Container>
  );
};

export default MapView;
