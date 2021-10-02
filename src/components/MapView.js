import React, { useState } from 'react';
import PropTypes from 'prop-types';
import GoogleMapReact from 'google-map-react';
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Marker from './Marker';
import createMapOptions from '../helpers/create_map_options';

const MapView = ({ props }) => {
  const [currentLoc, setCurrentLoc] = useState({ lat: 27.35, lng: 45.01 });
  const handleClick = () => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        console.log(position);
        setCurrentLoc({ lat: position.coords.latitude, lng: position.coords.longitude });
      },
      (error) => {
        console.error(`Error Code = ${error.code} - ${error.message}`);
      },
    );
  };

  const { center, zoom } = props;
  return (
  // Important! Always set the container height explicitly
    <Container className="map-view">
      <Button className="location-btn" onClick={handleClick}>Current Location</Button>
      <GoogleMapReact
        //   bootstrapURLKeys={{ key: /* YOUR KEY HERE */ }}
        defaultCenter={center}
        defaultZoom={zoom}
        options={createMapOptions}
      >
        <Marker
          lat={currentLoc.lat}
          lng={currentLoc.lng}
        />
      </GoogleMapReact>
    </Container>
  );
};

MapView.defaultProps = {
  props: {
    center: {
      lat: 27.35,
      lng: 45.01,
    },
    zoom: 11,
  },
  center: {
    lat: 59.95,
    lng: 30.33,
  },
  zoom: 11,
};

MapView.propTypes = {
  props: PropTypes.shape({
    center: PropTypes.shape({
      lat: PropTypes.number,
      lng: PropTypes.number,
    }),
    zoom: PropTypes.number,
  }),
  center: PropTypes.shape({
    lat: PropTypes.number,
    lng: PropTypes.number,
  }),
  zoom: PropTypes.number,
};

export default MapView;
