import React from 'react';
import PropTypes from 'prop-types';
import GoogleMapReact from 'google-map-react';
import { Container } from 'react-bootstrap';
import Marker from './Marker';
import createMapOptions from '../helpers/create_map_options';

const MapView = ({ props }) => {
  const { center, zoom } = props;
  return (
  // Important! Always set the container height explicitly
    <Container className="map-view">
      <GoogleMapReact
        //   bootstrapURLKeys={{ key: /* YOUR KEY HERE */ }}
        defaultCenter={center}
        defaultZoom={zoom}
        options={createMapOptions}
      >
        <Marker
          lat={27.354546}
          lng={45.013545}
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
