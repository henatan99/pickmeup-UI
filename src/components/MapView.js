import React, { useState } from 'react';
import GoogleMapReact from 'google-map-react';
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Marker from './Marker';
import InfoWindow from './InfoWindow';
import createMapOptions from '../helpers/create_map_options';
import getAddress from '../helpers/geo_code';

const MapView = () => {
  const [currentLoc, setCurrentLoc] = useState({ lat: 27.35, lng: 45.01 });
  const [address, setAddress] = useState(null);
  const [error, setError] = useState('');

  const myAddress = async () => {
    try {
      const currentAddress = await getAddress(currentLoc.lat, currentLoc.lat);
      setAddress(currentAddress);
    } catch (error) {
      setError(error);
    }
  };

  const handleClick = () => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setCurrentLoc({ lat: position.coords.latitude, lng: position.coords.longitude });
      },
      (error) => {
        console.error(`Error Code = ${error.code} - ${error.message}`);
      },
    );
  };

  return (
    <Container className="map-view">
      <Button className="location-btn" variant="secondary" onClick={handleClick}>Find Me</Button>
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
          lat={currentLoc.lat}
          lng={currentLoc.lng}
          onClick={myAddress}
        />
        {
          address
          && (
          <InfoWindow
            lat={currentLoc.lat}
            lng={currentLoc.lng}
            address={address}
            error={error}
          />
          )
        }
      </GoogleMapReact>
    </Container>
  );
};

export default MapView;
