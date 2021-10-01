import React from 'react';
import PropTypes from 'prop-types';
import GoogleMapReact from 'google-map-react';
import AnyReactComponent from './any_component';
import createMapOptions from '../helpers/create_map_options';

const SimpleMap = ({ props }) => {
  const { center, zoom } = props;
  return (
  // Important! Always set the container height explicitly
    <div style={{ height: '100vh', width: '100%' }}>
      <GoogleMapReact
        //   bootstrapURLKeys={{ key: /* YOUR KEY HERE */ }}
        defaultCenter={center}
        defaultZoom={zoom}
        options={createMapOptions}
      >
        <AnyReactComponent
          lat={27.354546}
          lng={45.013545}
          text="My Marker"
        />
      </GoogleMapReact>
    </div>
  );
};

SimpleMap.defaultProps = {
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

SimpleMap.propTypes = {
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

export default SimpleMap;
